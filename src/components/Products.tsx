import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {

  const getRedirectPath = (id) => {
    if (id === "maintenance") return "/maintenance";
    if (id === "ac-amc-service") return "/AC-AMC-Service";
    return `/product/${id}/variants`;
  };

  const getButtonText = (id) => {
    if (id === "maintenance") return "Maintenance";
    if (id === "ac-amc-service") return "AMC Service";
    return "Rent Now";
  };

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
    {
      id: "maintenance",
      name: products["maintenance"].name,
      image: products["maintenance"].image,
    },
    {
      id: "ac-amc-service",
      name: products["ac-amc-service"].name,
      image: products["ac-amc-service"].image,
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* 4 Cards Per Row on PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {displayProducts.map((product) => (
            <Card
              key={product.id}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl bg-white"
            >
              <CardContent className="p-5 flex flex-col items-center">

                {/* Smaller Image */}
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Smaller Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  {product.name}
                </h3>

                <Link
                  to={getRedirectPath(product.id)}
                  className="w-full"
                >
                  <button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-all duration-300">
                    {getButtonText(product.id)}
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