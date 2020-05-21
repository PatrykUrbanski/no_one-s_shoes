import React from 'react';

export const Login = () => {
    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>Log in</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <form className={"form"}>
                        <label>
                            <input type={"email"} value={"email"}/>
                        </label>
                        <label>
                            <input type={"password"} value={"password"}/>
                        </label>
                    </form>
                </div>
            </section>
        </>
    )
}
