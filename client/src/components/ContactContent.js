import react, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
function ContactContent() {
    const [ContactState, setContactState] = useState(0)
    // 
    const [nameState, setNameState] = useState(false)
    const [emailState, setEmailState] = useState(false)
    const [textareaState, setTextareaState] = useState(false)
    const [emailValidState, setEmailValidState] = useState('Please enter your email.')

    const Message = function () {
        return (
            <>
                <div className="content-wrap container d-flex align-items-center justify-content-center">
                    <form className="p-5 my-5" style={{ boxShadow: '0px 0px 3px gray' }}>
                        <h2 className="text-center font-weight-bold">CONTACT</h2>
                        <div className="horizon-line mt-2 mb-4" style={{ border: '0.5px solid black' }}></div>
                        <div className="mb-3">
                            <label htmlFor="ContactInputName" className="form-label" style={{ fontSize: '14px' }}>Name</label>
                            <input type="text" className="form-control" id="ContactInputName" onChange={() => { setNameState(false); }}></input>
                            {nameState ? <p id="ContactNameHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please enter your name.</p> : ''}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ContactInputEmail" className="form-label" style={{ fontSize: '14px' }}>Email</label>
                            <input type="email" className="form-control" id="ContactInputEmail" onChange={() => { setEmailState(false); }}></input>
                            {emailState ? <p id="ContactEmailHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>{emailValidState}</p> : ''}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ContactInputTextarea" className="form-label" style={{ fontSize: '14px' }}>Message</label>
                            <textarea id="ContactInputTextarea" className="form-control" style={{ resize: 'none', height: '200px' }} onChange={() => { setTextareaState(false); }}></textarea>
                            {textareaState ? <p id="ContactMessageHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please leave any comments.</p> : ''}
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button type="submit" className="btn btn-secondary mx-3" style={{ fontSize: '14px' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('ContactInputName').value = ''
                                    document.getElementById('ContactInputEmail').value = ''
                                    document.getElementById('ContactInputTextarea').value = ''
                                }}
                            >Cancel</button>
                            <button type="submit" className="btn btn-dark mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                                e.preventDefault()
                                let nameVal = document.getElementById('ContactInputName').value.replace(/(^\s*)|(\s*$)/g, "")
                                let emailVal = document.getElementById('ContactInputEmail').value.replace(/(^\s*)|(\s*$)/g, "")
                                let textareaVal = document.getElementById('ContactInputTextarea').value.replace(/(^\s*)|(\s*$)/g, "")
                                if (nameVal === '') {
                                    setNameState(true)
                                }
                                // 
                                if (emailVal === '') {
                                    setEmailState(true);
                                    setEmailValidState('Please enter your email.')
                                } else if (!emailVal.includes("@")) {
                                    setEmailState(true);
                                    setEmailValidState('This is not a valid email format.')
                                }
                                // 
                                if (textareaVal === '') {
                                    setTextareaState(true)
                                }
                                // 
                                if (nameVal !== '' && emailVal !== '' && emailVal.includes("@") && textareaVal !== '') {
                                    let data = { name: nameVal, email: emailVal, message: textareaVal }
                                    fetch('http://localhost:3001/contact', {
                                        method: 'POST', // or 'PUT'
                                        body: JSON.stringify(data), // data can be `string` or {object}!
                                        headers: new Headers({
                                            'Content-Type': 'application/json'
                                        })
                                    })
                                    setContactState(1)
                                }
                            }}>Send</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
    // 
    const SentMessage = function () {
        return (
            <>
                <div className="content-wrap container d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center p-5 my-5" style={{ backgroundColor: 'white' }}>
                        <p style={{ fontSize: '12px' }}>Thanks for contacting us, we will reply to you as soon as possible.</p>
                        <Link to="/" style={{ fontSize: '12px' }}>Go back to home page.</Link>
                    </div>
                </div>
            </>
        )
    }
    // 
    return (
        <>
            <main className="main-contact">
                {ContactState === 0 ? Message() : ''}
                {ContactState === 1 ? SentMessage() : ''}
            </main>
        </>
    )
}

export default ContactContent