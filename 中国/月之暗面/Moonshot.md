---
厂商: 月之暗面（Moonshot AI）
地区: 中国
总部: 中国北京
成立: 2023 年（北京月之暗面科技有限公司）
定位: 长上下文 + 开放权重 + Agent 能力
开源/闭源: K2 / K3 等开放权重（modified MIT）；K2.8 Preview 起出现闭源档
模型系列: Kimi（单一主线；单系列，model 文档直接放本目录）
数据来源: 月之暗面官方、kimi.com、Hugging Face、Wikipedia、aireleasetracker、科技日报、jademond
状态: 已完善（含 2026 最新 K3 代际 + K2.8 Preview）
---

# 月之暗面（Moonshot AI / Kimi）

- 地区：中国
- 总部：中国北京
- 成立：2023 年（北京月之暗面科技有限公司）
- 定位：长上下文 + 开放权重 + Agent 能力
- 开源/闭源：K2/K3 等开放权重（modified MIT）；早期产品闭源
- 模型系列：Kimi（单一主线系列；单系列，model 文档直接放本目录）
- 数据来源：月之暗面官方、kimi.com、Hugging Face、Wikipedia、aireleasetracker、科技日报、jademond
- 状态：已完善（含 2026 最新 K3 代际 + K2.8 Preview）

## 语言模型版本演进（主线）

| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| Kimi Chat | 2023-10-09 | Dense，128K 上下文 | 否 | 首个产品，无损长上下文 |
| Kimi（公众版） | 2023-11-16 | 基于 Moonshot 模型 | 否 | 面向公众 |
| Kimi 长上下文 | 2024-03 | 200 万字（2M 字符） | 否 | 内测 |
| Kimi 探索版 | 2024-10-11 | 自主搜索 | 否 | 每次查最多 500 网页 |
| Kimi 视觉 moonshot-v1-vision-preview | 2024-11-16 | 视觉 | 否 | |
| Kimi K1.5 | 2025-01-20 | 推理，匹配 o1 | 否 | 多模态推理，[详情](./Kimi-K1.5.md) |
| Kimi-VL | 2025-04-10 | MoE 16B / 3B | 是 | 视觉语言开源 |
| Kimi-Dev | 2025-06-17 | 72B 编码（基于 Qwen2.5-72B） | 是 | |
| Kimi K2 | 2025-07-11 | MoE 1T / 32B，15.5T tokens | 是（modified MIT） | 主力开源，[详情](./Kimi-K2.md) |
| Kimi-K2-Instruct-0905 | 2025-09-05 | K2 续代，256K 上下文 | 是 | |
| Kimi Linear | 2025-10-30 | MoE 48B / 3B（KDA） | 否 | Delta Attention 预览 |
| Kimi K2 Thinking | 2025-11-06 | 1T / 32B 推理，256K | 是（modified MIT） | ~$4.6M 训练 |
| Kimi K2.5 | 2026-01-27 | 1T / 32B 多模态 | 是 | MoonViT-3D 视觉 |
| Kimi K2.6 | 2026-04-21 | 1000+ 并行 agents | 是 | |
| Kimi K2.7 Code | 2026-06-12 | 代码专项 | 是 | |
| Kimi K3 | 2026-07-16 | MoE 2.8T / 32B，896 专家 / 16 激活，1M | 是（7-27 开源） | 全球最大开源，[详情](./Kimi-K3.md) |
| Kimi K2.8 Preview | 2026-09-11 | 参数未披露，多模态（图/视频），1M | **否（闭源）** | K2 主线首个闭源预览，当前最新；定位介于 K2.7 Code 与 K3 之间，[详情](./Kimi-K2.md) |

## 关键里程碑
- 2023-10 Kimi Chat 发布，以 128K 无损长上下文打响"长文本"第一枪
- 2025-01 K1.5 发布，转向推理能力，声称比肩 o1
- 2025-07 K2 开源（1T MoE），Hugging Face 当天下载量第一
- 2026-07 K3 发布（2.8T），全球首个 3T 级开源模型，被称为"DeepSeek moment"

## 重点 model 文档
- [Kimi K1.5](./Kimi-K1.5.md)
- [Kimi K2](./Kimi-K2.md)
- [Kimi K3](./Kimi-K3.md)

## 备注
- Kimi 采用单一模型家族（K1/K2/K3 为大版本代际，非独立系列），故 model 文档直接放厂商目录。
- K2 系列内部小版本密集（K2 → 0905 → K2 Thinking → K2.5/2.6/2.7/2.8），统一归入 K2 主条目。
- 与腾讯 Hy4、DeepSeek V4 的"preview 先行"不同，K3 是发布即旗舰、随后开源权重。
