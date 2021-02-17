import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PartnerContent from '../components/PartnerContent'
// 
function Partner() {
    const [ifLoginState, setIfLoginState] = useState(!!localStorage.getItem('user'))
    return (
        <>
            <Header ifLoginState={ifLoginState} setIfLoginState={setIfLoginState} />
            <PartnerContent />
            <Footer />
        </>
    )
}

export default Partner;