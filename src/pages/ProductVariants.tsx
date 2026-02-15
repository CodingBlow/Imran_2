import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductVariants = () => {
  const { id } = useParams<{ id: string }>();

  // ================= AC PAGE =================
  if (id === "ac") {
    const windowAC = products["window-ac"];
    const splitAC = products["split-ac"];

    return (
      <div className="container mx-auto px-4 py-6 mt-16 max-w-7xl">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          AC On Rent Variants
        </h1>

        {/* WINDOW AC */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-200">
              <span className="bg-gray-900 text-white px-4 py-2 inline-block rounded-t-md">
                {windowAC.name}
              </span>
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <VariantSection productKey="window-ac" product={windowAC} />
          </div>
        </div>

        {/* SPLIT AC */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-200">
              {/* You can change bg-gray-900 to bg-blue-600 here if you want it to be blue! */}
              <span className="bg-gray-900 text-white px-4 py-2 inline-block rounded-t-md">
                {splitAC.name}
              </span>
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <VariantSection productKey="split-ac" product={splitAC} />
          </div>
        </div>

        {/* ===== CUSTOM AC DESCRIPTION ===== */}
        <ACDescription />

      </div>
    );
  }

  // ================= HEATER PAGE =================
  if (id === "room-heater") {
    const heater = products["room-heater"];

    return (
      <div className="container mx-auto px-4 py-6 mt-16 max-w-7xl">

        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          {heater.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <VariantSection productKey="room-heater" product={heater} />
        </div>

        {/* ===== CUSTOM HEATER DESCRIPTION ===== */}
        <HeaterDescription description={heater.description} />

      </div>
    );
  }

  return <div>Product not found</div>;
};


// ================= VARIANT SECTION =================
const VariantSection = ({ productKey, product }: any) => (
  <>
    {Object.entries(product.variants).map(([variant, data]: any) => {
      const prices = Object.entries(data).filter(([k]) => k !== "image");
      const minPrice = Math.min(...prices.map(([_, p]) => Number(p)));

      return (
        <Card key={variant} className="group hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">
          <CardContent className="p-4">
            {/* Image Container */}
            <div className="w-full h-44 bg-gray-50 rounded-lg mb-3 flex items-center justify-center p-3">
              <img
                src={data.image}
                alt={variant}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{variant}</h3>
              <div>
                <p className="text-xs text-gray-500">Starting from</p>
                <p className="text-xl font-bold text-gray-900">₹{minPrice}</p>
              </div>
              <Link to={`/product/${productKey}/buy?variant=${variant}`} className="block">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 transition-colors">
                  Rent Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </>
);


// ================= AC DESCRIPTION =================
const ACDescription = () => (
  <div className="mt-8 bg-white border border-gray-200 p-6 rounded-lg">

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Left Column */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-900 pb-2 border-b border-gray-200">
          Rental AC Advantages
        </h2>

        <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Lower Upfront Costs:</strong> Renting eliminates the need for a significant initial investment required to purchase and install a new AC unit.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Hassle-Free Maintenance:</strong> Most rental agreements include maintenance, servicing, and repairs at no extra cost.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Flexibility:</strong> You can rent an AC for the specific duration you need (e.g., just for the summer months).
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Latest Technology:</strong> Rental companies allow you to use modern, energy-efficient models with advanced features.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Quick Installation:</strong> Many providers offer prompt delivery and professional installation services.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">No Depreciation:</strong> Unlike purchased assets, renting means you are not concerned about resale value.
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 pb-2 border-b border-gray-200">
          Why Smart Eager Aircon?
        </h3>

        <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Flexible Rental Terms:</strong> Rent for short-term or long-term periods based on your needs.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Affordable Pricing:</strong> Enjoy top-quality air conditioning from Smart Eager without the high upfront cost.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Hassle-Free Installation:</strong> Quick and professional installation by Smart Eager team without transportation charge.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Free Maintenance & Repairs:</strong> Smart Eager does not take extra costs for regular maintenance and services.
          </li>

          <li className="pl-4 border-l-2 border-gray-300 py-0.5">
            <strong className="text-gray-900">Wide Range:</strong> Choose from window and split ACs based on your cooling requirements.
          </li>
        </ul>
      </div>

    </div>

  </div>
);


// ================= HEATER DESCRIPTION =================
const HeaterDescription = ({ description }: any) => (
  <div className="mt-8 bg-white border border-gray-200 p-6 rounded-lg space-y-5">

    <h2 className="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">
      Key Advantages of Oil-Filled Room Heaters
    </h2>

    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Consistent, Lasting Warmth:</strong> Because they use oil to store heat, these heaters continue to radiate warmth for a long time after being switched off.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Silent Operation:</strong> Lacking fans or moving parts, they operate silently, making them perfect for bedrooms and study rooms.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Does Not Dry Out the Air:</strong> Unlike fan heaters, oil-filled radiators maintain a healthier, more comfortable environment.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Energy-Efficient:</strong> They often feature thermostats that automatically turn the unit off when temperature is reached.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Safe for Long-Term Use:</strong> The heating element is enclosed, making them safer for homes with children or pets.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Low Maintenance:</strong> The oil is permanently sealed inside, so it never needs to be refilled or replaced.
      </li>

      <li className="pl-4 border-l-2 border-gray-300 py-0.5">
        <strong className="text-gray-900">Even Heating:</strong> The design ensures uniform heat distribution throughout the room.
      </li>
    </ul>

    {description && (
      <div className="mt-6 pt-4 border-t border-gray-200 space-y-1.5 text-sm text-gray-700">
        <p><strong className="text-gray-900">Condition:</strong> {description.condition}</p>
        <p><strong className="text-gray-900">Brand:</strong> {description.brand}</p>
        <p><strong className="text-gray-900">Maintenance:</strong> {description.maintenance}</p>
      </div>
    )}

  </div>
);