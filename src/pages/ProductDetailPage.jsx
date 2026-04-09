import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ProductGallery from '../components/product-detail/ProductGallery'
import ProductPurchasePanel from '../components/product-detail/ProductPurchasePanel'
import ProductTabsSection from '../components/product-detail/ProductTabsSection'
import ProductTrustBar from '../components/product-detail/ProductTrustBar'
import './ProductDetailPage.css'

export default function ProductDetailPage() {
  return (
    <>
      <main className="product-page">
        <div className="product-page__wrap container">
          <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden>/</span>
            <Link to="/#products">Shop</Link>
            <span aria-hidden>/</span>
            <span className="product-page__crumb-current">70% Dark Himalayan Sea Salt Bar</span>
          </nav>

          <div className="product-page__grid">
            <ProductGallery />
            <ProductPurchasePanel />
          </div>

          <ProductTabsSection />
          <ProductTrustBar />
        </div>
      </main>
      <Footer />
    </>
  )
}
