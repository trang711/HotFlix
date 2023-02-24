import React from "react";
import "./Foot.scss";

export default function Foot() {
  return (
    <div className="foot">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <a href="#" class="footer__logo">
                <img src="https://hotflix.volkovdesign.com/main/img/logo.svg" alt="" />
              </a>

              <span class="footer__copyright">
                © HOTFLIX, 2019—2021
                <br /> Create by
                <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank"> Dmitry Volkov</a>
              </span>

              <nav class="footer__nav">
                <a href="about.html">About Us</a>
                <a href="contacts.html">Contacts</a>
                <a href="privacy.html">Privacy policy</a>
              </nav>

              <button class="footer__back" type="button">
                <ion-icon name="arrow-up"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}