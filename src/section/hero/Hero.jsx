import HeroLeft from "../../component/hero/left/HeroLeft"
import HeroRight from "../../component/hero/right/HeroRight"

const Hero = () => {
  return (
    <section id="hero">
      <div className="circle"></div>
      {/* <div className="circle2"></div> */}
      <HeroLeft/>
      <HeroRight/>
    </section>
  )
}

export default Hero