import React, {useEffect, useState} from 'react';

export const Who_We_Help_Pagination = ({totalElems, paginate}) => {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalElems.length / 3); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (e, number) => {
        e.preventDefault();
        paginate(number)
    };

    return (
        <nav>
            {pageNumbers.map(number => (
                <a onClick={e => handleClick(e, number)} href={"#"}>{number}</a>
            ))}
        </nav>
    )

};