---
厂商: Microsoft
系列: Phi
模型: Phi-4
首个发布时间: 2024-12-12
最新版本: Phi-4-reasoning-vision-15B（2026-03-04）
参数量/架构: 14B dense decoder-only；16K 上下文；9.8T tokens
开源/闭源: 开放权重（MIT）
数据来源: Microsoft 官方、HF(microsoft/phi-4，License 提交于 2024-12-11)、Wikipedia、systems-analysis
状态: 已完善
---

# Phi-4

## 一句话

Phi 系列迄今影响最大的一代：14B 稠密模型靠合成数据 + 严格过滤，在 STEM/推理上压制同量级乃至更大模型，且 MIT 可商用。

## 发布时间线

- **2024-12-12**：Phi-4（14B）发布，MIT 权重经 Microsoft 与 Hugging Face 公开（HF LICENSE 文件提交于 2024-12-11）。
- 2025-02-26：Phi-4-mini-instruct（3.8B）与 Phi-4-multimodal-instruct（5.6B）发布，3 月初以 MIT 开源。
- 2025：Phi-4-reasoning（14B）、Phi-4-mini-flash-reasoning（3.8B）发布。
- **2026-03-04**：Phi-4-reasoning-vision-15B 发布——可自主决定"何时推理、何时跳过推理"的视觉语言模型。

## 规格（Phi-4 基座）

| 项 | 值 |
|---|---|
| 参数 | 14B，dense decoder-only |
| **上下文** | **16K**（注意：不是 128K） |
| 训练 tokens | 9.8T |
| 算力 | 1,920× H100-80GB，训练 21 天 |
| 数据构成 | 合成数据 + 过滤公开网页 + 网页改写 + 代码 + 学术源 + 授权书籍 + QA 数据集 |
| 许可 | MIT |

## 派生变体

| 变体 | 参数 | 上下文 | 说明 |
|---|---|---|---|
| Phi-4-mini-instruct | 3.8B | 128K | GQA、共享输入输出嵌入、约 200K 词表、23 语言、支持函数调用语法；约 5T tokens |
| Phi-4-multimodal-instruct | 5.6B | 128K | 以 mini 为语言骨干 + 视觉/语音编码器；约 5T 文本 tokens / 1.1T 图文 tokens / 230 万小时语音；Mixture-of-LoRAs |
| Phi-4-reasoning | 14B | — | 推理专项 |
| Phi-4-mini-flash-reasoning | 3.8B | — | 低延迟推理 |
| Phi-4-reasoning-vision-15B | 15B | — | 高分辨率视觉 + 深度推理，可自主决定是否推理 |

## 备注

- **最易误记的一点**：Phi-4 基座上下文是 **16K**，而 Phi-3 / Phi-3.5 是 128K。Phi-4 把预算押在推理与 STEM 能力上。
- Phi-4-mini / multimodal 反而回到 128K，所以"Phi-4 家族"内部上下文并不统一。
- 官方强调 Phi-4 的训练数据经过严格筛选，微软将其定位为"合成数据 done right"的示范。
