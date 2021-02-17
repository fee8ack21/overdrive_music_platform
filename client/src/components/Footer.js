 import { useTranslation } from "react-i18next";
// 
function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="main-footer py-5">
                <div className="footer-top-wrap">
                    <div className="container d-flex justify-content-between">
                        <div className="footer-menu">
                            <ul className="d-flex mb-0 list-unstyled">
                                <li><span className="font-weight-bold">|</span></li>
                                <li className="mx-3">
                                    <a href="#!" className="font-weight-bold">{t('about')}</a>
                                </li>
                                <li><span className="font-weight-bold">|</span></li>
                                <li className="mx-3">
                                    <a href="#!" className="font-weight-bold">{t('terms')}</a>
                                </li>
                                <li><span className="font-weight-bold">|</span></li>
                                <li className="mx-3">
                                    <a href="#!" className="font-weight-bold">{t('privacyPolicy')}</a>
                                </li>
                                <li><span className="font-weight-bold">|</span></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <p className="mb-2"> {t('openTime')}</p>
                            <p className="mb-2">+886(02)8888-8888</p>
                            <p className="mb-2"> {t('email')}:support@overdrive.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrap">
                    <div className="container mt-3">
                        <p className="mb-0 text-center">© OverDrive! All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer