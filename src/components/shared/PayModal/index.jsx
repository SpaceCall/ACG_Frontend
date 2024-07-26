import React from 'react'
import styles from './payModal.module.scss';
import close_icon from '../../../assets/icons/close_icon.svg'
import mastercard from '../../../assets/icons/mastercard.svg'
import visa from '../../../assets/icons/visa.svg'
import paypal from '../../../assets/icons/paypal.svg'

export default function PayModal({ setIsPayModalOpen }) {
    const onClose = () => setIsPayModalOpen(false)

    return (
        <div className={styles.isPayModal}>
            <div className={styles.isPayModal__wrapper}>
                <div className={styles.isPayModal__content}>
                    <div className={styles.isPayModal__header}>
                        <span className={styles.isPayModal__header__close} onClick={onClose}><img src={close_icon} alt="X" /></span>
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
                                <label htmlFor="mastercard">
                                    <input type="radio" name="paymentMethod" id="mastercard" />
                                    <img src={mastercard} alt="" />
                                </label>
                                <label htmlFor="visa">
                                    <input type="radio" name="paymentMethod" id="visa" />
                                    <img src={visa} alt="" />
                                </label>
                                <label htmlFor="paypal">
                                    <input type="radio" name="paymentMethod" id="paypal" />
                                    <img src={paypal} alt="" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.isPayModal__body}>

                    </div>
                </div>
            </div>
        </div>
    )
}
