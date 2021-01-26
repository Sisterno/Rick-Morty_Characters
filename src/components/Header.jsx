import React, { useState, useEffect } from 'react';

const Header = () => {
    const [DarkMode, setDarkMode] = useState(false);

    const HandleClick =()=>{
        setDarkMode(!DarkMode);
    }
    return ( 
        <>
            <div className="Header">
                <h1 className="">ReactHooks</h1>
                <button type='button' onClick={()=>{setDarkMode(!DarkMode)}}>DarkMode {DarkMode? 'Dark Mode':'Light Mode'}</button>
            </div>
        </>
     );
}
 
export default Header;