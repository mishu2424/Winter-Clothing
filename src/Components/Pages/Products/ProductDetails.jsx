import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const productCollections = useLoaderData();
  const SelectedCollection = productCollections.find(
    (selectedProduct) => selectedProduct.id === Number(productId)
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Product Image Section */}
      <div
        className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-end p-6 text-white"
        style={{ backgroundImage: `url(${SelectedCollection?.thumbnail_img})` }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold">{SelectedCollection?.title}</h2>
          <p className="text-sm">{SelectedCollection?.description}</p>
          <button className="mt-3 px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            SHOP NOW
          </button>
        </div>
        {SelectedCollection?.isSale && (
            <span className="bg-red-500 text-white px-3 py-1 text-sm absolute top-4 left-4">
              {SelectedCollection.sale}
            </span>
          )}
      </div>

      {/* Product Details Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Product Details</h3>
          <p className="text-gray-700 mt-2">
            <strong>Category:</strong> {SelectedCollection?.category}
          </p>
          <p className="text-gray-700">
            <strong>Division:</strong> {SelectedCollection?.division}
          </p>
          <p className="text-gray-700">
            <strong>Material:</strong> {SelectedCollection?.material}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong> {SelectedCollection?.status}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> ${SelectedCollection?.price}
          </p>
          <p className="text-gray-700">
            <strong>Rating:</strong> ⭐ {SelectedCollection?.rating} / 5
          </p>
        </div>

        {/* Sizes & Colors */}
        <div>
          <h3 className="text-xl font-semibold">Available Options</h3>
          <p className="text-gray-700 mt-2">
            <strong>Sizes:</strong> {SelectedCollection?.sizes.join(", ")}
          </p>
          <p className="text-gray-700">
            <strong>Colors:</strong>{" "}
            {SelectedCollection?.colors.map((color, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 mr-2 text-white rounded-md"
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {color}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
