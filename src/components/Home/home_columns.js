import React from 'react';

export const Home_Columns = () => {
    return (
        <>
            <section className={"columns"}>
                <img className={"columns__Bg"} alt="columnsBg" src="../../assets/columnsBg.png"/>
                <div className={"columns__content container"}>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>10</span>
                        <span className={"subtitle"}>Oddanych workos</span>
                        <span className={"text"}>Oddanych workos</span>
                    </div>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>10</span>
                        <span className={"subtitle"}>Oddanych workos</span>
                        <span className={"text"}>Oddanych workos</span>
                    </div>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>10</span>
                        <span className={"subtitle"}>Oddanych workos</span>
                        <span className={"text"}>Oddanych workos</span>
                    </div>
                </div>
            </section>
        </>
    )
}