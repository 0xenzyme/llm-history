---
厂商: Google（模型由 Google DeepMind 团队开发）
地区: 国际（美国）
总部: 美国山景城（Google）；DeepMind 总部英国伦敦
定位: 原生多模态前沿模型，贯穿 Ultra/Pro → Flash → Flash-Lite 三尺寸；Workspace 深度集成
开源/闭源: 闭源（仅官方服务 / API；Gemma 为开放权重分支，不在本页）
模型系列: Gemini（单系列；含图像、机器人分支）
首个发布时间: 2023-12-06（Gemini 1.0）
最新版本: Gemini 3.6 Flash（2026-07-21）
参数量/架构: 稀疏混合专家（MoE，自 1.5 起）；3 代起超万亿参数，TPU 训练
数据来源: Google DeepMind 官方、aiwiki、百度百科、llmreference、兴业证券研报
状态: 已完善（含 2026-07 最新 3.6 Flash）
---


# Google（Google DeepMind）— Gemini

## 概览
Gemini 是 Google DeepMind 开发的多模态大模型家族，原生理解文本/代码/图像/音频/视频。自 1.5 起采用稀疏混合专家（MoE）架构，上下文从 1.0 的 32K 跃升至 1.5 起的 1M。全系贯穿三尺寸结构：**Ultra/Pro（旗舰推理）→ Flash（生产性价比）→ Flash-Lite（低延迟）**。2025-11 进入 3 代后改为**点发布（point release）**推进（3.1 / 3.5 / 3.6），而非第 4 代。

## 版本演进表

### Gemini 1.0 代（2023-12-06）
| 模型 | 发布 | 上下文 | 备注 |
|---|---|---|---|
| Gemini 1.0 Ultra | 2023-12-06 | 32K | 首个超越人类专家基线（MMLU 90%，CoT+32 samples）；2024-02-08 入 Gemini Advanced |
| Gemini 1.0 Pro | 2023-12-06 | 32K | 通用，集成 Bard |
| Gemini 1.0 Nano | 2023-12-06 | 32K | 端侧（1.8B / 3.25B 变体） |

### Gemini 1.5 代（2024，长上下文突破）
| Gemini 1.5 Pro | 2024-02-15 | 1M（后 2M） | MoE 架构，长上下文起点；可处理 1 小时视频 / 11 小时音频 / 3 万行代码库 / 70 万字 |
| Gemini 1.5 Flash | 2024-05-14 | 1M | 由 1.5 Pro 蒸馏，速度/成本优化 |

### Gemini 2.0 代（2024-12 ~ 2025-02，智能体导向）
| Gemini 2.0 Flash (Exp) | 2024-12-11 | 1M | 原生图像生成 + 原生工具调用；2× 快于 1.5 Pro |
| Gemini 2.0 Flash Thinking | 2024-12-19 | 1M | 推理变体 |
| Gemini 2.0 Flash (Stable) | 2025-01-30 | 1M | 成为默认模型 |
| Gemini 2.0 Pro | 2025-02-05 | 1M | 更高能力 2.0 变体 |
| Gemini 2.0 Flash-Lite | 2025-02-25 | 1M | 最便宜（$0.075/1M 输入） |

### Gemini 2.5 代（2025，推理融入基座）
| Gemini 2.5 Pro | 2025-03-25 | 1M（后 2M） | 首个思考模型，LMArena #1，Deep Think 模式；GA 2025-06-17 |
| Gemini 2.5 Flash | 2025-05-20 | 1M | 首个带思考的 Flash；GA 2025-06-17 |
| Gemini 2.5 Flash-Lite | 2025-06-17 | 1M | 低延迟平衡；稳定 2025-07-22 |
| Gemini 2.5 Deep Think | 2025-08-01 | 1M | 推理模式（3 Deep Think 2026-02-12 重大更新） |
| Gemini 2.5 Flash Image（Nano Banana） | 2025-08-26 | — | 文生图 |
| Gemini 2.5 Computer Use | 2025-10-07 | — | 计算机操作 |

### Gemini 3 代（2025-11 起，点发布推进）
| Gemini 3 Pro | 2025-11-18 | 1M / 64K 输出 | 首破 LMArena 1500（1501 Elo）；GPQA Diamond 91.9%；超万亿参数 |
| Gemini 3 Flash | 2025-12-17（发布）/ 12-22 | 1M | SWE-bench 78%；取代 3 Pro 成默认模型 |
| Gemini 3 Deep Think（更新） | 2026-02-12 | 1M / 192K 输出 | ARC-AGI-2 84.6%（纪录）；HLE 48.4% 无工具 |
| Nano Banana Pro（Gemini 3 Pro Image） | 2025-11 | 66K | 图像生成 |
| Gemini 3.1 Pro (Preview) | 2026-02-19 | 1M / 64K | ARC-AGI-2 77.1%（3 Pro 31.1% 的两倍+）；GPQA 94.3%；命名从 .5 改 .1 |
| Gemini 3.1 Flash Image（Nano Banana 2） | 2026-02-26 | — | 图像 #1 Artificial Analysis Image Arena |
| Gemini 3.1 Flash-Lite (Preview) | 2026-03-03 | 1M | Arena.ai Elo 1432；2.5× 快于 2.5 Flash |
| Gemini Robotics-ER 1.6 | 2026-04-14 | 128K | 具身推理（93% 仪表读数准确率） |
| Deep Research / Deep Research Max | 2026-04-21 | 1M | 基于 3.1 Pro；DeepSearchQA 93.3%；MCP 支持 |
| Gemini 3.5 Flash | 2026-05-19 | 1M | I/O 发布，最快最高效，免费，可自然语言编辑视频 |
| Gemini Omni Flash | 2026-05-19 | 1M | 全模态 |
| Nano Banana 2 Lite | 2026-06-30 | — | 图像轻量 |
| Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber | 2026-07-21 | 1M | 最新点发布组 |

## 关键里程碑
- 2023-12-06 Gemini 1.0 发布，原生多模态起点
- 2024-02-15 Gemini 1.5 Pro，1M 上下文突破
- 2025-03-25 Gemini 2.5 Pro，思考模型时代
- 2025-11-18 Gemini 3 Pro，LMArena 首破 1500，推理代际大跃升
- 2026-05-19 Gemini 3.5 Flash，Flash 档反超更大 Pro 档
- 2026-07-21 最新点发布组（3.6 Flash 等）

## 重点 model 文档
- [Gemini-1.5-Pro](./Gemini-1.5-Pro.md)
- [Gemini-2.5-Pro](./Gemini-2.5-Pro.md)
- [Gemini-3-Pro](./Gemini-3-Pro.md)
- [Gemini-3.5-Flash](./Gemini-3.5-Flash.md)

## 备注
- **命名规则**：1.x/2.x 用 ".5" 表中期更新；3 代起改用 ".1"（3.1 Pro 能力跃升显著，故改编号）。3.x 为点发布，并非第 4 代。
- **3 Deep Think** 是推理模式而非独立模型；2025-11-18 随 3 推出，2026-02-12 重大更新（84.6% ARC-AGI-2）。
- **Gemma** 为 Google 开放权重分支（非 Gemini 闭源主线），本文不展开；若需记录另建条目。
- **日期冲突**：2.5 Flash 有 2025-04-17 / 05-20 两种记法（预览 vs GA），本文取 GA 05-20。
- 来源：Google DeepMind 官方、aiwiki（gemini_api / Google_DeepMind）、百度百科、llmreference、兴业证券研报。截至 2026-09 最新为 2026-07-21 的 3.6 Flash 组。
