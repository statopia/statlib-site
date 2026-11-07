#!/usr/bin/env node
// Refresh the committed site snapshot from a clean Statlib source checkout.
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const sourceRoot = resolve(process.argv.find((arg) => !arg.startsWith("--") && arg !== process.argv[0] && arg !== process.argv[1]) ?? join(siteRoot, "../statlib"));
const check = process.argv.includes("--check");
const outputPath = join(siteRoot, "src/data/statlib-stats.json");
const modifiers = "private|protected|local|noncomputable|unsafe";
const declaration = new RegExp(
  `^\\s*(?:@\\[[^\\]\\n]*\\]\\s*)*((?:(?:${modifiers})\\s+)*)(theorem|lemma)(?=\\s|$)`,
);

function cleanSource(source) {
  let result = "";
  let depth = 0;
  let inString = false;
  for (let i = 0; i < source.length;) {
    if (depth > 0) {
      if (source.startsWith("/-", i)) { depth++; result += "  "; i += 2; }
      else if (source.startsWith("-/", i)) { depth--; result += "  "; i += 2; }
      else { result += source[i] === "\n" ? "\n" : " "; i++; }
    } else if (inString) {
      if (source[i] === "\\" && i + 1 < source.length) { result += "  "; i += 2; }
      else if (source[i] === '"') { inString = false; result += " "; i++; }
      else { result += source[i] === "\n" ? "\n" : " "; i++; }
    } else if (source.startsWith("--", i)) {
      while (i < source.length && source[i] !== "\n") { result += " "; i++; }
    } else if (source.startsWith("/-", i)) { depth = 1; result += "  "; i += 2; }
    else if (source[i] === '"') { inString = true; result += " "; i++; }
    else { result += source[i]; i++; }
  }
  return result;
}

function* leanFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* leanFiles(path);
    else if (entry.isFile() && entry.name.endsWith(".lean")) yield path;
  }
}

const sourceCommit = execFileSync("git", ["-C", sourceRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const dirty = execFileSync("git", ["-C", sourceRoot, "status", "--porcelain", "--", "Statlib"], { encoding: "utf8" }).trim();
if (dirty) throw new Error("Statlib/ has uncommitted changes; commit the source before refreshing site statistics");

const counts = { leanFiles: 0, leanLines: 0, publicTheorems: 0, publicLemmas: 0, privateTheorems: 0, privateLemmas: 0 };
for (const path of leanFiles(join(sourceRoot, "Statlib"))) {
  counts.leanFiles++;
  const source = readFileSync(path, "utf8");
  const lines = source.split("\n");
  counts.leanLines += lines.length - (source.endsWith("\n") ? 1 : 0);
  for (const line of cleanSource(source).split("\n")) {
    const match = declaration.exec(line);
    if (!match) continue;
    const access = match[1].split(/\s+/).includes("private") ? "private" : "public";
    const kind = match[2] === "theorem" ? "Theorems" : "Lemmas";
    counts[`${access}${kind}`]++;
  }
}
const snapshot = {
  sourceCommit,
  ...counts,
  supportingLemmas: counts.publicLemmas + counts.privateLemmas + counts.privateTheorems,
};
const output = JSON.stringify(snapshot, null, 2) + "\n";
if (check) {
  if (readFileSync(outputPath, "utf8") !== output) throw new Error("Site statistics are stale; run npm run stats:refresh");
} else {
  writeFileSync(outputPath, output);
}
console.log(snapshot);
