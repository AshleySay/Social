import React, {useState, useEffect} from 'react'

export default function EnglishForm () {
    const [LineData, setLineData] = useState({
        firstLine:'',
        secondLine:'',
        thirdLine:'',
    })

    const [Num, setNum] = useState(0)

    useEffect (() => {
        const Syllables = async () => {
        const regex = /[a-zA-Z]+\b/gm;
        let m;
        let array =[]

        if (LineData.firstLine === '') {
            setNum(0)
        }
        
        while ((m = regex.exec(LineData.firstLine)) !== null) {
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
        setNum(sum)
            }}
        Syllables()
        },[LineData])


    

    function handleChange (event) {
        const {name, value} = event.target
        setLineData({...LineData, [name]: value})
    }

    return(
        <div>
            <form>
                <label htmlFor="firstLine">First line: </label>
                <input name="firstLine"
                        value={LineData.firstLine}
                        placeholder="Enter Five Syllables."
                        className="form-control"
                        type="text"
                        onChange={handleChange} />
                <br/>
                <label htmlFor="secondLine">Second line: </label>
                <input name="secondLine"
                        placeholder="Enter Seven Syllables."
                        value={LineData.secondLine}
                        className="form-control"
                        type="text"
                        onChange={handleChange} />
                <br/>
                <label htmlFor="thirdLine">Third line: </label>
                <input name="thirdLine"
                        placeholder="Enter Five Syllables"
                        value={LineData.thirdLine}
                        className="form-control"
                        type="text"
                        onChange={handleChange} />
                <br/>
                <button className="btn btn-primary">Haiku!</button>
            </form>
            {Num}
        </div>
    )
}