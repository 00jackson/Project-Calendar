import React, { useState } from 'react';
import './FAQ.css';

const FaqSection = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleAnswer1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAnswer2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleAnswer3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleAnswer4 = () => {
        setIsOpen4(!isOpen4);
    };

    return (
        <section className="faq-section">
            <h2 className="section-tagline">Relevant stuff, bla bla 📣</h2>
            <h1 className="section-highlight">Frequently asked questions</h1>
            <div className="faq-item">
                <div className="faq-question1" onClick={toggleAnswer1}>
                    <span>Can I cancel my subscription?</span>
                    {/* Dropdown icon or arrow here */}
                    <div className="icon-e5c6"></div>
                </div>
                <div className={`faq-answer ${isOpen1 ? 'open' : ''}`}>
                    You can cancel your plan whenever you’d like...
                </div>

                <div className="faq-question2" onClick={toggleAnswer2}>
                    <span>What happens when my trial ends?</span>
                    <div className="icon-e5c6"></div>
                </div>
                <div className={`faq-answer ${isOpen2 ? 'open' : ''}`}>
                    When your trial period ends, your account will automatically be downgraded...
                </div>

                <div className="faq-question3" onClick={toggleAnswer3}>
                    <span>What payment methods do you offer?</span>
                    <div className="icon-e5c6"></div>
                </div>
                <div className={`faq-answer ${isOpen3 ? 'open' : ''}`}>
                    We aim to provide a seamless experience for our customers...
                </div>

                <div className="faq-question4" onClick={toggleAnswer4}>
                    <span>What is your refund policy?</span>
                    <div className="icon-e5c6"></div>
                </div>
                <div className={`faq-answer ${isOpen4 ? 'open' : ''}`}>
                    Our refund policy is designed with customer satisfaction in mind...
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
