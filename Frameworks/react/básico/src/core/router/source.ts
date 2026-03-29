export const slug = {
  github: "github",
  rickAndMorty: "rick-and-morty",
} as const;

export type Slug = (typeof slug)[keyof typeof slug];
