import React, {useState} from 'react';
import s from './Navigation.module.scss';

export const Navigation = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className={s.burger__menu}>
                <div className={s.burger__wrapper} onClick={() => setIsVisible(!isVisible)}>
                    <button className={isVisible ? `${s.burger__btn_active}` : `${s.burger__btn}`}></button>
                </div>
            </div>

            <div className={isVisible ? `${s.navigation}` : `${s.navigation__none}`}>
                <div className={s.navigation__wrapper}>

                    <div className={s.logo}>
                        <img src="/images/svg/logo.svg" alt="logo" />
                        <span className={s.dashboard__title}>Dashboard</span>
                        <span className={s.dashboard__v01}>v.01</span>
                    </div>

                    <div className={s.list}>
                        <li className={s.list__item}>
                            <div className={s.item__first}>
                                <img src="/images/svg/dashboard_icon.svg" alt="item icon" />
                                <span>Dashboard</span>
                            </div>
                        </li>
                        <li className={s.list__item}>
                            <div className={s.item__first}>
                                <img src="/images/svg/product_icon.svg" alt="item icon" />
                                <span>Product</span>
                            </div>
                            <div className={s.item__second}>
                                <img className={s.arrow__right} src="/images/svg/arrow_right.svg" alt="arrow rigth" />
                            </div>
                        </li>
                        <li className={`${s.active} ${s.list__item}`}>
                            <div className={s.item__first}>
                                <img src="/images/svg/customers_icon.svg" alt="item icon" />
                                <span>Customers</span>
                            </div>
                            <div className={s.item__second}>
                                <img className={s.arrow__right_active} src="/images/svg/arrow_right-white.svg" alt="arrow rigth" />
                            </div>
                        </li>
                        <li className={s.list__item}>
                            <div className={s.item__first}>
                                <img src="/images/svg/income_icon.svg" alt="item icon" />
                                <span>Income</span>
                            </div>
                            <div className={s.item__second}>
                                <img className={s.arrow__right} src="/images/svg/arrow_right.svg" alt="arrow rigth" />
                            </div>
                        </li>
                        <li className={s.list__item}>
                            <div className={s.item__first}>
                                <img src="/images/svg/promote_icon.svg" alt="item icon" />
                                <span>Promote</span>
                            </div>
                            <div className={s.item__second}>
                                <img className={s.arrow__right} src="/images/svg/arrow_right.svg" alt="arrow rigth" />
                            </div>
                        </li>
                        <li className={s.list__item}>
                            <div className={s.item__first}>
                                <img src="/images/svg/help_icon.svg" alt="item icon" />
                                <span>Help</span>
                            </div>
                            <div className={s.item__second}>
                                <img className={s.arrow__right} src="/images/svg/arrow_right.svg" alt="arrow rigth" />
                            </div>
                        </li>
                    </div>

                    <div className={s.item__info}>
                        <img className={s.info__img} src="/images/evano_photo.png" alt="profile_picture" />
                        <div>
                            <div className={s.info__name}><span>Evano</span></div>
                            <div className={s.info__job}><span>Project Manager</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
