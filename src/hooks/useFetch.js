// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [products, setProducts] = useState([]); // Default harus array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        
        // CEK DI KONSOL: Lihat struktur asli datanya
        console.log("Data API:", response.data);

        // Jika response.data adalah array, langsung set. 
        // Jika response.data adalah object yang punya properti 'products', ambil itu.
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