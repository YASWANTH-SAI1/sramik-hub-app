import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Plus, User, Info } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "/lovable-uploads/4de0bb0d-539f-4f3f-9494-d61a77ed9508.png";

const Home = () => {
  const navCards = [
    {
      title: "Find Workers",
      description: "Browse available farm labourers",
      icon: Users,
      path: "/workers",
      color: "bg-gradient-primary",
    },
    {
      title: "Post Job",
      description: "Post your labour requirements",
      icon: Plus,
      path: "/post-job",
      color: "bg-harvest-gold/20",
    },
    {
      title: "My Profile",
      description: "Manage your account and jobs",
      icon: User,
      path: "/profile",
      color: "bg-agricultural-light/30",
    },
    {
      title: "About Us",
      description: "Learn about Agro-Sramik",
      icon: Info,
      path: "/about",
      color: "bg-field-green/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <img 
              src={logoImage} 
              alt="Agro-Sramik Logo" 
              className="w-32 h-32 mx-auto rounded-full shadow-card"
            />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            AGRO-SRAMIK
          </h1>
          <p className="text-xl text-field-green font-semibold mb-4">
            HARVEST TOGETHER
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Connecting farmers with skilled agricultural labourers for efficient farming solutions
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {navCards.map((card) => (
            <Link key={card.path} to={card.path}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-soft">
                <CardContent className={`p-6 ${card.color} rounded-lg`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/90 rounded-full">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Workers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-field-green">200+</div>
            <div className="text-sm text-muted-foreground">Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-harvest-gold">1000+</div>
            <div className="text-sm text-muted-foreground">Jobs Done</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;