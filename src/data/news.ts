export type NewsItem = {
  date: string;
  category: "Paper" | "Award" | "Talk" | "Lab";
  text: string;
};

export const news: NewsItem[] = [
  {
    date: "2026-06-18",
    category: "Paper",
    text: "\"Not All Prediction Targets Keep Training-Free Diffusion Guidance on the Manifold\" accepted to ECCV 2026.",
  },
  {
    date: "2026-05-04",
    category: "Paper",
    text: "\"Probing Intrinsic Bias: Internal Attention Feature Analysis for Social Bias Evaluation in Diffusion Models\" accepted to Neurocomputing.",
  },
  {
    date: "2026-03-01",
    category: "Lab",
    text: "ViViD Lab officially launches at SeoulTech. Welcome!",
  },
  {
    date: "2025-09-18",
    category: "Paper",
    text: "\"Temporal Smoothness-Aware Rate-Distortion Optimized 4D Gaussian Splatting\" accepted to NeurIPS 2025.",
  },
  {
    date: "2023-02-28",
    category: "Paper",
    text: "\"Exploring Discontinuity for Video Frame Interpolation\" accepted to CVPR 2023 (Highlight, top 10%).",
  },
];
