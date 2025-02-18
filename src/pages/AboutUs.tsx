import React from "react";
import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">
        About Smart Eager Aircon
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Our Electronics & Appliance Rental Service and repair as
            well as maintenance. We offer a diverse range of essential rental
            services to make life easier and more convenient for our customers.
            Our services ensure that you get reliable and high-quality
            appliances whenever you need them.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Smart Eager Aircon is not only hassle-free but also saves your time,
            energy, and money. We provide "Quality service at reasonable
            prices!" allowing customers to book various home services easily.
          </p>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Our Rental Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
            <li>Air Conditioner (AC)</li>
            <li>Oil Room Heater (OFR)</li>
          </ul>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Home Appliance Repair
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
            <li>Air Conditioner</li>
            <li>Refrigerator</li>
            <li>Washing Machine</li>
            <li>RO Water Purifier</li>
            <li>Geyser</li>
            <li>Inverter</li>
          </ul>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Areas We Serve
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sectors:</strong> Sector 24, Sector 25, Sector 25A, Sector
            26, Sector 26A, Sector 27, Sector 28, Sector 30, Sector 31, Sector
            32, Sector 33, Sector 38, Sector 39, Sector 40, Sector 41, Sector
            42, Sector 43, Sector 44, Sector 45, Sector 46, Sector 47, Sector
            48, Sector 49, Sector 50, Sector 51, Sector 52, Sector 52A, Sector
            53, Sector 54, Sector 55, Sector 56, Sector 57, Sector 58, Sector
            59, Sector 60, Sector 61, Sector 62, Sector 63, Sector 63A, Sector
            63B, Sector 64, Sector 65, Sector 66, Sector 67, Sector 67A, Sector
            68, Sector 69, Sector 70, Sector 70A, Sector 71, Sector 72, Sector
            73, Sector 74.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Additional Service Locations:</strong> Sikandarpur, South
            City, DLF City, Sushant Lok, Palam Vihar, MG Road, Ardee City, Golf
            Course Road, Sohna Road, or North Sohna area, Manesar Road, etc.
          </p>
        </Card>
      </div>
    </div>
  );
};
