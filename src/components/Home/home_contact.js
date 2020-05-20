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
                    <div className={"contact_content_wrap"}>
                        <div className={"contact__content__wrap__headline"}>
                            <h2 className={"title"}>Contact us</h2>
                            <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                        </div>
                        <form className={"contact__content__wrap__form"}>
                            <div className={"personalData"}>
                                <label className={"name"}>Your Name
                                    <input type={"text"} name={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"John"}/>
                                </label>
                                <label className={"email"}>Your e-mail
                                    <input type={"email"} name={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"john.doe@gmail.com"}/>
                                </label>
                            </div>
                            <label className={"msg"}>Your message to us.
                                <textarea name={"msg"} value={msg} onChange={e => setMsg(e.target.value)} placeholder={"Lorem ipsum dolor sit amet," +
                                "consectetur adipisicing elit. Aliquid atque aut, blanditiis commodi" +
                                "cumque error ipsam iusto labore libero nam necessitatibus nulla" +
                                " officia praesentium quaerat, quam unde veniam vitae voluptas!"}/>
                            </label>
                            <button type={"submit"} className={"sendFormBtn"}>Send</button>
                        </form>
                    </div>
                </div>
                <div className={"contact__content__icons"}>
                    <i className="fab fa-facebook-square"/>
                    <i className="fab fa-instagram-square"/>
                </div>
            </section>
        </>
    )
};