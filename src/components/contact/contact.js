import React, {useEffect, useState} from 'react';
import {isElementOfType} from "react-dom/test-utils";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [nameErrMsg, setNameErrMsg] = useState(false);
    const [msgErrMsg, setMsgErrMsg] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState(false);

    const [successMsg, setSuccessMsg] = useState(false);

    const [checked, setChecked] = useState(false)

    const resetForm = () => {
    setName("");
    setEmail("");
    setMsg("")
    };


    const valid = () => {
        setChecked(false);
        name.length < 1 || name.indexOf(" ") !== -1 ? setNameErrMsg(true) : setNameErrMsg(false);
        msg.length < 120 ? setMsgErrMsg(true) : setMsgErrMsg(false);
        email.length < 5 ? setEmailErrMsg(true) : setEmailErrMsg(false);

        setChecked(true);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        valid();

        setSuccessMsg(false);

        if (!checked) {
            return null;
        } else {
            if (nameErrMsg || msgErrMsg || emailErrMsg) {
                return null;
            }
        }




        const newMsg = {
            name: name,
            email: email,
            message: msg
        };

        console.log("elo");

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newMsg),
        }).then(response => {
            response.json()
                .then(data => {
                    data.status === "success" && setSuccessMsg(true)
                })
        });


        resetForm();

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
                            <span className={`successMsg ${successMsg && "active"}`}>Message sent. We will contact your shortly.</span>
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
                            <button type={"submit"} className={"sendFormBtn"} onClick={e => handleSubmit(e)}>Send</button>
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