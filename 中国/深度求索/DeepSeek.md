---
厂商: 深度求索（DeepSeek）
地区: 中国
总部: 中国杭州
成立: 2023-07-17（自幻方量化 AGI 实验室独立）
定位: 高性价比开放权重模型、强推理
开源/闭源: 开源权重（MIT / Apache 2.0）
模型系列: DeepSeek（单一主线；单系列，model 文档直接放本目录）
数据来源: DeepSeek 官方、Hugging Face、Wikipedia、aireleasetracker、deepseekai.guide、中国日报
状态: 已完善（含 2026 最新 V4 代际）
---

# 深度求索（DeepSeek）

- 地区：中国
- 总部：中国杭州
- 成立：2023-07-17（从幻方量化 AGI 实验室独立）
- 定位：高性价比开放权重模型、强推理
- 开源/闭源：开源权重（MIT / Apache 2.0）
- 模型系列：DeepSeek（单一主线系列；单系列，model 文档直接放本目录）
- 数据来源：DeepSeek 官方、Hugging Face、Wikipedia、aireleasetracker、deepseekai.guide、中国日报
- 状态：已完善（含 2026 最新 V4 代际）

## 语言模型版本演进（主线）

| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| DeepSeek-Coder | 2023-11-02 | Dense（代码） | 是 | 首个公开模型 |
| DeepSeek-LLM | 2023-11-29 | Dense 7B / 67B | 是 | 首个通用模型 |
| DeepSeek-MoE | 2024-01-11 | MoE | 是 | 首款 MoE |
| DeepSeek-Math | 2024-02-05 | 基于 Coder | 是 | 提出 GRPO |
| DeepSeek-V2 | 2024-05-06 | MoE 236B / 21B（MLA） | 是 | 引发价格战，[详情](./DeepSeek-V2.md) |
| DeepSeek-Coder-V2 | 2024-06-17 | 基于 V2 骨干 | 是 | 复兴代码线 |
| DeepSeek-V2.5 | 2024-09-05 | 合并 Chat + Coder | 是 | |
| DeepSeek-R1-Lite-Preview | 2024-11-20 | 推理预览 | 否（预览） | |
| DeepSeek-V3 | 2024-12-26 | MoE 671B / 37B | 是 | ~$5.6M 训练，[详情](./DeepSeek-V3.md) |
| DeepSeek-R1 | 2025-01-20 | 推理 671B（GRPO） | 是 | Sputnik moment，[详情](./DeepSeek-R1.md) |
| DeepSeek-V3-0324 | 2025-03-24 | V3 小版本升级 | 是 | 借鉴 R1 RL |
| DeepSeek-R1-0528 | 2025-05-28 | R1 更新 | 是 | |
| DeepSeek-V3.1 | 2025-08-21 | 混合 thinking / non-thinking | 是 | +800B tokens |
| DeepSeek-V3.1-Terminus | 2025-09-22 | V3.1 修复 | 是 | |
| DeepSeek-Math-V2 | 2025-11-27 | 数学 | 是（Apache 2.0） | |
| DeepSeek-V3.2 | 2025-12-01 | V3 续代 | 是 | |
| DeepSeek-V4 Preview | 2026-04-24 | Pro 1.6T/49B、Flash 284B/13B，1M | 是 | preview 先行，[详情](./DeepSeek-V4.md) |
| DeepSeek-V4-Flash（正式） | 2026-07-31 | 284B / 13B | 是 | |
| DeepSeek-V4-Pro（正式） | 2026-08-13 | 1.6T / 49B | 是 | 强化 Agent |
| DeepSeek-V4.1-Flash | 2026-09-10 | V4 续代 | 是 | 当前最新 |

## 关键里程碑
- 2023-11 首个公开模型（Coder / LLM）
- 2024-05 V2 发布，MLA 架构引发中国大模型价格战
- 2024-12 V3 以约 560 万美元训练成本达顶尖水平，"极致性价比"
- 2025-01 R1 开源推理模型，全球现象级（"Sputnik moment"）
- 2026-04 V4 Preview 发布，迈入 1M 上下文 + 1.6T MoE 时代

## 重点 model 文档
- [DeepSeek-V2](./DeepSeek-V2.md)
- [DeepSeek-V3](./DeepSeek-V3.md)
- [DeepSeek-R1](./DeepSeek-R1.md)
- [DeepSeek-V4](./DeepSeek-V4.md)

## 备注
- DeepSeek 采用"开源权重 + 极致性价比"策略，主线单一但版本密集（约每 63 天一更）。
- V4 采用 preview 先行、正式版跟进（与腾讯 Hy4 同策略）；R1-Lite-Preview 亦是早期 preview 做法。
- 多模态 / 专用变体另有 VL2（视觉）、Prover（形式化证明）、Math-V2 等，本表仅列语言主线。
