---
厂商: MiniMax
系列: MiniMax
模型: MiniMax-M3
首个发布时间: 2026-06-01
最新版本: MiniMax-M3
参数量/架构: MoE，MSA（Modified Sparse Attention）架构，1M 上下文
开源/闭源: 开放权重（modified MIT / Apache 2.0）
数据来源: MiniMax 官方、benched.ai、aiwiki
---

# MiniMax-M3

## 基本信息
- 发布时间：2026-06-01
- 类型：通用前沿基础模型（编程 / Agent / 专业工作）
- 定位：当前旗舰，原生多模态（图像 + 视频理解）

## 关键参数
- 架构：MSA（Modified Sparse Attention，改进稀疏注意力）
- 上下文：原生 1M token
- 效率：相比上一代，每 token 计算降低 20×、prefill 提速 9×、解码提速 15.6×
- 能力：编程、Agent 工作流、专业工作；原生多模态图像与视频理解
- 许可：开放权重

## 性能（公司报告，部分未独立验证）
- SWE-Bench Pro：59.0%（公司报告值，截至撰写未独立验证）

## 备注
- M3 是 M2.x 代际后的旗舰升级，承接 M2.5（2026-02，SWE-Bench Verified 80.2%）与 M2.7（2026-03 自进化 Agent）。
- 延续 MiniMax 自 MiniMax-01 起的开源权重路线（modified MIT / Apache 2.0）。
- 取代早期 abab 闭源家族，成为主线。
