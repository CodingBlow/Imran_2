import { Wrench, Headset, ThumbsUp, BadgeCheck, CreditCard } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Free Repair & Maintenance",
      description: "Expert service included",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "Customer first approach",
    },
    {
      icon: BadgeCheck,
      title: "Free Installation",
      description: "Professional setup",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Safe & convenient",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
       
        {/* Services Grid - Figma Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-200/60 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-500" />
              
              <div className="relative flex flex-col items-center text-center space-y-3">
                {/* Icon Container - Figma Style */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-3.5 rounded-2xl group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Text Content - Figma Style */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};