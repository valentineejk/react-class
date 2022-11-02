import { useState } from 'react'
import Axios from 'axios'


const PredictAge = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);

    const fetchAge = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data)
            console.log(res.data);
        })
    }

    return (
        <div>
            <input type="text" placeholder='Enter Name' onChange={ (e) => { setName(e.target.value) } } />
            <button onClick={ fetchAge }>Predict Age</button>
            <h1>Predicted Age: { age?.age }</h1>
            <h1>Predicted name: { age?.name }</h1>
            <h1>Predicted Age: { age?.count }</h1>

        </div>
    )
}

export default PredictAge
