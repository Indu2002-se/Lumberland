import './BestSellers.css';
import product1 from '../assets/MERANTI PAR TIMBER.jpeg';
import product2 from '../assets/bintangor  thin plywood.jpeg';
import product3 from '../assets/Blockboard - 18mm Block Board Sheets Hardwood Face Timber Blockboard Sheets.jpeg';
import product4 from '../assets/Hardwood Decking Timber vs Pine Decking.jpeg';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Meranti PAR Timber",
      image: product1,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Bintangor Thin Plywood",
      image: product2,
      badge: "Premium Quality"
    },
    {
      id: 3,
      name: "Hardwood Blockboard",
      image: product3,
      badge: "Popular Choice"
    },
    {
      id: 4,
      name: "Hardwood Decking Timber",
      image: product4,
      badge: "Durable"
    }
  ];

  return (
    <section className="best-sellers" id="products">
      <div className="container">
        <div className="section-header">
          <h2>OUR PRODUCTS</h2>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
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
    </section>
  );
};

export default BestSellers;