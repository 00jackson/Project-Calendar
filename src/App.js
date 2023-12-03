import React from 'react';
import './App.css';
import FAQ from './components/FAQ';
import FeaturesSection from './components/features';
import Header from './components/header';
import PricingPlans from './components/pricing';
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="tagline">An other way to manage time️ 🕐</h2>
          <h1 className="main-highlight">Your new favorite calendar 🗓️ app</h1>
          <p className="app-description">
            Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
          </p>
          <div className="cta-buttons">
            <button className="btn-get-started">Get started, it's free</button>
            <p className="trial-info">Free 14 days trial, no credit card needed</p>
            <div className="reviews">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI3IiByPSI0Ii8+PHBhdGggZD0iTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODciLz48cGF0aCBkPSJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1Ii8+PC9zdmc+" alt="People Logo" className="people-logo" />
              <p className="reviews-text">⭐️⭐️⭐️⭐️⭐️</p>
              <p className="ratings">5.0</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <PricingPlans />
      <FAQ />

    </div>
  );
};

export default App;
