import react, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MemberContent from '../components/MemberContent'

function Member() {
    const [ifLoginState, setIfLoginState] = useState(!!localStorage.getItem('user'))
    return (
        <>
            <Header ifLoginState={ifLoginState} setIfLoginState={setIfLoginState} />
            <MemberContent setIfLoginState={setIfLoginState} />
            <Footer />
        </>
    )
}

export default Member