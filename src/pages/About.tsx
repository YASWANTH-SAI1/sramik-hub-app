import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";
import logoImage from "/lovable-uploads/4de0bb0d-539f-4f3f-9494-d61a77ed9508.png";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Connect Farmers & Workers",
      description: "Bridge the gap between farmers needing help and skilled agricultural workers seeking employment.",
    },
    {
      icon: Target,
      title: "Efficient Matching",
      description: "Smart matching system based on skills, location, and availability for optimal results.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Verified profiles and rating system ensure reliable and skilled workforce.",
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Strengthen rural communities by supporting both farmers and agricultural workers.",
    },
  ];

  const stats = [
    { number: "500+", label: "Registered Workers" },
    { number: "200+", label: "Active Farmers" },
    { number: "1000+", label: "Jobs Completed" },
    { number: "95%", label: "Success Rate" },
  ];

  const values = [
    {
      title: "Sustainability",
      description: "Supporting sustainable agricultural practices and rural livelihoods.",
    },
    {
      title: "Trust",
      description: "Building trust through transparent processes and verified profiles.",
    },
    {
      title: "Innovation",
      description: "Using technology to solve traditional agricultural challenges.",
    },
    {
      title: "Community",
      description: "Strengthening rural communities through collaborative farming.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-12">
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
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Agro-Sramik bridges the gap between farmers and agricultural labourers, 
              ensuring timely support for farming activities across rural India.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 shadow-card border-0">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize agricultural labor management by creating a seamless platform 
                that connects skilled farm workers with farmers in need, ensuring efficient 
                farming operations and sustainable rural livelihoods.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-agricultural-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-field-green">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Have questions or want to learn more about Agro-Sramik?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  📧 info@agro-sramik.com
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  📞 +91 98765 43210
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  🌐 www.agro-sramik.com
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Together, we're building a stronger agricultural community.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;