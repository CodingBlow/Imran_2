import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// IMPORTING ICONS FOR PROFESSIONAL LOOK
import { CheckCircle2, ShieldCheck, Zap, Settings, Droplet, Wrench } from "lucide-react";

import acInstallation from "../images/Screenshot 2026-02-12 224233.png";
import acServicing from "../images/Screenshot 2026-02-12 224512.png";
import acRepairing from "../images/Screenshot 2026-02-12 224521.png";
import acCopperPiping from "../images/copper.png";
import gasCharging from "../images/Gas.png";
import vrvVrf from "../images/vrv.png";
import bg from "../images/Hero.png";

const telegramBotToken = "7925171133:AAHpqH3i9OE0sDKHGiW_EiKHYk7HpCcgKLI";
const telegramChatId = "YOUR_CHAT_ID"; // Replace with your chat ID

export const Maintenance = () => {
  const { toast } = useToast();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

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
      name: "",
      phone: "",
      address: "",
    });
    setIsPopupOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const message = `
🔧 New Service Booking Request

📋 Service: ${selectedService}
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📍 Address: ${formData.address}

⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your service request has been submitted. We'll contact you soon!",
        });
        setIsPopupOpen(false);
        setFormData({
          name: "",
          phone: "",
          address: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({
        title: "Error",
        description: "Failed to send request. Please call us at +91 7419011364",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-16 max-w-7xl font-sans antialiased text-gray-900">

      {/* PREMIUM HERO IMAGE */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
          <img src={bg} alt="AC Services Banner" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* TWO-COLUMN INFO SECTION */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        
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
              <span><strong className="text-gray-900">Improve Cooling:</strong> Keeps your space chilled faster and efficiently.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Reduce Electricity Bills:</strong> Clean systems consume less power.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Increase AC's Lifespan:</strong> Prevents premature wear and tear.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Minimize Breakdowns:</strong> Catch small issues before they become costly.</span>
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
              <span><strong className="text-gray-900">Efficient Cooling:</strong> Ensures optimal airflow without overworking the compressor.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Minimum Noise:</strong> Proper setup prevents unusual vibrations and rattling.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Energy Savings:</strong> A well-installed unit consumes significantly less electricity.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0416c7] shrink-0 mt-0.5" />
              <span><strong className="text-gray-900">Warranty Protection:</strong> Many brands void warranties if not installed professionally.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* SERVICES GRID (PREMIUM CARDS) */}
      <div className="mb-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-3 text-sm text-gray-500">Expert technicians ready to keep your appliances running smoothly.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-white rounded-xl"
            >
              <div className="overflow-hidden bg-gray-50 h-32 relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 z-10 transition-colors"></div>
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-sm font-bold text-center text-gray-900 mb-4 leading-snug">
                  {service.name}
                </h3>
                <Button
                  className="w-full bg-[#0416c7] hover:bg-blue-800 text-white shadow-md hover:shadow-lg transition-all rounded-lg text-xs font-semibold h-9"
                  onClick={() => openPopup(service.name)}
                >
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* GAS REFILLING PROCESS (MODERN UI) */}
      <div className="mb-14 bg-[#0416c7]/5 border border-[#0416c7]/10 p-8 md:p-10 rounded-3xl">
        <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3 text-gray-900">
          <Droplet className="w-7 h-7 text-[#0416c7]" />
          AC Gas Refilling & Leak Repair Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">1</div>
            <div>
              <p className="font-bold text-sm text-gray-900">Level Inspection</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Detect leaks & measure refrigerant levels accurately.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">2</div>
            <div>
              <p className="font-bold text-sm text-gray-900">Detection & Fixing</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Use nitrogen pressure testing to fix copper pipe leaks.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">3</div>
            <div>
              <p className="font-bold text-sm text-gray-900">AC Gas Refilling</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">High-quality refrigerants refill ensuring cooling efficiency.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">4</div>
            <div>
              <p className="font-bold text-sm text-gray-900">Result Testing</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Thoroughly test cooling capacity & compressor efficiency.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start lg:col-span-2 hover:shadow-md transition-shadow">
            <div className="bg-[#0416c7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">5</div>
            <div>
              <p className="font-bold text-sm text-gray-900">Final Quality Check</p>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Complete maintenance guidance provided to prevent future leaks.</p>
            </div>
          </div>

        </div>
      </div>

      {/* POPUP FORM */}
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Schedule {selectedService}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={sendToTelegram} className="space-y-5 mt-4">
            <Input 
              name="name"
              placeholder="Full Name *" 
              value={formData.name}
              onChange={handleInputChange}
              required 
              className="rounded-lg border-gray-300 focus:ring-[#0416c7]" 
            />
            <Input 
              name="phone"
              type="tel"
              placeholder="Phone Number *" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="rounded-lg border-gray-300 focus:ring-[#0416c7]" 
            />
            <Input 
              name="address"
              placeholder="Service Address *" 
              value={formData.address}
              onChange={handleInputChange}
              required 
              className="rounded-lg border-gray-300 focus:ring-[#0416c7]" 
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full font-semibold rounded-lg py-6 shadow-md transition-all ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-[#0416c7] hover:bg-blue-800 text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit Service Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* PREMIUM TRUST BADGES */}
      <div className="text-center py-8 bg-gray-900 text-white rounded-2xl shadow-xl mt-8">
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
      </div>
    </div>
  );
};