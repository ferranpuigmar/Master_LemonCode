import { CharacterEntityApi } from '#common/models';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: CharacterEntityApi
): viewModel.CharacterCollectionItemVm => ({
  id: Number(character.id),
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  originName: character.origin.name,
});
