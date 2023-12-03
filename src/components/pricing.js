import React, { useState } from 'react';
import './pricing.css';

const PricingPlans = () => {
    const [subscriptionType, setSubscriptionType] = useState('monthly');
    const handleSubscriptionChange = () => {
        if (subscriptionType === 'monthly') {
            setSubscriptionType('annually');
        } else {
            setSubscriptionType('monthly');
        }
    };


    return (
        <section className="pricing-plans">
            <h2 className="section-tagline">Pricing and plans 💰</h2>
            <h1 className="section-highlight">Find the best plan for your needs</h1>

            <div className="price-toggle">
                <input type="radio" id="monthly" name="subscription" checked={subscriptionType === 'monthly'} onChange={handleSubscriptionChange} />
                <input type="radio" id="annually" name="subscription" checked={subscriptionType === 'annually'} onChange={handleSubscriptionChange} />
                <div className="switch">
                    <label htmlFor="monthly">Monthly</label>
                    <span></span>
                    <label htmlFor="annually">Annually</label>
                </div>
            </div>

            <div className="pricing-cards">
                {/* Free */}
                {subscriptionType === 'monthly' ? (
                    <div className="pricing-card1">
                        <h2>Free</h2>
                        <p className="price-info">
                            <span className="price">$0</span> /mo
                        </p>
                        <p>Free forever</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">No credit card needed</p>
                        <p className="best-deal">For Students</p>
                        <ul className="included-features">
                            What's included:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>
                    </div>
                ) : (
                    <div className="pricing-card1">
                     
                        <h2>Free</h2>
                        <p className="price-info">
                            <span className="price">$0</span> /mo
                        </p>
                        <p>Free forever</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">No credit card needed</p>
                        <p className="best-deal">For Students</p>
                        <ul className="included-features">
                            What's included:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>
                    </div>
                )}

                {/* Starter */}
                {subscriptionType === 'monthly' ? (
                    <div className="pricing-card2">

                        <h2>Starter</h2>
                        <p className="price-info">
                            <span className="price">$19</span> /mo
                        </p>
                        <p>Billed Monthly</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">7 days free trial no credit card needed</p>
                        <p className="best-deal">Best deal 🔥</p>
                        <ul className="included-features">
                            All Free features, plus:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>


                    </div>
                ) : (
                    <div className="pricing-card2">

                        <h2>Starter</h2>
                        <p className="price-info">
                            <span className="price">$15</span> /mo
                        </p>
                        <p>Billed $180 yearly</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">7 days free trial no credit card needed</p>
                        <p className="best-deal">Best deal 🔥</p>
                        <ul className="included-features">
                            All Free features, plus:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>


                    </div>
                )}

                {/* Pro */}
                {subscriptionType === 'monthly' ? (
                    <div className="pricing-card3">

                        <h2>Pro</h2>
                        <p className="price-info">
                            <span className="price">$49</span> /mo
                        </p>
                        <p>Billed Monthly</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">7 days free trial no credit card needed</p>
                        <p className="best-deal">For Professionals</p>
                        <ul className="included-features">
                            All Starter features, plus:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>

                    </div>
                ) : (
                    <div className="pricing-card3">

                        <h2>Pro</h2>
                        <p className="price-info">
                            <span className="price">$45</span> /mo
                        </p>
                        <p>Billed $540 yearly</p>
                        <button className="get-started-btn">Get started</button>
                        <p className="details">7 days free trial no credit card needed</p>
                        <p className="best-deal">For Professionals</p>
                        <ul className="included-features">
                            All Starter features, plus:
                            <li>✔︎ A cool feature</li>
                            <li>✔︎ A basic feature</li>
                            <li>✔︎ A top feature with limitations</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PricingPlans;
