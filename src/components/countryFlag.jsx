import { useEffect, useState } from "react";
import "../../src/style.css";

const CountryFlag = () => {
  const [countryDetails, setcountryDetails] = useState([]);
  useEffect(() => {
    fetchCountryData();
  }, []);
  const fetchCountryData = async () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setcountryDetails(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <div className="wrapper">
      <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              
              
            />
            <span className="sr-only">Search Country</span>
          </label>
          <div className="select">
            <select
           
              className="custom-select"
              aria-label="Filter Countries By Countries"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {countryDetails.map((countryItem) => (
            <li>
              <article className="card">
                <div className="card-image">
                  <img
                    src={countryItem.flags.png}
                    alt={countryItem.name.common}
                  />
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
