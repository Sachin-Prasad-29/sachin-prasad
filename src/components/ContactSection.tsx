import React from 'react';

const ContactSection = () => {
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
                        />
                        <label>Email:</label>
                    </div>

                    <div className="input-box">
                        <textarea
                            name="message"
                            id="message"
                            autoComplete="off"
                            required
                        ></textarea>
                        <label>Message:</label>
                    </div>

                    <div className="btn">
                        <button
                            className="btn-submit"
                            //   onClick="(function(){

                            //     console.log('Hellow')
                            //     var params = {
                            //         from_name: document.getElementById('full_name').value,
                            //         email_id: document.getElementById('email_id').value,
                            //         message: document.getElementById('message').value,
                            //     };
                            //     emailjs.send('service_kpxk7ih', 'template_wov0i27', params).then(function (res) {
                            //         alert('Successfully sent message!');
                            //     });
                            // })()"
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
