import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#nexus" },
  { label: "Projects", href: "#github-repos" },
  { label: "Methodology", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Neok1ra",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/Neok1ra",
    icon: FaGithub,
  },
  {
    href: "https://twitter.com/your-handle",
    icon: FaXTwitter,
  },
  {
    href: "https://linkedin.com/in/your-profile",
    icon: FaLinkedin,
  },
  {
    href: "https://discord.com/your-server",
    icon: FaDiscord,
  },
] as const;

export const VIDEO_LINKS = {
  feature1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc56aV03LYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  feature2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCclcn5JiTo8NUtBfpgkOmXZ2CT3DjMr19Yqlac",
  feature3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcbZvH6O7fXDrfMZ6S457EQsgoxTCIz1kjlnVd",
  feature4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcSrGHFCyiMbxBtTacUmFzn4dZpwVYNfvR6WLg",
  feature5:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc1qT68sSEu6tgkCBNP3FH45AUe70hrbTaxYDm",
  hero1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc5wEKtxLYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  hero2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcLjP2Y7QEQuN5THDwzeBx4OvmaFZjP6ysCKk3",
  hero3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpmpmzmuj1IHWSEokgRuN2hMcUpBq0xQery3i",
  hero4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpB0GHsouj1IHWSEokgRuN2hMcUpBq0xQery3",
};
