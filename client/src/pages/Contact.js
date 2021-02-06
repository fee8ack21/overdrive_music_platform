import react, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactContent from '../components/ContactContent'

function Contact() {
    const [ifLoginState, setIfLoginState] = useState(!!localStorage.getItem('user'))
    return (
        <>
            <Header ifLoginState={ifLoginState} setIfLoginState={setIfLoginState} />
            <ContactContent />
            <Footer />
        </>
    )
}

export default Contact