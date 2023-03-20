import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactSection = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const sendMessage = (e: React.MouseEvent) => {
        e.preventDefault();
        const payload = {
            from_name: name,
            email_id: email,
            message,
        };
        const serviceID: any = process.env.REACT_APP_SER_ID;
        const templateID: any = process.env.REACT_APP_TEMP_ID;
        const publicKey: any = process.env.REACT_APP_PUB_ID;
        emailjs.send(serviceID, templateID, payload, publicKey).then(
            (result) => {
                alert('Email Sent Successfully..');
                setName('');
                setEmail('');
                setMessage('');
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section id="contact">
            <div className="contact container">
                <div className="contact-info">
                    <h2 className="section-title">Get In Touch.</h2>
                    <p className="section-paragraph">
                        Have an exciting project where we can work together? Or
                        just want to say hi, do send me a message and let's
                        chat.
                    </p>
                </div>
                <div className="contact-forms">
                    <div className="input-box">
                        <input
                            type="text"
                            id="full_name"
                            name="name"
                            autoComplete="off"
                            spellCheck="false"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Name:</label>
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            id="email_id"
                            name="email"
                            autoComplete="off"
                            spellCheck="false"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email:</label>
                    </div>

                    <div className="input-box">
                        <textarea
                            name="message"
                            id="message"
                            autoComplete="off"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label>Message:</label>
                    </div>

                    <div className="btn">
                        <button
                            className="btn-submit"
                            onClick={(e) => sendMessage(e)}
                        >
                            Send Message
                        </button>
                    </div>
                    <div className="contact-info">
                        <h3
                            style={{
                                margin: '20px 0 0 0',
                                fontFamily: "'Kalam', cursive",
                                opacity: 0.5,
                                color: '#108bc9',
                            }}
                        >
                            &lt;/body &gt;
                        </h3>
                        <h3
                            style={{
                                margin: '10px 0 0 0',
                                fontFamily: "'Kalam', cursive",
                                opacity: 0.5,
                                color: '#108bc9',
                            }}
                        >
                            &lt;/html &gt;
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
