import './country.css'

function Country(props) {
    return(
        <li className="site-hero__item country">
  <header className="country__header">
    <img className="country__flag" src={props.imgSrc} alt="flag" width={264} height={160} />
  </header>
  <div className="country__body">
    <h3 className="country__heading">
      <a className="country__heading-link" href="country-single.html">{props.title}</a>
    </h3>
    <p className="country__population country__txt">
      Population: <span className="country__population-count country__info">{props.pop} </span>
    </p>
    <p className="country__region country__txt">
      Region: <span className="country__region-place country__info">{props.reg}</span>
    </p>
    <p className="country__capital country__txt">
      Capital: <span className="country__capital-name country__info">{props.cap}</span>
    </p>
  </div>
</li>

    )
}

export default Country

