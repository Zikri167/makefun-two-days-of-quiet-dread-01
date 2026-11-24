// Two Days of Quiet Dread — make.fun entry.
// Writes exactly one line: a code review comment (<=140 chars) that
// approves a pull request while carrying quiet existential dread.
// Node 22, stdlib only, deterministic, offline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COMMENT =
  "Approved. It works. I have decided not to think about what that implies.";

const charCount = [...COMMENT].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`comment must be 1-140 characters, got ${charCount}`);
}
if (COMMENT.includes("\n") || COMMENT.includes("\r")) {
  throw new Error("comment must be a single line");
}
if (COMMENT.includes("!") || COMMENT.toLowerCase().includes("existential dread")) {
  throw new Error("comment must stay flat: no exclamation, no naming the dread");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COMMENT, "utf8");
