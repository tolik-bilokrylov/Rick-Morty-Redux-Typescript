import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../store/characters";
import { RootState } from "../../store/index";
import { CharacterType } from "../../types";
import { CharacterCard } from "./CharacterCard";
import { PaginationCharacters } from "./CharactersPagination";
import { Loader } from "../Loader/Loader";
import "./CharactersList.scss";


export const CharactersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const characters = useSelector((state: RootState) => state.characters.characters);
  const currentPage = useSelector((state: RootState) => state.characters.currentPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters(setIsLoading, currentPage));
  }, [dispatch, currentPage]);

  // const filtredPost = useMemo(() => {
  //   let postsCopy = [...posts];
  //   if (postsCopy.length > 0 && activeUserId) {
  //     postsCopy = postsCopy.filter((post) => post.userId === activeUserId);
  //   }

  //   return postsCopy;
  // }, [posts, activeUserId]);

  return (
    <div className="field">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="character">
          {characters.map((character: CharacterType) => (
            <CharacterCard
              character={character}
              key={character.id}
            />
          ))}
        </div>
      )}
      <div className="footer">
        <PaginationCharacters />
      </div>
    </div>
  );
};