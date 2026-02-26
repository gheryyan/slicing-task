
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        
        console.log("Data API:", response.data);

       
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        }
        
      } catch (err) {
        setError("Gagal memuat data produk");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { products, loading, error };
};
export default useFetch;