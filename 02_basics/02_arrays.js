const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marval_heros.push(dc_heros)
//console.log(marval_heros)
//console.log(marval_heros[3][1])

const allHeros = marval_heros.concat(dc_heros)
//console.log(allHeros)

const all_new_Heros = [...marval_heros, ...dc_heros]  //sprade
//console.log(all_new_Heros)

const another_array = [1, 2, 3, [4,5,6], 7, [8,9,10, [11,12,13]]] 
const real_another_array = another_array.flat(Infinity); // flat convert another_aray in a single array
//console.log(real_another_array);

//console.log(Array.isArray("ayush"))
//console.log(Array.from("ayush")) 
//console.log(Array.from({name: "ayush"})) //intresting question for interview

let score1 = 100
let score2 = 200
let score3 = 300

consloe.log(Array.of(score1, score2, score3));