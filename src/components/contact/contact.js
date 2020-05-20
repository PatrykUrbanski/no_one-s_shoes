import React, {useState} from 'react';

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [nameErrMsg, setNameErrMsg] = useState(false);
    const [msgErrMsg, setMsgErrMsg] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState(false);




    const handleSubmit = (e) => {
        e.preventDefault();

        name.length < 1 || name.indexOf(" ") !== -1 ? setNameErrMsg(true) : setNameErrMsg(false);
        msg.length < 120 ? setMsgErrMsg(true) : setMsgErrMsg(false);
        email.length < 5 ? setEmailErrMsg(true) : setEmailErrMsg(false);


    };


    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

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
                        <form onSubmit={e => handleSubmit(e)} className={"contact__content__wrap__form"}>
                            <div className={"personalData"}>
                                <label className={"name"}>Your Name
                                    <input type={"text"} name={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"John"}/>
                                    <span className={`errorMsg ${nameErrMsg && "active"}`}>Name is incorrect</span>
                                </label>
                                <label className={"email"}>Your e-mail
                                    <input type={"email"} name={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"john.doe@gmail.com"}/>
                                    <span className={`errorMsg ${emailErrMsg && "active"}`}>Email is incorrect</span>
                                </label>
                            </div>
                            <label className={"msg"}>Your message to us.
                                <textarea name={"msg"} value={msg} onChange={e => setMsg(e.target.value)} placeholder={"Lorem ipsum dolor sit amet," +
                                "consectetur adipisicing elit. Aliquid atque aut, blanditiis commodi" +
                                "cumque error ipsam iusto labore libero nam necessitatibus nulla" +
                                " officia praesentium quaerat, quam unde veniam vitae voluptas!"}/>
                                <span className={`errorMsg ${msgErrMsg && "active"}`}>The message must be at least 120 characters.</span>
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