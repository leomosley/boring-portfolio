import { env } from "./env";

// Social Links
export const GITHUB_LINK = `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}`;
export const LINKEDIN_LINK = `https://www.linkedin.com/in/${env.NEXT_PUBLIC_LINKEDIN_USERNAME}/`;
export const TWITTER_LINK = `https://twitter.com/${env.NEXT_PUBLIC_TWITTER_HANDLE}`;

// AI Model
export const MODEL = "gemma-2-2b-it-q4f16_1-MLC";

// Work Experience
export const WORK = [
  {
    company: "ACME",
    link: "https://www.acme.com/",
    position: "Software Engineer",
    duration: "2025 - Present",
    description: "Did loads of really cool, important work that made a huge impact.",
  },
] as const;

export const INTRO = (
  <>
    Hi there, I&apos;m <b>{env.NEXT_PUBLIC_FIRST_NAME}</b>. I&apos;m a Software
    Engineer {"@ "}ACME.
  </>
);
