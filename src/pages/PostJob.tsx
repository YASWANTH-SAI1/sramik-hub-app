import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, MapPin, Clock, DollarSign, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PostJob = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    taskType: "",
    date: "",
    duration: "",
    location: "",
    wageOffered: "",
    workersNeeded: "",
    description: "",
    requirements: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.taskType || !formData.date || !formData.location || !formData.wageOffered) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to an API
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting is now live and workers can apply.",
    });

    // Reset form
    setFormData({
      taskType: "",
      date: "",
      duration: "",
      location: "",
      wageOffered: "",
      workersNeeded: "",
      description: "",
      requirements: "",
    });
  };

  const taskTypes = [
    "Ploughing",
    "Planting/Sowing",
    "Weeding",
    "Irrigation",
    "Fertilizing",
    "Pest Control",
    "Harvesting",
    "Crop Processing",
    "Machine Operation",
    "General Farm Work",
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Post a Job
          </h1>
          <p className="text-muted-foreground">
            Find skilled workers for your agricultural tasks
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card border-0">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-xl">Job Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Task Type */}
                <div className="space-y-2">
                  <Label htmlFor="taskType" className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Task Type *
                  </Label>
                  <Select value={formData.taskType} onValueChange={(value) => handleInputChange("taskType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select task type" />
                    </SelectTrigger>
                    <SelectContent>
                      {taskTypes.map((task) => (
                        <SelectItem key={task} value={task}>
                          {task}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      Start Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration
                    </Label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                        <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                        <SelectItem value="2-days">2 Days</SelectItem>
                        <SelectItem value="3-days">3 Days</SelectItem>
                        <SelectItem value="1-week">1 Week</SelectItem>
                        <SelectItem value="2-weeks">2 Weeks</SelectItem>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="Enter farm location (village, district, state)"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="shadow-soft"
                  />
                </div>

                {/* Wage and Workers Needed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="wageOffered" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Wage Offered (₹/hour) *
                    </Label>
                    <Input
                      id="wageOffered"
                      type="number"
                      placeholder="150"
                      value={formData.wageOffered}
                      onChange={(e) => handleInputChange("wageOffered", e.target.value)}
                      className="shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workersNeeded" className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Workers Needed
                    </Label>
                    <Input
                      id="workersNeeded"
                      type="number"
                      placeholder="2"
                      value={formData.workersNeeded}
                      onChange={(e) => handleInputChange("workersNeeded", e.target.value)}
                      className="shadow-soft"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the work to be done, field conditions, any special instructions..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="shadow-soft"
                    rows={4}
                  />
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Any specific skills, tools, or experience required..."
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    className="shadow-soft"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-lg py-3"
                  >
                    Post Job
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 shadow-soft border-0">
            <CardContent className="p-4">
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-2">📧 You'll receive applications via email</p>
                <p>💰 Payment terms can be discussed directly with workers</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostJob;