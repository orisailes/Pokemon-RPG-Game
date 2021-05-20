import React from 'react'
import ExpBar from '../utils/ExpBar'
const Inventory = ({ user, showInventory, toggleInventory }) => {
    return (


        showInventory &&
        <>
            <div
                onClick={() => toggleInventory(prev => !prev)}
                className="inventory-grid">
                <div >
                    {
                        user &&
                        <div className="inventory-text">
                            <p>Money: {user.money} <span className="dollar-sign">$</span></p>
                            <p> Pokeballs: <span className="red">{user.pokeballs}</span></p>
                        </div>
                    }
                </div>
                <div className="inventory-displayer">
                    {user ?
                        user.pokemons.map((poke) => {
                            return (
                                <div className="inventory-pokemon-div">
                                    <img src={require(`../../img/pokemon-front/gif/${poke.name}.gif`).default} alt={poke.name}>
                                    </img>
                                    <h4>
                                        HP:{Math.floor((poke.hp / poke.maxHp) * 100)}%
                                    </h4>
                                    <h5>Lv: {poke.level}</h5>
                                    <ExpBar
                                        pokemon={poke} />
                                </div>
                            )
                        })
                        :
                        <h2 style={{ color: "red" }}>User didnt login</h2>
                    }
                </div>
            </div>
        </>


    )
}

export default Inventory