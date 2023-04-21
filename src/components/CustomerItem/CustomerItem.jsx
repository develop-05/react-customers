import React from 'react';
import s from './CustomerItem.module.scss';

export const CustomerItem = ({ customer }) => {
    return (
        <>
            <div className={s.customer__item}>
                <div className={s.item__name}><span>{customer.name}</span></div>
                <div className={s.item__company}><span>{customer.company}</span></div>
                <div className={s.item__phone}><span>{customer.phone}</span></div>
                <div className={s.item__email}><span>{customer.email}</span></div>
                <div className={s.item__country}><span>{customer.country}</span></div>
                <div className={customer.status === "Inactive" ? `${s.item__inactive}` : `${s.item__active}`}><span>{customer.status}</span></div>
            </div>
        </>
    )
}
