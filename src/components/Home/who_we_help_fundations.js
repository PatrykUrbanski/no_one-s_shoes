import React, {useEffect, useState} from 'react';
import {foundations, locals, nonProfit} from "./structuresData";
const uniqid = require('uniqid');

export const Who_We_Help_Foundations = ({choosenStructure}) => {
    const [structure, setStructure] = useState(choosenStructure);


    useEffect(() => {
        choosenStructure === "foundations" && setStructure(foundations);
        choosenStructure === "nonProfit" && setStructure(nonProfit);
        choosenStructure === "locals" && setStructure(locals);
    }, [choosenStructure]);




    return (
        <>
            <div className={"institution"}>
                <p className={"institution__text"}>{structure.first.description}</p>
                {Object.keys(structure).map(key =>
                        <div id={uniqid()} className={"institution__content"}>
                            <p className={"name"}>{structure[key].structureName}</p>
                            <span className={"description"}>{structure[key].structureName_description}</span>
                            <span className={"items"}>{structure[key].items}</span>
                        </div>
                    )}
            </div>
        </>
    )
}