---
厂商: 智谱 AI（Zhipu AI / Z.ai）
地区: 中国
总部: 中国北京
成立: 2019 年（孵化自清华大学知识工程实验室 KEG，唐杰等创立）
定位: 通用基座大模型 + 开源权重 + 智能体（Agentic）
开源/闭源: GLM 主线自 2025-04（GLM-4-0414）起全面 MIT 开源；早期闭源 API 与开源并存
模型系列: GLM（语言基座/对话/推理主线）、CogView（文生图）、CogVideo（文生视频）、CodeGeeX（代码）、GLM-Image、AutoGLM（智能体）
数据来源: 智谱官方 zhipuai.cn / z.ai、百度百科、aiwiki、glm5.ai、CogVideoX 百度百科、科技媒体
状态: 已完善（含 2026 最新 GLM-5.3 代际）
---

# 智谱 AI（Zhipu AI / Z.ai）

## 基本信息
- 公司：智谱 AI（Zhipu AI），消费级/开发者品牌站 Z.ai
- 成立：2019 年，孵化自清华大学知识工程实验室（KEG）
- 核心人物：唐杰（创立发起人、首席科学家）、张鹏（CEO）
- 定位：通用基座大模型 + 开源权重 + 智能体（Agentic Engineering）
- 2026-01-08 公司上市，上市当天宣布即将推出 GLM-5

## 语言模型主线（GLM 系列）
详见 [GLM/index.md](./GLM/index.md)。关键代际：
- ChatGLM-6B（2023-03-14）开源对话起点，全球下载千万
- GLM-4（2024-01-16）基座新时代，128K 上下文 + All Tools 智能体
- GLM-4.5（2025-07-28）开源 MoE 旗舰起点（355B）
- GLM-5（2026-02-11）当前旗舰（744B，AA 开源第一）
- GLM-5.2（2026-06-13）1M 上下文
- GLM-5.3（2026-08-14 发布 / 08-28 权重）Agentic coding + 网络安全

## 多模态与专项线
### CogView（文生图）
- CogView（2021）：早期文生图，MS COCO 评测超越 DALL·E
- CogView2（2022）：解决生成速度慢、清晰度低
- CogView4（2025-03-04）：首个支持中文文字生成的文生图开源模型
- GLM-Image（2026-01-14）：首个全华为昇腾训练的中文 SOTA 图像模型

### CogVideo（文生视频）
- CogVideo（2022-05）：首个开源大规模文生视频模型
- CogVideoX（2024-07-26 发布 / "清影"）：3D VAE + Expert Transformer
- CogVideoX 开源（2024-08-06 2B → 08-27 5B → 09 I2V → 11-08 v1.5）
- CogVideoX v1.5（2024-11-08）：10 秒 / 768P、I2V 任意尺寸

### CodeGeeX（代码）
- CodeGeeX（2022-09-30）：多语言代码生成，23 种语言，提出 HumanEval-X 基准

### AutoGLM / 智能体
- AutoGLM：自主规划、推理、执行的智能体模型

## 关键里程碑
- 2023-03 ChatGLM-6B 开源，奠定中文开源大模型生态
- 2024-01 GLM-4 发布，128K 上下文 + All Tools 智能体能力
- 2025-04 起 GLM 全面转向 MIT 开源（GLM-4-0414 系列）
- 2026-02 GLM-5 发布并开源，全程华为昇腾训练，AA 综合开源第一
- 2026-06 GLM-5.2 实现 1M 上下文，编程开源 SOTA

## 重点 model 文档
- [GLM-4](./GLM/GLM-4.md)
- [GLM-4.5](./GLM/GLM-4.5.md)
- [GLM-5](./GLM/GLM-5.md)

## 备注
- 智谱为"多系列"厂商：GLM（语言主线）建独立系列层；CogView / CogVideo / CodeGeeX 作为本页多模态小节，不单列系列层（控制文件量）。
- 架构特色：自回归空白填充（ABI）+ MoE（sigmoid gates、GQA、QK-norm、MTP、DSA 稀疏注意力）。
- 开源策略：从 GLM-4-0414（2025-04）起采用 MIT 许可，旗舰持续开源；GLM-5 全程华为昇腾训练，强调国产算力全栈自主。
