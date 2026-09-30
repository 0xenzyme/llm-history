---
厂商: 腾讯
系列: 混元 / HY
数据来源: 腾讯官方 hunyuan.tencent.com / hy.tencent.ai、新华社/人民网、腾讯云、百度百科
状态: 已完善（含 2026-08-28 最新 Hy4 preview）
---

# 混元（Hunyuan / HY）系列

厂商：腾讯
别名：2025 年底起对外统称 HY（Tencent HY）
开源/闭源：部分开源（见下表"开源"列）
说明：混元是腾讯全链路自研大模型家族，覆盖语言、视觉生成、视觉理解、语音、3D、翻译等多模态。
以下按**语言模型主线**记录发布时间；多模态变体见文末。

## 语言模型版本演进

| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| 混元大模型（初代 v1） | 2023-09 | Dense，千亿级 | 部分 | 首次公开亮相 |
| Hunyuan-Pro | 2023-12 | Dense | 否 | 推理增强版 |
| Hunyuan-Standard / Lite | 2024-初 | 分层 | 否 | 标准版 / 轻量版 |
| 混元 Turbo（一代） | 2024-09 | MoE | 否 | 性能 +50%，定价低 50% |
| Hunyuan-Large | 2024-11-05 | MoE 389B / 52B，256K | 是 | 开源最大 MoE，[详情](./Hunyuan-Large.md) |
| 混元 Turbo S | 2025-02-27 | Hybrid-Mamba-Transformer MoE 560B / 56B | 否 | 快思考、秒回，[详情](./Hunyuan-Turbo-S.md) |
| 混元 T1 | 2025-03-21 | 基于 Turbo S 的深度推理 | 否 | 慢思考 / 深度推理，[详情](./Hunyuan-T1.md) |
| Hunyuan-A13B | 2025-06-27 | MoE 80B / 13B，256K | 是 | 紧凑开源，快/慢思考切换；Instruct 变体约 2025-11 |
| 混元 2.0 | 2025-12-05 | MoE 406B / 32B，256K | 否 | Think / Instruct 双版本 |
| Hy3 preview | 2026-04-23 | MoE 295B / 21B，约 262K | 是 | "重建混元"第一步，[详情](./Hy3.md) |
| Hy3 正式版 | 2026-07-06 | MoE 295B / 21B，256K | 是 | preview 转正，Agent 成功率 90%，[详情](./Hy3.md) |
| Hy4 preview | 2026-08-28 | MoE 770B / 49B，1M | 是 | 当前最新旗舰，[详情](./Hy4-preview.md) |

> 注：2025 年底腾讯将 Hunyuan 品牌对外简称为 HY；Hy3/Hy4 采用"preview 先行、正式版跟进"策略——Hy3 已于 2026-07-06 转正为正式版，Hy4 目前仍为 preview。

## 多模态 / 其他变体（时间线，部分开源）
- 2024-05 混元 DiT 文生图模型开源（业内首个中文原生开源文生图）
- 2024-12-03 HunyuanVideo 开源（13B 文生视频）
- 2025-01-21 Hunyuan3D 2.0（文本/图像生成 3D）
- 2025-03-06 HunyuanVideo-I2V（图生视频）
- 2025-04-23 Hunyuan3D-2.5
- 2025-06-27 Hunyuan-A13B（见上表）
- 2025-07-08 Hunyuan3D-PolyGen；2025-07-26 HunyuanWorld 1.0（3D 世界模型）
- 2025-09-01 Hunyuan-MT-7B / MT-Chimera-7B（翻译）
- 2025-09-28 HunyuanImage 3.0（80B MoE 自回归文生图）
- 2025-11 HunyuanOCR（1B）；2025-11-21 HunyuanVideo 1.5（8.3B，消费级可跑）
- 2026-04 Hy-Role-Latest（角色扮演）、Hy Vision 2.0（视觉理解）、HY Image 3.0 Plus、Hy ASR 3.0 preview
- 2026-05 Hy-MT2 系列（1.8B / 7B / 30B-A3B，33 语种，Apache 2.0）

## 重点 model 文档
- [Hunyuan-Large](./Hunyuan-Large.md)
- [Hunyuan-Turbo-S](./Hunyuan-Turbo-S.md)
- [Hunyuan-T1](./Hunyuan-T1.md)
- [Hy3](./Hy3.md)
- [Hy4-preview](./Hy4-preview.md)
