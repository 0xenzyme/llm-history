---
厂商: 腾讯
系列: 混元
模型: Hunyuan-Large
首个发布时间: 2024-11-05
最新版本: Hunyuan-Large（开源三款：A52B-Pretrain / A52B-Instruct / A52B-FP8）
最新版本发布时间: 2024-11-05
参数量/架构: MoE，总参 389B，激活 52B，256K 上下文；共享专家 + 16 路由专家；GQA + CLA 压缩 KV Cache
开源/闭源: 开源（免费可商用，HuggingFace / GitHub）
数据来源: 腾讯官方 2024-11-05 公告、中国日报/中证网/证券时报报道、百度百科
---

# Hunyuan-Large

## 基本信息
- 厂商：腾讯
- 系列：混元（Hunyuan）
- 类型：大语言模型（MoE）
- 开源/闭源：开源（免费可商用）

## 发布时间线
- 开源发布：2024-11-05（与 Hunyuan3D-1.0 同步开源）

## 关键参数
- 总参数量：389B（3890 亿）
- 激活参数量：52B（520 亿）
- 上下文长度：256K
- 架构：Transformer + MoE；1 个共享专家 + 16 个路由专家；GQA + CLA 将 KV Cache 压缩至 MHA 的 5%
- 开源变体：Hunyuan-A52B-Pretrain、Hunyuan-A52B-Instruct、Hunyuan-A52B-FP8（量化）

## 评测（官方 / 第三方）
- MMLU 88.4（Instruct 89.9）、CMMLU 90.2、C-Eval 91.9、GSM8K 92.8、MATH 69.8、HumanEval 71.4
- 9 大维度领先 Llama 3.1、Mixtral 等开源模型

## 备注
- 发布时称"开源领域参数规模最大、效果最好的 MoE 模型"
- 长文能力（256K）已应用于腾讯元宝，支持一次处理最多 10 个文档
- 训练 / 推理基于腾讯自研 Angel 机器学习平台
