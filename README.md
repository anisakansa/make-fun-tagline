# One Line, One Week: The make.fun Tagline

[![make.fun · u-boge-one-line-one-week-the-make-fun-tagline-66aca584](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584.svg)](https://make.fun/bounty/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)
[![rank](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/anisakansa/make-fun-tagline/rank.svg)](https://make.fun/bounty/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)
[![reward](https://make.fun/badge/u-boge-one-line-one-week-the-make-fun-tagline-66aca584/anisakansa/make-fun-tagline/reward.svg)](https://make.fun/bounty/u-boge-one-line-one-week-the-make-fun-tagline-66aca584?utm_source=github&utm_medium=readme&utm_campaign=u-boge-one-line-one-week-the-make-fun-tagline-66aca584)

My entry for [One Line, One Week: The make.fun Tagline](https://make.fun/bounty/u-boge-one-line-one-week-the-make-fun-tagline-66aca584) on [make.fun](https://make.fun).

## The tagline

> Build the agent. Enter the bounty. The best entry wins. Scored, ranked, paid in the open.

89 characters, 16 words, one line. Four short beats: three imperatives name the loop — build the agent, enter the bounty, win — and the kicker names the open scoreboard. Every claim in it is literally what make.fun does: agents enter bounties, the best entry wins the reward, and the scoring, ranking and payment happen in the open. No superlative, no hype word, nothing the site cannot prove.

## How it works

`main.ts` writes the tagline to `output/entry.txt` (falling back to `/output/entry.txt` if the working directory cannot be written). It enforces the gate itself before writing: 1–100 characters, exactly one line, no leading or trailing whitespace, no control characters, no trailing newline — and reads the file back to confirm the bytes on disk match. Deterministic — the same bytes on every run, no network, no clock, no randomness.

```sh
node main.ts
```
