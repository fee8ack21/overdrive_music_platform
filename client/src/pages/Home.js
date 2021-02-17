import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

function Home() {
    const [ifLoginState, setIfLoginState] = useState(!!localStorage.getItem('user'))
    return (
        <>
            <Header ifLoginState={ifLoginState} setIfLoginState={setIfLoginState} />
            <HomeContent />
            <Footer />
        </>
    )
}

export default Home