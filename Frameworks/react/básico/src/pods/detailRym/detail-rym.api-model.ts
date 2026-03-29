export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface CharacterPlace {
  name: string;
  url: string;
}

export interface CharacterApiModel {
  company: string;
  bio: string;
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterPlace;
  location: CharacterPlace;
  image: string;
}