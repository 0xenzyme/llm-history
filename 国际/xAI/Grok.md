---
厂商: xAI（2026-02 起被 SpaceX 收购，官方文档署 SpaceXAI）
地区: 国际（美国）
总部: 美国加州（旧金山湾区）
定位: 前沿闭源模型 + 原生 X 实时数据；2026 年重心转向编码 / 长程智能体 / 知识工作
开源/闭源: 闭源（仅 Grok-1 开放权重，Grok-2 起全部闭源）
模型系列: Grok（单系列；含 Heavy / 四智能体 / Fast 档 + Imagine、Build、Bot 分支）
数据来源: x.ai 官方公告与 docs.x.ai Release Notes、百度百科、Artificial Analysis（经 AWS 博客引用）、llmreference、llm-stats、unite.ai
状态: 已完善（含 2026-09-21 最新旗舰 Grok 4.7）
---

# xAI（Grok）

- 地区：国际（美国）
- 总部：美国加州（旧金山湾区）
- 定位：前沿闭源模型 + 原生 X 实时数据；2026 年重心转向**编码 / 长程智能体 / 知识工作**
- 开源/闭源：闭源（**仅 Grok-1 开放权重**，Grok-2 起全部闭源）
- 主体变更：2026-02 SpaceX 完成对 xAI 的收购；2026-07-06 起官方文档以 **"SpaceXAI"** 署名（品牌与 API 沿用 Grok / x.ai）
- 模型系列：Grok（单系列，含 Heavy / 四智能体 / Fast 档 + Imagine、Build、Bot 分支）
- 数据来源：x.ai 官方公告与 docs.x.ai Release Notes、百度百科、Artificial Analysis（经 AWS 博客引用）、llmreference、llm-stats、unite.ai
- 状态：已完善（含 2026-09-21 最新旗舰 **Grok 4.7**）

## 版本演进（主线）

| 模型 | 发布 | 上下文 | 定价($/M in,out) | 备注 |
|---|---|---|---|---|
| Grok-1 | 2023-11-04（发布）/ 2024-03-17（开放权重） | ~8K | — | 314B MoE，Apache 2.0，当时最大开放权重，[详情](./Grok-1.md) |
| Grok-1.5 | 2024-03-28 | 128K | — | 推理/编码提升 |
| Grok-1.5V | 2024-04-12 | 128K | — | 首个多模态（视觉） |
| Grok-2 / Grok-2 mini | 2024-08-13 | 128K | — | 推理/工具调用提升，图像经第三方 Flux |
| Aurora（图像模型） | 2024-12-09 | — | — | 自研自回归 MoE 图像生成，取代 Flux |
| Grok 3 / Grok 3 mini | 2025-02-17 | 131K | — | Memphis Colossus 首期训练；Think 推理模式；算力 10× 于 Grok-2，[详情](./Grok-3.md) |
| Grok 4 / Grok 4 Heavy | 2025-07-09 / 07-10 | 256K / 428K | — | 多智能体 Heavy；HLE 文本子集 50.7%（首个破 50%）；约 1.7T 参数，[详情](./Grok-4.md) |
| Grok Code Fast 1 | 2025-08 | — | — | 编码专用，SWE-bench 70.8% |
| Grok 4 Fast | 2025-09（另有 07 记法） | 2M | $0.20/$0.50 | 高效变体，发布月份存在源分歧 |
| Grok 4.1 / 4.1 Fast | 2025-11-17 / 11-19 | 2M | $0.20/$0.50 | LMArena #1（1483 Elo）+ EQ-Bench3 #1（1586）；幻觉 12.09%→4.22%，[详情](./Grok-4.1.md) |
| Grok 4.20 Beta | 2026-02-17（Beta 2 03-03；API 03-10） | 2M | $2/$6 | 四智能体协作（Grok/Harper/Benjamin/Lucas）；四推理模式 |
| Grok 4.3 | 2026-04-17（β）/ 04-30（API） | 1M | $1.25/$2.50 | 原生视频输入；对话内生成 PDF/PPTX/XLSX；AA 指数 53，[详情](./Grok-4.3.md) |
| Grok 4.5 | 2026-07-08（API）/ 07-09（公开）；EU 07-17 | 500K | $2/$6 | **V9 基座约 1.5T 参数**；与 Cursor 联合训练；价格战路线，[详情](./Grok-4.5.md) |
| Grok 4.6 | 2026-08-12 | 500K | $2/$6（≥200K 为 $4/$12） | 长程智能体、自校验增强；知识截止 2026-02-01；AA 指数记法冲突（61 / 44，见备注） |
| Grok 4.7 / 4.7 Fast | 2026-09-21 | 500K | $2/$6（≥200K 为 $4/$12） | **当前旗舰**；新增 xhigh 推理档；Fast 档仅 Cursor / Grok Build，[详情](./Grok-4.7.md) |

> 上下文口径变化：4.3 曾达 1M，**4.5 起回缩至 500K** 并延续至 4.6 / 4.7；定价口径自 4.5 起改为"$2/$6（<200K）→ $4/$12（≥200K，整单计费）"两档。

## 生态分支

| 分支 | 时间 | 说明 |
|---|---|---|
| Grok Imagine（视频/图像） | 2025-08-04 起（基于 Aurora）；API 2026-01-28 宣布，v1.0 2026-02-01 | 2026-02 登 Video Arena #1；2026-07-31 Imagine Video 1.5 支持 T2V/I2V/R2V 与原生 1080p |
| Grok Build（智能体编码 CLI） | 2026-05-14 beta；Grok Build 0.1（编码专用模型 slug `grok-build-0.1`）2026-05-19 | 2026-09-21 随 4.7 上线**跨会话记忆**（只读浏览界面 + `/dream` 命令整理记忆） |
| Grok Bot | 2026-08-11 | 常驻云计算机的"持久 AI 同事"，含消息、审批、连接器与 routines |
| 语音线 | 2026-04-15 STT GA → 2026-07-29 Voice Think Fast 2.0 → 2026-09-17 Grok Voice Transcribe 2.0 | Galaxy 活动推出 Voice Agent API，$0.08/分钟 |

## 关键里程碑

- 2023-11-04：Grok-1 首发（X Premium+），首个接入 X 实时数据的模型。
- 2024-03-17：Grok-1 开放权重（314B），当时最大开放权重模型，也是谱系唯一开源节点。
- 2025-02-17：Grok 3，Colossus 训练 + Think 模式。
- 2025-07-09：Grok 4 / Heavy，多智能体架构，HLE 首破 50%。
- 2025-11-17：Grok 4.1，LMArena 与 EQ-Bench 双第一，幻觉率降 65%。
- 2026-02：SpaceX 完成收购 xAI；4.20 Beta 四智能体协作。
- 2026-04-30：Grok 4.3，1M 上下文 + 原生视频输入 + 文档生成。
- 2026-07-08：Grok 4.5，V9（1.5T）新基座 + Cursor 联合训练，以 $2/$6 打价格战。
- 2026-08-12：Grok 4.6，强化长程智能体与自校验；08-11 发布 Grok Bot。
- 2026-09-21：Grok 4.7 成为当前旗舰，主打编码与知识工作；09-28 上线 AWS Bedrock。

## 分线说明

- **Grok 主线**：1/2/3 代为通用对话模型；4 代起分裂出 **Heavy 多智能体档**（4 → 4.20 四智能体）；4.5 后重心明显移向**编码与长程智能体**（Cursor / Grok Build 深度绑定）。
- **Fast 档**：4 Fast / 4.1 Fast 为廉价高效变体（$0.20/$0.50）；4.7 Fast 改为"同模型 2× 速度、2× 价格"，且仅对 Cursor / Grok Build 开放。
- **分支产品线**：Imagine（视频/图像）、Build（编码 CLI 与编码模型）、Bot（持久智能体）、语音线，各自独立 slug 与迭代节奏。

## 重点 model 文档

- [Grok-1](./Grok-1.md)
- [Grok-3](./Grok-3.md)
- [Grok-4](./Grok-4.md)
- [Grok-4.1](./Grok-4.1.md)
- [Grok-4.3](./Grok-4.3.md)
- [Grok-4.5](./Grok-4.5.md)
- [Grok-4.7](./Grok-4.7.md)

## 备注

- **开放权重**：仅 Grok-1（Apache 2.0，2024-03-17），此后 xAI 再未开放任何权重。
- **主体变更**：SpaceX 收购 xAI 记为 2026-02（另有源记 2026 上半年完成）；2026-07-06 起官方文档改署 "SpaceXAI"，两家口径并存，故本页仍以 xAI / Grok 为主名。Cursor 收购（约 600 亿美元，2026-06 宣布）预计 Q3 完成，是 4.5 起"Grok 与 Cursor 深度绑定"的由来。
- **数据冲突**：① Grok-4 Fast 有 2025-07 与 2025-09 两种记法，本页取 9 月；② Grok 4.6 的 Artificial Analysis 智能指数有 **61**（对标 GPT-5.6 Sol）与 **44**（AWS 博客引用 AA 对 4.7/4.6 的对照值）两种记法，口径与测量档位不同，**待核**；③ Grok 4.7 发布日官方 Release Notes 记 2026-09-21，个别媒体记 09-20，本页取官方。
- **Grok 5**：截至 2026-09 仍在 Colossus 2 训练中，**尚未发布**（官方 model list 止于 4.7）。多次跳票（2025 年底 → 2026 Q1 → Q2），预测市场给 2026 年底前发布约 82% 概率；6T / 10T 参数规格均为社区传闻，未获官方确认。
- 来源：x.ai/news 与 docs.x.ai Release Notes（2026-09）、百度百科（Grok 4.5）、AWS Machine Learning Blog / unite.ai（4.7 与 AA 数据）、llmreference、llm-stats、aipricecompare、vegavid。截至 2026-09-29。
