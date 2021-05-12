import React, { useState } from 'react'
import Button from './Button'


const Login = ({ email, setEmail, password, setPassword, onFormSubmit, error }) => {

    const [isLoginWanted, setIsLoginWanted] = useState(null)

    return (
        <div className="login-popup">
            <img src={require('../../img/home/pokeball.png').default} alt="pokeball" />
            { (isLoginWanted !== null) &&
                <>
                    <form onSubmit={(e)=>onFormSubmit(e)}>
                        <label htmlFor="username">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
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
            </div>

        </div >
    )
}

export default Login
