import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <div>
        {/* <Project /> */}
        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <img src="./images/footer-logo.png" alt="footer-logo" className={styles.footerLogo1} />
          </div>
          <div className={styles.contact}>
            <input type="text" name="textInput" placeholder="Your email" />
            <button className={styles.subscribe}>SUBSCRIBE</button>
          </div>
          <div className={styles.footerNav}>
            <ul>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Gift Ideas</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Today's Deals</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
          <div className={styles.hotlineSection}>
            <p>Help Line Number : <a href="#">+1 1800 1200 1200</a></p>
          </div>
          <div className="rights">
            <p>© 2020 All Rights Reserved.</p>
          </div>
        </div>
    </div>
  )
}
