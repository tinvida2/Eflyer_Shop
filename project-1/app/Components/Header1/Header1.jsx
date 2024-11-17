"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./Header1.module.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowLeftRotate, faCartArrowDown, faCartShopping, faSearch, faShop, faShoppingBasket, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header1() {
  const slogans = ["GET STARTED WITH YOUR FAVORITE SHOPPING", "BEST PRODUCTS AT BEST PRICES", "EXPLORE AMAZING DEALS"];
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      setAnimate(false);
    }, 500); // matches animation duration
  };

  const handlePrevious = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentSlogan((prev) => (prev - 1 + slogans.length) % slogans.length);
      setAnimate(false);
    }, 500);
  };

  return (
    <div>
      <div className={styles.header1}>
      <div className={styles.navigationSection}>
        <nav className={styles.navigation}>
          <ul className={styles.lst}>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Gift Ideas</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.logoSection}>
        <img src="/images/footer-logo.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.contentMenu}>
        <div className={styles.toggleSection}>
          <img src="/images/toggle-icon.png" alt="toggle" className={styles.toggle} />
        </div>
        <div className={styles.dropdownSection}>
          <button className={styles.dropdown}>All Category &#x25BC;</button>
        </div>
        <div className={styles.searchSection}>
          <div className={styles.inputSection}>
            <input type="text" className={styles.input1} name="textInput" placeholder="Search this blog..."></input>
          </div>
          <div className={styles.SearchIconSection}>
            <img src="/images/search-icon.png" alt="search" className={styles.searchIcon}/>
          </div>
        </div>
        <div className={styles.userSettings}>
        <div className={styles.languageSection}>
          <a href="#" className={styles.language}><img className={styles.ukFlag} src="/images/uk-flag.png" alt="ukFlag" />English &#x2193;</a>
        </div>
        <div className={styles.userInfo}>
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faCartShopping}/> Cart</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a></li>
          </ul>
        </div>
        </div>
      </div>
        <div className={styles.sloganSection}>
          <div className={styles.arrowSection}>
            <div className={styles.arrowLeft} onClick={handlePrevious}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <h1 className={`${styles.slogan} ${animate ? styles.fade : ''}`}>
              {slogans[currentSlogan]}
            </h1>
            <div className={styles.arrowRight} onClick={handleNext}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <Link href="/Products/Products.jsx" passHref>
            <button className={styles.purchase}>BUY NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

