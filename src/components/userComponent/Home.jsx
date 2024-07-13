import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { allProductList } from '../../api/userApi';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await allProductList();
        console.log(res); // Check the response structure in the console
        setProducts(res?.data?.products || []);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const toggleWishlist = (productId) => {
    console.log(`Toggled wishlist for product ${productId}`);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <button
                onClick={() => toggleWishlist(product._id)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition-colors duration-300"
              >
                <FaHeart className="text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">{product.description}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600">₹{product.price}</span>
                <div className="flex">{renderRatingStars(product.rating)}</div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
