import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface Worker {
  id: string;
  name: string;
  skills: string[];
  availability: string;
  hourlyWage: number;
  location: string;
  experience: string;
  rating: number;
}

const WorkerList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const workers: Worker[] = [
    {
      id: "1",
      name: "Ravi Kumar",
      skills: ["Ploughing", "Harvesting", "Irrigation"],
      availability: "Available",
      hourlyWage: 150,
      location: "Punjab",
      experience: "5 years",
      rating: 4.8,
    },
    {
      id: "2", 
      name: "Sunita Devi",
      skills: ["Weeding", "Planting", "Fertilizing"],
      availability: "Available",
      hourlyWage: 120,
      location: "Haryana",
      experience: "3 years",
      rating: 4.6,
    },
    {
      id: "3",
      name: "Mukesh Singh",
      skills: ["Machine Operation", "Harvesting"],
      availability: "Busy",
      hourlyWage: 200,
      location: "Punjab",
      experience: "8 years",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Priya Sharma", 
      skills: ["Organic Farming", "Pest Control"],
      availability: "Available",
      hourlyWage: 180,
      location: "Uttarakhand",
      experience: "6 years",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Amit Patel",
      skills: ["Crop Management", "Soil Testing"],
      availability: "Available",
      hourlyWage: 160,
      location: "Gujarat",
      experience: "4 years",
      rating: 4.5,
    },
  ];

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    worker.availability.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Available Workers
          </h1>
          <p className="text-muted-foreground">
            Find skilled agricultural labourers for your farm
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, skill, or availability..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 shadow-soft"
          />
        </div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorkers.map((worker) => (
            <Link key={worker.id} to={`/worker/${worker.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">
                        {worker.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {worker.location}
                      </div>
                    </div>
                    <Badge 
                      variant={worker.availability === "Available" ? "default" : "secondary"}
                      className={worker.availability === "Available" ? "bg-agricultural-light text-primary" : ""}
                    >
                      {worker.availability}
                    </Badge>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {worker.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline"
                          className="text-xs border-agricultural-green/30 text-field-green"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {worker.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{worker.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        Experience
                      </div>
                      <span className="font-medium">{worker.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Hourly Rate
                      </div>
                      <span className="font-bold text-primary">₹{worker.hourlyWage}/hr</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <div className="flex items-center">
                        <span className="text-harvest-gold font-medium mr-1">★</span>
                        <span className="font-medium">{worker.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredWorkers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No workers found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerList;