import react, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
// 
import { Loader } from "@googlemaps/js-api-loader"
// 
function PartnerContent() {
    const [mapInfoState, setMapInfoState] = useState('')
    const [mapCenterInfoState, setMapCenterInfoState] = useState('')
    // 
    async function getMapInfo() {
        try {
            // 從伺服器得到資料
            const response = await fetch('http://localhost:3001/partner', {
                method: 'get',
            })
            if (response.ok) {
                // 剖析資料為JS的數值
                const data = await response.json()

                // 設定資料到ProductRes狀態
                await setMapInfoState(data)
                setMapCenterInfoState(data[0])
            }
        } catch (error) {
            // 發生錯誤的處理情況
            alert('無法得到伺服器資料，請稍後再重試')
            console.log(error)
        }
    }
    // 
    useEffect(() => {
        getMapInfo()
    }, [])
    // 
    /*global google*/
    let map;
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
        version: "weekly",
    });
    loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("google-map"), {
            center: { lat: !!mapCenterInfoState ? Number(mapCenterInfoState.lat) : '', lng: !!mapCenterInfoState ? Number(mapCenterInfoState.lng) : '' },
            zoom: 15,
            mapId: process.env.REACT_APP_GOOGLE_MAP_ID,
            mapTypeControl: false,
            fullscreenControl: false
        });

        // single marker 
        // const contentString =
        //     '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     "</div>" +
        //     '<h1 id="firstHeading" class="firstHeading h5">' + geoInfoState.name + '</h1>' +
        //     '<div id="bodyContent" class="d-flex justify-content-center align-items-center">' +
        //     "<img style='width:50px;' src=" + geoInfoState.image + " />" +
        //     "<p class='pl-2 mb-0'>" + geoInfoState.address + "</p>" +
        //     "</div>" +
        //     "</div>";
        // const infowindow = new google.maps.InfoWindow({
        //     content: contentString,
        // });
        // 
        // const marker = new google.maps.Marker({
        //     position: { lat: geoInfoState.lat, lng: geoInfoState.lng },
        //     animation: google.maps.Animation.DROP,
        // });
        // marker.addListener("click", () => {
        //     infowindow.open(map, marker);
        // });
        // marker.setMap(map)

        // multiple markers
        let infowindow = new google.maps.InfoWindow();
        let marker;
        for (let i = 0; i < mapInfoState.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(mapInfoState[i].lat, mapInfoState[i].lng),
                animation: google.maps.Animation.DROP,
                map: map
            })
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h1 id="firstHeading" class="firstHeading h6">' + mapInfoState[i].name + '</h1>' +
                        '<div id="bodyContent" class="d-flex justify-content-between align-items-center">' +
                        "<img style='width:50px;' src=" + mapInfoState[i].image + " />" +
                        "<p class='pl-2 mb-0'>" + mapInfoState[i].address + "</p>" +
                        "</div>" +
                        "</div>")
                    infowindow.open(map, marker);
                }
            })(marker, i));
            marker.setMap(map)
        }
        // 
    });
    return (
        <>
            <main className="main-location">
                <div className="container">
                    <div className="content-wrap py-5">
                        <div className="row">
                            <div className="col-3" style={{ height: 'calc(100vh - 340px)', overflowY: 'scroll' }}>
                                <div className="row">
                                    {mapInfoState !== '' ? mapInfoState.map((v, i) => {
                                        return (
                                            <>
                                                <div className="col-6 d-flex flex-column align-items-center  pb-2 px-2">
                                                    <a id="legacy-a" href="#!" className={mapCenterInfoState === mapInfoState[i] ? 'location-selected' : ''} onClick={(e) => {
                                                        e.preventDefault();
                                                        setMapCenterInfoState(mapInfoState[i]);
                                                    }}>
                                                        <img src={mapInfoState[i].image}></img>
                                                    </a>
                                                    <h5 className="text-center mt-2" style={{ fontSize: '14px' }}>{mapInfoState[i].name}</h5>
                                                </div>
                                            </>
                                        )
                                    }) : ''}
                                </div>
                            </div>
                            <div className="col-9">
                                <div id="google-map" style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PartnerContent