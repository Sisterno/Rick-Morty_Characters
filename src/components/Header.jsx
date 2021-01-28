import React, { useState} from 'react';
import { useContexHook } from "./ContextHook";

const Header = () => {
    const [[DarkMode, setDarkMode]]= useContexHook();

    const HandleClick =()=>{
        setDarkMode(!DarkMode);
    }
    return ( 
        <>
            <div className="Header">
                <h1 className="">Rick and Morty, characters</h1>
                <button type='button' onClick={HandleClick}>DarkMode {DarkMode? 'Dark Mode':'Light Mode'}</button>
            </div>
        </>
     );
}
 
export default Header;