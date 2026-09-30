---
厂商: Mistral AI
系列: Mistral（通用语言线）
开源/闭源: 双轨——Small/Ministral/Large 3 等开放权重（Apache 2.0）；Large 1/2、Medium 3/3.5 为专有 API
首个发布时间: 2023-09-27（Mistral 7B）
最新版本: Mistral Large 3（2025-12-02）/ Mistral Medium 3.5（2026-04-30，专有）
数据来源: mistral.ai 官方模型治理页、aiwiki
状态: 已完善
---


# Mistral 系列（通用语言线）

## 概览
Mistral 系列是 Mistral AI 的通用语言模型主线，从 7B 首发一路扩展到 Large（前沿）、Medium（均衡）、Small / Ministral（高效与端侧）四档结构。厂商页 `../Mistral.md` 含全部支线（代码/数学推理/多模态语音）总表，本页聚焦通用语言线。

## 版本演进表
| 模型 | 发布时间 | 规格 | 开源 | 备注 |
|---|---|---|---|---|
| Mistral 7B | 2023-09-27 | 7.3B，32K | 是（Apache 2.0） | 首发；BT 磁力链发布；全面超越 Llama 2 13B，多项对齐 Llama 2 34B；GQA + 滑动窗口注意力 |
| Mistral Next | 2024-02-06 | — | — | 官方模型治理页在列 |
| Mistral Small 1.0 | 2024-02-26 | — | — | 与 Large 1.0 同日 |
| Mistral Large 1.0 | 2024-02-26 | ~123B，32K | 否（专有 API） | 首个专有模型；同发 Le Chat + Azure；对标 GPT-4；英/法/德/西/意流利 |
| Mistral Large 2.0 / 2.1 | 2024-07-16（另有 07-24 记法） | ~123B，128K | 否 | 上下文扩至 128K |
| Mistral NeMo 12B | 2024-07-18（官方页记 2025） | 12B，128K | 是 | 与 NVIDIA 合作 |
| Mistral Small 2.0 | 2024-09-17 | — | — | |
| Mistral Small 3.0 | 2025-01-30 | 24B，32K | 是（Apache 2.0） | 高效档 |
| Mistral Saba | 2025-02-17 | 24B，32K | 是 | 多语言（中东/南亚方向） |
| Mistral Small 3.1 | 2025-03-17 | 24B，128K | 是 | 加入多模态 |
| Mistral Medium 3 | 2025-05-07 | 未公开，128K | 否（专有） | 均衡档 |
| Mistral Small 3.2 | 2025-06-20 | 24B | 是 | |
| Mistral Large 3 | 2025-12-02（另有 11-20 记法） | 未公开，256K | **是（开放权重）** | 前沿档；Base / Instruct |
| Ministral 3（3B / 8B / 14B） | 2025-12-02 | 端侧三档 | 是 | 边缘/本地部署 |
| Mistral Small 4 | 2026-03-16 | — | 是 | |
| Mistral Medium 3.5 | 2026-04-30 | — | 否（专有） | 当前通用前沿之一 |

## 档位结构
- **Large**：前沿能力，付费 API（Large 3 起开放权重）。
- **Medium**：能力与成本均衡，专有。
- **Small / Ministral**：高效与端侧，多为 Apache 2.0 开放权重。
- **Saba**：区域多语言专项。

## 重点 model 文档
- [Mistral-7B](./Mistral-7B.md)
- [Mistral-Large](./Mistral-Large.md)
- [Mistral-Large-3](./Mistral-Large-3.md)

## 备注
- 相邻/交叉线请见厂商页：Mixtral（MoE）、Codestral/Devstral（代码）、Mathstral/Magistral（数学推理）、Pixtral/OCR/Voxtral（多模态语音）。
- 日期冲突以 Mistral 官方模型治理页优先，差异见厂商页备注。
- 来源：mistral.ai 官方模型治理页、aiwiki（mistral_ai）、llm-evolution。
