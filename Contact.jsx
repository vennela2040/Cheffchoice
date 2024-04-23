import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Contact.css'; // Import your CSS file for Contact styles

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_79behoc', 'template_74dzw6n', form.current, '1KIdCfqQ4W-r5xUy-')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <section className="contact">
            <div className="content">
                <h2 className="--text-center">Share your recipe with CHEFF'S CHOICE</h2>
                <p>CHEFF'S CHOICE is looking for new recipes and wants to feature yours on CHEFF'S CHOICE</p>
            </div>

            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Our Address</h3>
                            <p>RGUKT Basar</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Send your message</h3>
                            <p>cheffschoice26@gmail.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Call us on</h3>
                            <p>987-654-3210</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactForm">
                <form ref={form} onSubmit={sendEmail} className="--form-control">
                    <div className="inputBox">
                        <input className="input" type="text" placeholder="Recipe Title" name="user_name" required />
                    </div>
                    <div className="inputBox">
                        <input className="input" type="text" placeholder="Ingredients" name="user_email" required />
                    </div>
                    <div className="inputBox">
                        <textarea className="textarea" name="message" placeholder="Procedure" cols="30" rows="10"></textarea>
                    </div>
                    <div className="inputBox">
                        <button type="submit" className="button">Submit Recipe</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
