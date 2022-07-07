import Country from "./country"

function Countries() {
    let countries = [
        {src: 'https://flagcdn.com/w320/cy.png', name: 'Cyprus', population: 1207361, region: 'Europe', capital: 'Nicosia'},
        {src: 'https://flagcdn.com/w320/mk.png', name: 'North Macedonia', population: 2077132, region: 'Europe', capital: 'Skopje'},
        {src: 'https://flagcdn.com/w320/ye.png', name: 'Yemen', population: 29825968, region: 'Asia', capital: "Sana'a"},
        {src: 'https://flagcdn.com/w320/sx.png', name: 'Sint Maarten', population: 40812, region: 'Americas', capital: "Philipsburg"}
        ]

        return(
        <>
        {countries.map(country => <Country imgSrc = {country.src} title = {country.name} pop = {country.population} cap = {country.capital} reg = {country.region} />)}
        </>)
}

export default Countries