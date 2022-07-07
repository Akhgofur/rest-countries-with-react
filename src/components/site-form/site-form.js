import './site-form.css'

function SiteForm() {
    return (
<form className="site-form js-site-form" action="https:echo.htmlacademy.ru" method="GET">
    <div className="site-form__input-wrapper">
      <span className="site-form__input-icon">
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="search">
            <path id="icon-search-black" fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="currentColor" />
          </g>
        </svg>
      </span>
      <input className="site-form__input site-form__inputs js-country-search" type="text" name="country" aria-label="country-input" placeholder="Search for a country…" />
    </div>
    <select className="site-form__select site-form__select--dark-mode site-form__inputs js-search-by-region" name="continents" aria-label="continents">
      <option value selected disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
</form>
    )
}

export default SiteForm