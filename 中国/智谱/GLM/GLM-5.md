---
厂商: 智谱 AI
系列: GLM
模型: GLM-5（含 GLM-5-Turbo / 5.1 / 5.2 / 5.3）
首个发布时间: 2026-02-11
最新版本: GLM-5.3（2026-08-14 发布，08-28 权重）
参数量/架构: MoE 744B 总参 / 40B 激活（5.3-Flash 320B/18B），256 专家激活 8，78 层
开源/闭源: 开放权重（MIT）
数据来源: 智谱官方 z.ai / glm5.ai、百度百科、aiwiki、ai-tldr
---

# GLM-5

## 基本信息
- 厂商：智谱 AI（Z.ai）
- 发布时间：2026-02-11（发布），2026-02-12（开源上线 Hugging Face / ModelScope，MIT）
- 类型：通用基座大模型（语言 + 多模态 + 智能体）
- 定位：当前旗舰，"从 Vibe Coding 到 Agentic Engineering"

## 关键参数
- 总参：744B（7440 亿），激活：40B（约 44B）
- 架构：MoE，256 专家（激活 8），78 层，稀疏度 5.9%
- 注意力：DeepSeek 稀疏注意力（DSA），降低长上下文部署成本
- 预测：Multi-Token Prediction（MTP）
- 上下文：200K（GLM-5.2 起 1M）
- 预训练：28.5T tokens，全程华为昇腾硬件训练
- 许可：MIT 开放权重

## 性能（公开基准）
- SWE-bench Verified：77.8%（开源第一）
- MATH-500：91 / AIME 2026：92.7%
- GPQA-Diamond：68（部分来源 86）
- Terminal Bench 2.0：56.2%（开源 SOTA）
- Artificial Analysis：综合全球第四、开源第一
- 真实编程体感逼近 Claude Opus 4.5

## 发布时间线（GLM-5 代际）
- 2026-02-11：GLM-5 发布（744B MoE，200K，DSA，AA 开源第一）
- 2026-03-16：GLM-5-Turbo（面向 OpenClaw 智能体，200K，低价）
- 2026-04-08：GLM-5.1（长程 8 小时自主执行，SWE-Bench Pro SOTA）
- 2026-06-13：GLM-5.2（1M 上下文，62.1 SWE-bench Pro，编程开源第一）
- 2026-08-14 发布 / 08-28 权重：GLM-5.3（同 5.2 基座，Agentic coding + 网络安全）
- 2026-08-26：GLM-5.3-Flash（320B/18B，原生多模态 Flash 变体，[详情](./GLM-5.3-Flash.md)）

## 衍生变体
- [GLM-5.3-Flash](./GLM-5.3-Flash.md)：GLM-5.3 的轻量化、原生多模态、低成本变体（320B/18B，45 层，混合线性 + 稀疏注意力，100 万上下文，MIT），独立成文。

## 备注
- 匿名测试版 "Pony Alpha" 先在 OpenRouter 引发关注（单位编程任务成本仅 0.14 美元）。
- 完全国产算力训练（华为昇腾 + 摩尔线程 + 寒武纪 + 昆仑芯 + 沐曦 + 燧原 + 海光），"国产模型 + 国产算力"全栈自主。
- 摩根大通预测 2026-08 后或发布 GLM-5.5（万亿参数级），截至 2026-09 尚未发布。
