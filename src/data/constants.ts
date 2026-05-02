// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export const PROFILE = {
  name: 'Prathmesh Dawkar',
  shortName: 'Prathmesh',
  alias: 'Prathmesh',
  title: 'Full-Stack & Mobile Developer',
  email: 'dawkharprathmesh99@gmail.com',
  phone: '+917972807017',
  website: 'github.com/Prathmesh125',
  blogHost: '',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Prathmesh125',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prathmeshdawkar/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/prathmesh_125?igsh=MWxyNnh3MzBlMmo4bA==',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:dawkharprathmesh99@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
