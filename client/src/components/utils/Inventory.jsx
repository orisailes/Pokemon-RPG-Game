import React from 'react'
import ExpBar from '../utils/ExpBar'
const Inventory = ({ user, showInventory, toggleInventory }) => {
    return (
        <button
            onClick={() => toggleInventory(prev => !prev)}
            className="inventory-btn">
            <img src={require('../../img/utils/backpack.png').default} alt="backpach" ></img>
            {
                showInventory &&
                <div className="inventory-displayer">
                    {user ?
                        user.pokemons.map((poke) => {
                            return (
                                <div className="inventory-pokemon-div">
                                    <img src={require(`../../img/pokemon-front/gif/${poke.name}.gif`).default} alt={poke.name}>
                                    </img>
                                    <h4>
                                        HP:{Math.floor((poke.hp/poke.maxHp)*100)}%
                                    </h4>
                                    <h5>Lv: {poke.level}</h5>
                                    <ExpBar 
                                    pokemon={poke}/>
                                </div>
                            )
                        })
                        :
                        <h2 style={{color:"red"}}>User didnt login</h2>
                    }
                </div>
            }
        </button>
    )
}

export default Inventory