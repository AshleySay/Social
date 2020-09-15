import React, {useState} from 'react'

export default function FreeformForm () {

    const [LineData, setLineData] = useState('')

    function handleChange (event) {
        const {name, value} = event.target
        setLineData({...LineData, [name]: value})
    }

    return(
        <div>
            <br/>
            <textarea className="form-control"
                    placeholder="Write a haiku without rules!"
                    type="text"
                    name="LineData"
                    value={LineData.value}
                    onChange={handleChange}  />
        </div>
    )
}