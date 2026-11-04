---
厂商: Google（模型由 Google DeepMind 团队开发）
地区: 国际（美国）
总部: 美国山景城（Google）；DeepMind 总部英国伦敦
定位: 原生多模态前沿模型，贯穿 Ultra/Pro → Flash → Flash-Lite 三尺寸；Workspace 深度集成
开源/闭源: 闭源（仅官方服务 / API；Gemma 为开放权重分支，不在本页）
模型系列: Gemini（单系列；含图像、机器人分支）
首个发布时间: 2023-12-06（Gemini 1.0）
最新版本: Gemini 4 Argon（2026-10-01 发布 / 10-13–14 全球开放）
参数量/架构: 稀疏混合专家（MoE，自 1.5 起）；3 代起超万亿参数；4 Argon 为大规模稀疏 MoE，原生文本/视觉/音频输入，TPU 训练
数据来源: Google DeepMind 官方（deepmind.google 博客与 model card）、aiwiki、百度百科、llmreference、兴业证券研报、光明网
状态: 已完善（含 2026-10 最新 Gemini 4 Argon）
---


# Google（Google DeepMind）— Gemini

## 概览
Gemini 是 Google DeepMind 开发的多模态大模型家族，原生理解文本/代码/图像/音频/视频。自 1.5 起采用稀疏混合专家（MoE）架构，上下文从 1.0 的 32K 跃升至 1.5 起的 1M。全系贯穿三尺寸结构：**Ultra/Pro（旗舰推理）→ Flash（生产性价比）→ Flash-Lite（低延迟）**。2025-11 进入 3 代后改为**点发布（point release）**推进（3.1 / 3.5 / 3.6），长期未进入第 4 代——直至 **2026-10-01 Gemini 4 Argon** 发布，结束长达约 11 个月的点发布周期。

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

### Gemini 4 代（2026-10 起，前沿"深度工作"定位）

| Gemini 4 Argon | 2026-10-01（发布）/ 10-13–14（全球开放） | 1M 输入 + 1M 输出 | 4 代首款旗舰。大规模稀疏 MoE，原生文本/视觉/音频。上线价 $2/$10 每百万 token、缓存 $0.10（95% off），**12-01 起恢复 $4/$20**。Vals Index 68.9% 第一，DeepSWE v1.1 77.9%。[详情](./Gemini-4-Argon.md) |
| Gemini 4 Barium / Carbon | — | — | 内部测试中（Business Insider 10-10），**截至 2026-10-22 未发布** |

> ⚠️ 发布节奏说明：Argon 于 10-01 发布时**仅限 Fairwind 计划内经审查的网络防御者**（9-30 Koray Kavukcuoglu 已预告）；10-13/14 才面向 AI Pro / AI Ultra 订阅者、AI Studio 与 Gemini API 全球开放。部分中文源记"10 月 14 日发布"，指全球开放日；本文以官方首发日 10-01 为准，两日期并列标注。

## 关键里程碑
- 2023-12-06 Gemini 1.0 发布，原生多模态起点
- 2024-02-15 Gemini 1.5 Pro，1M 上下文突破
- 2025-03-25 Gemini 2.5 Pro，思考模型时代
- 2025-11-18 Gemini 3 Pro，LMArena 首破 1500，推理代际大跃升
- 2026-05-19 Gemini 3.5 Flash，Flash 档反超更大 Pro 档
- 2026-07-21 最新点发布组（3.6 Flash 等）
- **2026-10-01/10-14 Gemini 4 Argon** —— 4 代首发。定位从"参数/SOTA"转向"解决真实复杂任务"（软件工程、企业知识工作、网络防御）。评测者称其为**首个跨过 Fable / Mythos / Astra 门槛的非 OpenAI、非 Anthropic 模型**，前沿阵营由双雄变三强。

## 近一月动态（2026-09-22 → 2026-10-22）

| 日期 | 事件 |
|---|---|
| 09-30 | DeepMind 高级副总裁 Koray Kavukcuoglu 博客预告 Argon（当时仅限 Fairwind 计划） |
| 10-01 | Gemini 4 Argon 发布，输出 token 上限从上一代 6.4 万提到 100 万 |
| 10-13/14 | 全球开放：AI Studio / Gemini API / Antigravity / Gemini 应用（AI Pro 与 Ultra）；Antigravity 智能体编程界面内置进 macOS 客户端 |
| 10-14 | 官方称 19 项基准中拿下 13 项单项第一、1 项并列第一；Vals Index 68.9% 第一、物理空间推理 ERQA 87% |
| 10-14 | Fairwind Program 扩展至数百家新增合作伙伴（提供不带网络护栏版本的 Argon）；向 1 万名科学家提供 Antigravity 最高层级 6 个月免费 |
| 10-14 | 演示：多智能体并行重构 Chromium 约 600 万行遗留代码文件夹（4000 万行代码库中）、xTB 量子化学包提速最高 2.3×、Gemma 4 E2B 推理 2.85× 加速、看视频学会投掷并训练人形机器人连续命中 7 次 |
| 10-14 | 定价争议：部分源称"11-30 后翻倍"，Google 官方口径为 **12-01 起恢复 $4/$20**（以官方为准） |
| 10 月 | Google 签下 Constellation 3.59 GW 电力大单；芬兰方面叫停谷歌两座数据中心建设 |
| 10 月 | SynthID 开放 AI 内容溯源（图片/文本/视频） |
| 10 月 | AlphaProof Nexus 框架解决 9 个未解厄多斯问题（其中两个悬置超 50 年）＋ 44 个开放数学猜想，成果发表于《科学》 |

> 知识截止：Gemini 4 为 **2026 年 3 月**（官方 model card 明示）。

## 重点 model 文档
- [Gemini-1.5-Pro](./Gemini-1.5-Pro.md)
- [Gemini-2.5-Pro](./Gemini-2.5-Pro.md)
- [Gemini-3-Pro](./Gemini-3-Pro.md)
- [Gemini-3.5-Flash](./Gemini-3.5-Flash.md)
- [Gemini-4-Argon](./Gemini-4-Argon.md)

## 备注
- **命名规则**：1.x/2.x 用 ".5" 表中期更新；3 代起改用 ".1"（3.1 Pro 能力跃升显著，故改编号）。3.x 为点发布，并非第 4 代。
- **3 Deep Think** 是推理模式而非独立模型；2025-11-18 随 3 推出，2026-02-12 重大更新（84.6% ARC-AGI-2）。
- **Gemma** 为 Google 开放权重分支（非 Gemini 闭源主线），本文不展开；若需记录另建条目。
- **日期冲突**：2.5 Flash 有 2025-04-17 / 05-20 两种记法（预览 vs GA），本文取 GA 05-20。
- 来源：Google DeepMind 官方（deepmind.google 博客与 model card）、aiwiki（gemini_api / Google_DeepMind）、百度百科、llmreference、兴业证券研报、光明网。截至 2026-10-22 最新为 Gemini 4 Argon（2026-10-01 发布 / 10-13–14 全球开放）。
- **定价口径冲突**：中文媒体有"11-30 后翻倍"与"12 月 1 日起恢复 $4/$20"两说，Google 官方博客口径为 12 月 1 日，本文取官方。
