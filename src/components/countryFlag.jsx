import { useEffect, useState } from "react";
import "../../src/style.css";

const CountryFlag = () => {
  const [countryDetails, setcountryDetails] = useState([]);
  const [selectedRegion, setselectedRegion] = useState("All");
  const [query, setquery] = useState('');
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
  const filterRegionHandler = (event) => {
    console.log(event.target.value);
    setselectedRegion(event.target.value);
  };
  const filterAndSearchCountries = (countryData) => {
    return countryData.filter((item) => {
      if (selectedRegion === 'All') {
        return item.name.common.toLowerCase().includes(query.toLowerCase())
      }
      if(selectedRegion !== 'All'){
       if(item.region === selectedRegion){
        return item;
       }
      }
    });
  };
  return (
    <>
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
            value={query}
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              onChange={(event)=>setquery(event.target.value)}
            />
            <span className="sr-only">Search Country</span>
          </label>
          <div className="select">
            <select
              value={selectedRegion}
              className="custom-select"
              aria-label="Filter Countries By Countries"
              onChange={filterRegionHandler}
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
          {filterAndSearchCountries(countryDetails).map((countryItem) => (
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
