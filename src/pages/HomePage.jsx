import CategorySection from '../components/CategorySection'
import FeaturedCarousel from '../components/FeaturedCarousel'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import ProductCarousel from '../components/ProductCarousel'
import BannerCarousel from '../components/BannerCarousel'
import ReviewSection from '../components/ReviewSection'

export default function HomePage() {
  return (
    <>
      <main className="app__main">
        <HeroSlider />
        <CategorySection />
        <FeaturedCarousel />
        <BannerCarousel />
        <ProductCarousel />
        <ReviewSection />
      </main>
      <Footer />
    </>
  )
}
