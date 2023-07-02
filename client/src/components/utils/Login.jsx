import React, { useState } from 'react'
import Button from './Button'


const Login = ({ email, setEmail, password, setPassword, onFormSubmit, error }) => {

    const [isLoginWanted, setIsLoginWanted] = useState(null)
    const [showPass, setShowPass] = useState(false)
    return (
        <div className="login-popup">
            <img src={require('../../img/home/pokeball.png')} alt="pokeball" />
            { (isLoginWanted !== null) &&
                <>
                    <form onSubmit={(e) => onFormSubmit(e)}>
                        <label htmlFor="username">Email:</label>
                        <input autoFocus value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
                        <label htmlFor="password">Password:</label>
                        <div className="password-input">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type={`${showPass ? "text" : "password"}`} />
                            <i
                                onClick={() => setShowPass(prev => !prev)}
                                className={`far fa-eye${showPass ? "" : "-slash"} fa-sm eye-toggle-icon`}>

                            </i>
                        </div>
                        {
                            isLoginWanted ?
                                <input id="login" type="submit" value="Login" />
                                :
                                <input id="register" type="submit" value="Register" />
                        }

                    </form>
                </>
            }
            <div className="opt-btn-container">
                <p>{error}</p>
                <Button onClick={() => setIsLoginWanted(true)} text="Login" />
                <Button onClick={() => setIsLoginWanted(false)} text="Register" />
                <footer>
                &#169; All right are save to Ori Sailes .<br></br> Every usage have to be approved.
                        </footer>
            </div>

        </div >
    )
}

export default Login
