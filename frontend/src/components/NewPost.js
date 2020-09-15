import React, {useState} from "react"
import './styles.css'
import EnglishForm from "./EnglishForm"
import FreeformForm from "./FreeformForm"


export default function NewPost() {
    const [radio, setRadio] = useState("5-7-5")


    return(
        <div className="form-group border border-primary rounded">
            <div >
                <label className="form-check-label" htmlFor="5-7-5">5-7-5:</label>
                <input className="form-check"
                        name="5-7-5"
                        type="radio"
                        checked={radio === "5-7-5"}
                        value="5-7-5"
                        onChange={function(event) {setRadio(event.target.value)}}></input>
                <br/>
                <label className="form-check-label" htmlFor="Freeform">Freeform:</label>
                <input className="form-check"
                        name="Freeform"
                        type="radio"
                        checked={radio === "Freeform"}
                        value="Freeform"
                        onChange={function(event) {setRadio(event.target.value)}}></input>
                <br/>
                {(radio === "5-7-5") ? <EnglishForm />: <FreeformForm />}
            </div>
        </div>
    )
}