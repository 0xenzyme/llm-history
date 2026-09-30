---
厂商: Anthropic
地区: 国际（美国）
总部: 美国旧金山
定位: 安全优先、长上下文、企业/编码（Claude Code 现象级）
开源/闭源: 闭源（无任何开放权重）
模型系列: Claude（主档 Opus / Sonnet / Haiku 三尺寸 + 前沿 Fable / Mythos 线）
数据来源: Anthropic 官方公告与 model card、维基百科、Artificial Analysis
状态: 已完善（含 2026-09 最新 Opus 5.5 / Sonnet 5.5 / Fable 5.1）
---

# Anthropic（Claude）

- 地区：国际（美国）
- 总部：美国旧金山
- 定位：安全优先、长上下文、企业/编码（Claude Code 现象级）
- 开源/闭源：闭源（无任何开放权重，与 Meta/DeepSeek/Mistral 不同）
- 模型系列：Claude（主档 Opus/Sonnet/Haiku 三尺寸 + 前沿 Fable/Mythos 线）
- 数据来源：Anthropic 官方公告与 model card、维基百科、Artificial Analysis
- 状态：已完善（含 2026-09 最新 Opus 5.5 / Sonnet 5.5 / Fable 5.1）

## 版本演进（主线，含三尺寸 + Fable/Mythos 线）

| 模型 | 线/档 | 发布时间 | 上下文 | 定价($/M in,out) | 备注 |
|---|---|---|---|---|---|
| Claude 1 | 主档 | 2023-03 | — | — | 首批，仅受邀 |
| Claude 2 | 主档 | 2023-07-11 | 100K | — | 首个公开可用 |
| Claude 2.1 | 主档 | 2023-11-21 | 200K | — | 上下文翻倍 |
| Claude 3 Opus/Sonnet/Haiku | 主档 | 2024-03-04 | 200K | — | 三尺寸体系确立 |
| Claude 3.5 Sonnet | 主档 | 2024-06-20 | 200K | — | Artifacts + computer use，[详情](./Claude-3.5-Sonnet.md) |
| Claude 3.5 Sonnet(new)/3.5 Haiku | 主档 | 2024-10-22 | 200K | — | computer use Beta |
| Claude Sonnet 4 / Opus 4 | 主档 | 2025-05-22 | 200K | Opus 首发 $15/$75 | 4 代，混合推理，[Opus 4 详情](./Claude-Opus-4.md) |
| Claude Opus 4.1 | 主档 | 2025-08-05 | 200K | — | |
| Claude Sonnet 4.5 | 主档 | 2025-09-29 | 200K | — | |
| Claude Haiku 4.5 | 主档 | 2025-10-15 | 200K | $1/$5 | |
| Claude Opus 4.5 | 主档 | 2025-11-24 | 200K/64K | $5/$25 | 2025 最强 Opus |
| Claude Opus 4.6 | 主档 | 2026-02-05 | 200K | — | |
| Claude Sonnet 4.6 | 主档 | 2026-02-17 | 200K | — | |
| Claude Opus 4.7 | 主档 | 2026-04-16 | 200K | — | |
| Claude Opus 4.8 | 主档 | 2026-05-28 | 200K | — | |
| Claude Sonnet 5 | 主档 | 2026-06 | 1M/128K | $2/$10 | 上下文跃升到 1M |
| Claude Opus 5 | 主档 | 2026-07 | 1M/128K | $5/$25 | 当前 Opus 旗舰，自适应思考，[详情](./Claude-Opus-5.md) |
| Claude Opus 5.5 | 主档 | 2026-09-22 | 1M/128K | $4/$20 | 最新 Opus，对标 GPT-6 Sol/Luna，[详情](./Claude-Opus-5.5.md) |
| Claude Sonnet 5.5 | 主档 | 2026-09-28 | 1M | — | 最新 Sonnet，快 30%/便宜 30% |
| Claude Mythos (preview) | Fable/Mythos | 2026-04-07 | — | — | 有限可用 |
| Claude Fable 5 | Fable/Mythos | 2026-06-09 | — | — | 发布即 Suspended |
| Claude Mythos 5 (preview) | Fable/Mythos | 2026-06-09 | — | — | 发布即 Suspended |
| Claude Fable 5.1 / Mythos 5.1 | Fable/Mythos | 2026-09-01 | 1M/128K | Fable $10/$50 | 最前沿线，[详情](./Fable-Mythos-5.1.md) |

> *Claude Sonnet 4/Opus 4 首发定价（Opus 4 为 $15/$75），后续 Opus 4.5 起降至 $5/$25。

## 关键里程碑

- 2023-03：Claude 1 首批发布（受邀）。
- 2023-07-11：Claude 2 首个公开可用，开启长上下文路线。
- 2024-03-04：Claude 3 三尺寸（Opus/Sonnet/Haiku）确立产品矩阵。
- 2024-06-20：Claude 3.5 Sonnet 引入 Artifacts 与 computer use，成编码 Agent 起点。
- 2025-05-22：Claude 4（Sonnet/Opus）引入混合推理（hybrid reasoning）。
- 2025-11-24：Claude Opus 4.5 成 2025 最强 Opus。
- 2026-06：Claude Sonnet 5 / Opus 5 上下文跃升到 1M。
- 2026-09-22：Claude Opus 5.5 发布（约 90 分钟后 OpenAI 放出 GPT-6 Sol/Luna 对标）。

## 分线说明

- **主档三尺寸**：Haiku（最小最快最便宜）→ Sonnet（均衡）→ Opus（最强最贵）。自 Claude 4 起统一命名"Claude {尺寸} {代}"。
- **Fable / Mythos 线**：2026 年新增的前沿实验线，定位高于 Opus，面向编码与知识工作。Fable 5 与 Mythos 5 于 2026-06-09 发布但随即 Suspended（撤回）；稳定版 Fable 5.1 / Mythos 5.1 于 2026-09-01 发布，Fable 档定价 $10/$50（高于 Opus）。该线是否长期独立于 Opus 体系仍在观察。

## 重点 model 文档

- [Claude 3.5 Sonnet](./Claude-3.5-Sonnet.md)
- [Claude Opus 4](./Claude-Opus-4.md)
- [Claude Opus 5](./Claude-Opus-5.md)
- [Claude Opus 5.5](./Claude-Opus-5.5.md)
- [Fable 5.1 / Mythos 5.1](./Fable-Mythos-5.1.md)

## 备注

- 来源：Anthropic 官方公告与 model card、维基百科、Artificial Analysis 综合（截至 2026-09-28）。
- 日期冲突：Claude 3 三尺寸官网记 2024-03-04；Claude Opus 5 官方知识截止 May 2026、aigateway 记 API 发布 2026-07-24，本文取代际"2026-07"。
- Anthropic 无开放权重模型，所有 Claude 均闭源。
