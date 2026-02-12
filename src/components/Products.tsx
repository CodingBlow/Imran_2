import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {
  // Only show AC (combined) + Heater
  const displayProducts = [
    {
      id: "ac",
      name: "AC On Rent",
      image: products["window-ac"].image,
    },
    {
      id: "room-heater",
      name: products["room-heater"].name,
      image: products["room-heater"].image,
    },
  ];

  return (
    <section className="py-16" id="products">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {displayProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md rounded-xl"
            >
              <CardContent className="p-6 flex flex-col items-center">

                {/* Image */}
                <div className="w-full h-56 md:h-64 overflow-hidden rounded-md mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                  {product.name}
                </h3>

                {/* Button */}
                <Link
                  to={`/product/${product.id}/variants`}
                  className="w-full"
                >
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
    Rent Now
  </button>
                </Link>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};