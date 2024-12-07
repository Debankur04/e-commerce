import React from 'react';
import styles from '../CSS/Checkout.module.css';

const Form = () => {
  return (
    <div className='w-screen h-[80vh] flex justify-center items-center'>
      <div className={styles.container}>
        <div className={styles.card + ' ' + styles.cart}>
          <label className={styles.title}>CHECKOUT</label>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div>
                <span>SHIPPING</span>
                <p>221B Baker Street, W1U 8ED</p>
                <p>London, United Kingdom</p>
              </div>
              <hr id='horizontal'/>
              <div>
                <span>PAYMENT METHOD</span>
                <p>Visa</p>
                <p>**** **** **** 4243</p>
              </div>
              <hr />
              <div className={styles.promo}>
                <span>HAVE A PROMO CODE?</span>
                <form className={styles.form}>
                  <input type="text" placeholder="Enter a Promo Code" className={styles.input_field} />
                  <button>Apply</button>
                </form>
              </div>
              <hr />
              <div className={styles.payments}>
                <span>PAYMENT</span>
                <div className={styles.details}>
                  <span>Subtotal:</span>
                  <span>$240.00</span>
                  <span>Shipping:</span>
                  <span>$10.00</span>
                  <span>Tax:</span>
                  <span>$30.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card + ' ' + styles.checkout}>
          <div className={styles.footer}>
            <label className={styles.price}>$280.40</label>
            <button className={styles.promo +''+ styles.form +''+ styles.button}>Checkout</button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Form;
