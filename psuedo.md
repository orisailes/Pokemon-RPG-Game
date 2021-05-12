this app will be my version to "Pokemon" game. The game includes different types of pokemon, attacks and maps that the user can travel the world and fight with another pokemon. The app will consider different case of damage evaluations, getting experience points and 2d user interfase.

Day1 :
* Write psuedo code
* collect resource from the internet such as pokemon back and forward png's, fight background, maps backgrounds, 2  different players picture collection and etc.

Day2 :
* take lesson and watch videos about rpg games and how to create player/pokemon class 
* write diagram of all the special pokemon's attack (limit it), and to store them in our DB. consider mutual attacks, only type attacks
* initiall react app and make fight route. add basic css such as background , message box, HP holder, pokemon holder and pictures.

Day3-4 :
* make two pokemon component:
one: user pokemon - recive as props back image(render by name), name,level,  stats object that contains HP, power, defense, attacks list(only puch ATM) and pokemon type
two: cp pokemon - recive as props front image,name,level (dependes on map), stats, attack list and pokemon type
* Start with the fight section. the fight route will render message box,background, two different pokemons component.
* make several test fights with different pokemons but with only one attack and with no algorithems.
* make animations that triggered on attacks

Day5 : 
* make different attack types, handle attacks algorithems considered the type
* make function "handle attack" that recive as arguments two objects -
 attacker's attack name&type,
  opponent's defense,hp,type 
  and return the attack result (hp left). the function will consider the two pokemons types.

* make function "handle end battle" that recieve:
 all of the user's pokemon stats,
 enemy's stats as well:
 - in case of win, the pokemon exp points will increase and if pokemons reach 100% exp points, he will level up and his stats will increase / (new attack will reveled?). save it in DB and state
 - the pokemon's hp will restored in the DB and in the state.
 - if the user is lose, he will back to map 1 and his hp will restored.(lose exp?)

Day 6:
* complete maths function 
* check for bugs 
* test all edge cases in battle
* complete todo lists

Day7-9 :
* make register page that make new users or login to an existing one, use validation so the user cant acces fight or map if he isnt logged in.
* when user is sign in, he will pick his first pokemon, choose boy/girl character, and begin in map number 1. only after the user pick pokemon and character, he gets a auth token, store all in the DB.
* learn useContext to store thte user pokemons objects and stats
* make several maps, using this video https://www.youtube.com/watch?v=DyWUW7Px1MQ
* map should include grass that will face new pokemon battle,original grass that the user can walk without face enemy pokemon
* there is user can walk only on grass, trail, or tall grass and cant walk on something else 
* the main map will contains pokeheal that will restore the user pokemon hp(it will be a button for this moment)
* each map will contain different enemies types and levels.
* before goin to map that is not the main, check if the user got a pokemon(validation - not hacking the url)
* add sounds to maps and battle

Day 10:
* add money and pokestore feature. the main map will contain store that the user can buy and choose him as main pokemon. the main pokemon is the only pokemon that can be in battle
* the user can but pokeballs 

Day 10-13 (extra):
* add maps, different animations, add pokemons, sounds, and the sky is the limit

