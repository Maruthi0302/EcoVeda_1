
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Book, 
  Award, 
  Search, 
  Filter, 
  Code, 
  Sprout, 
  Scissors, 
  PenTool,
  ChevronRight,
  Star,
  Users
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Coding",
    level: "Beginner",
    duration: "8 weeks",
    enrolled: 1240,
    rating: 4.8,
    instructor: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    progress: 0,
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Code
  },
  {
    id: 2,
    title: "Sustainable Farming Techniques",
    category: "Farming",
    level: "Intermediate",
    duration: "12 weeks",
    enrolled: 890,
    rating: 4.9,
    instructor: "Maria Chen",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    description: "Master organic farming methods, crop rotation, and sustainable pest management.",
    progress: 35,
    tags: ["Organic", "Sustainable", "Agriculture"],
    icon: Sprout
  },
  {
    id: 3,
    title: "Traditional Handicraft Creation",
    category: "Handicrafts",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 760,
    rating: 4.7,
    instructor: "Raj Patel",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    description: "Learn to create beautiful handcrafted items using traditional techniques.",
    progress: 72,
    tags: ["Crafts", "Traditional", "Artisan"],
    icon: Scissors
  },
  {
    id: 4,
    title: "Advanced React Development",
    category: "Coding",
    level: "Advanced",
    duration: "10 weeks",
    enrolled: 1120,
    rating: 4.6,
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1633356122102-3fe60d47b2d9",
    description: "Master React hooks, context API, and advanced state management techniques.",
    progress: 15,
    tags: ["React", "JavaScript", "Frontend"],
    icon: Code
  },
  {
    id: 5,
    title: "Digital Illustration",
    category: "Design",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 980,
    rating: 4.7,
    instructor: "Jamie Lee",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea",
    description: "Create stunning digital illustrations using industry-standard tools and techniques.",
    progress: 48,
    tags: ["Design", "Digital Art", "Illustration"],
    icon: PenTool
  },
  {
    id: 6,
    title: "Hydroponic Gardening",
    category: "Farming",
    level: "Advanced",
    duration: "9 weeks",
    enrolled: 640,
    rating: 4.8,
    instructor: "David Miller",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac",
    description: "Build and maintain hydroponic systems for urban farming and sustainable food production.",
    progress: 0,
    tags: ["Hydroponics", "Urban Farming", "Sustainability"],
    icon: Sprout
  },
];

// Mock data for job recommendations
const jobRecommendations = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "EcoTech Solutions",
    location: "Remote",
    salary: "$60,000 - $80,000",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    match: 95,
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Organic Farm Manager",
    company: "Green Earth Farms",
    location: "Rural District",
    salary: "$45,000 - $65,000",
    skills: ["Agriculture", "Organic Farming", "Management"],
    match: 88,
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Handicraft Instructor",
    company: "Traditional Arts Center",
    location: "Cultural District",
    salary: "$40,000 - $55,000",
    skills: ["Weaving", "Pottery", "Teaching"],
    match: 92,
    posted: "3 days ago"
  }
];

// Mock data for certifications and rewards
const certificationsAndRewards = [
  {
    id: 1,
    title: "Web Development Certification",
    issuer: "EcoVeda Academy",
    date: "Upon completion",
    points: 1000,
    rewards: ["Digital Certificate", "LinkedIn Badge", "$100 Credit"]
  },
  {
    id: 2,
    title: "Sustainable Farming Badge",
    issuer: "EcoVeda Academy",
    date: "Upon completion",
    points: 1200,
    rewards: ["Digital Badge", "Community Recognition", "Seed Starter Kit"]
  },
  {
    id: 3,
    title: "Master Craftsperson Award",
    issuer: "EcoVeda Academy",
    date: "Upon competition of 3 courses",
    points: 1500,
    rewards: ["Physical Certificate", "Featured Profile", "Crafting Materials"]
  }
];

export default function SkillsHub() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();
  
  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleEnrollCourse = (courseId: number) => {
    toast({
      title: "Enrolled Successfully!",
      description: "You have been enrolled in the course. Check your dashboard to start learning.",
    });
  };

  const handleContinueCourse = (courseId: number) => {
    toast({
      description: "Resuming your course...",
    });
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || course.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Page header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Skill Development <span className="text-eco-green">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover courses in coding, farming, handicrafts, and more. Learn new skills, 
              earn certifications, and connect with job opportunities.
            </p>
          </motion.div>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search courses by name, category, or keyword..." 
                className="pl-10 w-full" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Options
            </Button>
          </div>

          {/* Category tabs */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="Coding">Coding</TabsTrigger>
              <TabsTrigger value="Farming">Farming</TabsTrigger>
              <TabsTrigger value="Handicrafts">Handicrafts</TabsTrigger>
              <TabsTrigger value="Design">Design</TabsTrigger>
              <TabsTrigger value="Business">Business</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Course listings - 2 columns on large screens */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Book className="mr-2 h-5 w-5 text-eco-green" />
                Available Courses
              </h2>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="bg-secondary">
                            {course.category}
                          </Badge>
                          <div className="flex items-center text-amber-500">
                            <Star className="fill-amber-500 h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{course.title}</CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          <Users className="h-3 w-3 mr-1" />
                          {course.enrolled} enrolled • {course.level} • {course.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {course.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {course.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5" />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-eco-green hover:bg-eco-green-dark"
                          onClick={() => course.progress > 0 ? handleContinueCourse(course.id) : handleEnrollCourse(course.id)}
                        >
                          {course.progress > 0 ? 'Continue Learning' : 'Enroll Now'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">No courses found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </Card>
              )}
            </div>

            {/* Sidebar - 1 column on large screens */}
            <div className="space-y-6">
              {/* Job Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Award className="mr-2 h-5 w-5 text-eco-green" />
                    AI Job Recommendations
                  </CardTitle>
                  <CardDescription>Based on your skills and interests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {jobRecommendations.map((job) => (
                    <div key={job.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{job.title}</h3>
                        <Badge className="bg-eco-green text-white">{job.match}% Match</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                      <p className="text-sm">{job.salary}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {job.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{job.posted}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto text-eco-green" asChild>
                    <Link to="/jobs">
                      View All Job Matches
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Certifications and Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Award className="mr-2 h-5 w-5 text-eco-green" />
                    Certifications & Rewards
                  </CardTitle>
                  <CardDescription>Complete courses to earn these rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificationsAndRewards.map((cert) => (
                    <div key={cert.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                      <div className="bg-muted p-2 rounded-md mt-2">
                        <p className="text-sm font-medium">Rewards:</p>
                        <ul className="text-xs list-disc pl-4 mt-1">
                          {cert.rewards.map((reward, idx) => (
                            <li key={idx}>{reward}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center mt-2 text-sm">
                        <span className="text-eco-green font-medium">{cert.points} XP</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto text-eco-green" asChild>
                    <Link to="/rewards">
                      View All Rewards
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
