import React, { useState, createContext, useContext,useEffect } from "react";
import Light from "./Light.module.css";
import Dark from "./Dark.module.css";

const Contexto = createContext();

export function ContextHooks({ children }) {
  const [DarkMode, setDarkMode] = useState(false);
  const [Styles, setStyles] = useState(Light);
  useEffect(() => {
    if(DarkMode){
      setStyles(Dark)
    }else{
      setStyles(Light)
    }
  }, [DarkMode]);
  return (
    <Contexto.Provider value={[[DarkMode, setDarkMode]]}>
      <div className={Styles.ContainerPri}>{children}</div>
    </Contexto.Provider>
  );
}

export function useContexHook() {
  return useContext(Contexto);
}
