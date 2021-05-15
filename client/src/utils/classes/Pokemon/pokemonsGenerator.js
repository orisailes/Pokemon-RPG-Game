import Pokemon from './Pokemon'
const attributesList = require('./attributesList')
const hpPromoter = 0.6
const statsPower = 0.75

//* instructions:
// initial stats will be between 10~15 dependes on the pokemon tendency
// initial maxHp will be always 75
// promoter will be between 0.1~0.5 depends on pokemons quality (above 0.6 its only super rare pokemons)
// stats are powered by hpPromoter to make exponential series

const makePokemon = (name, level) => {
    const attribute = attributesList[name]
    let attacks =
        (level <= 5) ? attribute.attacks[0] :
        (level >= 5 && level <= 10) ? attribute.attacks[1] :
        (level > 10 && level <= 15) ? attribute.attacks[2] :
        (level > 15) && attribute.attacks[3]
    const result = new Pokemon(
        name, // name
        Math.round((75 * Math.pow(level, hpPromoter)) * (attribute.quality - 1)), // maxHp
        generateStat(attribute.defense,level,attribute), // defense
        generateStat(attribute.accurate,level,attribute), // accurate
        generateStat(attribute.power,level,attribute), // power
        level, // level
        attribute.type, // type
        attacks, // attacks(array)
        generateStat(attribute.dodge,level,attribute) // dodge
    )
    return result
}

const generateStat = (stat,level,attribute) => {
    return Number((stat * Math.pow(level, statsPower) * (attribute.quality - 1)).toFixed(2))
}


 export default makePokemon
