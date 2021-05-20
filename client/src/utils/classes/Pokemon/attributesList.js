const scyther = {
    quality: 1.45,
    defense: 12,
    accurate: 14,
    power: 14.5,
    dodge: 13,
    type: "grass",
    attacks: [
        ["punch"],
        ["kick", "punch"],
        ["cut", "punch", "heal"],
        ["cut", "punch", "heal", "razor_leaf"]
    ],
}
const hitmonlee = {
    quality: 1.35,
    defense: 11,
    accurate: 14,
    power: 14,
    dodge: 14,
    type: "fighting",
    attacks: [
        ["punch"],
        ["punch", "cut"],
        ["punch", "cut", "mega_kick"],
        ["punch", "cut", "mega_kick", "shield"]
    ],
}
const bulbasaur = {
    quality: 1.45,
    defense: 14,
    accurate: 13,
    power: 14,
    dodge: 12,
    type: "grass",
    attacks: [
        ["punch"],
        ["punch", "cut"],
        ["punch", "cut", "heal"],
        ["punch", "cut", "heal", "razor_leaf"]
    ],
}
const caterpie = {
    quality: 1.25,
    defense: 10,
    accurate: 10,
    power: 10,
    dodge: 10,
    type: "normal",
    attacks: [
        ["punch"],
        ["punch", "cut"],
        ["punch", "cut", "shield"],
        ["punch", "cut", "shield"]
    ],
}
const charmander = {
    quality: 1.45,
    defense: 13,
    accurate: 13,
    power: 14,
    dodge: 13,
    type: "fire",
    attacks: [
        ["punch"],
        ["punch", "slash"],
        ["punch", "slash", "dragon_breath"],
        ["punch", "slash", "dragon_breath", "quick_attack"]
    ],
}
const eevee = {
    quality: 1.45,
    defense: 12,
    accurate: 15,
    power: 13,
    dodge: 15,
    type: "rock",
    attacks: [
        ["tail_whip"],
        ["tail_whip", "sand_attack"],
        ["tail_whip", "sand_attack", "quick_attack"],
        ["tail_whip", "sand_attack", "quick_attack"]
    ],
}
const ekans = {
    quality: 1.25,
    defense: 11,
    accurate: 11,
    power: 10,
    dodge: 14,
    type: "normal",
    attacks: [
        ["tail_whip"],
        ["tail_whip", "sand_attack"],
        ["tail_whip", "sand_attack"],
        ["tail_whip", "sand_attack"]
    ],
}
const geodude = {
    quality: 1.3,
    defense: 14,
    accurate: 13,
    power: 12,
    dodge: 11,
    type: "rock",
    attacks: [
        ["punch"],
        ["punch", "rock_attack"],
        ["punch", "rock_attack", "shield"],
        ["punch", "rock_attack", "shield"]
    ],
}
const metapod = {
    quality: 1.22,
    defense: 10,
    accurate: 10,
    power: 10,
    dodge: 10,
    type: "normal",
    attacks: [
        ["shield"],
        ["heal", "shield"],
        ["heal", "shield"],
        ["heal", "shield"]
    ],
}
const pidgey = {
    quality: 1.25,
    defense: 11,
    accurate: 10,
    power: 11,
    dodge: 10,
    type: "normal",
    attacks: [
        ["punch"],
        ["punch", "cut"],
        ["punch", "cut", "tornado"],
        ["punch", "cut", "tornado"]
    ],
}
const pikachu = {
    quality: 1.45,
    defense: 13,
    accurate: 14,
    power: 14,
    dodge: 14,
    type: "electric",
    attacks: [
        ["punch"],
        ["punch", "kick"],
        ["punch", "kick", "lighting"],
        ["punch", "kick", "lighting","heal"]
    ],
}
const ponyta = {
    quality: 1.4,
    defense: 14,
    accurate: 13,
    power: 12,
    dodge: 11,
    type: "fire",
    attacks: [
        ["punch"],
        ["punch", "dragon_breath"],
        ["punch", "dragon_breath", "mega_kick"],
        ["punch", "dragon_breath", "mega_kick"]
    ],
}
const psyduck = {
    quality: 1.35,
    defense: 13,
    accurate: 13,
    power: 14,
    dodge: 15,
    type: "water",
    attacks: [
        ["punch"],
        ["punch", "water_splash"],
        ["punch", "water_splash", "mega_kick"],
        ["punch", "water_splash", "mega_kick"]
    ],
}
const raticate = {
    quality: 1.35,
    defense: 13,
    accurate: 14,
    power: 13,
    dodge: 13,
    type: "normal",
    attacks: [
        ["punch"],
        ["punch", "cut"],
        ["punch", "cut", "heal"],
        ["punch", "cut", "heal","quick_attack"]
    ],
}
const rattata = {
    quality: 1.25,
    defense: 11,
    accurate: 12,
    power: 11,
    dodge: 10,
    type: "normal",
    attacks: [
        ["punch"],
        ["punch", "tail_whip"],
        ["punch", "tail_whip"],
        ["punch", "tail_whip"]
    ],
}
const spearow = {
    quality: 1.35,
    defense: 13,
    accurate: 13,
    power: 14,
    dodge: 13,
    type: "normal",
    attacks: [
        ["kick"],
        ["kick", "tornado"],
        ["kick", "tornado", "quick_attack"],
        ["kick", "tornado", "quick_attack"]
    ],
}
const squirtle = {
    quality: 1.45,
    defense: 14,
    accurate: 13,
    power: 14,
    dodge: 13,
    type: "water",
    attacks: [
        ["punch"],
        ["punch", "water_splash"],
        ["punch", "water_splash", "slash","quick_attack"],
        ["punch", "water_splash", "slash","quick_attack"]
    ],
}
const voltorb = {
    quality: 1.35,
    defense: 14,
    accurate: 13,
    power: 12,
    dodge: 13,
    type: "electric",
    attacks: [
        ["punch"],
        ["punch", "quick_attack"],
        ["punch", "quick_attack", "lighting"],
        ["punch", "quick_attack", "lighting"]
    ],
}
const vulpix = {
    quality: 1.4,
    defense: 13,
    accurate: 13,
    power: 13,
    dodge: 13,
    type: "fire",
    attacks: [
        ["cut"],
        ["cut", "quick_attack"],
        ["cut", "quick_attack", "dragon_breath"],
        ["cut", "quick_attack", "dragon_breath"]
    ],
}
const weedle = {
    quality: 1.25,
    defense: 10,
    accurate: 10,
    power: 10,
    dodge: 10,
    type: "normal",
    attacks: [
        ["cut"],
        ["cut", "punch"],
        ["cut", "punch", "shield"],
        ["cut", "punch", "shield"]
    ],
}

module.exports = {
    scyther,
    hitmonlee,
    bulbasaur,
    caterpie,
    charmander,
    eevee,
    ekans,
    geodude,
    metapod,
    pidgey,
    pikachu,
    ponyta,
    psyduck,
    raticate,
    rattata,
    spearow,
    squirtle,
    voltorb,
    vulpix,
    weedle
}