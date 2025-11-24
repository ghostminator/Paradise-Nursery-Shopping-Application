import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 flex items-center gap-3">
            <Leaf className="h-16 w-16 text-primary" />
            <h1 className="text-6xl font-bold text-foreground">Paradise Nursery</h1>
          </div>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-xl text-foreground">
              Welcome to Paradise Nursery, where nature meets your home. We specialize in bringing 
              the beauty and serenity of plants into your living space. Our carefully curated 
              collection features a variety of houseplants, from air-purifying champions to 
              aromatic delights, each selected to thrive indoors and enhance your environment.
            </p>
            <p className="text-lg text-foreground/90">
              Whether you're a seasoned plant parent or just beginning your green journey, 
              we have the perfect plants to transform your space into a natural paradise.
            </p>
            
            <Link to="/products">
              <Button size="lg" className="mt-8 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
