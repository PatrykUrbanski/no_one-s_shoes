import React, {useState} from 'react';

export const LogOut = () => {
    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>You have successfully logged out! See you soon!</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <div className={"loginBtn out"}>
                        <a  href="#" className={"loginBtn__Elem checked"}>Home Page</a>
                    </div>
                </div>
            </section>
        </>
    )
};
