import React from 'react';

export const Home_About = () => {
    return (
        <>
            <section className={"about"}>
                <div className={"about__text"}>
                    <div className={"about__text__content"}>
                        <h2 className={"title"}>About us</h2>
                        <img className={"decoration"} src="../../assets/Decoration.svg"/>
                        <p className={"info"}>Lorem ipsum dolor sit tis dolorem eos, exercitationem fugit harum inventore iste, laboriosam mollitia nam odio officiis quae quia quo reprehenderit vero voluptate.</p>
                        <img className={"signature"} src="../../assets/Signature.svg"/>
                    </div>
                </div>
                <img className={"about__img"} src="../../assets/People.jpg"/>
            </section>
        </>
    )
};