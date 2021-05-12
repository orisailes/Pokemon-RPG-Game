import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/landing.css'
import Login from '../utils/Login'
import Pokemon from '../../utils/classes/Pokemon/Pokemon'
import validator from 'validator'
import axios from 'axios'
import PokemonsDesplayer from '../utils/PokemonsDesplayer'
import makePokemon from '../../utils/classes/Pokemon/pokemonsGenerator'


const Home = ({ sounds }) => {

    //TODO: cant get two pokemons the same

    const { user, setUser } = useContext(userContext)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [musicOff, setMusicOff] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [newUserCreated, setNewUserCreated] = useState(false)
    const location = useHistory()

    useEffect(() => {

        setUser(null) // bug protector

    }, [])


    const onFormSubmit = async (e) => {

        e.preventDefault()
        const action = e.target[2].id // get action from e
        const isEmail = validator.isEmail(email)
        if (!isEmail) {
            setError('Invalid email')
        }

        if (action === "register" && isEmail) {
            setError('')
            try {

                const newUser = await axios.post('/api/users/register', {
                    email, password
                })
                newUser.status === 200 && setNewUserCreated(true)
                setUser(newUser.data)
            } catch (err) {
                console.log(err.message)
                setError("This email is in-use")
            }
        }

        if (action === "login") {
            setError('')
            try {
                const newUser = await axios.post('/api/users/login', {
                    email, password
                })
                let helper = new Pokemon('helper')
                for (let i = 0; i < newUser.data.pokemons.length; i++) {
                    Object.setPrototypeOf(newUser.data.pokemons[i], helper) // set proto for new user
                }
                setUser(newUser.data)
                setIsUserLoggedIn(true)
                console.log('newUser:', newUser)
            } catch (err) {
                console.log(err.message)
                setError("Invalid email or password")
            }
        }

    }



    const playMusic = () => {
        if (!isMusicPlaying) {
            sounds.landingSound.on()
            setIsMusicPlaying(true)
        }
    }


    const initialPokemonChoose = async (pokemon) => {
        console.log(pokemon)
        console.log('pokemonGenerator:', makePokemon)
        const newPokemon = makePokemon(pokemon, 5)
        let helper = { ...user }
        helper.pokemons.push(newPokemon)
        setUser(helper)
        const test = await axios.put(`/api/users/${user.email}`, helper)
        console.log(test);
        console.log(helper.pokemons);
        sounds.landingSound.off()

        location.push('/world')
    }

    const startGame = () => {
        sounds.landingSound.off()
        location.push('/world')
    }

    return (
        <>
            {
                <div onClick={playMusic} className="landing-page">
                    <div className="login-popup-container" >

                        {
                            newUserCreated ?
                                <div className="initial-pokemon-choose">
                                    <PokemonsDesplayer initialPokemonChoose={initialPokemonChoose} />
                                </div>
                                : !isUserLoggedIn &&
                                <>
                                    <Login
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        onFormSubmit={onFormSubmit}
                                        error={error}
                                    />

                                    {isMusicPlaying &&
                                        <i
                                            className={`${musicOff ? "fas fa-volume-mute fa-lg" : "fas fa-volume-up fa-lg"}`}
                                            onClick={() => {
                                                musicOff ? sounds.landingSound.on() : sounds.landingSound.pause()
                                                setMusicOff(prev => !prev)
                                            }}
                                        >
                                        </i>}
                                </>

                        }

                        {
                            (isUserLoggedIn && user.pokemons.length > 0) ?
                                startGame()
                                : (isUserLoggedIn && user.pokemons.length === 0) &&
                                <div className="initial-pokemon-choose">
                                    <PokemonsDesplayer initialPokemonChoose={initialPokemonChoose} />
                                </div>
                        }

                    </div>
                </div>
            }
        </>
    )
}

export default Home