import React, { useContext, useState, useEffect, useRef } from 'react'
import { userContext } from '../../utils/context/userContext'
import { useLocation } from 'react-router-dom'
import Map from '../utils/Map'
import Chat from '../utils/Chat'
import Store from '../utils/Store'
import PreBuy from '../utils/PreBuy'
import Inventory from '../utils/Inventory'
import Toturial from '../utils/Toturial'
import PreDisconnect from '../utils/PreDisconnect'
import tilesDefiner from './maps/index'
import axios from 'axios'
import makePokemon from '../../utils/classes/Pokemon/pokemonsGenerator'
import _ from 'lodash'
import '../../css/world.css'

const World = ({ sounds, showToturial, setShowToturial, musicOff, setMusicOff }) => {
    const { user, setUser } = useContext(userContext)

    const data = useLocation()


    //TODO: fix sound icon bug, impove store,chatting and home character css  

    const [isCharacterInHome, setIsCharacterInHome] = useState(data.state ? data.state.userBackFromBattle ? false : true : true)
    const [store, setStore] = useState(false)
    const [productUserWantToBuy, setProductUserWantToBuy] = useState(null)
    const [isChatting, setIsChatting] = useState('')
    const [preBuyText, setPreBuyText] = useState('')
    const [isInventoryOpen, setIsInventoryOpen] = useState(false)
    let [chatFireLine, setChatFireLine] = useState(0)
    const [preDisconnect, setPreDisconnect] = useState(false)
    const mapRef = useRef(null)


    const chatInfo = {
        oak: ["Hey folk! Looking for new pokemon?", "There will no discounts for you!"],
        nurse: ["Hey There! Need to recover your pokemons?", "Oh My God! They almost die!", "Here, this will help"]
    }

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (data.state) {
            if (data.state.healPokemons) {
                healUserPokemons()
            }
        }

        mapRef.current.focus()

    }, [])


    const toggleMap = () => {
        let helper = isCharacterInHome
        helper = !helper // the opposite from where character was
        if (!musicOff) {
            if (helper) {
                sounds.forestSound.off()
                sounds.homeSound.on()
            } else {
                sounds.forestSound.on()
                sounds.homeSound.off()
            }
        }
        setIsCharacterInHome(prev => !prev)
    }

    const toggleChat = (personName) => {
        if (isChatting.length === 0) setIsChatting(personName)
    }

    const handleChattingFlow = (e) => {
        if (isChatting.length) {
            let helper = chatFireLine
            e.keyCode === 32 && helper++
            if (chatInfo[isChatting][helper]) {
                setChatFireLine(helper)
            }
            else {
                if (isChatting === "oak") {
                    setStore(true)
                }
                if (isChatting === "nurse") {
                    healUserPokemons()
                }
                setChatFireLine(0)
                setIsChatting('')
            }
        }
    }

    const healUserPokemons = async () => {
        let helper = _.cloneDeep(user)
        if (!musicOff) {
            isCharacterInHome ? sounds.homeSound.pause() : sounds.forestSound.pause()
            sounds.healSound.on()
        }
        if (user) {
            for (let i = 0; i < helper.pokemons.length; i++) {
                helper.pokemons[i].hp = helper.pokemons[i].maxHp
            }
            await axios.put(`/api/users/${user.email}`, helper)
            setUser(helper)
        }
        await wait(4500)
        if (!musicOff) {
            isCharacterInHome ? sounds.homeSound.on() : sounds.forestSound.on()
        }
    }

    const closeStore = () => {
        setStore(false)
        mapRef.current.focus()
    }

    const storeBuying = (productToBuy) => {
        setProductUserWantToBuy(productToBuy)
    }

    const clickToBuy = async (product) => {
        if (!user) {
            setPreBuyText('You have to login first.')
        } if (user) {
            if (product !== "pokeball") {
                const pokemon = product
                let duplicateTest = user.pokemons.every((userPokemon) => userPokemon.name !== pokemon.pokemon)

                if (user.money < pokemon.price) { // if user have no cash
                    setPreBuyText('Not enough funds')
                }

                if (!duplicateTest) { // if user want to buy the same pokemon twice  
                    setPreBuyText('You cant have the same pokemon twice')
                }

                if (user.pokemons.length >= 8) { // if user got 8 pokemons
                    setPreBuyText('You cant have more than 8 Pokemons!')

                }

                if (user.money >= pokemon.price && duplicateTest && user.pokemons.length < 8) {
                    let newPokemon = makePokemon(pokemon.pokemon, pokemon.level)
                    let helper = _.cloneDeep(user)
                    helper.money -= pokemon.price
                    helper.pokemons.push(newPokemon)
                    await axios.put(`/api/users/${user.email}`, helper)
                    setUser(helper)
                    setPreBuyText('Pokemon buy succesfully')
                }
            }
            if (product === "pokeball") {
                if (user.money < 400) setPreBuyText('Not enough funds')
                if (user.money >= 400) {
                    let helper = _.cloneDeep(user)
                    helper.money -= 400
                    helper.pokeballs += 1
                    await axios.put(`/api/users/${user.email}`, helper)
                    setUser(helper)
                    setPreBuyText('Pokemon buy succesfully')
                }
            }
        }
    }

    const cancelBuy = () => {
        setPreBuyText('')
        setProductUserWantToBuy(null)
    }

    const toggleMusic = () => {
        if (musicOff) {
            isCharacterInHome ? sounds.homeSound.on() : sounds.forestSound.on()

        }

        if (!musicOff) {
            isCharacterInHome ? sounds.homeSound.pause() : sounds.forestSound.pause()
        }

        mapRef.current.focus()
        setMusicOff(prev => !prev)
    }

    const toggleInventory = () => {
        mapRef.current.focus()
        setIsInventoryOpen(prev => !prev)
    }


    return (
        <div
            className="world"
            onKeyDown={(e) => { handleChattingFlow(e) }}
        >
            <Map
                forwardedRef={mapRef}
                sounds={sounds}
                toggleChat={toggleChat}
                toggleMap={toggleMap}
                isCharacterInHome={isCharacterInHome}
                tiles={isCharacterInHome ? tilesDefiner.home : tilesDefiner.forest}
                musicOff={musicOff}
                toggleMusic={toggleMusic}
            />
            <Inventory
                toggleInventory={toggleInventory}
                showInventory={isInventoryOpen}
                user={user} />
            <div className="user-world-options">
                <button
                    onClick={() => toggleInventory(prev => !prev)}
                    className="inventory-btn">
                    <img src={require('../../img/utils/backpack.png').default} alt="backpach" ></img>
                </button>
                <i
                    className={`${musicOff ? "fas fa-volume-mute fa-lg" : "fas fa-volume-up fa-lg"} volume-icon `}
                    onClick={() => toggleMusic()}
                >
                </i>

                <i
                    className="fas fa-question fa-lg .question-mark-i"
                    onClick={() => setShowToturial(prev => !prev)}
                >
                </i>
                <i
                    onClick={() => {
                        setPreDisconnect(true)
                    }}
                    className="fas fa-unlink fa-lg">

                </i>
            </div>
            {
                showToturial &&
                <Toturial
                    setShowToturial={setShowToturial}
                    mapRef={mapRef}
                />
            }
            {
                preDisconnect &&
                <PreDisconnect
                    setPreDisconnect={setPreDisconnect}
                    mapRef={mapRef}
                />
            }

            {
                isChatting &&
                <Chat
                    text={chatInfo[isChatting][chatFireLine]}
                />}

            {
                store &&
                <>
                    <Store
                        storeBuying={storeBuying}
                        user={user}
                        closeStore={closeStore} />

                    { (productUserWantToBuy && user) &&
                        <PreBuy
                            cancel={cancelBuy}
                            clickToBuy={clickToBuy}
                            product={productUserWantToBuy}
                            preBuyText={preBuyText}
                            user={user}
                        />
                    }

                </>
            }

        </div>
    )
}
export default World