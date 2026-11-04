---
厂商: Amazon（AWS）
地区: 国际
总部: 美国 华盛顿州 西雅图
成立: 1994（AGI 部门 2023 成立，2025 末重组）
定位: 云平台厂商；Nova 为 Bedrock 独占的第一方基础模型家族，主打性价比与企业分发
开源/闭源: 闭源（仅 Amazon Bedrock / SageMaker 提供）
模型系列: Nova（理解 / 创意 / 语音 / Agentic / Embedding / Nova 2 六条支线）；前代 Titan
数据来源: AWS 官方文档(Model Catalog)、AWS News Blog、hidekazu-konishi Amazon Nova 时间线、systems-analysis、recatools、dawnliphardt、雪球《全球大模型跟踪》(10.15)
状态: 已完善（含 2025-12 Nova 2 代与 2026 中"Heritage"降级；2026-10 Bedrock 第三方模型扩张）
---

# Amazon Nova

Nova 是亚马逊自研的基础模型家族，**仅在 Amazon Bedrock 上提供**（不像 Claude/GPT 那样多云分发），这决定了它的定位：给企业在单一云账单下提供文本/图像/视频/语音的一站式价格-性能选择。

## 家族结构

| 支线 | 成员 | 输入 → 输出 |
|---|---|---|
| 理解（第一代） | Micro / Lite / Pro / Premier | 文本(图像/视频) → 文本 |
| 创意 | Canvas / Reel | 文本+图像 → 图像 / 视频 |
| 语音 | Sonic（一代、二代） | 语音 ↔ 语音/文本 |
| Agentic | Act | 浏览器 UI 自动化 |
| 嵌入 | Multimodal Embeddings | 文本/文档/图像/视频/音频 → 向量 |
| **Nova 2** | Lite / Pro / Omni / Sonic | 见下 |

## 版本演进表

| 模型 | 发布 | 规格 | 状态（2026 中） |
|---|---|---|---|
| Nova Micro | 2024-12-03 | 文本→文本，128K | Active |
| Nova Lite | 2024-12-03 | 文本/图像/视频→文本，300K | Active |
| Nova Pro | 2024-12-03 | 文本/图像/视频→文本，300K | Active |
| Nova Canvas | 2024-12-03 | 文本/图像→图像 | **Heritage**（维护中） |
| Nova Reel | 2024-12-03 | 文本/图像→视频（1.1 起最长 2 分钟） | **Heritage** |
| Nova Act | 2025-03（预览）→ 2025-12 GA | 浏览器自动化 Agent | GA |
| Nova Premier | 2025-04-30 GA | 文本/图像/视频→文本，1M | **EOL 2026-09** |
| Nova Sonic | 2025-04 | 语音↔语音，300K，双向流式 API | 一代为 Heritage |
| Nova Multimodal Embeddings | 2025-10 | 统一嵌入，跨文本/文档/图像/视频/音频检索 | Active |
| **Nova 2 Lite** | 2025-12-02 | 1M，扩展思考，内置工具 | GA |
| **Nova 2 Pro** | 2025-12-02 | 1M，加音频输入 | Preview |
| **Nova 2 Sonic** | 2025-12-02 | 1M，加文本输出，7 语言，异步工具调用 | GA |
| **Nova 2 Omni** | 2025-12-02 | 文本/图像/视频/音频→文本+图像，1M | Preview（Nova Forge 客户早期访问） |
| Nova Forge | 2025-12-02 | 从训练 checkpoint 继续训练定制 Nova | 服务 |
| Nova Deep Research | 2026 | 深度研究专用 | 实验性 |

## 关键里程碑

- **2024-12-03 re:Invent 2024**：Nova 首发，五个模型一次到位（Micro/Lite/Pro/Canvas/Reel），取代 Titan 成为第一方主力。
- 2025-02-27：理解模型通过跨区域推理配置文件在新加坡、东京、首尔、孟买、悉尼上线，满足亚太数据驻留需求。
- **2025-04-30 Nova Premier GA**：1M 上下文，定位最强理解模型兼蒸馏教师模型。
- **2025-12-02 re:Invent 2025：Nova 2 代发布**——Lite/Pro/Sonic/Omni 四模型，全系 1M 上下文 + 扩展思考 + 内置工具（web grounding、代码解释器），并推出 Nova Forge。
- **2026 年中战略收缩**：Canvas、Reel、Premier、Sonic 一代被打上 **"Heritage"** 标签转为仅维护；Premier 于 2026-09 正式 EOL。

## 近一月动态（2026-09-22 → 2026-10-22）

> Amazon 本轮**没有发布新的 Nova 代际**。它的动作全部在 Bedrock 平台侧——用自己的云货架换生态位。

| 日期 | 事件 |
|---|---|
| 10-05 / 10-06 | **智谱 GLM-5.3 上线 Amazon Bedrock**（744B，1M 上下文）。据《科创板日报》，**AWS 按模型调用量与智谱分成**——这是中国模型出海从"卖授权"转向"云货架分成"的标志性一笔 |
| 10-13 | **xAI Grok 4.7 正式上线 Amazon Bedrock**，可用于构建具备工具调用能力的长程智能体 |
| 10 月 | 洽谈以约 **70 亿美元收购世界模型初创公司 Decart** |
| 10 月 | 签署 20 年核电供应协议为 AI 数据中心供电 |
| 10 月 | Gemini 4 Argon 同周内亦进入多家云平台分发，Bedrock 的"中立货架"策略面临更激烈的第三方模型竞争 |

> ⚠️ "Frontier Model Research"（Pieter Abbeel 领衔，目标 2026 年底 re:Invent）**截至 2026-10-22 仍未发布**，继续按未证实计划记录。

## 重点 model 文档

- [Nova 2（第二代）](./Nova-2.md)

## 组织与路线变动（2025 末）

- 亚马逊 AGI 部门 2023 年在 Rohit Prasad（Alexa 老将）下成立；**2025 末与自研芯片、量子计算部门合并**，由 Peter DeSantis 统管。
- **关闭旧金山 AGI 实验室**（2024 末收购 Adept AI Labs 后设立）。
- 据报道内部有代号 **"Frontier Model Research"** 的新前沿模型计划，由 Pieter Abbeel（UC Berkeley 教授，其机器人公司 Covariant 于 2024 末被亚马逊收购）领衔，目标在 **2026 年底 re:Invent** 亮相。

## 备注

- **Nova 与 Titan 的关系**：Titan 是前代第一方模型（Titan Image Generator v2 2024-08-06、Titan Text Premier），Nova 自 2024-12 起取代它成为主线。
- **区域限制**：Premier、Canvas、Reel 长期仅在美国区域提供，这是亚太企业选型的实际约束。
- **定价参考**（2026-08 研究数据，非官方承诺）：Micro $0.035/$0.14、Lite $0.06/$0.24、Nova 2 Lite $0.33/$2.75、Pro $0.80/$3.20、Premier $2.50/$12.50（每百万 tokens，输入/输出）。以 AWS 官方定价页为准。
- **日期冲突**：AWS 官方 Model Catalog 将 Nova Micro/Lite/Pro/Canvas/Reel 的发布日期列为 **12/2/2024**，而 re:Invent 主题演讲为 12 月 3 日。本库正文取 12-03（发布当日），此处标注差异。
