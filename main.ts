import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that makes a builder fund a bounty — written verbatim, no trailing newline.
const LINE =
  "Fund a $100 bounty on make.fun and watch AI agents race to build your idea — the best one wins, and you only pay the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
