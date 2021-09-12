import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { CharacterType, RootStateCharacters, CharactersFullInfo, CharacterInfo } from '../types';

// Action types
const SET_CHARACTERS = "SET_CHARACTERS";
const SET_PAGES_INFO = "SET_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


// Action creators
export const setCharacters = (characters: CharacterType[]) => ({ type: SET_CHARACTERS, payload: characters });
export const setPageInfo = (pageInfo: CharacterInfo) => ({ type: SET_PAGES_INFO, payload: pageInfo });
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, payload: currentPage });


export const fetchCharacters = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  currentPage: number
) => {
  return (dispatch: Dispatch) => {
    setIsLoading(true);
    axios.get<CharactersFullInfo>(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(response => {
        const result = response.data
        dispatch(setCharacters(result.results));
        dispatch(setPageInfo(result.info));
        setIsLoading(false);
        console.log(result.info)
      })
  }
};

const initialState: RootStateCharacters = {
  characters: [],
  pageInfo: {
    count: 671,
    pages: 34,
    next: "" || null,
    prev: "" || null
  },
  currentPage: 1,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    case SET_PAGES_INFO:
      return {
        ...state,
        pageInfo: action.payload
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;