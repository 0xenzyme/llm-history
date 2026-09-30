---
厂商: Microsoft
系列: Phi
模型: Phi-3
首个发布时间: 2024-04-23
最新版本: Phi-3.5（2024-08-21）
参数量/架构: mini 3.8B / small 7B / medium 14B，dense decoder-only；128K 上下文变体
开源/闭源: 开放权重（MIT）
数据来源: Microsoft 官方、Ars Technica(2024-04-23)、NYT(2024-04-23)、systems-analysis
状态: 已完善
---

# Phi-3

## 一句话

微软"小模型革命"的成名作：3.8B 的 mini 版在手机端可跑，能力被媒体评价为接近 GPT-3.5，确立了端侧 SLM 这一品类。

## 发布时间线

- **2024-04-23**：Phi-3 发布，四个尺寸一次到位（mini 3.8B / small 7B / medium 14B / vision 4.2B）。
- 2024-08-21：Phi-3.5 系列（mini 3.8B / MoE 42B-6.6B / vision 4.2B），多语言与多图能力增强。

## 规格

| 变体 | 参数 | 上下文 | 训练 tokens |
|---|---|---|---|
| Phi-3-mini | 3.8B | 4K / 128K | ~3.3T |
| Phi-3-small | 7B | 8K / 128K | ~4.8T |
| Phi-3-medium | 14B | 4K / 128K | ~4.8T |
| Phi-3-vision | 4.2B | — | 图文输入 |

## 影响

- NYT（2024-04-23）将 Phi-3-mini 视为微软押注"更小 AI 系统"的标志；WIRED 与 Ars Technica 认为其质量接近 GPT-3.5。
- 4-bit 量化后约 1.8GB，iPhone 14 离线演示超 12 tokens/s。
- Phi-3.5-MoE（42B 总 / 6.6B 激活，16 专家每 token 选 2）是 Phi 系列首次尝试 MoE，为后续模型铺路。

## 备注

- Phi-3 全系 MIT 许可，可直接商用，这是它与同期其他"开放权重"小模型的关键差异。
- 128K 是可选上下文变体，mini/small/medium 均有 4K/8K 短上下文版本。
