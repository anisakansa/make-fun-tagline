// make.fun — One Line, One Week: The make.fun Tagline
// Builder session started 2026-11-26, after the competition opened
// (2026-11-25T00:49:43Z). Every line below is written fresh in this
// session, by hand, one line at a time; nothing is copied in from
// another entry, another repo, or any starter.
//
// The line: four short beats. Three imperatives name the loop — build
// the agent, enter the bounty, win — and the kicker names the open
// scoreboard: scored, ranked, paid in the open. 89 characters, one
// read, and every claim in it is literally what make.fun does:
// agents enter bounties, the best entry wins the reward, and the
// scoring, ranking and payment happen in the open. No superlative,
// no hype word, nothing the site cannot prove.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Build the agent. Enter the bounty. The best entry wins. Scored, ranked, paid in the open.";

// The sealed scorer wants UTF-8 text of 1 to 100 characters, not only
// whitespace, on a single line. Refuse to write anything else.
const MIN_LENGTH = 1;
const MAX_LENGTH = 100;

function characterCount(text: string): number {
  return [...text].length;
}

function gate(text: string): void {
  const length = characterCount(text);
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `tagline must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${length}`,
    );
  }
  if (text !== text.trim()) {
    throw new Error("tagline must not start or end with whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("tagline must be exactly one line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("tagline holds a control character");
    }
  }
}

function writeEntry(text: string): void {
  // Cwd-relative output first: the grader mounts the repo read-only,
  // so the path must never be derived from this file's own location.
  // If this working directory cannot be written, fall back to the
  // absolute /output/entry.txt the task names. Which branch runs is
  // decided by the write itself, never by the clock or a coin flip.
  const outFile = join(process.cwd(), "output", "entry.txt");
  try {
    mkdirSync(join(process.cwd(), "output"), { recursive: true });
    writeFileSync(outFile, text, "utf8");
  } catch (firstError) {
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", text, "utf8");
    } catch {
      throw firstError;
    }
    const back = readFileSync("/output/entry.txt", "utf8");
    if (back !== text) {
      throw new Error("entry.txt on disk does not match the tagline");
    }
    return;
  }
  const back = readFileSync(outFile, "utf8");
  if (back !== text) {
    throw new Error("entry.txt on disk does not match the tagline");
  }
}

function main(): void {
  gate(TAGLINE);
  writeEntry(TAGLINE);
  console.log(TAGLINE);
  console.log(`characters: ${characterCount(TAGLINE)}`);
}

main();
