import './PageStyles.css';

const Products = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Our Products</h1>
        <p>Discover our premium timber collection and construction materials.</p>
        
        <div className="products-grid">
          <div className="product-card">
            <h3>Premium Hardwood</h3>
            <p>High-quality hardwood timber for construction and furniture making.</p>
          </div>
          
          <div className="product-card">
            <h3>Softwood Lumber</h3>
            <p>Versatile softwood options perfect for framing and general construction.</p>
          </div>
          
          <div className="product-card">
            <h3>Engineered Wood</h3>
            <p>Modern engineered solutions for contemporary building projects.</p>
          </div>
          
          <div className="product-card">
            <h3>Specialty Woods</h3>
            <p>Exotic and specialty wood varieties for unique applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;