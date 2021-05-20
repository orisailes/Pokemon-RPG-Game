const attacks = require('./attacks')
const attributesList = require('./attributesList')

class Pokemon {
    constructor(name, maxHp, defense, accurate, power, level, type, attacks, dodge) {
        this.name = name
        this.hp = maxHp
        this.maxHp = maxHp
        this.defense = defense
        this.power = power
        this.accurate = accurate
        this.level = level
        this.type = type
        this.attacks = attacks
        this.exp = 0
        this.dodge = dodge
        this.maxExp = Math.pow(level, 3) - Math.pow(level - 1, 3)
    }

    isHitTarget(opponent) {

        let result = this.accurate - opponent.dodge
        let isMiss = Boolean

        switch (true) {
            case (result === 0):
                result = 0.05
                break;
            case (result > 0): // attacker stronger than opponent
                result = 0.03
                break;
            case (result < 0):
                result = Number((result / 100).toString().replace("-", "")) + 0.03
                break;
            default:
                break;
        }
        const tester = Math.random() * 1
        if (tester > result) isMiss = false
        if (tester <= result) isMiss = true
        return isMiss
    }

    calculateDamage(opponent = "", attack) {

        const attackerType = this.type
        const opponentType = opponent.type
        let addOrDecreaseByType = 1
        switch (true) {

            case (attackerType === "fire"):
                if (opponentType === "water" || opponentType === "rock") {
                    addOrDecreaseByType = attack === "dragon_breath" ? 0.9 : 1
                }
                if (opponentType === "grass") {
                    addOrDecreaseByType = attack === "dragon_breath" ? 1.1 : 1
                }
                break;

            case (attackerType === "water"):
                if (opponentType === "fire" || opponentType === "grass" || opponentType === "rock") {
                    addOrDecreaseByType = attack === "water_splash" ? 1.1 : 1
                }
                break;

            case (attackerType === "fighting"):
                addOrDecreaseByType = (attack === "punch" || attack === "kick" || attack === "mega_kick" || attack === "quick_attack") ? 1.1 : 1
                break;

            case (attackerType === "rock"):
                if (opponentType === "fire") {
                    addOrDecreaseByType = (attack === "sand_attack") ? 1.1 : 1
                }
                break;

            case (attackerType === "electric"):
                if (opponentType === "water") {
                    addOrDecreaseByType = (attack === "lightning") ? 1.1 : 1
                }
                break;

            default:
                break;

        }
        if (attack !== "heal" && attack !== "shield") {
            return (
                Math.floor(
                    (attacks(attack) * this.power) *
                    Math.abs(opponent.defense / 100 - 1) *
                    addOrDecreaseByType *
                    (Math.random() * (1.25 - 0.75) + 0.75)
                )
            )
        }
        if (attack === "shield" || attack === "heal") return "invalid attack"
    }

    increseHp(attack) {

        if (attack === "heal") {
            const newHp = Math.floor(this.hp += this.maxHp * (Math.random() * (0.15 - 0.08) + 0.08))
            return newHp >= this.maxHp ? this.maxHp : newHp
        }
        if (attack !== "heal") return "invalid hp increase"
    }

    increseDefense(attack) {
        if (attack === "shield") {
            const newDef = Math.round(this.defense += this.defense * (Math.random() * (0.15 - 0.08) + 0.08))
            return newDef
        }
        if (attack !== "shield") return "invalid defense increase"
    }

    isCapture() {
        debugger

        const promoter = attributesList[this.name].quality - 1
        const capturePercent = 0.85 - promoter
        const randomize = Math.random()
        const result = randomize <= capturePercent ? true : false
        return result
    }

    calculateExp(enemy, percentCause) {
        
        const promoter = attributesList[enemy.name].quality
        let reward =
            Number(
                (enemy.maxExp / this.maxExp) *
                promoter *
                this.maxExp *
                percentCause
                .toFixed(2)
            )
        return reward
    }

}


export default Pokemon