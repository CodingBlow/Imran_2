import React from "react";
import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Smart Eager Aircon
          </h1>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            A trusted residential and commercial air conditioning service provider 
            in Gurugram, delivering premium rental, repair, maintenance, and AMC 
            solutions with unmatched service quality.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="p-10 shadow-md border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Smart Eager Aircon specializes in providing Window and Split Air 
            Conditioners on rent along with comprehensive repair, maintenance, 
            and AMC services. Our expertise extends to Ductable, VRV, and VRF 
            air conditioning systems for both residential and industrial clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We ensure reliable, high-performance, and energy-efficient solutions 
            that simplify your life while saving time and operational costs. 
            Our commitment is reflected in our promise:
            <span className="font-semibold text-gray-900">
              {" "}“Quality Service at Reasonable Prices.”
            </span>
          </p>
        </Card>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          <Card className="p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-5 text-blue-700">
              Rental Services (Across Gurugram)
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Window Air Conditioner</li>
              <li>• Split Air Conditioner</li>
              <li>• Oil Room Heater (OFR)</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-5 text-blue-700">
              Repair & Maintenance
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Window Air Conditioner</li>
              <li>• Split Air Conditioner</li>
              <li>• Ductable Air Conditioner</li>
              <li>• VRV & VRF Systems</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-md border border-gray-100 md:col-span-2">
            <h3 className="text-xl font-semibold mb-5 text-blue-700">
              Annual Maintenance Contracts (AMC)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>• Comprehensive AMC</div>
              <div>• Non-Comprehensive AMC</div>
              <div>• Semi-Comprehensive (Hybrid)</div>
            </div>
          </Card>

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">

          <Card className="p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To enhance everyday comfort by delivering high-quality, 
              energy-efficient, and user-friendly air conditioning solutions 
              for homes and industries, while maintaining exceptional service 
              standards and customer satisfaction.
            </p>
          </Card>

          <Card className="p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading name in the air conditioning industry by 
              redefining comfort, innovation, and environmental responsibility. 
              We aspire to create a sustainable future powered by advanced and 
              eco-friendly technologies.
            </p>
          </Card>

        </div>

      </div>
    </section>
  );
};