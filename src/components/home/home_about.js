import React from 'react';
import {Element} from 'react-scroll'

export const HomeAbout = () => {
    return (
        <>
            <Element name="about" />
            <section className={"about"}>
                <div className={"about__text"}>
                    <div className={"about__text__content container"}>
                        <h2 className={"title"}>About us</h2>
                        <img alt="decoration" className={"decoration"} src="../../assets/Decoration.svg" />
                        <p className={"info"}>Lorem ipsum dolor sit tis dolorem eos, exercitationem fugit harum inventore iste, laboriosam mollitia nam odio officiis quae quia quo reprehenderit vero voluptate.</p>
                        <img alt="signature" className={"signature"} src="../../assets/Signature.svg" />
                    </div>
                </div>
                <img alt="people" className={"about__img"} src="../../assets/People.jpg" />
            </section>
        </>
    )
};
