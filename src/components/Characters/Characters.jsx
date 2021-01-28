import React, { useState, useEffect } from "react";
import axios from "axios";
import Light from "./Light.module.css";
import Dark from "./Dark.module.css";
import {useContexHook} from "../ContextHook";

const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  const [Styles, setStyles] = useState(Light);
  const [[DarkMode,setDarkMode]] = useContexHook();

  useEffect(() => {
    async function GetData(params) {
        let RMcharacters = (
            await axios.get("https://rickandmortyapi.com/api/character")
          ).data.results;
          setCharacters(RMcharacters);
    }
    GetData();
  }, []);
  useEffect(() => {
    if(DarkMode){
      setStyles(Dark)
    }else{
      setStyles(Light)
    }
  }, [DarkMode]);

  return (
    <div className={Styles.Characters}>
      {Characters.map((Character, id) => {
        return (
          <div className={Styles.Carta} key={"RMcart" + id}>
            <img src={Character["image"]} alt="" className={Styles.Foto} />
            <div className={Styles.data}>
              <h3 className={Styles.Nombre}>{Character["name"]}</h3>
              <span>{Character["species"]}</span>
              <span>{Character["gender"]}</span>
              <span>Origin :{Character["origin"]["name"]}</span>
              <span>Location: {Character["location"]["name"]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Characters;
