import React, { useState, useEffect, useReducer, useMemo } from "react";
import axios from "axios";
import Light from "./Light.module.css";
import Dark from "./Dark.module.css";
import { useContexHook } from "../ContextHook";

const IntitalState = {
  Favorites: [],
};

const Funct_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        Favorites: [...state.Favorites, action.payLoad],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  const [Styles, setStyles] = useState(Light);
  const [[DarkMode, setDarkMode]] = useContexHook();
  const [Favorites, favorite_dispach] = useReducer(Funct_reducer, IntitalState);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    async function GetData() {
      let RMcharacters = (
        await axios.get("https://rickandmortyapi.com/api/character")
      ).data.results;
      setCharacters(RMcharacters);
      return RMcharacters;
    }
    GetData();
  }, []);
  useEffect(() => {
    if (DarkMode) {
      setStyles(Dark);
    } else {
      setStyles(Light);
    }
  }, [DarkMode]);

  const handleClick_favorite = (Character) => {
    favorite_dispach({ type: "ADD_TO_FAVORITES", payLoad: Character });
  };

  const HandleSearch = (event) => {
    setSearch(event.target.value);
  };

  const FilteredUsers = useMemo(() => {
    return Characters.filter((user) => {
      return user.name.toLowerCase().includes(Search.toLowerCase());
    });
  }, [Characters, Search]);

  return (
    <>
      <div>
        <input type="text" value={Search} onChange={HandleSearch} />
      </div>
      <div>
        {Favorites.Favorites.map((Favorite) => {
          return <li key={Favorite.id}>{Favorite.name}</li>;
        })}
      </div>
      <div className={Styles.Characters}>
        {FilteredUsers.map((Character) => {
          return (
            <div className={Styles.Carta} key={Character.id}>
              <img src={Character["image"]} alt="" className={Styles.Foto} />
              <div className={Styles.data}>
                <h3 className={Styles.Nombre}>{Character["name"]}</h3>
                <span>{Character["species"]}</span>
                <span>{Character["gender"]}</span>
                <span>Origin :{Character["origin"]["name"]}</span>
                <span>Location: {Character["location"]["name"]}</span>
                <button
                  type={"button"}
                  onClick={() => {
                    handleClick_favorite(Character);
                  }}
                >
                  Agregar a favoritos
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
