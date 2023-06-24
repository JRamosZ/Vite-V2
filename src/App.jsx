// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Buttons from "./components/Buttons";
import Card from "./components/Card";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <header className="header">
          <div className="leftSide">
            <h1>Vite</h1>
            <h2>Next Generation Frontend Tooling</h2>
            <p>
              Get ready for a development environment that can finally catch up
              with you.
            </p>
            <div className="buttonsContainer">
              <Buttons text="Get Started"></Buttons>
              <Buttons text="Why Vite" />
              <Buttons text="View on GitHub" />
            </div>
          </div>
          <div className="rightSide">
            <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
          </div>
        </header>
      </section>
      <section>
        <div className="cardsContainer">
          <Card
            emoji="💡"
            head="Instant Server Start"
            content="On demand file serving over native ESM, no bundling required!"
          />
          <Card
            emoji="⚡️"
            head="Lightning Fast HMR"
            content="Hot Module Replacement (HMR) that stays fast regardless of app size."
          />
          <Card
            emoji="🛠️"
            head="Rich Features"
            content="Out-of-the-box support for TypeScript, JSX, CSS and more."
          />
          <Card
            emoji="📦"
            head="Optimized Build"
            content="Pre-configured Rollup build with multi-page and library mode support."
          />
          <Card
            emoji="🔩"
            head="Universal Plugins"
            content="Rollup-superset plugin interface shared between dev and build."
          />
          <Card
            emoji="🔑"
            head="Fully Typed APIs"
            content="Flexible programmatic APIs with full TypeScript typing."
          />
        </div>
      </section>
    </>
  );
}
