import React, {useState} from 'react';

export const Home_Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");



    return (
        <>
            <section className={"contact"}>
                <img className={"contact__bg"} src="../../assets/Background-Contact-Form.jpg" alt="bgContact"/>
                <div className={"contact__content container"}>
                    <div className={"contact__content__headline"}>
                        <h2 className={"title"}>Contact us</h2>
                        <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    </div>
                    <form className={"contact__content__form"}>
                        <div className={"name"}>
                            <label>
                                <input type={"text"} name={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"John"}/>
                            </label>
                            <label>
                                <input type={"email"} name={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"john.doe@gmail.com"}/>
                            </label>
                        </div>
                        <label>
                            <textarea name={"msg"} value={msg} onChange={e => setMsg(e.target.value)} placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                            " Aliquid atque aut, blanditiis commodi cumque error ipsam iusto labore libero " +
                            "nam necessitatibus nulla officia praesentium quaerat, quam unde veniam vitae voluptas!"}/>
                        </label>
                    </form>
                </div>
            </section>
        </>
    )
}