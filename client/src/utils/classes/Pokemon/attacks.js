//! punch kick cut water_splash mega_kick heal tornado razor_leaf slash dragon_breath sand_attack tail_whip quick_attack shield lightning
const attacks = (attack) => {
    //*beware for pokemon type
    if (attack === "shield") return "shield"
    if (attack === "heal") return "heal"
    if (attack !== "heal" && attack !== "shield") {
        switch (true) {
            case (attack === "punch"):
                return 1.2
            case (attack === "kick"):
                return 1.3
            case (attack === "cut"):
                return 1.25
            case (attack === "water_splash"):
                return 1.3
            case (attack === "mega_kick"):
                return 1.35
            case (attack === "tornado"):
                return 1.3
            case (attack === "razor_leaf"):
                return 1.45
            case (attack === "slash"):
                return 1.4
            case (attack === "dragon_breath"):
                return 1.45
            case (attack === "sand_attack"):
                return 1.35
            case (attack === "tail_whip"):
                return 1.35
            case (attack === "quick_attack"):
                return 1.4
            case (attack === "lightning"):
                return 1.45
            default:
                return 1.25
        }
    }


}

module.exports = attacks