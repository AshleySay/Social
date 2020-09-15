export default async function Syllables(props) {
    const regex = /[a-zA-Z]+\b/gm;
    let str = props
    let m;
    let array =[]

    if (str === '') {
        return 0
    }
    
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    for (const entry of m) {
        let response = await fetch(`https://api.datamuse.com/words?sp=${entry}&md=s&max=1`)
        let word = await response.json()
        array.push(word[0].numSyllables)
    }
    let sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(sum)
    return sum
}}