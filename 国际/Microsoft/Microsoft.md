---
厂商: Microsoft（微软）
地区: 国际
总部: 美国 华盛顿州 雷德蒙德
成立: 1975（AI 部门 Microsoft AI / MAI 由 Mustafa Suleyman 领衔，2024-03 加入）
定位: 云平台 + 应用层分发巨头；2025 年起转型自研基础模型（Phi 开放权重小模型 + MAI 自研前沿家族）
开源/闭源: 双轨——Phi 系列 MIT 开放权重；MAI 系列闭源（仅 Foundry / Azure / OpenRouter 分发）
模型系列: Phi（开放权重小模型）、MAI（自研前沿家族）、Orca / BitNet / Florence / Kosmos（研究线）
数据来源: Microsoft 官方博客 & microsoft.ai、Build 2026 官方 keynote 实录、Wikipedia(Phi)、aiwiki/aikkm、Hugging Face(microsoft/phi-4)、百度百科(MAI-Thinking-1)
状态: 已完善（含 2026-06 Build 2026 七模型发布）
---

# Microsoft（微软）

微软的 AI 模型战略在 2025 年发生根本转向：此前长期作为 **OpenAI 的分发渠道**（Azure OpenAI Service + Copilot），自 2025-08 起开始自研基础模型，2026 年正式成为独立前沿实验室。

## 两条主线

| 线 | 定位 | 许可 | 起点 |
|---|---|---|---|
| **Phi** | 小模型（SLM），端侧/本地可跑，证明"数据质量 > 参数量" | MIT 开放权重 | 2023-06-21 Phi-1 |
| **MAI** | Microsoft AI 自研前沿家族，覆盖文本/推理/图像/语音/转写/代码 | 闭源 API | 2025-08-28 MAI-Voice-1 + MAI-1-preview |

> 另有研究线（Orca 2023、BitNet b1.58 2025、Florence-2 2024、Kosmos-2 2023、Microsoft Mu 2025），不属商用主家族，见下文。

## 关键里程碑

- 2023-06-21 **Phi-1（1.3B）发布**，用"教科书级"合成数据训练，代码能力超 Llama——确立"小模型 + 高质量数据"路线。
- 2024-04-23 **Phi-3 发布**（mini 3.8B / small 7B / medium 14B），手机可跑，被 NYT 视为微软押注小模型的标志。
- 2024-12-12 **Phi-4（14B）开源**（MIT），9.8T tokens、1920×H100-80GB 训练 21 天，STEM/推理能力超越同量级。
- **2025-08-28 MAI-Voice-1 + MAI-1-preview 发布**——微软**首批端到端自研基础模型**，标志从"OpenAI 集成商"转向"AI 创新者"。
- **2026-06-02 Build 2026：一次性发布 7 个自研模型**（MAI-Thinking-1 / MAI-Code-1-Flash / MAI-Image-2.5 / MAI-Voice-2 / MAI-Transcribe-1.5 等），MAI-Thinking-1 为首个推理模型，SWE-Bench Pro 53% 对齐 Opus 4.6。
- 2026 MAI 模型与自研 **Maia 200** 芯片协同设计，性能功耗比再提升 1.4×。

## 系列导航

- [Phi（开放权重小模型）](./Phi/index.md)
- [MAI（自研前沿家族）](./MAI/index.md)

## 研究线（非商用主家族）

| 模型 | 时间 | 说明 |
|---|---|---|
| Orca / Orca 2 | 2023 | 13B / 7B+13B，从复杂解释中学习推理 |
| Kosmos-2 | 2023 | 多模态，对象级 grounding |
| Florence-2 | 2024 | 统一视觉基础模型 |
| E5 / E5-Mistral-7B | 2022 / 2024 | 文本嵌入 |
| NaturalSpeech 3 | 2024 | 零样本语音合成 |
| BitNet b1.58 2B4T | 2025 | 1-bit 大模型，可在 CPU 上跑 |
| Microsoft Mu | 2025 | Windows 设置智能体的端侧小模型 |

## 备注

- **与 OpenAI 的关系**：微软累计投资 130 亿美元，协议至 2030 年，但含 **AGI 排除条款**（若 OpenAI 宣称达到 AGI，微软的授权可能被切断）。这是微软坚持自研 MAI 的核心动机。
- **无蒸馏是 MAI 的核心卖点**：MAI-Thinking-1 从零训练、未使用任何第三方模型蒸馏数据，数据血缘"干净且商业可授权"，面向企业级合规场景。
- **Phi-4 上下文仅 16K**（非 128K），与 Phi-3/3.5 的 128K 不同，容易混淆，已在系列页标注。
- **上下文窗口存在来源冲突**：MAI-Thinking-1 的上下文，微软官方 keynote 与微软新闻中心写 **256K**，百度百科写 128K。以官方英文为准取 256K，系列页已标注。
