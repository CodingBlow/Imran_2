import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Wind, 
  Wrench, 
  FileText, 
  Snowflake, 
  Flame, 
  Target, 
  Eye,
  CheckCircle2
} from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-3">
            <Snowflake className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-semibold">About Us</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Smart Eager Aircon
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            A trusted residential and commercial air conditioning service provider in Gurugram, 
            delivering premium rental, repair, maintenance, and AMC solutions.
          </p>
        </div>

        {/* Who We Are - Full Width */}
        <Card className="p-8 mb-8 border border-gray-200 shadow-md bg-white">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Snowflake className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Smart Eager Aircon specializes in providing Window and Split Air Conditioners on rent 
                along with comprehensive repair, maintenance, and AMC services. Our expertise extends 
                to Ductable, VRV, and VRF air conditioning systems for both residential and industrial clients. 
                We ensure reliable, high-performance, and energy-efficient solutions that simplify your life 
                while saving time and operational costs. Our commitment: 
                <span className="font-bold text-blue-600"> "Quality Service at Reasonable Prices."</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Three Column Services */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          
          {/* Rental */}
          <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Rental Services</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Across Gurugram</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Window AC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Split AC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <Flame className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Oil Room Heater (OFR)</span>
              </li>
            </ul>
          </Card>

          {/* Repair */}
          <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Repair & Maintenance</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Expert Technicians</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Window AC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Split AC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Ductable AC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>VRV & VRF Systems</span>
              </li>
            </ul>
          </Card>

          {/* AMC */}
          <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">AMC Plans</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Annual Contracts</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Comprehensive AMC</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Non-Comprehensive</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Semi-Comprehensive</span>
              </li>
            </ul>
          </Card>

        </div>

        {/* Mission & Vision - Compact Two Column */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <Card className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To enhance everyday comfort by delivering high-quality, energy-efficient, 
              and user-friendly air conditioning solutions for homes and industries, 
              while maintaining exceptional service standards and customer satisfaction.
            </p>
          </Card>

          <Card className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become a leading name in the air conditioning industry by redefining 
              comfort, innovation, and environmental responsibility. We aspire to create 
              a sustainable future powered by advanced and eco-friendly technologies.
            </p>
          </Card>

        </div>

      </div>
    </section>
  );
};