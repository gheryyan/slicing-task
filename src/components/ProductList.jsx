import React from "react";
import useFetch from "../hooks/useFetch";

const ProductList = () => {

  const { products, loading, error } = useFetch(
    "https://lumoshive-api-furniture.vercel.app/api/products",
  );

  if (loading)
    return (
      <div className="text-center py-20">Memuat produk terbaik untukmu...</div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section id="products" className="px-10 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">All Product</h2>
        <p className="text-gray-500 mt-2 max-w-2xl">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
           
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-furni-teal font-bold">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Produk tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
