---
title: 'Diffusion Policy: Visuomotor Policy Learning via Action Diffusion'
titleZh: 'Diffusion Policy：通过动作扩散进行视觉运动策略学习'
authors:
  - Cheng Chi
  - Zhenjia Xu
  - Siyuan Feng
  - Eric Cousineau
  - Yilun Du
  - Benjamin Burchfiel
  - Russ Tedrake
  - Shuran Song
year: 2023
venue: 'arXiv preprint'
type: 'Preprint'
doi: null
arxiv: 'https://arxiv.org/abs/2303.04137'
pdf: 'https://arxiv.org/pdf/2303.04137'
abstract: 'The paper represents a visuomotor policy as a conditional denoising diffusion process and studies how the formulation handles multimodal actions, high-dimensional control, and training stability.'
abstractZh: '论文将视觉运动策略表示为条件去噪扩散过程，并研究其对多模态动作、高维控制与训练稳定性的处理方式。'
keywords:
  - robot learning
  - diffusion policy
  - visuomotor control
  - action prediction
bibtex: |
  @article{chi2023diffusion,
    title   = {Diffusion Policy: Visuomotor Policy Learning via Action Diffusion},
    author  = {Chi, Cheng and Xu, Zhenjia and Feng, Siyuan and Cousineau, Eric and Du, Yilun and Burchfiel, Benjamin and Tedrake, Russ and Song, Shuran},
    journal = {arXiv preprint arXiv:2303.04137},
    year    = {2023},
    url     = {https://arxiv.org/abs/2303.04137}
  }
featured: true
sample: true
---

> **Starter reading record.** This public preprint is included as a traceable example for the robotics reading list. It is not a personal publication.

## Reading focus

The paper is a useful entry point for asking why a generative policy class can be helpful when several actions are plausible for the same observation. A careful reading should separate the model formulation from the control loop and from the benchmark protocol used to support the paper's conclusions.

## Questions for a deeper note

- How does the action horizon interact with receding-horizon control?
- Which data properties make multimodality important?
- Which baselines and tasks are needed to support each comparison?
- What changes when the policy leaves the benchmark distribution?
