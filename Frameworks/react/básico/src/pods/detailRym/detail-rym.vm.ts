import { CharacterGender, CharacterPlace, CharacterStatus } from "./detail-rym.api-model";

export interface MemberRyMDetailEntity {
	id: string;
	name: string;
	login: string;
	company: string;
	bio: string;
	status: CharacterStatus;
	species: string;
	type: string;
	gender: CharacterGender;
	origin: CharacterPlace;
	location: CharacterPlace;
	image: string;
}

export const createDefaultMemberRyMDetail = (): MemberRyMDetailEntity => ({
	id: "",
	name: "",
	login: "",
	company: "",
	bio: "",
	status: "unknown",
	species: "",
	type: "",
	gender: "unknown",
	origin: { name: "", url: "" },
	location: { name: "", url: "" },
	image: "",
});
