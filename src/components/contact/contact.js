import React, {useState} from 'react';
import {Element} from 'react-scroll'

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [nameErrMsg, setNameErrMsg] = useState(false);
    const [msgErrMsg, setMsgErrMsg] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [checked, setChecked] = useState(false);
    const resetForm = () => {
    setName("");
    setEmail("");
    setMsg("")
    };
    const nameValid = () => {
        if (name.length < 1 || name.indexOf(" ") !== -1) {
            setNameErrMsg(true)
        }else {
            setNameErrMsg(false);
        }
    };
    const msgValid = () => {
        if (msg.length < 120) {
            setMsgErrMsg(true)
        }else {
            setMsgErrMsg(false)
        }
    };
    const emailValid = () => {
        if (email.length < 5) {
            setEmailErrMsg(true)
        }else {
            setEmailErrMsg(false);
        }
    };
    const valid = () => {
        setChecked(false);
        nameValid();
        msgValid();
        emailValid();
        setChecked( true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        valid();
        if (!checked) {
            return null;
        } else {
            if (nameErrMsg || msgErrMsg || emailErrMsg) {
                return null;
            }
            setSuccessMsg(false);
            const newMsg = {
                name: name,
                email: email,
                message: msg
            };
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMsg),
            }).then(response => {
                response.json()
                    .then(data => {
                        data.status === "success" && setSuccessMsg(true)
                    })
            });
            resetForm();
        }
    };

    return (
        <>
            <Element name="contact"/>
            <section className={"contact"}>
                <div className={"contact__content container"}>
                    <div className={"contact__content__wrap"}>
                        <div className={"contact__content__wrap__headline"}>
                            <h2 className={"title"}>Contact us</h2>
                            <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                            <span className={`successMsg ${successMsg && "active"}`}>Message sent. We will contact your shortly.</span>
                        </div>
                        <form onSubmit={e => handleSubmit(e)} className={"contact__content__wrap__form"}>
                            <div className={"personalData"}>
                                <label className={"name"}>Your Name
                                    <input type={"text"} name={"name"} value={name}
                                               onChange={e => setName(e.target.value)} placeholder={"John"}/>
                                        <span className={`errorMsg ${nameErrMsg && "active"}`}>Name is incorrect</span>
                                </label>
                                <label className={"email"}>Your e-mail
                                    <input type={"email"} name={"email"} value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           placeholder={"john.doe@gmail.com"}/>
                                           <span className={`errorMsg ${emailErrMsg && "active"}`}>Email is incorrect</span>
                                </label>
                            </div>
                            <label className={"msg"}>Your message to us.
                                <textarea name={"msg"} value={msg} onChange={e => setMsg(e.target.value)}
                                              placeholder={"Lorem ipsum dolor sit amet," +
                                              "consectetur adipisicing elit. Aliquid atque aut, blanditiis commodi" +
                                              "cumque error ipsam iusto labore libero nam necessitatibus nulla" +
                                              " officia praesentium quaerat, quam unde veniam vitae voluptas!"}/>
                                              <span className={`errorMsg ${msgErrMsg && "active"}`}>The message must be at least 120 characters.</span>
                            </label>
                            <button type={"submit"} className={"sendFormBtn"} onClick={e => handleSubmit(e)}>Send
                            </button>
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
