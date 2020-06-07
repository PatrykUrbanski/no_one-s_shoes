import React, {createContext, useState} from "react";

export const LoginContext = createContext({});
export const LoginContextProvider = (props) => {
    const [location, setLocation] = useState("");

    return (
        <>
            <LoginContext.Provider value={{location, setLocation}}>
                {props.children}
            </LoginContext.Provider>
        </>
    )
};
