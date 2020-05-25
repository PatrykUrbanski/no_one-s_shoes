import React, {useEffect, useState} from 'react';
import {foundations, locals, nonProfit} from "./structuresData";
import {Who_We_Help_Pagination} from "./who_we_help_pagination";
const uniqid = require('uniqid');

export const Who_We_Help_Structures = ({choosenStructure}) => {
    const [structure, setStructure] = useState(choosenStructure);
    const [currentPage, setCurrentPage] = useState(1);
    const [checkedNumber, setCheckedNumber] = useState(0);


    useEffect(() => {
        choosenStructure === "foundations" && setStructure(foundations);
        choosenStructure === "nonProfit" && setStructure(nonProfit);
        choosenStructure === "locals" && setStructure(locals);
        setCurrentPage(1);
        setCheckedNumber(0)
    }, [choosenStructure]);

    const indexOfLastEl = currentPage * 3;
    const indexOfFirstEl = indexOfLastEl - 3;
    const totalElems = Object.keys(structure);
    const currentElems = totalElems.slice(indexOfFirstEl, indexOfLastEl);

    const paginate = (number, index) => {
        setCurrentPage(number);
        setCheckedNumber(index)
    };

    return (
        <>
            <div className={"institution"}>
                <p className={"institution__text"}>{structure.s1.description}</p>
                {currentElems.map(key =>
                        <div key={uniqid()} className={"institution__content"}>
                            <p className={"name"}>{structure[key].structureName}</p>
                            <span className={"description"}>{structure[key].structureName_description}</span>
                            <span className={"items"}>{structure[key].items}</span>
                        </div>
                    )}
            </div>
            {(totalElems.length / 3) > 1 && <Who_We_Help_Pagination totalElems={totalElems} paginate={paginate} checkedNumber={checkedNumber}/>}
        </>
    )
};