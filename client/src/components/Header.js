import react, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
// 
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
// 
import { useTranslation } from "react-i18next";
// 
function Header(props) {
    const [parentIfLoginState, setParentIfLoginState] = useState(props.ifLoginState)
    // 
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <header className="main-header">
                <nav className="sub-navbar py-1">
                    <div className="container d-flex justify-content-end align-items-center">
                        <div className="login-wrap d-flex justify-content-end">
                            {parentIfLoginState ?
                                (<>
                                    <Link to='#!' className="d-flex align-items-center" onClick={(e) => {
                                        e.preventDefault()
                                        localStorage.removeItem('user')
                                        props.setIfLoginState(false)
                                        window.location.replace("/");
                                    }}>
                                        <IconContext.Provider value={{ color: '#6a6a6a', size: '16px' }}>
                                            <FaUserCircle className="mr-2" />
                                        </IconContext.Provider>
                                        {t('logout')}
                                    </Link>
                                </>)
                                :
                                (<>
                                    <Link to='/member' className="d-flex align-items-center">
                                        <IconContext.Provider value={{ color: '#6a6a6a', size: '16px' }}>
                                            <FaUserCircle className="mr-2" />
                                        </IconContext.Provider>
                                        {t('login')}
                                    </Link>
                                </>)
                            }


                            {/*  */}
                            <Link to="#!" className="d-flex align-items-center">
                                <IconContext.Provider value={{ color: '#6a6a6a', size: '16px' }}>
                                    <FaShoppingCart className="mx-2" />
                                </IconContext.Provider>
                                {t('checkout')}
                            </Link>
                        </div>
                        <div className="lang-search-wrap d-flex align-items-center ml-2">
                            <div className="position-relative">
                                <input className="header-input-search pl-2 pr-4" type="text"></input>
                                <a href="#!" style={{ position: 'absolute', right: '5px' }}>
                                    <IconContext.Provider value={{ color: '#6a6a6a', size: '16px' }}>
                                        <BiSearch />
                                    </IconContext.Provider>
                                </a>
                            </div>
                            <a href="#!" className="lang-choose-btn d-flex mx-2 justify-content-center align-items-center text-decoration-none"
                                onClick={() => changeLanguage("en")}>EN</a>
                            <a href="#!" className="lang-choose-btn d-flex justify-content-center align-items-center text-decoration-none"
                                onClick={() => changeLanguage("zhTW")}>中</a>
                        </div>
                    </div>
                </nav>
                {/*  */}
                <nav className="header-navbar-top">
                    <div className="container d-flex flex-column align-items-center">
                        <div className="logo-wrap py-5">
                            <h1>
                                <Link to="/" className="font-italic">
                                    <span className="logo-over">Over</span><span className="logo-drive">Drive!</span>
                                </Link>
                            </h1>
                        </div>

                    </div>
                </nav>
                {/*  */}
                <nav className="header-navbar-bottom">
                    <div className="container">
                        <div>
                            <ul className="d-flex justify-content-between list-unstyled mb-0">
                                <li className="w-100 text-center">
                                    <a href="#!" className="d-block py-2 font-weight-bold text-decoration-none">{t('show')}</a>
                                </li>
                                <li className="w-100 text-center">
                                    <Link to="/partner" className="d-block py-2 font-weight-bold text-decoration-none">{t('partner')}</Link>
                                </li>
                                <li className="w-100 text-center">
                                    <a href="#!" className="d-block py-2 font-weight-bold text-decoration-none">{t('news')}</a>
                                </li>
                                <li className="w-100 text-center">
                                    <a href="#!" className="d-block py-2 font-weight-bold text-decoration-none">{t('qa')}</a>
                                </li>
                                <li className="w-100 text-center">
                                    <a href="#!" className="d-block py-2 font-weight-bold text-decoration-none">{t('shop')}</a>
                                </li>
                                <li className="w-100 text-center">
                                    <Link to="/contact" className="d-block py-2 font-weight-bold text-decoration-none">{t('contact')}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header