import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, MapPin, Calendar, DollarSign, Users, Clock } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  // Mock farmer profile data
  const farmer = {
    name: "Rajesh Singh",
    location: "Sonipat, Haryana",
    farmSize: "25 acres",
    crops: ["Wheat", "Rice", "Mustard"],
    memberSince: "2023",
    totalJobs: 12,
    rating: 4.6,
  };

  // Mock job postings
  const jobPostings = [
    {
      id: "1",
      title: "Wheat Harvesting",
      taskType: "Harvesting",
      date: "2024-04-15",
      duration: "3 Days",
      location: "Sonipat, Haryana",
      wage: 180,
      workersNeeded: 4,
      status: "Open",
      applicants: 8,
      description: "Need experienced workers for wheat harvesting. Modern equipment available.",
    },
    {
      id: "2",
      title: "Field Preparation",
      taskType: "Ploughing",
      date: "2024-03-20",
      duration: "2 Days",
      location: "Sonipat, Haryana",
      wage: 150,
      workersNeeded: 2,
      status: "Completed",
      applicants: 5,
      description: "Field preparation for next crop season.",
    },
    {
      id: "3",
      title: "Irrigation System Setup",
      taskType: "Irrigation",
      date: "2024-04-10",
      duration: "1 Day",
      location: "Sonipat, Haryana",
      wage: 200,
      workersNeeded: 3,
      status: "In Progress",
      applicants: 6,
      description: "Installation and setup of drip irrigation system.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-agricultural-light text-primary";
      case "In Progress":
        return "bg-harvest-gold/20 text-earth-brown";
      case "Completed":
        return "bg-field-green/20 text-field-green";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account and job postings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-card border-0">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{farmer.name}</CardTitle>
                    <div className="flex items-center text-white/90 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {farmer.location}
                    </div>
                    <div className="text-sm text-white/80">
                      Member since {farmer.memberSince}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Farm Size</div>
                    <div className="font-medium">{farmer.farmSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Primary Crops</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {farmer.crops.map((crop) => (
                        <Badge 
                          key={crop} 
                          variant="outline"
                          className="text-xs border-agricultural-green/30 text-field-green"
                        >
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                    <div className="flex items-center">
                      <span className="text-harvest-gold mr-1">★</span>
                      <span className="font-medium">{farmer.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        ({farmer.totalJobs} jobs)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="jobs">Job Postings</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>

              <TabsContent value="jobs" className="space-y-4">
                {jobPostings.map((job) => (
                  <Card key={job.id} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {job.description}
                          </p>
                        </div>
                        <Badge className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(job.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>₹{job.wage}/hr</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{job.workersNeeded} workers</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          {job.applicants} applications received
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            View Applications
                          </Button>
                          {job.status === "Open" && (
                            <Button variant="outline" size="sm">
                              Edit Job
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="stats" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="shadow-soft border-0">
                    <CardHeader>
                      <CardTitle className="text-lg">Job Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Jobs Posted</span>
                          <span className="font-medium">{farmer.totalJobs}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Completed Jobs</span>
                          <span className="font-medium">10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Active Jobs</span>
                          <span className="font-medium">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Success Rate</span>
                          <span className="font-medium text-field-green">95%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft border-0">
                    <CardHeader>
                      <CardTitle className="text-lg">Monthly Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jobs This Month</span>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Spent</span>
                          <span className="font-medium">₹12,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Workers Hired</span>
                          <span className="font-medium">9</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg. Rating Given</span>
                          <span className="font-medium">4.7 ★</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;