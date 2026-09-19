import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  originName: character.origin.name,
  locationName: character.location.name,
  episodeCount: character.episode.length,
  bestSentence: character.bestSentence || '',
});

export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterVm
): Partial<apiModel.CharacterEntityApi> => ({
  bestSentence: character.bestSentence ?? '',
});
