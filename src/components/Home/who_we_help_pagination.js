import React, {useEffect, useState} from 'react';
var uniqid = require('uniqid');

export const Who_We_Help_Pagination = ({totalElems, paginate, checkedNumber}) => {
    const pageNumbers = [];



    for (let i = 1; i <= Math.ceil(totalElems.length / 3); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (e, number, index) => {
        e.preventDefault();
        paginate(number, index);

    };

    return (
        <nav className={"pagin"}>
            {pageNumbers.map((number, index) => (
                <a className={`pagin__number ${index === checkedNumber && "check"}`} key={uniqid()} onClick={e => handleClick(e, number, index)} href={"#"}>{number}</a>
            ))}
        </nav>
    )

};