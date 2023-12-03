import React from 'react';
import './features.css';

const FeaturesSection = () => {
    return (
        <section className="features-container">
            <div className="background-image"></div>
            <div className="features-content">
                <h2 className="section-tagline">Our main features 🦸🏼</h2>
                <h1 className="section-highlight">Discover your new superpowers</h1>
                <div className="feature-details">
                    <div className="feature-description1">
                        <h2 className="feature-heading">Seamless Scheduling</h2>
                        <p className="feature-subheading">Focus on what matters most for you ✨</p>
                        <p className="feature-info">
                            Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
                        </p>
                        <div className="testimony">
                            <div className="testimony-content">
                                <img src="https://media.istockphoto.com/id/1308075184/photo/young-business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=nW6JcAQCVekQ77ajRURVyb-W2tKCxR_Xp_wmGwvRa1U=" alt="" className="calendar-icon" />
                                <div className="testimony-text">
                                    <p className="testimony-quote">"I tested many calendar apps. This app is the best of all! It saves me hours of time."</p>
                                    <p className="testimony-author">Carla, Head of Finance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* zigzag layout */}
                    <div className="feature-description2">
                        <h2 className="feature-heading">Smart Reminders & Task</h2>
                        <p className="feature-subheading">Never miss an important deadline or event again ✨</p>
                        <p className="feature-info">
                            Never miss an important deadline again with our AI-driven notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
                        </p>
                        <div className="testimony">
                            <div className="testimony-content">
                                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8MHwwfHx8MA%3D%3D" alt="Calendar" className="calendar-icon" />
                                <div className="testimony-text">
                                    <p className="testimony-quote">"I love how user-friendly this app is! It's so easy to add events and set reminders!"</p>
                                    <p className="testimony-author">Adam, entrepreneur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-description3">
                        <h2 className="feature-heading">Seamless Scheduling</h2>
                        <p className="feature-subheading">Focus on what matters most for you ✨</p>
                        <p className="feature-info">
                            Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
                        </p>
                        <div className="testimony">
                            <div className="testimony-content">
                                <img src="https://plus.unsplash.com/premium_photo-1688822015890-62ee53d486d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHwwfDB8fHww" alt="Calendar" className="calendar-icon" />
                                <div className="testimony-text">
                                    <p className="testimony-quote">"I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need."</p>
                                    <p className="testimony-author">Annie, Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-description4">
                        <h2 className="feature-heading">Smart Reminders & Task</h2>
                        <p className="feature-subheading">Never miss an important deadline or event again ✨</p>
                        <p className="feature-info">
                            Never miss an important deadline again with our AI-driven notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
                        </p>
                        <div className="testimony">
                            <div className="testimony-content">
                                <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfDB8MHx8fDA%3D" alt="Calendar" className="calendar-icon" />
                                <div className="testimony-text">
                                    <p className="testimony-quote">"I've recommended this app to all my friends and colleagues! "</p>
                                    <p className="testimony-author">Karl, CTO of a cool startup</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
