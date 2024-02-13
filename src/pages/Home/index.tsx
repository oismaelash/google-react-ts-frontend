import React from "react";
import "./index.css";
import Button from "../../components/Button/index.tsx";
import Nav from "../../components/Nav/index.tsx";
import * as DATA from "../../utils/data.ts";
import { GOOGLE_LOGO_URL } from "../../utils/constants.ts";

export default function Home() {
  return (
    <div className="google-home">
      <header className="google-home-nav-top">
        <Nav links={DATA.NAV_TOP_RIGHT} />
      </header>

      <main className="google-home-content-center">
        <img
          src={GOOGLE_LOGO_URL}
          alt=""
        />
        <input type="text" />
        <div className="google-home-content--button">
          <Button title="Pesquisar Google" classNameType="button-gray" />
          <Button title="Estou com Sorte" classNameType="button-gray" />
        </div>
      </main>

      <footer className="google-home-footer">
        <div className="google-home-footer--location">
          <p>Brasil</p>
        </div>
        <div className="google-home-footer--nav-bottom">
          <Nav links={DATA.NAV_TOP_LEFT} />
          <Nav links={DATA.NAV_BOTTOM_RIGHT} />
        </div>
      </footer>
    </div>
  );
}
