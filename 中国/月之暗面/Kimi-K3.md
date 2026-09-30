---
厂商: 月之暗面（Moonshot AI）
系列: Kimi
模型: Kimi K3
首个发布时间: 2026-07-16（API / App 上线）；2026-07-27 权重开源
最新版本: Kimi K3
参数量/架构: MoE 2.8T 总 / 32B 激活；896 专家 / 16 激活；1M 上下文；KDA + AttnRes；原生视觉
开源/闭源: 开放权重（2026-07-27 开源，modified MIT）
数据来源: Moonshot AI 官方博客、科技日报、kimi.com、aireleasetracker、grigio、ima
---

# Kimi K3

## 基本信息
- 厂商：月之暗面（Moonshot AI）
- 类型：大语言模型（MoE），前沿智能 / Agent / 长程编码 / 知识工作
- 开源/闭源：开放权重（全球首个 3T 级开源模型）

## 发布时间线
- 2026-07-16：Kimi K3 发布（Kimi App / kimi.com / Kimi Work / Kimi Code / API 同步上线；默认最大思考力度）
- 2026-07-17：国内媒体广泛报道（科技日报等称"全球参数最大的开源模型"）
- 2026-07-19：因算力过载暂停 C 端新用户订阅
- 2026-07-27：完整模型权重开源（同步技术报告）

## 关键参数
- 总参数量：2.8T（2.8 万亿），激活约 32B
- 架构：MoE，896 个专家、每 token 激活 16 个；Stable LatentMoE 框架
- 注意力：Kimi Delta Attention（KDA）+ Attention Residuals（AttnRes），较 K2 扩展效率约 2.5×
- 上下文：1M tokens（官方口径）；注：有来源称开源权重版原生 256K，API/旗舰支持 1M
- 多模态：原生视觉理解（文本 + 图像 + 视频）
- 量化：MXFP4 权重、MXFP8 激活（SFT 起 QAT）

## 定位与成绩
- 发布时综合智能仅次于 Claude Fable 5、GPT-5.6 Sol 两款前沿闭源模型；Agentic Coding / 长程任务突出
- 被多家媒体称为"DeepSeek moment"
- 定价（API）：输入 $3.00 / 百万 tokens（缓存命中 $0.30），输出 $15.00 / 百万 tokens

## 备注
- K3 不是"preview 先行"，而是发布即旗舰、随后开源权重（与 Hy4 / V4 的 preview 策略不同）。
- 规模进入"2–3 万亿参数 + 稀疏激活"阶段，与 DeepSeek V4（1.6T）、腾讯 Hy4（770B）形成代际对比。
