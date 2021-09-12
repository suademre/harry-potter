import { getData } from "./fetch-use-data"

//fetch
export function fetchExample() {
    fetch('http://hp-api.herokuapp.com/api/characters')
        .then(res => res.json())
        .then(allData => {
            console.log('got allData');
            getData(allData)
            console.log('Echtes Ende');
        })
    
    console.log('Ende');
}