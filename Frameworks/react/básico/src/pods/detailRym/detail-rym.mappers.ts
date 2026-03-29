import { CharacterApiModel } from "./detail-rym.api-model";
import { MemberRyMDetailEntity } from "./detail-rym.vm";

export const mapCharacterFromApiToVm = (data: CharacterApiModel): MemberRyMDetailEntity => ({
    id: String(data.id),
    login: data.name ?? '',
    name: data.name ?? '',
    company: data.species ?? '',
    bio: data.status ?? '',
    status: data.status,
    species: data.species,
    type: data.type,
    gender: data.gender,
    origin: data.origin,
    location: data.location,
    image: data.image
});