---
厂商: Stability AI
系列: Stable Diffusion
模型: Stable Diffusion 3.5
首个发布时间: 2024-10-22/23
最新版本: SD 3.5 系列（Large / Large Turbo / Medium）
参数量/架构: MMDiT-X（含 Query-Key Normalization）；Large 8.1B、Medium 2.5B
开源/闭源: 开放权重（Stability AI Community License）
数据来源: stability.ai 官方新闻(2024-10-23)、Grokipedia、digital-humans.org、Wikidata
状态: 已完善（截至 2026 仍为生产主力）
---

# Stable Diffusion 3.5

## 一句话

SD 3 翻车后的"回正"之作：把 MMDiT 精修为 MMDiT-X 并加入 QK Normalization，重新赢回社区，也是截至 2026 年的生产主力。

## 发布时间线

- 2024-02-22：SD 3 早期预览公布。
- 2024-06：SD 3 Medium（2B）开放发布——初期人体解剖质量差，社区反弹；官方公开表示"未达到我们自己与社区的期望"，选择重做而非快速修补。
- **2024-10-22/23：SD 3.5 发布**，含 Large（8.1B）与 Large Turbo。
- 2024-10-29：SD 3.5 Medium（2.5B）发布。

## 三个变体

| 变体 | 参数 | 特点 | 显存 |
|---|---|---|---|
| **SD 3.5 Large** | 8.1B | 旗舰，MMDiT + 三个固定预训练文本编码器，原生 1 兆像素输出 | 较高 |
| **SD 3.5 Large Turbo** | 8.1B（蒸馏） | 约 4 步出图，以部分保真换速度 | 较高 |
| **SD 3.5 Medium** | 2.5B | MMDiT-X 架构，0.25–2 兆像素可变分辨率 | 约 9.9GB VRAM，消费级可跑 |

## 技术要点

- **MMDiT 取代 UNet**：用 transformer 骨干替代卷积 UNet，配合 flow matching 训练，文本遵循度优于单纯 classifier-free guidance。
- **MMDiT-X + QK Normalization**：3.5 相对 3 的关键改进，提升训练稳定性与微调易用性。
- 仍是**潜在空间扩散**：VAE 把 512×512 RGB（约 786K 数值）压缩到 64×64×4（约 16K 数值，约 48× 压缩），这是 SD 能在游戏显卡上跑的根本原因。

## 备注

- SD 3.5 是"社区契约修复"的产物：官方没有硬推 3.0，而是承认问题并重做——这在开放权重生态里是必要操作，因为用户会直接用脚投票退回 SD 1.5 / SDXL。
- 截至 2026 年，SD 3.5 三个变体仍是生产主力阵容，Stability 未再推出 SD 4。
- 许可为 Stability AI Community License：营收门槛以下商用与非商用均免费，超出需商业授权。
