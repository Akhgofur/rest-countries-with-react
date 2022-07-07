import './site-hero.css'
import SiteForm from '../site-form/site-form'
import Countries from '../country/countries'

function SiteHero() {
    return (
       <section className="site-hero">
  <h2 className="visually-hidden">Countries</h2>
    <SiteForm></SiteForm>
  <ul className="site-hero__list">
      <Countries></Countries>
  </ul>
</section>
    )
}

export default SiteHero