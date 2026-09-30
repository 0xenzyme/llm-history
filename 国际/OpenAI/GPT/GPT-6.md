---
厂商: OpenAI
系列: GPT
模型: GPT-6（Astra / Sol / Luna 三档家族）
首个发布时间: 2026-09-03（Astra 旗舰）
最新版本: GPT-6 Astra / GPT-6 Sol / GPT-6 Luna（三者同代，分档演进）
最新版本发布时间: 2026-09-22（Sol / Luna）
参数量/架构: 闭源未公开；新架构（Astra 起）
开源/闭源: 闭源
---

# GPT-6 家族

GPT-6 是 OpenAI 截至 2026-09 的最新代际，采用"天体命名 + 分档演进"策略：不再有单一的"GPT-6"，而是 **Astra（旗舰）/ Sol（中端）/ Luna（轻量）** 三档，代号标识可独立演进的能力层级，数字标识代际。三者共享 1.05M 上下文、128K 输出、文本+图像输入、文本输出的基础形态。

## 发布时间线

- 2026-09-03：GPT-6 Astra 发布，经 API、ChatGPT Work、Codex（符合条件的套餐）提供。
- 2026-09-22：GPT-6 Sol 与 GPT-6 Luna 发布（较 GPT-5.6 同档便宜约 50%），进入 ChatGPT Work、Codex、API；Luna 额外在桌面 app 面向 Free / Go 用户开放。
  - 注：Anthropic 在约 90 分钟前发布了 Claude Opus 5.5（$4/$20），OpenAI 随即在同日放出 Sol/Luna 形成直接对标。

---

## GPT-6 Astra（旗舰）

GPT-6 Astra 是 GPT-6 家族的顶配旗舰，定位深度分析、研究、科学。

### 关键参数

- 上下文：1,050,000 token 输入，最大输出 128,000 token；知识截止 2026-04-30。
- 输入/输出模态：文本 + 图像输入，文本输出（尚未含原生音频/视频输出）。
- 推理档位：Low / Medium / High / xHigh / Max 五档（**不接受 none**，与 Sol/Luna 不同）。
- 定价：≤272K 输入 $10 / 百万 token、输出 $50；>272K 输入 $20、输出 $75。API 模型 ID：`gpt-6-astra`。
- 厂商自评：GPQA Diamond 96.0%、Terminal-Bench 4.0 57.9%、OSWorld 2.0 72.6%。

### 关键事实

- **新架构 + 百万上下文**：相比 GPT-5 代的 400K/1M 路线，GPT-6 以新架构把原生上下文推到 1.05M，并把输出上限拉到 128K。
- **定价显著上探**：顶配输出价达 $75 / 百万 token（>272K 段），反映旗舰能力的溢价。
- 在 ChatGPT 中仅 Pro（$100/200 档）、Business、Enterprise 可用，Plus 不含。

---

## GPT-6 Sol（中端 / 编码与 Agent）

GPT-6 Sol 是 GPT-6 家族的中端主力，定位交互式与 Agent 编码工作流（调试、数据分析、业务自动化），在 OpenAI 自评的业务任务基准上已反超 Astra。

### 关键参数

- API 模型 ID：`gpt-6-sol`
- 上下文：1,050,000 token（922,000 max input，128,000 输出）；知识截止 2026-04-20。
- 模态：文本 + 图像输入，文本输出；不支持微调。
- 推理档位：none / low / medium（默认）/ high / xhigh / max（**支持 none**，可关思考做廉价快速调用）。
- 定价（永久价，非促销）：≤272K 输入 $2.00 / 输出 $10.00；缓存读 $0.20、缓存写 $2.50；>272K 输入 $4.00、输出 $15.00。
- 可用：API、ChatGPT Work、Codex（Plus/Pro/Business/Enterprise/Edu）；已集成进 GitHub Copilot（Pro+/Max/Business/Enterprise）。
- 坑：Chat Completions 下函数调用仅在 `reasoning_effort=none` 生效；其他档位需用 Responses API。

### 基准（OpenAI 自评）

- AutomationBench 1.0.6（47 工具业务流）：33.2% @ xhigh，约 $0.27/任务，反超 Claude Opus 5 的 26.9% 且成本约 1/11。
- DeepSWE v1.1（Agent 修 bug）：68.8% @ max（竞品最佳 Claude Fable 5 为 69.9%）。
- OSWorld 2.0：60.5%（竞品最佳 Claude Opus 5 为 60.3%）。
- Agents' Last Exam（长程 Agent）：56.4% @ max，成本较 Claude Opus 5 低约 60%。

---

## GPT-6 Luna（轻量 / 高吞吐）

GPT-6 Luna 是 GPT-6 家族的轻量高速档，定位高吞吐、聚焦型任务（文档摘要、信息抽取、分类、快速问答），是三者中唯一面向 Free 账户开放的档位。

### 关键参数

- API 模型 ID：`gpt-6-luna`
- 上下文：1,050,000 token（922,000 max input，128,000 输出）；知识截止 2026-05-18（三者中最新）。
- 模态：文本 + 图像输入，文本输出；不支持微调。
- 推理档位：none / low / medium（默认）/ high / xhigh / max。
- 定价（永久价）：≤272K 输入 $0.10 / 输出 $0.50；缓存读 $0.01、缓存写 $0.125；>272K 输入 $0.20、输出 $0.75。
- 可用：API、ChatGPT Work、Codex（付费套餐）+ **桌面 app 面向 Free / Go 用户**。

### 基准

- DeepSWE v1.1：66.6% @ max（较 Sol 低 2.2 点），但单任务成本较 Claude Opus 5 低约 93%。
- AutomationBench：较其前代 +5.4pp 且单任务成本降 58%。

---

## 家族对比（摘要）

| 档位 | 定位 | 上下文 | 知识截止 | 输入/输出（≤272K, $/M） | 备注 |
|---|---|---|---|---|---|
| Astra | 旗舰 | 1.05M / 128K | 2026-04-30 | 10 / 50 | 推理档无 none；仅 Pro+ 可用 |
| Sol | 中端编码/Agent | 1.05M / 128K | 2026-04-20 | 2 / 10 | 业务基准反超 Astra；支持 none |
| Luna | 轻量高吞吐 | 1.05M / 128K | 2026-05-18 | 0.10 / 0.50 | 唯一面向 Free 账户；支持 none |

## 备注

- 三者均为 2026-09 记录时的最新发布；详细规格以 OpenAI 官方为准。
- 来源：OpenAI 官方 "Introducing GPT-6 Sol and Luna" 公告，及 DataNorth、AIxploria、ComputingForGeeks、quidproquo 等综合（截至 2026-09-22~25）。
- 推出同日 Anthropic 发布 Claude Opus 5.5（$4/$20），OpenAI 的 Sol/Luna 对标意味明显；独立评测（Artificial Analysis 等）仍在陆续出炉。
- Sol Pro / Luna Pro 变体发布当日已出现在 OpenRouter，但未在官方公告中说明，与基础档差异未公开。
