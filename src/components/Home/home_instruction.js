import React from 'react';

export const Home_instruction = () => {

    return (
        <>
            <section className={"instruction"}>
                <div className={"instruction__title"}>
                    <h2 className={"instruction__title__text"}>It's so simple!</h2>
                    <img src="../../assets/Decoration.svg"/>
                </div>
                <div className={"instruction__steps"}>
                    <div className={"instruction__steps__content container"}>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-1.svg" alt={"icon"}/>
                            <span className={"box__name"}>Wybierz rzeczy</span>
                            <span className={"box__text"}>asdadasdasdadadasdasdas</span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-2.svg" alt={"icon"}/>
                            <span className={"box__name"}>Wybierz rzeczy</span>
                            <span className={"box__text"}>asdadasdasdadadasdasdas</span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-3.svg" alt={"icon"}/>
                            <span className={"box__name"}>Wybierz rzeczy</span>
                            <span className={"box__text"}>asdadasdasdadadasdasdas</span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-4.svg" alt={"icon"}/>
                            <span className={"box__name"}>Wybierz rzeczy</span>
                            <span className={"box__text"}>asdadasdasdadadasdasdas</span>
                        </div>
                    </div>
                </div>
                <div className={"instruction__btn"}>
                    <a className={"instruction__btn__elem"} href={"#"}>Oddaj rzeczy</a>
                </div>
            </section>
        </>
    )
};