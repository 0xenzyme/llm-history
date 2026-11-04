---
厂商: 美团
地区: 中国
总部: 北京
成立: 2010-03（美团）；LongCat 大模型体系自 2025-09 起对外
定位: **为真实工作任务与 Agentic Coding 而生**；业界首个在**五万卡国产算力集群**上完成全流程训练与推理的万亿参数模型，走"自研底座 + 全面开源（MIT）+ 业务反哺"路线
开源/闭源: **全线开源（MIT 协议，允许免费商用）**——LongCat-Flash 系列、LongCat-2.0 系列、LongCat-Next、LongCat-AudioDiT、LongCat-Video-Avatar 等均开源；同时大量开源评测基准（VitaBench、LoHoSearch、MineExplorer、WBench、General 365、LARYBench）
模型系列: **LongCat-Flash 线**（560B，Chat / Thinking / Omni / Lite / Flash-Prover）+ **LongCat-2.0 线**（1.6T，含 2.5-Preview）+ 语音与视觉（LongCat-AudioDiT、LongCat-Video-Avatar）+ 原生多模态（LongCat-Next）+ 平台（CatPaw、longcat.chat）
数据来源: 美团技术团队博客（tech.meituan.com）、LongCat 官网 longcatai.org、百度百科（LongCat-2.0）、中国经济时报、InfoQ（2026-09-25）、Pandaily（2026-09-25）、Digital Applied / VentureBeat（截至 2026-09-30）、CSDN（2026-10-16）
状态: 已完善（含 2026-09-25/26 LongCat-2.5-Preview）
---

> 🆕 **近一月动态（2026-09-22 → 2026-10-22）**
>
> - **LongCat-2.5-Preview 上线**（09-25 发布，09-26 相关解读见报）：保留 LongCat-2.0 的 **1.6 万亿总参数 / 约 480 亿激活** MoE 结构与原生 **100 万 token** 上下文，新增**图像理解能力**。
>   - 与以往把多模态拆成独立开源仓库不同，2.5 把视觉信息处理**直接整合进语言模型基座**，实现图文在同一框架下联合建模——源于 LongCat-Next 验证过的 **DiNA（离散原生自回归）**范式：图像等非文本数据转为离散 token，与文字统一输入。
>   - 已通过官方 API 开放，最大输出 **128K tokens**，同时兼容 **OpenAI 与 Anthropic 接口格式**——Codex、Claude Code 等主流 Agent 工具只需改 base URL 与模型名即可调用。
> - **10-16** 美团技术团队公开 SLM 高并发推理优化实践：静态 DAG 编排 + AOTInductor 编译 + KV 共享 + FP8 选择性计算，端到端时延 <20ms 约束下 Prefill-only MFU 达 67%，在线吞吐对比 SGLang 提升 10 倍。
> - 注：本轮美团的重心在**推理工程与多模态统一**，而非新的参数代际。

# 美团（LongCat）

- 地区：中国
- 总部：北京
- 成立：2010-03（美团）；LongCat 大模型体系自 2025-09 起对外
- 定位：**为真实工作任务与 Agentic Coding 而生**；业界首个在**五万卡国产算力集群**上完成全流程训练与推理的万亿参数模型，走"自研底座 + 全面开源（MIT）+ 业务反哺"路线
- 开源/闭源：**全线开源（MIT 协议，允许免费商用）**——LongCat-Flash 系列、LongCat-2.0 系列、LongCat-Next、LongCat-AudioDiT、LongCat-Video-Avatar 等均开源；同时大量开源评测基准（VitaBench、LoHoSearch、MineExplorer、WBench、General 365、LARYBench）
- 模型系列：**LongCat-Flash 线**（560B，Chat / Thinking / Omni / Lite / Flash-Prover）+ **LongCat-2.0 线**（1.6T，含 2.5-Preview）+ 语音与视觉（LongCat-AudioDiT、LongCat-Video-Avatar）+ 原生多模态（LongCat-Next）+ 平台（CatPaw、longcat.chat）
- 数据来源：美团技术团队博客（tech.meituan.com）、LongCat 官网 longcatai.org、百度百科（LongCat-2.0）、中国经济时报、InfoQ（2026-09-25）、Pandaily（2026-09-25）、Digital Applied / VentureBeat（截至 2026-09-30）
- 状态：已完善（含 2026-09-25 LongCat-2.5-Preview）

## 版本演进（主线）

| 模型 / 事件 | 发布 | 参数 / 上下文 | 备注 |
|---|---|---|---|
| **LongCat-Flash 系列** | **2025-09-01** | **560B 总 / ~27B 激活**（动态 18.6B–31.3B），128K | 美团首个开源大模型，**MIT**，SGLang 部署；训练用英伟达 H800；后续开源 Chat 与 Thinking 两个版本，[详情](./LongCat-Flash.md) |
| LongCat-Flash-Chat / Thinking | 2025-09 | 560B / 27B | 对话版与推理版先后开源 |
| **LongCat-Flash-Omni** | 2025-11 | 560B / 27B，128K | **首个开源实时全模态交互模型**；端到端（视觉/音频编码器 + LLM 直出文本与语音 token + 轻量音频解码器）；8 分钟以上音视频会话；RealWorldQA 74.8，[详情](./LongCat-Flash.md) |
| LongCat-Flash-Thinking-2601 | 2026-01 | 560B 级 | 多维创新强泛化智能体模型，技术报告发布 |
| LongCat-Flash-Lite | 2026-02-10 | **68.5B，激活 2.9B–4.5B** | 基于 **N-gram Embedding** 的嵌入扩展新范式；超 300 亿参数用于嵌入层；Agent 与代码场景表现突出 |
| LongCat-Next | 2026-04-02 | 原生多模态 | 视觉与语音成为"母语"；模型与离散分词器全部开源 |
| LongCat-Flash-Prover | 2026-04-07 | — | 数学形式化与定理证明专用，开源 |
| LongCat-AudioDiT | 2026-04-20 | 语音生成 | 抛弃梅尔谱，直接在波形潜空间做扩散 TTS，突破零样本音色克隆上限 |
| **LongCat-2.0-Preview** | 2026-04 底 | 1.6T 级 | 以匿名代号 **"Owl Alpha"** 上线 OpenRouter 测试；月调用量在 Hermes、Claude Code、OpenClaw 分列全球第一、第二、第三 |
| LongCat-Video-Avatar 1.5 | 2026-05-25 | 数字人视频 | 从开源 SOTA 走向商业级应用，唇形同步与长视频稳定性提升 |
| **LongCat-2.0** | **2026-06-30 发布 / 07-06 开源** | **1.6T 总 / ~48B 激活**（动态 33B–56B），原生 1M | **首个在五万卡国产算力集群上完成全流程训练与推理的万亿参数模型**；预训练 >30T tokens；MIT + BF16/FP8/INT8 多精度；华为昇腾、摩尔线程、沐曦同日完成推理适配，[详情](./LongCat-2.0.md) |
| 国产卡推理代码开源 | 2026-07-12 | — | 同步开放针对国产算力极致优化的推理成果 |
| **CatPaw 全场景 AI Agent** | 2026-07-28 | 搭载 LongCat 2.0 | 开箱即用的 AI 智能工作台 + 企业级 Agent 开发托管 |
| **LongCat-2.5-Preview** | **2026-09-25** | 1.6T / ~48B，1M，最大输出 128K | 新增**原生图像理解**；从 Agentic Coding 转向终端 / 浏览器 / 电子表格 / 设计工具等长程操作；**本轮不公布跑分**；限时价约 $0.30 / $1.20，赠老用户 500 万 tokens |
| 内部模型接入收敛 | 2026-07（媒体） | — | 传内部调整大模型使用规范，收敛第三方商用模型接入、优先迁移自研 LongCat 或合规开源模型；**未官方证实** |

## 训练与工程（LongCat-2.0）

| 项 | 数值 |
|---|---|
| 训练集群 | **5 万张国产算力卡**（无英伟达硬件参与训练与推理） |
| 日均故障率 | 万分之 15.7 → **万分之 4.4**（HCCL 异常处理 + 弹性扩缩卡 + 自动故障恢复） |
| MFU | 17.8% → **27.68%** |
| 稳态日吞吐 | 7170 亿 → **1.12 万亿 tokens/day** |
| 正确性保障 | 自研确定性算子 + Bitwise 一致性验证 |

架构要点：**ScMoE 跨层快捷连接**、**零计算专家机制**（Token 级动态计算预算）、**LongCat Sparse Attention（LSA）**（流式感知索引 / 跨层索引 / 分层索引，把长上下文计算量从平方级降到近线性）、**N-gram Embedding**（135B 参数、嵌入容量扩约 100×，降低大 batch 解码的显存 I/O）、**MOPD**（Agent / Reasoning / Interaction 三组专家 + 门控动态调度）。

## 生态与组织

| 项目 | 说明 |
|---|---|
| 模芯协同 | 2023 年起与国产算力厂商共同推进，攻克万卡级容错恢复、NPU 确定性计算、算力利用率等难题 |
| 落地形态 | CatPaw（Agent 平台）、longcat.chat（网页体验）、LongCat API（OpenAI / Anthropic 兼容端点） |
| 开发者生态 | 为 OpenClaw 等第三方工具提供官方免费 API；适配 Codex、OpenCode、Claude Code、Hermes、Kilo Code 等 |
| "小店有 AI" | 2026-06-25 启动，开放 AI 能力赋能中小经营主体 |
| 学术产出 | 2026 年数十篇论文被 ACL、SIGIR、ICML、KDD、NeurIPS、CVPR 收录；ACL 2026 杰出论文（GeoRA） |
| 评测基准 | VitaBench 2.0（长期动态用户建模）、LoHoSearch（搜索 Agent）、MineExplorer（开放世界长程）、WBench（交互式视频世界模型）、General 365（推理）、LARYBench（具身动作表征） |

## 关键里程碑

- 2025-09-01：**LongCat-Flash** 开源，美团进入开源大模型第一梯队。
- 2025-11：**LongCat-Flash-Omni**，首个开源实时全模态交互模型。
- 2026-06-30 → 07-06：**LongCat-2.0** 发布并开源，成为"国产算力可训万亿模型"的实证。
- 2026-07-28：**CatPaw** 上线，把模型能力从"跑得动"推向"用得好"。
- 2026-09-25：**LongCat-2.5-Preview** 悄然上线，主动删去跑分，转向"能干活"的实用主义叙事。

## 分线说明

- **LongCat-Flash 线（560B）**：高效 ScMoE + 零计算专家，主打"同等效果好、成本更低"，是全模态（Omni）与轻量化（Lite）的试验田。
- **LongCat-2.0 线（1.6T）**：面向真实 Agentic Coding 与长程任务，架构全程围绕"代码理解—生成—执行"设计，并绑定国产算力叙事。
- **评测基准线**：美团是少数把"造基准"当成常态化工程动作的中国厂商（VitaBench / LoHoSearch / MineExplorer / WBench / General 365 / LARYBench），构成软性技术影响力资产。
- **策略差异**：与小米"旗舰开源换生态"类似，美团同样全线 MIT，但更强调**国产算力全链路闭环**与**内部业务反哺**（外卖、搜索、履约、数字人直播）。

## 重点 model 文档

- [LongCat-Flash（含 Omni / Lite）](./LongCat-Flash.md)
- [LongCat-2.0（含 2.5-Preview）](./LongCat-2.0.md)

## 备注

- **匿名测试期**：LongCat-2.0-Preview 以 "Owl Alpha" 匿名上线 OpenRouter，2026-06-30 才公开身份；OpenRouter 调用量数据为平台侧观测，非审计口径。
- **内部收敛传闻**：2026-07 有媒体称美团内部要求禁用豆包、改用 LongCat-2.0 与 DeepSeek 等，仅见于媒体报道，**未见官方确认**。
- **2.5-Preview 无跑分**：本轮官方主动删去基准分数，只强调"长程任务 + 多模态"，能力增益属定位表述，需等第三方独立评测。
- **算力口径**：LongCat-Flash（2025-09）用英伟达 H800 训练；LongCat-2.0（2026-06）完全不依赖英伟达——两代硬件路线截然不同。
- 来源：tech.meituan.com、longcatai.org、百度百科（LongCat-2.0）、中国经济时报、InfoQ / Pandaily（2026-09-25）、Digital Applied / VentureBeat。截至 2026-09-30。
