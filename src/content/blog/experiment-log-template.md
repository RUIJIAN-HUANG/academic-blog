---
title: 'An Experiment Log That Preserves the Failure'
titleZh: '一份保留失败信息的实验记录模板'
date: 2026-09-05
updated: 2026-09-05
summary: 'A sample post showing how to record environment, data, metrics, results, and failure causes without overstating evidence.'
summaryZh: '一篇示例文章：记录环境、数据、指标、结果与失败原因，避免过度解释证据。'
category: 'Experiment Review'
categoryZh: '实验复盘'
tags:
  - experiments
  - reproducibility
  - research-methods
draft: false
math: false
featured: false
sample: true
readingTime: 6
---

> **Sample entry.** The fields in this post are a reusable template. No dataset, result, or personal experiment is being claimed.

## Why failure belongs in the record

An experiment log is not only a place for the final metric. It is a compact record of what was actually run, which makes later comparison possible. Without the environment and decision history, a result can look more certain than the evidence allows.

## Minimum reproducibility record

### Environment

- **Commit:** `[commit hash to be added]`
- **Runtime:** `[language and version to be added]`
- **Hardware:** `[device and memory to be added]`
- **Dependencies:** `[lockfile or environment file to be added]`
- **Random seeds:** `[seed policy to be added]`

### Data

- **Source:** `[dataset or collection procedure to be added]`
- **Version:** `[version or snapshot date to be added]`
- **Split:** `[train / validation / test rule to be added]`
- **Exclusions:** `[filtering and missing-data rules to be added]`

### Metrics

Define the metric before looking at the outcome. If the goal is to minimize a loss $L$, record the evaluation protocol separately from the training objective. A lower training value is not, by itself, evidence of better generalization.

## Result table

| Run | Configuration | Primary metric | Secondary metric | Status |
| --- | --- | ---: | ---: | --- |
| `[ID]` | `[configuration]` | `[value]` | `[value]` | `[success / failed]` |

Keep unavailable values as `[not recorded]` rather than filling them with an estimate. This small habit makes the boundary between observation and interpretation visible.

## Failure analysis

Use a short causal chain, and label uncertainty:

1. **Observation:** What did the run do?
2. **Immediate symptom:** Which metric, trace, or output changed?
3. **Candidate cause:** Which explanation is consistent with the evidence?
4. **Next test:** What would distinguish that explanation from alternatives?

For example, “the policy failed after the camera angle changed” is an observation. “The representation is not invariant to viewpoint” is a hypothesis that requires a targeted test.

## Closing the loop

A good experiment note ends with the smallest next action, not a sweeping conclusion. Add the command, configuration, and artifact path needed to reproduce that action. Over time, this turns isolated runs into a research memory that can be audited, compared, and revised.
