import Carousel from 'react-bootstrap/Carousel';
// 
import { AiFillSound } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
// 
import { useTranslation } from "react-i18next";
// 
function HomeContent() {
    const { t } = useTranslation();
    return (
        <>
            <main className="main-home py-5">
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <a href="#!">
                                <img
                                    className="d-block w-100"
                                    src="/images/slide/ntu_music_festival.png"
                                    alt="Third slide"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a href="#!">
                                <img
                                    className="d-block w-100"
                                    src="/images/slide/papun.jpg"
                                    alt="First slide"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a href="#!">
                                <img
                                    className="d-block w-100"
                                    src="/images/slide/misi_ke.jpg"
                                    alt="Third slide"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a href="#!">
                                <img
                                    className="d-block w-100"
                                    src="/images/slide/mary_see_the_future.jpg"
                                    alt="Third slide"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a href="#!">
                                <img
                                    className="d-block w-100"
                                    src="/images/slide/michael_wong.png"
                                    alt="Third slide"
                                />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                    <div className="news-wrap py-3">
                        <div className="news-title d-flex justify-content-between align-items-center">
                            <h3>{t('news')}</h3>
                            <a href="#!" className="d-flex align-items-center">
                                <IconContext.Provider value={{ color: '#d40000' }}>
                                    <RiArrowDropRightFill />
                                </IconContext.Provider>
                                <span>{t('more')}</span>
                            </a>
                        </div>
                        <div className="row news-list pt-2">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>【取消及退票公告】【 騎腳踏車到遠方 】_ 安伯政首場音樂會</span>
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>
                                                【取消及退票公告】台大音樂節 –《迷樂島》
                                            </span>
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>【延期及退票公告】李友廷《如果你也愛我就好了》2021 Live Tour 高雄場</span>                             </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>
                                                【延期及退票公告】Buns N’Roses 「USE YOUR LOTION」2021 LIVE TOUR TAIWAN
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="show-wrap py-3">
                        <div className="show-title d-flex justify-content-between align-items-center">
                            <h3>{t('show')}</h3>
                            <a href="#!" className="d-flex align-items-center">
                                <IconContext.Provider value={{ color: '#d40000' }}>
                                    <RiArrowDropRightFill />
                                </IconContext.Provider>
                                <span>{t('more')}</span>
                            </a>
                        </div>
                        <div className="row show-list pt-2">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>【取消及退票公告】【 騎腳踏車到遠方 】_ 安伯政首場音樂會</span>
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>
                                                【取消及退票公告】台大音樂節 –《迷樂島》
                                            </span>
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>【延期及退票公告】李友廷《如果你也愛我就好了》2021 Live Tour 高雄場</span>                             </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="py-2">
                                        <a href="#!" className="d-flex align-items-center">
                                            <AiFillSound />
                                            <span>
                                                【延期及退票公告】Buns N’Roses 「USE YOUR LOTION」2021 LIVE TOUR TAIWAN
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="partner-wrap">
                        <div className="partner-title d-flex justify-content-between align-items-center">
                            <h3>{t('partner')}</h3>
                            <a href="#!" className="d-flex align-items-center">
                                <IconContext.Provider value={{ color: '#d40000' }}>
                                    <RiArrowDropRightFill />
                                </IconContext.Provider>
                                <span>{t('more')}</span>
                            </a>
                        </div>
                        <div className="row partner-list pt-2">
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/legacy.jpg" className="img-fluid" alt=""></img></a>
                            </div>
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/jack.jpg" className="img-fluid" alt=""></img></a>
                            </div>
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/small_place.png" className="img-fluid" alt=""></img></a>
                            </div>
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/live_warehouse.png" className="img-fluid" alt=""></img></a>
                            </div>
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/sound.png" className="img-fluid" alt=""></img></a>
                            </div>
                            <div className="col-2 py-2">
                                <a href="#!"><img src="images/partner/there.jpg" className="img-fluid" alt=""></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeContent