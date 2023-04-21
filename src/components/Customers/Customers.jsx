import React, { useState, useEffect } from 'react';
import { CustomerItem } from '../CustomerItem/CustomerItem';
import { CustomerItemMobile } from '../CustomerItemMobile/CustomerItemMobile';
import { customers } from '../../config/customers_api';

import s from './Customers.module.scss';

export const Customers = () => {
    const [search, setSearch] = useState('');

    return (
        <div className={s.customers}>
            <h2 className={s.customer__title}>Hello Evano 👋🏼,</h2>

            <div className={s.customers__wrapper}>
                <div className={s.customer__top}>
                    <div>
                        <h2 className={s.customer__subtitle}>All Customers</h2>
                        <div className={s.customer__subtext}><span>Active Members</span></div>
                    </div>
                    <div className={s.customer__search}>
                        <label className={s.search__icon} htmlFor="search_customer">
                            <img src="/images/svg/search_icon.svg" alt="search icon" />
                        </label>
                        <input
                            id="search_customer"
                            className={s.customer__search_input}
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className={s.customer__settings}>
                    <div className={s.customer__name}>Customer Name</div>
                    <div className={s.customer__company}>Company</div>
                    <div className={s.customer__company}>Phone Number</div>
                    <div className={s.customer__email}>Email</div>
                    <div className={s.customer__country}>Country</div>
                    <div className={s.customer__status}>Status</div>
                </div>

                <div className={s.main__contnet}>
                    <div className={s.customer__list}>
                        {customers.filter((customer) => {
                            return search.toLowerCase() === '' ? customer : customer.name.toLowerCase().includes(search.toLowerCase())
                            || customer.company.toLowerCase().includes(search.toLowerCase()) || customer.phone.toLowerCase().includes(search.toLowerCase())
                            || customer.email.toLowerCase().includes(search.toLowerCase()) || customer.country.toLowerCase().includes(search.toLowerCase())
                            || customer.status.toLowerCase().includes(search.toLowerCase())
                        }).map(customer => <CustomerItem customer={customer} key={customer.id} />)}
                    </div>

                    <div className={s.customer__list_mobile}>
                        {customers.filter((customer) => {
                            return search.toLowerCase() === '' ? customer : customer.name.toLowerCase().includes(search.toLowerCase())
                            || customer.company.toLowerCase().includes(search.toLowerCase()) || customer.phone.toLowerCase().includes(search.toLowerCase())
                            || customer.email.toLowerCase().includes(search.toLowerCase()) || customer.country.toLowerCase().includes(search.toLowerCase())
                            || customer.status.toLowerCase().includes(search.toLowerCase())
                        }).map(customer => <CustomerItemMobile customer={customer} key={customer.id} />)}
                    </div>

                    <div className={s.customer__bottom}>
                        <div className={s.bottom__text}><span>Showing data 1 to 8 of  256K entries</span></div>
                        <div className={s.pagination}>
                            <div className={s.prev}></div>
                            <div className={`${s.page__active} ${s.page}`}>1</div>
                            <div className={s.page}>2</div>
                            <div className={s.page}>3</div>
                            <div className={s.page}>4</div>

                            <div className={s.rest}>...</div>
                            <div className={s.page}>40</div>

                            <div className={s.next}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
