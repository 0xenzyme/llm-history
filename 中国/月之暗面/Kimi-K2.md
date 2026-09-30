---
厂商: 月之暗面（Moonshot AI）
系列: Kimi
模型: Kimi K2（含 K2 主线全系：K2 / 0905 / K2 Thinking / K2.5 / K2.6 / K2.7 / K2.8）
首个发布时间: 2025-07-11
最新版本: Kimi K2.8 Preview（2026-09-11）
参数量/架构: MoE，总参 1T，激活 32B；15.5T tokens 预训练；modified MIT（K2.8 Preview 例外，闭源）
开源/闭源: 开放权重（modified MIT License，超大规模产品需署名）；K2.8 Preview 为闭源
数据来源: Moonshot AI、Hugging Face、Wikipedia、Wikiwand、aireleasetracker、jademond
---

# Kimi K2

## 基本信息
- 厂商：月之暗面（Moonshot AI）
- 类型：大语言模型（MoE），通用 + Agent / 编码
- 开源/闭源：开放权重（modified MIT License）

## 发布时间线（K2 主线系列）
- 2025-07-11：Kimi K2 发布（1T 总参 / 32B 激活，MoE，15.5T tokens 训练；Hugging Face 当天下载量第一）
- 2025-09-05：Kimi-K2-Instruct-0905（上下文 128K → 256K，Agent 编码提升）
- 2025-11-06：Kimi K2 Thinking（推理 / 编码版，约 $4.6M 训练，256K，原生 INT4 量化，可自主执行 200–300 次工具调用）
- 2026-01-27：Kimi K2.5（多模态，MoonViT-3D 400M 视觉编码器，Agent Swarm）
- 2026-04-21：Kimi K2.6（支持 1000+ 并行 agents）
- 2026-06-12：Kimi K2.7 Code（代码专项）
- 2026-09-11：Kimi K2.8 Preview（**全量上线 Kimi Code / Kimi Work**；参数未披露，**闭源**，不再开放权重；支持文本+图片+视频多模态输入，1M 上下文；thinking effort 支持 low/high/max 三档；综合性能接近旗舰 K3，定位介于开源 K2.7 Code 与旗舰 K3 之间的中端模型）

## 关键参数
- 总参数量：1T（1 万亿），激活 32B
- 预训练：15.5T tokens
- 上下文：128K 起步，0905 起 256K
- 许可：modified MIT（产品月活超 1 亿或月收入超 2000 万美元需署名）

## 备注
- K2 是月之暗面最重要的开源主力模型，奠定"开放权重 + Agent 能力"路线。
- K2 Thinking 在 HLE（44.9%）、BrowseComp（60.2%）、SWE-Bench Verified（71.3%）上超过 GPT-5 与 Claude Sonnet 4.5（据月之暗面）。
- K2 系列的"小版本快速迭代 + Agent 能力"成为月之暗面区别于 DeepSeek V 系列的特色。
- **重要转折：K2.8 Preview 是 K2 主线首个闭源预览**，不再开放权重，仅通过 Moonshot 自有 API/App 提供；参数也未披露。这标志着月之暗面在 K2 续代上从"全开源"转向"核心预览闭源 + 旗舰 K3 开源"的双轨策略。
