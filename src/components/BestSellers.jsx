import { useState, useRef, useEffect } from 'react';
import './BestSellers.css';
import blockboard from '../assets/IMAGES/blockboard.png';
import fiberCinementBoard from '../assets/IMAGES/fiberCinemenBoard.png';
import filmeFacedPlywood from '../assets/IMAGES/filmeFacedPlywood.png';
import fancyPlywood from '../assets/IMAGES/fsancyPlywood.png';
import giRoofingSeet from '../assets/IMAGES/giroofingSeet.png';
import pineBoard from '../assets/IMAGES/pineBoard.png';
import plywood from '../assets/IMAGES/plywood.png';
import pvcFormBoard from '../assets/IMAGES/pvcFormBoard.png';
import giRectangularHollow from '../assets/IMAGES/gi rectangular hollow section.jpg';
import giSquareHollow from '../assets/IMAGES/gi Square hollow section.jpg';
import mixHardWood from '../assets/IMAGES/mix hard wood.jpg';
import redMeranti from '../assets/IMAGES/red meranti.jpg';

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
  const [currentPosition, setCurrentPosition] = useState(0);
  const scrollRef = useRef(null);

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
    },
    {
      id: 9,
      name: "GI Rectangular Hollow Section",
      image: giRectangularHollow,
      detailImage: giRectangularHollow,
      badge: "Structural",
      description: "High-strength galvanized iron rectangular hollow sections perfect for structural applications, framework, and construction projects. Excellent corrosion resistance and durability."
    },
    {
      id: 10,
      name: "GI Square Hollow Section",
      image: giSquareHollow,
      detailImage: giSquareHollow,
      badge: "Versatile",
      description: "Premium galvanized iron square hollow sections ideal for construction frameworks, gates, railings, and structural applications. Superior strength and weather resistance."
    },
    {
      id: 11,
      name: "Mix Hard Wood",
      image: mixHardWood,
      detailImage: mixHardWood,
      badge: "Premium",
      description: "High-quality mixed hardwood lumber with excellent strength and beautiful natural grain patterns. Perfect for furniture making, flooring, and premium construction projects."
    },
    {
      id: 12,
      name: "Red Meranti",
      image: redMeranti,
      detailImage: redMeranti,
      badge: "Exotic",
      description: "Premium red meranti hardwood with rich reddish-brown color and fine grain. Excellent for high-end furniture, cabinetry, doors, and decorative woodworking projects."
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  // Update scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 350 + 80; // card width + gap
      scrollRef.current.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
  }, [currentPosition]);

  const scrollLeft = () => {
    setCurrentPosition(prev => {
      const newPosition = prev - 1;
      return newPosition < 0 ? products.length - 1 : newPosition;
    });
  };

  const scrollRight = () => {
    setCurrentPosition(prev => {
      const newPosition = prev + 1;
      const maxPosition = products.length;
      return newPosition >= maxPosition ? 0 : newPosition;
    });
  };

  return (
    <section className="best-sellers" id="products">
      <div className="container">
        <div className="section-header">
          <h2>OUR PRODUCTS</h2>
        </div>
        
        <div className="products-scroll-container">
          {/* Manual Control Buttons */}
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
          

          
          <div className="products-scroll" ref={scrollRef}>
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
          
          {/* Progress Indicators */}
          <div className="scroll-indicators">
            {products.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentPosition ? 'active' : ''}`}
                onClick={() => setCurrentPosition(index)}
              />
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