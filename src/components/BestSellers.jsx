import { useState } from 'react';
import './BestSellers.css';
import blockboard from '../assets/IMAGES/blockboard.png';
import fiberCinementBoard from '../assets/IMAGES/fiberCinemenBoard.png';
import filmeFacedPlywood from '../assets/IMAGES/filmeFacedPlywood.png';
import fancyPlywood from '../assets/IMAGES/fsancyPlywood.png';
import giRoofingSeet from '../assets/IMAGES/giroofingSeet.png';
import pineBoard from '../assets/IMAGES/pineBoard.png';
import plywood from '../assets/IMAGES/plywood.png';
import pvcFormBoard from '../assets/IMAGES/pvcFormBoard.png';

// Detail images for popup
import blockboardDetails from '../assets/IMAGES/blockboard_details.png';
import fiberCinementBoardDetails from '../assets/IMAGES/fiberCinementBoard_details.png';
import filmeFacedPlywoodDetails from '../assets/IMAGES/filmFacedPlywood_details.png';
import fancyPlywoodDetails from '../assets/IMAGES/fancyPlywood_details.png';
import giRoofingSeetDetails from '../assets/IMAGES/giRoofingSeet_detials.png';
import pineBoardDetails from '../assets/IMAGES/pineBoard_details.png';
import plywoodDetails from '../assets/IMAGES/plywood_details.png';
import pvcFormBoardDetails from '../assets/IMAGES/pvcFormBoard_details.png';

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Blockboard",
      image: blockboard,
      detailImage: blockboardDetails,
      badge: "Premium Quality",
      description: "High-quality blockboard made from solid wood blocks, perfect for furniture making and interior applications. Offers excellent strength and stability."
    },
    {
      id: 2,
      name: "Fiber Cinement Board",
      image: fiberCinementBoard,
      detailImage: fiberCinementBoardDetails,
      badge: "Durable",
      description: "Fire-resistant and moisture-proof fiber cement boards ideal for exterior cladding, roofing, and wet area applications. Long-lasting and weather resistant."
    },
    {
      id: 3,
      name: "Filme Faced Plywood",
      image: filmeFacedPlywood,
      detailImage: filmeFacedPlywoodDetails,
      badge: "Weather Resistant",
      description: "Premium film-faced plywood with smooth, waterproof surface. Perfect for concrete formwork, marine applications, and outdoor construction projects."
    },
    {
      id: 4,
      name: "Fancy Plywood",
      image: fancyPlywood,
      detailImage: fancyPlywoodDetails,
      badge: "Decorative",
      description: "Beautiful decorative plywood with attractive wood grain patterns. Ideal for furniture, cabinets, wall paneling, and interior design applications."
    },
    {
      id: 5,
      name: "G.I. Roofing Sheet",
      image: giRoofingSeet,
      detailImage: giRoofingSeetDetails,
      badge: "Strong",
      description: "Galvanized iron roofing sheets with excellent corrosion resistance. Perfect for residential and commercial roofing, offering durability and weather protection."
    },
    {
      id: 6,
      name: "Pine Board",
      image: pineBoard,
      detailImage: pineBoardDetails,
      badge: "Natural",
      description: "Premium quality pine lumber boards with natural wood beauty. Excellent for construction, furniture making, and DIY projects. Easy to work with and finish."
    },
    {
      id: 7,
      name: "Plywood",
      image: plywood,
      detailImage: plywoodDetails,
      badge: "Best Seller",
      description: "Versatile multi-layer plywood suitable for various construction and furniture applications. Strong, stable, and cost-effective solution for your projects."
    },
    {
      id: 8,
      name: "PVC Form Board",
      image: pvcFormBoard,
      detailImage: pvcFormBoardDetails,
      badge: "Waterproof",
      description: "Lightweight, waterproof PVC boards perfect for bathroom applications, kitchen cabinets, and areas exposed to moisture. Easy to clean and maintain."
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="best-sellers" id="products">
      <div className="container">
        <div className="section-header">
          <h2>OUR PRODUCTS</h2>
        </div>
        
        <div className="products-scroll-container">
          <div className="products-scroll">
            {products.concat(products).map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <div className="product-badge">{product.badge}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Popup */}
      {selectedProduct && (
        <div className="product-popup-overlay" onClick={closePopup}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <div className="popup-content">
              <div className="popup-image">
                <img src={selectedProduct.detailImage} alt={selectedProduct.name} />
              </div>
              <div className="popup-info">
                <h3>{selectedProduct.name}</h3>
                <div className="popup-badge">{selectedProduct.badge}</div>
                <p className="popup-description">{selectedProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestSellers;