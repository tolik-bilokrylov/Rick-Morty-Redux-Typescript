export interface RootStateCharacters {
  characters: CharacterType[],
  pageInfo: CharacterInfo,
  currentPage: number,
};

export interface CharacterLocationType {
  name: string,
  url: string,
};

export interface CharacterType {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  location: CharacterLocationType,
  episode: string[],
  url: string,
  created: string;
};

export interface CharacterModalType {
  character: CharacterType,
  modalActive: boolean,
  setModalActive: any;
};

export interface CharacterInfo {
  count: number,
  pages: number,
  next: string | null;
  prev: string | null;
};
export interface CharactersFullInfo {
  info: CharacterInfo,
  results: CharacterType[];
}