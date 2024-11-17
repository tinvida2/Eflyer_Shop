import React from 'react'
import styles from "./Header2.module.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowLeftRotate, faCartArrowDown, faCartShopping, faSearch, faShop, faShoppingBasket, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header2() {
  return (
    <div className={styles.header2}>
        {/* Tansacmeli */}
        <div className={styles.fashionSection}>
          <div className={styles.fashionSectionTitle}>
            <h1>Man & Woman Fashion</h1>
          </div>
          <div className={styles.clothesSection}>
            <div className={styles.cloth1}>
              <h3>Man T-Shirt</h3>
              <p>Price 14.99$</p>
              <img src="/images/tshirt-img.png" alt="yellow-shirt" className={styles.yellowShirt} />
              <div className={styles.btnMenu1}>
                <button className={styles.buyNow1}>Buy Now</button>
                <button className={styles.seeMore1}>See More</button>
              </div>
            </div>
            <div className={styles.cloth2}>
              <h3>Man Shirt</h3>
              <p>Price 29.99$</p>
              <img src="/images/dress-shirt-img.png" alt="blue-shirt" className={styles.blueShirt} />
              <div className={styles.btnMenu2}>
                <button className={styles.buyNow2}>Buy Now</button>
                <button className={styles.seeMore2}>See More</button>
              </div>
            </div>
            <div className={styles.cloth3}>
              <h3>Woman's Dress</h3>
              <p>Price 9.99$</p>
              <img src="/images/women-clothes-img.png" alt="red-dress" className={styles.redDress} />
              <div className={styles.btnMenu3}>
                <button className={styles.buyNow3}>Buy Now</button>
                <button className={styles.seeMore3}>See More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowSection1}>
          <div className={styles.leftArrow1}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className={styles.rightArrow1}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
        {/* Eleqtronika */}
        <div className={styles.gadgetsSection}>
          <div className={styles.electronicsTitle}>
            <h1>Electronics</h1>
          </div>
          <div className={styles.electronicsSection}>
            <div className={styles.electronic1}>
              <h3>Laptop</h3>
              <p>Start Price 249.99$</p>
              <img src="/images/laptop-img.png" alt="laptop" className={styles.laptopPhoto} />
              <div className={styles.btnMenu4}>
                <button className={styles.buyNow4}>Buy Now</button>
                <button className={styles.seeMore4}>See More</button>
              </div>
            </div>
            <div className={styles.electronic2}>
              <h3>Mobile</h3>
              <p>Start Price 99.99$</p>
              <img src="/images/mobile-img.png" alt="mobile" className={styles.mobilePhoto} />
              <div className={styles.btnMenu5}>
                <button className={styles.buyNow5}>Buy Now</button>
                <button className={styles.seeMore5}>See More</button>
              </div>
            </div>
            <div className={styles.electronic3}>
              <h3>Computers</h3>
              <p>Price 499.99$</p>
              <img src="/images/computer-img.png" alt="computer" className={styles.computerPhoto} />
              <div className={styles.btnMenu6}>
                <button className={styles.buyNow6}>Buy Now</button>
                <button className={styles.seeMore6}>See More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowSection2}>
          <div className={styles.leftArrow2}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className={styles.rightArrow2}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
        {/* Samkaulebi */}
        <div className={styles.jewelSection}>
          <div className={styles.jewelTitle}>
            <h1>Jewelry Accessories</h1>
          </div>
          <div className={styles.jewelrySection}>
            <div className={styles.jewel1}>
              <h3>Jumkas</h3>
              <p>Start Price 99.99$</p>
              <img src="/images/jhumka-img.png" alt="jumka" className={styles.jumkaPhoto} />
              <div className={styles.btnMenu7}>
                <button className={styles.buyNow7}>Buy Now</button>
                <button className={styles.seeMore7}>See More</button>
              </div>
            </div>
            <div className={styles.jewel2}>
              <h3>Necklaces</h3>
              <p>Start Price 99.99$</p>
              <img src="/images/neklesh-img.png" alt="necklace" className={styles.necklacePhoto} />
              <div className={styles.btnMenu8}>
                <button className={styles.buyNow8}>Buy Now</button>
                <button className={styles.seeMore8}>See More</button>
              </div>
            </div>
            <div className={styles.jewel3}>
              <h3>Kangan</h3>
              <p>Start Price 99.99$</p>
              <img src="/images/kangan-img.png" alt="kangan" className={styles.kanganPhoto} />
              <div className={styles.btnMenu9}>
                <button className={styles.buyNow9}>Buy Now</button>
                <button className={styles.seeMore9}>See More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowSection3}>
          <div className={styles.leftArrow3}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className={styles.rightArrow3}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
      </div>
)
}
