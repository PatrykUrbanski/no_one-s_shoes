import React from 'react';

export const Home_Columns = () => {
    return (
        <>
            <section className={"columns"}>
                <img className={"columns__Bg"} alt="columnsBg" src="../../assets/columnsBg.png"/>
                <div className={"columns__content container"}>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>17</span>
                        <span className={"subtitle"}>Organisations</span>
                        <span className={"text"}>We work with right now!</span>
                    </div>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>240</span>
                        <span className={"subtitle"}>Bags</span>
                        <span className={"text"}>We already collected</span>
                    </div>
                    <div className={"columns__content__box"}>
                        <span className={"number"}>40</span>
                        <span className={"subtitle"}>tons</span>
                        <span className={"text"}>Of clothes donated.</span>
                    </div>
                </div>
            </section>
        </>
    )
};
