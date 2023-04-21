import React from 'react';
import s from './CustomerItemMobile.module.scss';

export const CustomerItemMobile = ({ customer }) => {
    return (
        <>
            <div className={s.customer__item_mobile}>
                <div className={s.item__mobile}>Customer Name: <span>{customer.name}</span></div>
                <div className={s.item__mobile}>Company: <span>{customer.company}</span></div>
                <div className={s.item__mobile}>Phone Number: <span>{customer.phone}</span></div>
                <div className={s.item__mobile}>Email: <span>{customer.email}</span></div>
                <div className={s.item__mobile}>Country: <span>{customer.country}</span></div>
                <div>
                    <div className={s.status__mobile}>Status: </div>
                    <div className={customer.status === "Inactive" ? `${s.item__inactive}` : `${s.item__active}`}><span>{customer.status}</span></div>
                </div>
            </div>
        </>
    )
}
