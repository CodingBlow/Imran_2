import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductVariants = () => {
  const { id } = useParams<{ id: string }>();

  // ================= AC PAGE =================
  if (id === "ac") {
    const windowAC = products["window-ac"];
    const splitAC = products["split-ac"];

    return (
      <div className="container mx-auto px-4 py-16 mt-16">

        <h1 className="text-3xl font-bold text-center mb-10">
          AC On Rent Variants
        </h1>

        {/* WINDOW AC */}
        <h2 className="text-xl font-semibold mb-6">{windowAC.name}</h2>
        <VariantSection productKey="window-ac" product={windowAC} />

        {/* SPLIT AC */}
        <h2 className="text-xl font-semibold mt-12 mb-6">{splitAC.name}</h2>
        <VariantSection productKey="split-ac" product={splitAC} />

        {/* ===== CUSTOM AC DESCRIPTION ===== */}
        <ACDescription />

      </div>
    );
  }

  // ================= HEATER PAGE =================
  if (id === "room-heater") {
    const heater = products["room-heater"];

    return (
      <div className="container mx-auto px-4 py-16 mt-16">

        <h1 className="text-3xl font-bold mb-8">
          {heater.name}
        </h1>

        <VariantSection productKey="room-heater" product={heater} />

        {/* ===== CUSTOM HEATER DESCRIPTION ===== */}
        <HeaterDescription description={heater.description} />

      </div>
    );
  }

  return <div>Product not found</div>;
};


// ================= VARIANT SECTION =================
const VariantSection = ({ productKey, product }: any) => (
  <div className="flex flex-wrap -mx-2">
    {Object.entries(product.variants).map(([variant, data]: any) => {
      const prices = Object.entries(data).filter(([k]) => k !== "image");
      const minPrice = Math.min(...prices.map(([_, p]) => Number(p)));

      return (
        <div key={variant} className="w-full md:w-1/3 px-2 mb-6">
          <Card className="hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <img
                src={data.image}
                className="h-52 mx-auto object-contain"
              />
              <h3 className="mt-4 font-medium">{variant}</h3>
              <p className="text-sm text-gray-600">
                Starting from ₹{minPrice}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                to={`/product/${productKey}/buy?variant=${variant}`}
                className="w-full"
              >
                <Button className="w-full">Rent Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      );
    })}
  </div>
);


// ================= AC DESCRIPTION =================
const ACDescription = () => (
  <div className="mt-14 bg-gray-50 p-8 rounded-lg space-y-6 text-sm leading-relaxed">

    <h2 className="text-xl font-semibold">
      Rental AC Advantages Include:
    </h2>

    <ul className="list-disc pl-6 space-y-3">
      <li>
        <strong>Lower Upfront Costs:</strong> Renting eliminates the need for a significant initial investment required to purchase and install a new AC unit, making it a budget-friendly solution.
      </li>

      <li>
        <strong>Hassle-Free Maintenance and Repairs:</strong> Most rental agreements include maintenance, servicing, and repairs. The rental company is responsible for upkeep and addressing breakdowns, saving you from unexpected costs.
      </li>

      <li>
        <strong>Flexibility:</strong> You can rent an AC for the specific duration you need (e.g., just for the summer months).
      </li>

      <li>
        <strong>Access to the Latest Technology:</strong> Rental companies allow you to use modern, energy-efficient models with advanced features.
      </li>

      <li>
        <strong>Quick Installation and Support:</strong> Many providers offer prompt delivery and professional installation services, ensuring you get relief from the heat quickly and without any personal effort.
      </li>

      <li>
        <strong>Avoids Depreciation Concerns:</strong> Unlike purchased assets which lose value over time, renting means you are not concerned about resale value.
      </li>
    </ul>

    <h3 className="text-lg font-semibold mt-8">
      Why Select Smart Eager Aircon for AC on Rent?
    </h3>

    <ul className="list-disc pl-6 space-y-3">
      <li>
        <strong>Flexible Rental Terms:</strong> Rent for short-term or long-term periods based on your needs.
      </li>

      <li>
        <strong>Affordable Pricing:</strong> Enjoy top-quality air conditioning from Smart Eager without the high upfront cost.
      </li>

      <li>
        <strong>Hassle-Free Installation:</strong> Quick and professional installation by Smart Eager team without bearing any transportation charge.
      </li>

      <li>
        <strong>Free Maintenance & Repairs:</strong> Smart Eager does not take extra costs for regular maintenance, repair, and services.
      </li>

      <li>
        <strong>Extending Range of AC Units:</strong> Choose from window and split ACs based on your cooling requirements.
      </li>
    </ul>

  </div>
);


// ================= HEATER DESCRIPTION =================
const HeaterDescription = ({ description }: any) => (
  <div className="mt-14 bg-gray-50 p-8 rounded-lg text-sm leading-relaxed space-y-6">

    <h2 className="text-xl font-semibold">
      Key Advantages of Oil-Filled Room Heaters:
    </h2>

    <ul className="list-disc pl-6 space-y-4">
      <li>
        <strong>Consistent, Lasting Warmth:</strong>  
        Because they use oil to store heat, these heaters continue to radiate warmth for a long time after being switched off, providing steady heat without constant cycling.
      </li>

      <li>
        <strong>Silent Operation:</strong>  
        Lacking fans or moving parts, they operate silently, making them perfect for bedrooms, nurseries, and study rooms.
      </li>

      <li>
        <strong>Does Not Dry Out the Air:</strong>  
        Unlike fan heaters, oil-filled radiators do not burn oxygen or significantly reduce humidity levels, which helps maintain a healthier, more comfortable environment for skin and breathing.
      </li>

      <li>
        <strong>Energy-Efficient & Cost-Effective:</strong>  
        They often feature thermostats that automatically turn the unit off when a specific temperature is reached, saving on electricity.
      </li>

      <li>
        <strong>Safe for Long-Term Use:</strong>  
        The heating element is enclosed, and the exterior surface generally does not get hot enough to cause immediate burns upon brief contact, making them safer for homes with children or pets.
      </li>

      <li>
        <strong>Low Maintenance:</strong>  
        The oil is permanently sealed inside, so it never needs to be refilled or replaced.
      </li>

      <li>
        <strong>Even Heating:</strong>  
        The design ensures uniform heat distribution throughout the room, eliminating cold spots.
      </li>
    </ul>

    {/* Optional: Extra Info from products.ts if you still want it */}
    {description && (
      <div className="mt-8 space-y-3 border-t pt-6">
        <p><strong>Condition:</strong> {description.condition}</p>
        <p><strong>Brand:</strong> {description.brand}</p>
        <p><strong>Maintenance:</strong> {description.maintenance}</p>
      </div>
    )}

  </div>
);