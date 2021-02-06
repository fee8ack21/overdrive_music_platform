import react, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
// 
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// 
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// 
function MemberContent(props) {
    const [loginState, setLoginState] = useState(0)
    const [accountState, setAccountState] = useState(false)
    const [passwordState, setPasswordState] = useState(false)
    const [emailState, setEmailState] = useState(false)
    const [emailValidState, setEmailValidState] = useState('Please enter your email.')
    // 

    const GoogleLoginResponse = async response => {
        console.log(response);
    }
    const GoogleLogoutResponse = ()=>{
        alert('Logout Successfully')
    }
    // 
    const LogIn = function () {
        return (
            <div className="content-wrap container d-flex align-items-center justify-content-center">
                <form className="p-5 my-5" style={{ boxShadow: '0px 0px 3px gray' }}>
                    <h2 className="text-center font-weight-bold">LOG IN</h2>
                    <div className="horizon-line mt-2 mb-4" style={{ border: '0.5px solid black' }}></div>
                    <div className="mb-3">
                        <label htmlFor="LoginInputAccount" className="form-label" style={{ fontSize: '14px' }}>Account</label>
                        <input type="text" className="form-control" id="LoginInputAccount" onChange={() => { setAccountState(false) }}></input>
                        {accountState ? <p id="loginAccountHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please enter your account.</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LoginInputPassword" className="form-label" style={{ fontSize: '14px' }}>Password</label>
                        <input type="password" className="form-control" id="LoginInputPassword" onChange={() => {
                            document.getElementById('LoginInputPassword').value = document.getElementById('LoginInputPassword').value.replace(/(^\s*)|(\s*$)/g, "")
                            setPasswordState(false)
                        }}></input>
                        {passwordState ? <p id="loginPasswordHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please enter your password.</p> : ''}
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <a href="#!" style={{ fontSize: '12px' }} onClick={(e) => {
                            e.preventDefault();
                            setLoginState(2);
                            setAccountState(false);
                            setPasswordState(false);
                            setEmailState(false);
                        }}>Forgot your password ?</a>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="submit" className="btn btn-secondary mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault();
                            setLoginState(1);
                            setAccountState(false);
                            setPasswordState(false);
                            setEmailState(false);
                        }}>Sign Up</button>
                        <button type="submit" className="btn btn-dark mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault()
                            let accountVal = document.getElementById('LoginInputAccount').value.replace(/(^\s*)|(\s*$)/g, "")
                            let passwordVal = document.getElementById('LoginInputPassword').value.replace(/(^\s*)|(\s*$)/g, "")
                            // 
                            if (accountVal === '') {
                                setAccountState(true);
                            }
                            // 
                            if (passwordVal === '') {
                                setPasswordState(true);
                            }
                            // 
                            if (accountVal !== '' && passwordVal !== '') {
                                let data = { account: accountVal, password: passwordVal }
                                fetch('http://localhost:3001/memberlogin', {
                                    method: 'POST', // or 'PUT'
                                    body: JSON.stringify(data), // data can be `string` or {object}!
                                    headers: new Headers({
                                        'Content-Type': 'application/json'
                                    })
                                }).then((res) => {
                                    return res.text()
                                }).then((res) => {
                                    if (res === '登入成功') {
                                        alert('Log in successfully.');
                                        let userData = { account: accountVal }
                                        localStorage.setItem('user', JSON.stringify(userData))
                                        props.setIfLoginState(true)
                                        window.location.replace("/");
                                    } else if (res === '密碼錯誤') {
                                        alert('Password is incorrect.')
                                        document.getElementById('LoginInputPassword').value = ''
                                    } else if (res === '無此帳號') {
                                        alert('Account not found.')
                                        document.getElementById('LoginInputAccount').value = ''
                                        document.getElementById('LoginInputPassword').value = ''
                                    }
                                })
                            }
                        }}>Log In</button>
                    </div>
                    <div className="horizon-line my-3" style={{ border: '0.5px solid #f5f5f5' }}></div>
                    <div className="social-icon d-flex justify-content-center align-items-center">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={GoogleLoginResponse}
                            onFailure={GoogleLoginResponse}
                            cookiePolicy={'single_host_origin'}
                            className={"google-login-button"}
                            isSignedIn={true}
                        />
                        <GoogleLogout
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Logout with Google"
                            onLogoutSuccess={GoogleLogoutResponse}
                            // onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className={"google-login-button"}
                            isSignedIn={false}
                        />
                    </div>
                </form>
            </div >
        )
    }
    // 
    const SignUp = function () {
        return (
            <div className="content-wrap container d-flex align-items-center justify-content-center">
                <form className="p-5 my-5" style={{ boxShadow: '0px 0px 3px gray' }}>
                    <h2 className="text-center font-weight-bold">SIGN UP</h2>
                    <div className="horizon-line mt-2 mb-4" style={{ border: '0.5px solid black' }}></div>
                    <div className="mb-3">
                        <label htmlFor="SignupInputAccount" className="form-label" style={{ fontSize: '14px' }}>Account</label>
                        <input type="text" className="form-control" id="SignupInputAccount" onChange={() => { setAccountState(false); }}></input>
                        {accountState ? <p id="signupAccountHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please enter your account.</p> : ''}
                        <div id="SignupInputAccountHelp" className="form-text" style={{ fontSize: '12px' }}>We'll never share your account with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="SignupInputPassword" className="form-label" style={{ fontSize: '14px' }}>Password</label>
                        <input type="password" className="form-control" id="SignupInputPassword" onChange={() => {
                            document.getElementById('SignupInputPassword').value = document.getElementById('SignupInputPassword').value.replace(/(^\s*)|(\s*$)/g, "")
                            setPasswordState(false);
                        }}></input>
                        {passwordState ? <p id="signupPasswordHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>Please enter your password.</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="SignupInputEmail" className="form-label" style={{ fontSize: '14px' }}>Email</label>
                        <input type="text" className="form-control" id="SignupInputEmail" onChange={() => { setEmailState(false); }}></input>
                        {emailState ? <p id="signupEmailHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>{emailValidState}</p> : ''}
                    </div>
                    <div className="mb-3 form-check d-flex align-items-center">
                        <input type="checkbox" style={{ top: '-2.5px' }} className="form-check-input position-relative mr-2" id="newsLetterCheck"></input>
                        <label className="form-check-label" style={{ fontSize: '12px' }} htmlFor="newsLetterCheck">Subscribe to our newsletter</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault();
                            setLoginState(0);
                            setAccountState(false);
                            setPasswordState(false);
                            setEmailState(false);
                        }}>Log In</button>
                        <button type="submit" className="btn btn-dark mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault()
                            let accountVal = document.getElementById('SignupInputAccount').value.replace(/(^\s*)|(\s*$)/g, "")
                            let passwordVal = document.getElementById('SignupInputPassword').value.replace(/(^\s*)|(\s*$)/g, "")
                            let emailVal = document.getElementById('SignupInputEmail').value.replace(/(^\s*)|(\s*$)/g, "")
                            // 
                            if (accountVal === '') {
                                setAccountState(true);
                            }
                            // 
                            if (passwordVal === '') {
                                setPasswordState(true);
                            }
                            // 
                            if (emailVal === '') {
                                setEmailState(true);
                                setEmailValidState('Please enter your email.')
                            } else if (!emailVal.includes("@")) {
                                setEmailState(true);
                                setEmailValidState('This is not a valid email format.')
                            }
                            if (accountVal !== '' && passwordVal !== '' && emailVal !== '' && emailVal.includes("@")) {
                                let data = { account: accountVal, password: passwordVal, email: emailVal }
                                fetch('http://localhost:3001/membersignup', {
                                    method: 'POST', // or 'PUT'
                                    body: JSON.stringify(data), // data can be `string` or {object}!
                                    headers: new Headers({
                                        'Content-Type': 'application/json'
                                    })
                                }).then((res) => {
                                    return res.text()
                                }).then((res) => {
                                    if (res === '已有相同帳號') {
                                        alert('Account is already existed.')
                                        document.getElementById('SignupInputAccount').value = ''
                                    } else if (res === '註冊成功') {
                                        alert('Sign up successfully.')
                                        setLoginState(0);
                                    }
                                })
                                // 
                            }
                        }}>Sign Up</button>
                    </div>
                    <div className="horizon-line my-3" style={{ border: '0.5px solid #f5f5f5' }}></div>
                    <div className="social-icon d-flex justify-content-center align-items-center">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={GoogleLoginResponse}
                            onFailure={GoogleLoginResponse}
                            cookiePolicy={'single_host_origin'}
                            className={"google-login-button"}
                        />
                    </div>
                </form>
            </div>
        )
    }
    // 
    const Forgot = function () {
        return (
            <div className="content-wrap container d-flex align-items-center justify-content-center">
                <form className="p-5 my-5" style={{ boxShadow: '0px 0px 3px gray' }}>
                    <h2 className="text-center font-weight-bold">CONFIRM</h2>
                    <div className="horizon-line mt-2 mb-4" style={{ border: '0.5px solid black' }}></div>
                    <div className="mb-3">
                        <label htmlFor="ForgotInputEmail" className="form-label" style={{ fontSize: '14px' }}>Email</label>
                        <input type="text" className="form-control" id="ForgotInputEmail" onChange={() => { setEmailState(false); }}></input>
                        {emailState ? <p id="ForgotEmailHint" className="mb-0" style={{ color: 'red', fontSize: '12px' }}>{emailValidState}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <div id="ForgotInputEmailHelp" className="form-text" style={{ fontSize: '12px' }}>We'll send a confirmation email to you.</div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault()
                            setLoginState(0)
                            setAccountState(false)
                            setPasswordState(false)
                            setEmailState(false)
                        }}>Back</button>
                        <button type="submit" className="btn btn-dark mx-3" style={{ fontSize: '14px' }} onClick={(e) => {
                            e.preventDefault()
                            let emailVal = document.getElementById('ForgotInputEmail').value.replace(/(^\s*)|(\s*$)/g, "")
                            // 
                            if (emailVal === '') {
                                setEmailState(true);
                                setEmailValidState('Please enter your email.')
                            } else if (!emailVal.includes("@")) {
                                setEmailState(true);
                                setEmailValidState('This is not a valid email format.')
                            } else {
                                let data = { email: emailVal }
                                fetch('http://localhost:3001/memberforgot', {
                                    method: 'POST', // or 'PUT'
                                    body: JSON.stringify(data), // data can be `string` or {object}!
                                    headers: new Headers({
                                        'Content-Type': 'application/json'
                                    })
                                }).then((res) => {
                                    return res.text()
                                }).then((res) => {
                                    if (res === '無此信箱') {
                                        alert('Email not found.')
                                    } else if (res === '修改密碼') {
                                        console.log(res)
                                        setLoginState(3)
                                    }
                                })
                            }
                        }}>Send</button>
                    </div>
                    <div className="horizon-line my-3" style={{ border: '0.5px solid #f5f5f5' }}></div>
                    <div className="social-icon d-flex justify-content-center align-items-center">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={GoogleLoginResponse}
                            onFailure={GoogleLoginResponse}
                            cookiePolicy={'single_host_origin'}
                            className={"google-login-button"}
                        />
                    </div>
                </form>
            </div>
        )
    }
    const Confirm = function () {
        return (
            <div className="content-wrap container d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center p-5 my-5" style={{ backgroundColor: 'white' }}>
                    <p style={{ fontSize: '12px' }}>Confirmation email has already been sent, please check your email account.</p>
                    <Link to="/" style={{ fontSize: '12px' }}>Go back to home page.</Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <main className="main-member">
                {loginState === 0 ? LogIn() : ''}
                {loginState === 1 ? SignUp() : ''}
                {loginState === 2 ? Forgot() : ''}
                {loginState === 3 ? Confirm() : ''}
            </main>
        </>
    )
}

export default MemberContent