// ⚠️ IMPORTS SAME AS YOURS (unchanged)
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import acInstallation from "../images/Screenshot 2026-02-12 224233.png";
import acServicing from "../images/Screenshot 2026-02-12 224512.png";
import acRepairing from "../images/Screenshot 2026-02-12 224521.png";
import acCopperPiping from "../images/copper.png";
import gasCharging from "../images/Gas.png";
import vrvVrf from "../images/vrv.png";
import bg from "../images/Hero.png";

export const Maintenance = () => {
  const { toast } = useToast();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    appliance: "",
    issue: "",
    image: null as File | null,
  });

  const appliances = [
    "Window Air Conditioner",
    "Split Air Conditioner",
    "Refrigerator",
    "Washing Machine",
    "Room Heater",
    "Geyser",
    "Ro Water Purifier",
    "Inverter",
  ];

  const services = [
    { id: 1, name: "AC Installation", image: acInstallation },
    { id: 2, name: "AC Servicing", image: acServicing },
    { id: 3, name: "AC Repairing", image: acRepairing },
    { id: 4, name: "AC Copper Piping", image: acCopperPiping },
    { id: 5, name: "Gas Charging", image: gasCharging },
    { id: 6, name: "VRV / VRF Maintenance", image: vrvVrf },
  ];

  const openPopup = (serviceName: string) => {
    setSelectedService(serviceName);
    setFormData({
      ...formData,
      appliance: serviceName,
      issue: `I want to book ${serviceName}`,
    });
    setIsPopupOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `
Service: ${selectedService}
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Appliance: ${formData.appliance}
Issue: ${formData.issue}
`;
    window.open(
      `https://wa.me/917419011364?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">

      {/* HERO IMAGE */}
      <div className="mb-12">
        <img src={bg} alt="AC Services Banner" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* NEW SECTION 1 */}
      <div className="mb-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Regular AC Maintenance Benefits
        </h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Improve Cooling</li>
          <li>• Reduce Electricity Bills</li>
          <li>• Increase AC's Lifespan</li>
          <li>• Minimize Breakdowns</li>
        </ul>
      </div>

      {/* SERVICES GRID (SMALL CARDS) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          We Offer Wide Range of Services
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card key={service.id} className="shadow-md hover:shadow-lg transition">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-36 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-center mb-3">
                  {service.name}
                </h3>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
                  onClick={() => openPopup(service.name)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* NEW SECTION 2 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Why Professional AC Installation Mandatory?
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Efficient Cooling: Proper installation ensures efficient cooling without overworking compressor.</li>
          <li>• Minimum Noise: Proper setup prevents unusual noises and vibrations.</li>
          <li>• Longer Life: Incorrect installation causes frequent breakdowns.</li>
          <li>• Electric Energy Savings: Professionally installed AC consumes less electricity.</li>
          <li>• Warranty Protection: Many brands require professional installation.</li>
        </ul>
      </div>

      {/* NEW SECTION 3 */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          AC Gas Refilling & Leak Repair Services by Smart Eager Aircon
        </h2>

        <ol className="space-y-4 text-gray-700">
          <li>
            I. AC Gas Level Inspection: Our technicians detect leaks & measure refrigerant levels.
          </li>
          <li>
            II. Leak Detection & Fixing: We use nitrogen pressure testing to fix copper pipe leaks.
          </li>
          <li>
            III. AC Gas Refilling: High-quality refrigerants refill ensuring cooling efficiency.
          </li>
          <li>
            IV. Result Testing: We test cooling capacity & compressor efficiency.
          </li>
          <li>
            V. Final Quality Check: Complete maintenance guidance to prevent future leaks.
          </li>
        </ol>
      </div>

      {/* POPUP FORM SAME AS YOURS (UNCHANGED STRUCTURE) */}
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule Service</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input placeholder="Full Name" required />
            <Input placeholder="Phone Number" required />
            <Input placeholder="Service Address" required />
            <Button type="submit" className="w-full bg-blue-600">
              Request Service
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* FOOTER TRUST */}
      <div className="mt-16 text-center py-8 bg-gray-50 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Trusted by 5,000+ Happy Customers
        </h3>
        <div className="flex justify-center gap-6 text-gray-600">
          <span>✓ 24/7 Support</span>
          <span>✓ Same-day Service</span>
          <span>✓ 90-Day Warranty</span>
        </div>
      </div>
    </div>
  );
};