import {Hero} from "../components/Hero";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Brands } from "@/components/Brands";
import  ContactSection  from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <ContactSection/>
      <Brands />
    </div>
  );
};

export default Index;
