---
厂商: Stability AI
地区: 国际
总部: 英国 伦敦
成立: 2019（2022 年 SD 发布后成名）
定位: 开放权重生成媒体（图像/视频/音频）；2024 后重心转向企业级创意生产平台
开源/闭源: 开放权重为主（Stability AI Community License；低于营收门槛可商用）
模型系列: Stable Diffusion（图像）、Stable Video（视频）、Stable Audio（音频）、Stable Image / Brand Studio（产品）
数据来源: stability.ai 官方新闻、Wikidata(Stable Diffusion)、Grokipedia、digital-humans.org、Wikiwand
状态: 已完善（含 2026-05-20 Stable Audio 3.0）
---

# Stability AI

Stability AI 凭 Stable Diffusion 把文生图从实验室带到了消费级显卡上，直接催生了 LoRA / ControlNet / Civitai 这一整代微调生态。它的历史也是一部"开放权重与社区契约"的教科书——两次因改训练数据与架构而被社区反弹。

## 版本演进表

### Stable Diffusion（图像）

| 版本 | 发布 | 参数 / 架构 | 备注 |
|---|---|---|---|
| SD 1.1–1.4 | 2022-08 | 约 983M，UNet + CLIP，512×512 | 由 CompVis（LMU 慕尼黑）发布，无 1.0 |
| **SD 1.5** | 2022-10 | 983M | RunwayML 发布，从 1.2 权重初始化；**至今仍是社区微调生态的底座** |
| SD 2.0 | 2022-11-24 | 重新训练，换 OpenCLIP | 数据重新过滤，社区评价下滑 |
| SD 2.1 | 2022-12-07 | 从 2.0 初始化 | 支持 768×768 |
| **SDXL 1.0** | 2023-07-26 | 3.5B，双文本编码器，1024×1024 | 真正的代际跃升，重建开放前沿 |
| SDXL Turbo | 2023-11 | 对抗蒸馏，单步生成 | 牺牲质量换近实时 |
| **SD 3** | 2024-02-22 预览 / 2024-06 开放 | Medium 2B，MMDiT 架构 | 换掉 UNet，初期人体解剖质量差，官方公开认栽 |
| **SD 3.5** | 2024-10-22/23 | Large 8.1B / Large Turbo / Medium 2.5B（10-29） | MMDiT-X + QK Normalization，回归正轨，[详情](./Stable-Diffusion-3.5.md) |

### 视频 / 音频

| 模型 | 发布 | 说明 |
|---|---|---|
| Stable Video Diffusion | 2023-11-21 | 开源，14–25 帧短片，最高 576×1024 |
| Stable Audio 1.0 | 2023-09 | 最长 47 秒音乐生成 |
| Stable Audio 2.0 | 2024-04-03 | 3 分钟曲目，支持音频到音频与风格迁移 |
| **Stable Audio 3.0** | **2026-05-20** | 开放权重，**完全授权数据**训练，定位为音频社区的基础 |

### 产品

| 产品 | 发布 | 说明 |
|---|---|---|
| DreamStudio | 2023 | 创意专业人员的生成应用 |
| Stability AI Membership | 2023-12-14 | 分层商业授权 |
| **Brand Studio** | **2026-04-08** | 端到端企业创意生产平台，由品牌资产驱动 |

## 关键里程碑

- 2022-08-22 **SD 1.4 发布**，与 LMU 慕尼黑 CompVis 合作，让文生图首次在消费级 GPU 上可用。
- 2023-07-26 **SDXL 1.0**，修复了 2.x 的口碑崩塌，成为微调社区的新底座。
- 2024-06 **SD 3** 换用 MMDiT 架构，初期质量翻车；官方声明"未完全达到我们自己与社区的期望"，选择重做而非快速修补。
- 2024-10 **SD 3.5** 回归，三个变体沿用至今（2026）。
- 2026-05-20 **Stable Audio 3.0**，强调"完全授权数据"——对版权敏感的音频商用是关键。

## 重点 model 文档

- [Stable Diffusion 3.5](./Stable-Diffusion-3.5.md)

## 备注

- **两次"翻车"的教训**：SD 2.0 与 SD 3 都因为更换训练数据与文本编码器/架构，破坏了与用户之间的隐性契约——基准好看但社区不买账。这是开放权重模型特有的风险：用户手上有一代的实际使用习惯。
- **SD 1.5 的长尾**：尽管已迭代到 3.5，Civitai 上大量社区模型仍是 1.5 微调版，因为工具链太深。判断"最新 ≠ 最常用"。
- **许可**：SD 3.5 全系为 Stability AI Community License，在营收门槛以下可免费商用；超出需商业授权。
- 与 EA（游戏工具）、UMG（音乐创作）有合作；James Cameron 为董事会成员。
