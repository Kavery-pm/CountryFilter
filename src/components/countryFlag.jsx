import { useEffect, useState } from "react";
import "../../src/style.css";
import { DATA } from "../models/countryData";
const CountryFlag = () => {
    const [countryDetails, setcountryDetails] = useState([]);
useEffect(() => {
 fetchCountryData();
}, [])
const fetchCountryData = async()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result)
       setcountryDetails(result)
       
      },
      (error) => {
        console.log(error)
      }
    );
}
  return (
    <>
        <div className="wrapper">
        <ul className="card-grid">
        {countryDetails.map(countryItem=>(
            <li >
              <article className="card" >
                <div className="card-image">
                   
                  <img src={countryItem.flags.png} alt={countryItem.name.common}/>
                </div>
                <div className="card-content">
                  <h2 className="card-name">{countryItem.name.common}</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>{countryItem.name.population}</span>
                    </li>
                    <li>
                      Region: <span>{countryItem.region}</span>
                    </li>
                    <li>
                      Capital: <span>{countryItem.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
        ))}
            
        
        </ul>
        </div>
    </>
  );
};
export default CountryFlag;
