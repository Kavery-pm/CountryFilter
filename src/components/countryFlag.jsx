import "../../src/style.css";
const CountryFlag = () => {
  return (
    <>
        <div className="wrapper">
        <ul className="card-grid">
        
            <li >
              <article className="card" >
                <div className="card-image">
                   
                  <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' />
                </div>
                <div className="card-content">
                  <h2 className="card-name">Germany</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>10000</span>
                    </li>
                    <li>
                      Region: <span>Europe</span>
                    </li>
                    <li>
                      Capital: <span>Berlin</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
        
        </ul>
        </div>
    </>
  );
};
export default CountryFlag;
