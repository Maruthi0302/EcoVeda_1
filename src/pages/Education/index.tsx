import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Video, FileText, Image, Trophy, Users, Calendar, MapPin, Clock, Search, Filter, MessageSquare, BarChart, Award, Download } from "lucide-react";

interface EducationalResource {
  id: string;
  title: string;
  type: "ebook" | "video" | "article" | "infographic";
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  duration?: string;
  downloads?: number;
  rating: number;
}

interface LearningModule {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  progress: number;
  reward: string;
  enrolled: number;
}

interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  instructor: string;
  capacity: number;
  registered: number;
  topics: string[];
  price: string;
}

const mockResources: EducationalResource[] = [
  {
    id: "1",
    title: "Introduction to Sustainable Living",
    type: "ebook",
    category: "Sustainability",
    difficulty: "beginner",
    description: "A comprehensive guide to adopting sustainable practices in daily life",
    downloads: 1234,
    rating: 4.8
  },
  {
    id: "2",
    title: "Financial Literacy Basics",
    type: "video",
    category: "Finance",
    difficulty: "beginner",
    description: "Learn the fundamentals of personal finance and money management",
    duration: "45 min",
    rating: 4.6
  },
  {
    id: "3",
    title: "Climate Change Impact",
    type: "infographic",
    category: "Environment",
    difficulty: "intermediate",
    description: "Visual representation of climate change effects and solutions",
    rating: 4.9
  }
];

const mockModules: LearningModule[] = [
  {
    id: "1",
    title: "Sustainable Living 101",
    description: "Master the basics of sustainable living and eco-friendly practices",
    lessons: 12,
    duration: "6 weeks",
    progress: 75,
    reward: "500 points",
    enrolled: 245
  },
  {
    id: "2",
    title: "Financial Planning Essentials",
    description: "Learn to manage your finances and plan for the future",
    lessons: 8,
    duration: "4 weeks",
    progress: 30,
    reward: "400 points",
    enrolled: 189
  },
  {
    id: "3",
    title: "Community Leadership",
    description: "Develop skills to lead and inspire positive change in your community",
    lessons: 10,
    duration: "5 weeks",
    progress: 0,
    reward: "600 points",
    enrolled: 156
  }
];

const mockWorkshops: Workshop[] = [
  {
    id: "1",
    title: "Urban Gardening Workshop",
    date: "2024-04-15",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, 123 Green St",
    instructor: "Dr. Sarah Johnson",
    capacity: 30,
    registered: 25,
    topics: ["Container Gardening", "Composting", "Plant Care"],
    price: "Free"
  },
  {
    id: "2",
    title: "Financial Planning Workshop",
    date: "2024-04-20",
    time: "2:00 PM - 5:00 PM",
    location: "Library Hall, 456 Main St",
    instructor: "Michael Chen",
    capacity: 40,
    registered: 35,
    topics: ["Budgeting", "Investment Basics", "Saving Strategies"],
    price: "$20"
  }
];

const EducationPage = () => {
  const [selectedTab, setSelectedTab] = useState<"resources" | "modules" | "workshops" | "community" | "progress">("resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Education & Workshops</h1>
          <p className="text-muted-foreground">Access educational resources, join workshops, and track your learning journey</p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-border">
          <button
            onClick={() => setSelectedTab("resources")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "resources"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Free Resources
          </button>
          <button
            onClick={() => setSelectedTab("modules")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "modules"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Learning Modules
          </button>
          <button
            onClick={() => setSelectedTab("workshops")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "workshops"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Workshops
          </button>
          <button
            onClick={() => setSelectedTab("community")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "community"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Community
          </button>
          <button
            onClick={() => setSelectedTab("progress")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "progress"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Progress
          </button>
        </div>

        {/* Free Educational Resources Section */}
        {selectedTab === "resources" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="p-2 rounded-lg border border-input bg-background"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="finance">Finance</option>
                  <option value="environment">Environment</option>
                </select>
                <select
                  className="p-2 rounded-lg border border-input bg-background"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {resource.type === "ebook" ? (
                        <Book className="w-6 h-6" />
                      ) : resource.type === "video" ? (
                        <Video className="w-6 h-6" />
                      ) : resource.type === "article" ? (
                        <FileText className="w-6 h-6" />
                      ) : (
                        <Image className="w-6 h-6" />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{resource.title}</h2>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {resource.category}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {resource.difficulty}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    {resource.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    )}
                    {resource.downloads && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-primary">★ {resource.rating}</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Access Resource
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Learning Modules Section */}
        {selectedTab === "modules" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockModules.map((module) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-foreground">{module.title}</h2>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                      {module.reward}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Book className="w-4 h-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{module.enrolled} enrolled</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    {module.progress === 0 ? "Start Module" : "Continue Learning"}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Workshops Section */}
        {selectedTab === "workshops" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockWorkshops.map((workshop) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">{workshop.title}</h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Instructor: {workshop.instructor}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-foreground mb-2">Topics Covered:</h3>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{workshop.registered}/{workshop.capacity} registered</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{workshop.price}</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Community Section */}
        {selectedTab === "community" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Discussion Board */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Discussion Board</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>Share your thoughts and connect with others</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Start a Discussion
                </button>
              </div>
            </div>

            {/* Workshop Suggestions */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Workshop Suggestions</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Have an idea for a workshop? Share it with the community!
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Suggest a Workshop
                </button>
              </div>
            </div>

            {/* Volunteer as Instructor */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Volunteer as Instructor</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Share your expertise and help others learn
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Apply to Teach
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Dashboard Section */}
        {selectedTab === "progress" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Overall Progress */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Resources Completed</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Modules in Progress</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Workshops Attended</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Early Learner</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Workshop Master</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Community Leader</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <BarChart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Progress Champion</div>
                </div>
              </div>
            </div>

            {/* Learning History */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Learning History</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <div className="font-medium text-foreground">Sustainable Living 101</div>
                    <div className="text-sm text-muted-foreground">Completed on Apr 10, 2024</div>
                  </div>
                  <span className="text-primary">500 points</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <div className="font-medium text-foreground">Urban Gardening Workshop</div>
                    <div className="text-sm text-muted-foreground">Attended on Apr 5, 2024</div>
                  </div>
                  <span className="text-primary">200 points</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EducationPage; 