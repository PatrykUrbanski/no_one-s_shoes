import React, {createContext, useState} from "react";

export const FormContext = createContext({});



export const FormContextProvider = (props) => {
    const [formData, setFormData] = useState({
        items: [],
        bags: 0,
        location: "",
        organizationName: "",
        helpGroups: [],
        specificContact: {
            street: "",
            city: "",
            postCode: "",
            phone: "",
            day: "",
            time: "",
            msg: ""
        }
    });

    return (
        <>
            <FormContext.Provider value={{formData, setFormData}}>
                {props.children}
            </FormContext.Provider>
        </>
    )
}