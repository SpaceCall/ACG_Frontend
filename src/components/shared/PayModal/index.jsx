import React, { useState } from 'react'
import styles from './payModal.module.scss';
import close_icon from '../../../assets/icons/close_icon.svg'
import paymentMethods from './payment';
import NotifyPopup from './NotifyPopup';

export default function PayModal() {
    const [sendIsActive, setSendIsActive] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const activeToggle = () => setSendIsActive(!sendIsActive)
    const onClose = () => setIsPopupOpen(false)

    return (
        <div className={styles.isPayModal}>
            <div className={styles.isPayModal__wrapper}>
                <div className={styles.isPayModal__content}>
                    <div className={styles.isPayModal__header}>
                        <a href='/' className={styles.isPayModal__header__close}><img src={close_icon} alt="X" /></a>
                        <div className={styles.isPayModal__header__payment}>
                            <div className={styles.isPayModal__header__payment__data}>
                                <h3>Payment data</h3>
                                <p>Access “Name” to Name</p>
                                <div className={styles.isPayModal__header__payment__data__toPay}>
                                    <span>To pay:</span>
                                    <p>0000$</p>
                                </div>
                            </div>
                            <div className={styles.isPayModal__header__payment__duration}>
                                <p>Subscription duration:</p>
                                <p>month from the start of payment (till 26.07 incl.)</p>
                            </div>
                            <div className={styles.isPayModal__header__payment__cards}>
                                {paymentMethods.map((paymentMethod) => (
                                    <label htmlFor={paymentMethod.id} key={paymentMethod.id}>
                                        <input type="radio" name="paymentMethod" id={paymentMethod.id} />
                                        <img src={paymentMethod.image} alt="" />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.isPayModal__or}><p>or</p></div>
                    <div className={styles.isPayModal__body}>
                        <div className={styles.isPayModal__body__cardNumber}>
                            <h3>Card number</h3>
                            <input type="text" placeholder='0000 0000 0000 0000' />
                        </div>
                        <div className={styles.isPayModal__body__cardInfo}>
                            <div className={styles.isPayModal__body__cardInfo__expiration}>
                                <h3>Expiration</h3>
                                <input type="text" placeholder='MM/YY' />
                            </div>
                            <div className={styles.isPayModal__body__cardInfo__cvv}>
                                <h3>CVV</h3>
                                <input type="text" placeholder='***' />
                            </div>
                        </div>
                        <div className={styles.isPayModal__body__send}>
                            <div onClick={activeToggle} className={`${styles.isPayModal__body__send__indicator} ${sendIsActive ? styles.active : styles.nonActive}`}>
                                <div className={styles.circle}></div>
                            </div>
                            <p>Send receipt to email</p>
                        </div>
                        <div className={styles.isPayModal__body__sendText}>
                            <p>By clicking the «Pay» button, you confirm that you are familiar with the list of information about the service and accept the terms of the <a href="">Terms and conditionss</a></p>
                        </div>
                        <div className={styles.isPayModal__body__btn} onClick={() => setIsPopupOpen(true)}>
                            <span>PAY 0000$</span>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <NotifyPopup styles={styles} onClose={onClose} />}
        </div>
    )
}
