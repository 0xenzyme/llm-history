---
厂商: Microsoft
系列: Phi
首个发布时间: 2023-06-21（Phi-1）
最新版本: Phi-4-reasoning-vision-15B（2026-03-04）
开源/闭源: 开放权重（MIT）
数据来源: Microsoft 官方 / HF(microsoft/phi-4)、Wikipedia(Phi)、aikkm、systems-analysis
状态: 已完善
---

# Phi 系列（开放权重小模型）

Phi 是微软"数据质量胜过参数量"命题的实验场：用教科书级合成数据 + 严格过滤，让小模型达到更大模型的能力，且 MIT 许可可商用、可本地部署。

## 版本演进表

| 模型 | 发布 | 参数 | 上下文 | 许可 | 备注 |
|---|---|---|---|---|---|
| Phi-1 | 2023-06-21 | 1.3B | — | MIT | 教科书级数据，代码能力超 Llama |
| Phi-1.5 | 2023-09 | 1.3B | — | MIT | 加入常识推理/日常知识合成数据；**基座模型，未做安全对齐** |
| Phi-2 | 2023-12-14 | 2.7B | — | MIT | 达到 25B 级性能，开源社区爆点 |
| Phi-3-mini | 2024-04-23 | 3.8B | 4K / 128K | MIT | 手机可跑，~3.3T tokens，对标 GPT-3.5 |
| Phi-3-small | 2024-04-23 | 7B | 8K / 128K | MIT | ~4.8T tokens |
| Phi-3-medium | 2024-04-23 | 14B | 4K / 128K | MIT | 系列最强；~4.8T tokens |
| Phi-3-vision | 2024-04-23 | 4.2B | — | MIT | 图文多模态 |
| Phi-3.5-mini | 2024-08-21 | 3.8B | 128K | MIT | 多语言增强 |
| Phi-3.5-MoE | 2024-08-21 | 42B 总 / 6.6B 激活（16 专家，每 token 选 2） | 128K | MIT | Phi 首个 MoE；~4.9T tokens |
| Phi-3.5-vision | 2024-08-21 | 4.2B | 128K | MIT | 支持单图/多图 |
| **Phi-4** | 2024-12-12 | 14B dense | **16K** | MIT | 详见 [Phi-4.md](./Phi-4.md) |
| Phi-4-mini | 2025-02-26 | 3.8B | 128K | MIT | GQA、~200K 词表、23 语言、函数调用 |
| Phi-4-multimodal | 2025-02-26 | 5.6B | 128K | MIT | 文本+图像+音频输入，Mixture-of-LoRAs |
| Phi-4-reasoning | 2025 | 14B | — | MIT | 推理变体 |
| Phi-4-mini-flash-reasoning | 2025 | 3.8B | — | MIT | 低延迟推理变体 |
| **Phi-4-reasoning-vision-15B** | 2026-03-04 | 15B | — | MIT | 视觉语言模型，**可自主决定何时推理** |

## 重点 model 文档

- [Phi-3](./Phi-3.md)
- [Phi-4](./Phi-4.md)

## 备注

- **Phi-4 上下文只有 16K**，不是 Phi-3 系列的 128K。这是常见误记点：Phi-4 主打 STEM/推理能力，牺牲了长上下文。
- Phi-1.5 与 Phi-2 原始版本**未做 RLHF / 指令安全对齐**，微软技术报告明确警告可能生成不准确、有偏见或有害内容。
- Phi-3-mini 的 4-bit 量化包约 1.8GB，在 iPhone 14 上离线演示可达 12+ tokens/s（微软官方演示数据，非普适保证）。
- 自 2026 年起，Phi 与 MAI 分工清晰：**Phi 走开放权重端侧，MAI 走闭源前沿**。
