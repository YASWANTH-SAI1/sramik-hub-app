import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Phone, Mail, MessageSquare } from "lucide-react";

const WorkerProfile = () => {
  const { id } = useParams();

  // Mock worker data - in real app this would come from API
  const worker = {
    id: id,
    name: "Ravi Kumar",
    age: 32,
    experience: "5 years",
    skills: ["Ploughing", "Harvesting", "Irrigation", "Crop Management", "Machine Operation"],
    availability: "Available",
    hourlyWage: 150,
    location: "Ludhiana, Punjab",
    rating: 4.8,
    totalJobs: 156,
    description: "Experienced agricultural worker with expertise in modern farming techniques. Proficient in operating various farm machinery and has extensive knowledge of crop management practices.",
    phone: "+91 98765 43210",
    email: "ravi.kumar@example.com",
    languages: ["Hindi", "Punjabi", "English"],
    certifications: ["Organic Farming Certified", "Machine Operation License"],
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link to="/workers">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Workers
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-primary">Worker Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{worker.name}</CardTitle>
                    <div className="flex items-center text-white/90 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {worker.location}
                    </div>
                    <div className="flex items-center text-white/90">
                      <span className="text-harvest-gold mr-1">★</span>
                      <span className="font-medium mr-2">{worker.rating}</span>
                      <span className="text-sm">({worker.totalJobs} jobs completed)</span>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30"
                  >
                    {worker.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Age</div>
                    <div className="font-medium">{worker.age} years</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                    <div className="font-medium">{worker.experience}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Hourly Rate</div>
                    <div className="font-bold text-primary">₹{worker.hourlyWage}/hr</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                    <div className="font-medium">{worker.languages.join(", ")}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground">{worker.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="border-agricultural-green/30 text-field-green"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Certifications</h3>
                  <div className="space-y-2">
                    {worker.certifications.map((cert) => (
                      <div key={cert} className="flex items-center">
                        <Star className="h-4 w-4 text-harvest-gold mr-2" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            {/* Contact Card */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                  <span className="text-sm">{worker.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                  <span className="text-sm">{worker.email}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Card */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Job Request
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Worker
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monday - Friday</span>
                    <Badge variant="outline" className="text-xs">6 AM - 6 PM</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Saturday</span>
                    <Badge variant="outline" className="text-xs">6 AM - 4 PM</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sunday</span>
                    <Badge variant="secondary" className="text-xs">Not Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;