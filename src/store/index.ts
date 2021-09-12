import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import charactersReducer from "./characters";


const rootReducer = combineReducers({
  characters: charactersReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const getCharactersSelector = (state: RootState) => state.characters.characters;
export const getCurrentPageSelector = (state: RootState) => state.characters.currentPage;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;