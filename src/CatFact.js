import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const CatFact = () => {

    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     });
    const [catFacts, setCatFacts] = useState("");

    const fetchCat = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFacts(res.data.fact)
        });
    }
    useEffect(() => {

        fetchCat()
    }, []);



    return (
        <div>
            <button>Generate Cat Fact</button>
            <p>{ catFacts }</p>
        </div>
    )
}

export default CatFact