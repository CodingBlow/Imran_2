import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// IMPORTING ICONS FOR PROFESSIONAL LOOK
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Settings,
  Droplet,
  Wrench,
} from "lucide-react";

import acInstallation from "../images/Screenshot 2026-02-12 224233.png";
import acServicing from "../images/Screenshot 2026-02-12 224512.png";
import acRepairing from "../images/Screenshot 2026-02-12 224521.png";
import acCopperPiping from "../images/copper.png";
import gasCharging from "../images/Gas.png";
import vrvVrf from "../images/vrv.png";
import bg from "../images/Hero.png";

type Service = {
  id: number;
  name: string;
  image: string;
  details?: {
    title: string;
    steps: {
      step: number;
      title: string;
      desc: string;
    }[];
  };
};

export const Maintenance = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const services: Service[] = [
    { id: 1, name: "AC Installation", image: acInstallation },
    { id: 2, name: "AC Servicing", image: acServicing },
    { id: 3, name: "AC Repairing", image: acRepairing },
    { id: 4, name: "AC Copper Piping", image: acCopperPiping },
    {
      id: 5,
      name: "Gas Charging",
      image: gasCharging,
      details: {
        title: "AC Gas Refilling & Leak Repair Process",
        steps: [
          {
            step: 1,
            title: "Level Inspection",
            desc: "Detect leaks & measure refrigerant levels accurately.",
          },
          {
            step: 2,
            title: "Detection & Fixing",
            desc: "Use nitrogen pressure testing to fix copper pipe leaks.",
          },
          {
            step: 3,
            title: "AC Gas Refilling",
            desc: "High-quality refrigerants refill ensuring cooling efficiency.",
          },
          {
            step: 4,
            title: "Result Testing",
            desc: "Thoroughly test cooling capacity & compressor efficiency.",
          },
          {
            step: 5,
            title: "Final Quality Check",
            desc: "Complete maintenance guidance provided to prevent future leaks.",
          },
        ],
      },
    },
    { id: 6, name: "VRV / VRF Maintenance", image: vrvVrf },
  ];

  // ✅ Direct navigate with service params on button click — no popup
  const handleBookService = (service: Service) => {
    const params = new URLSearchParams({
      service: service.name,
      serviceId: String(service.id),
    });
    navigate(`/booking-confirmation?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-16 max-w-7xl font-sans antialiased text-gray-900">
      {/* PREMIUM HERO IMAGE */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
        <img
          src={bg}
          alt="AC Services Banner"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* SERVICES GRID (PREMIUM CARDS) */}
      <div className="mb-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Expert technicians ready to keep your appliances running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-44 bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-900 text-center mb-4">
                  {service.name}
                </h3>

                {/* BUTTON — direct navigate, no popup */}
                <button
                  onClick={() => handleBookService(service)}
                  className="mt-auto w-full h-10 text-sm font-semibold rounded-xl
  bg-[#0416c7] hover:bg-blue-900 text-white shadow-md"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TWO-COLUMN INFO SECTION */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Benefits Section */}
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3 text-gray-900">
            <div className="bg-[#0416c7]/10 p-2 rounded-lg">
              <Settings className="w-6 h-6 text-[#0416c7]" />
            </div>
            Regular Maintenance Benefits
          </h2>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Improve Cooling:</strong>{" "}
                Keeps your space chilled faster and efficiently.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">
                  Reduce Electricity Bills:
                </strong>{" "}
                Clean systems consume less power.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">
                  Increase AC's Lifespan:
                </strong>{" "}
                Prevents premature wear and tear.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Minimize Breakdowns:</strong>{" "}
                Catch small issues before they become costly.
              </span>
            </li>
          </ul>
        </div>

        {/* Professional Installation Section */}
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-extrabold mb-6 flex items-center gap-3 text-gray-900">
            <div className="bg-[#0416c7]/10 p-2 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-[#0416c7]" />
            </div>
            Why Pro Installation is Mandatory
          </h2>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Efficient Cooling:</strong>{" "}
                Ensures optimal airflow without overworking the compressor.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Minimum Noise:</strong> Proper
                setup prevents unusual vibrations and rattling.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Energy Savings:</strong> A
                well-installed unit consumes significantly less electricity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span>
                <strong className="text-gray-900">Warranty Protection:</strong>{" "}
                Many brands void warranties if not installed professionally.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* GAS REFILLING PROCESS (MODERN UI) */}
      {/* <div className="mb-10 bg-[#0416c7]/5 border border-[#0416c7]/10 p-8 md:p-10 rounded-3xl">
        <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3 text-gray-900">
          <Droplet className="w-7 h-7 text-[#0416c7]" />
          AC Gas Refilling & Leak Repair Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">
              1
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">
                Level Inspection
              </p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Detect leaks & measure refrigerant levels accurately.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">
              2
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">
                Detection & Fixing
              </p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Use nitrogen pressure testing to fix copper pipe leaks.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">
              3
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">
                AC Gas Refilling
              </p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                High-quality refrigerants refill ensuring cooling efficiency.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">
              4
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">Result Testing</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Thoroughly test cooling capacity & compressor efficiency.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start lg:col-span-2 hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">
              5
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">
                Final Quality Check
              </p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Complete maintenance guidance provided to prevent future leaks.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* PREMIUM TRUST BADGES */}
      {/* <div className="text-center py-8 bg-gray-900 text-white rounded-2xl shadow-xl mt-8">
        <h3 className="text-lg font-bold mb-4 tracking-wide">
          Trusted by 5,000+ Happy Customers
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
            <Zap className="w-4 h-4 text-yellow-400"/> 24/7 Support
          </span>
          <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
            <Wrench className="w-4 h-4 text-blue-400"/> Same-day Service
          </span>
          <span className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
            <ShieldCheck className="w-4 h-4 text-green-400"/> 90-Day Warranty
          </span>
        </div>
      </div> */}
    </div>
  );
};