import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Heart, 
  Search, 
  Filter, 
  Share2, 
  Calendar, 
  Video, 
  Image, 
  FileText, 
  Star, 
  Target, 
  Award, 
  Building2, 
  Lightbulb, 
  Handshake,
  Clock,
  MapPin,
  MessageSquare
} from "lucide-react";

interface Campaign {
  id: string;
  title: string;
  description: string;
  type: "video" | "infographic" | "story";
  startDate: string;
  endDate: string;
  participants: number;
  status: "ongoing" | "upcoming";
  image: string;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: number;
  duration: string;
  points: number;
  participants: number;
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface Business {
  id: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  type: "workshop" | "training" | "mentorship";
  startDate: string;
  duration: string;
  spots: number;
  registered: number;
  price: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Breaking Glass Ceilings",
    description: "A campaign celebrating women's achievements in leadership and inspiring future generations",
    type: "video",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    participants: 1234,
    status: "ongoing",
    image: "https://ui-avatars.com/api/?name=Breaking+Glass+Ceilings"
  },
  {
    id: "2",
    title: "Women in Tech",
    description: "Highlighting women's contributions to technology and encouraging more girls to pursue STEM careers",
    type: "infographic",
    startDate: "2024-05-01",
    endDate: "2024-05-31",
    participants: 856,
    status: "upcoming",
    image: "https://ui-avatars.com/api/?name=Women+in+Tech"
  }
];

const mockQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Women's History Month",
    description: "Test your knowledge about women's contributions to history",
    questions: 10,
    duration: "15 min",
    points: 100,
    participants: 2345,
    difficulty: "intermediate"
  },
  {
    id: "2",
    title: "Gender Equality Basics",
    description: "Learn about fundamental concepts of gender equality",
    questions: 8,
    duration: "10 min",
    points: 80,
    participants: 1890,
    difficulty: "beginner"
  }
];

const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "EcoFashion Boutique",
    owner: "Sarah Chen",
    category: "Fashion",
    description: "Sustainable fashion brand promoting ethical manufacturing",
    location: "New York, NY",
    rating: 4.8,
    reviews: 156,
    image: "https://ui-avatars.com/api/?name=EcoFashion+Boutique"
  },
  {
    id: "2",
    name: "TechStart Solutions",
    owner: "Maria Rodriguez",
    category: "Technology",
    description: "Innovative tech solutions for small businesses",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 89,
    image: "https://ui-avatars.com/api/?name=TechStart+Solutions"
  }
];

const mockPrograms: Program[] = [
  {
    id: "1",
    title: "Leadership Development",
    description: "Comprehensive training program for women in leadership positions",
    type: "training",
    startDate: "2024-04-15",
    duration: "8 weeks",
    spots: 30,
    registered: 25,
    price: "$299"
  },
  {
    id: "2",
    title: "Digital Skills Workshop",
    description: "Learn essential digital skills for the modern workplace",
    type: "workshop",
    startDate: "2024-04-20",
    duration: "2 days",
    spots: 20,
    registered: 15,
    price: "$149"
  }
];

const GenderEqualityPage = () => {
  const [selectedTab, setSelectedTab] = useState<"campaigns" | "quizzes" | "business" | "programs" | "community" | "resources" | "mentorship">("campaigns");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Women Empowerment</h1>
          <p className="text-muted-foreground">Empowering women through education, support, and community</p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setSelectedTab("campaigns")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "campaigns"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Awareness Campaigns
          </button>
          <button
            onClick={() => setSelectedTab("quizzes")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "quizzes"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Quizzes & Challenges
          </button>
          <button
            onClick={() => setSelectedTab("business")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "business"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Women Entrepreneurs
          </button>
          <button
            onClick={() => setSelectedTab("programs")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "programs"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Skill Development
          </button>
          <button
            onClick={() => setSelectedTab("community")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "community"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Community Support
          </button>
          <button
            onClick={() => setSelectedTab("resources")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "resources"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Resource Library
          </button>
          <button
            onClick={() => setSelectedTab("mentorship")}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === "mentorship"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mentorship
          </button>
        </div>

        {/* Awareness Campaigns Section */}
        {selectedTab === "campaigns" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCampaigns.map((campaign) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Megaphone className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{campaign.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{campaign.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === "ongoing" 
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    }`}>
                      {campaign.status === "ongoing" ? "Ongoing" : "Upcoming"}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {campaign.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{campaign.startDate} - {campaign.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{campaign.participants} participants</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                      Participate
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quizzes & Challenges Section */}
        {selectedTab === "quizzes" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockQuizzes.map((quiz) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{quiz.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{quiz.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{quiz.participants} participants</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{quiz.points} points</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Start Quiz
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Women Entrepreneurs Section */}
        {selectedTab === "business" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockBusinesses.map((business) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{business.name}</h2>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">Owner: {business.owner}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{business.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {business.category}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{business.rating} ({business.reviews} reviews)</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skill Development Programs Section */}
        {selectedTab === "programs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{program.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                      {program.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Starts: {program.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{program.registered}/{program.spots} spots filled</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{program.price}</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Community Support Section */}
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

            {/* Success Stories */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Success Stories</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Share your journey and inspire others
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Share Your Story
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Resource Library Section */}
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
                  <option value="articles">Articles</option>
                  <option value="research">Research Papers</option>
                  <option value="toolkits">Toolkits</option>
                  <option value="case-studies">Case Studies</option>
                </select>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Gender Equality Guide</h2>
                </div>
                <p className="text-muted-foreground mb-4">Comprehensive guide to understanding gender equality</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                    Toolkit
                  </span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Download
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Video className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Women in Leadership</h2>
                </div>
                <p className="text-muted-foreground mb-4">Video series featuring successful women leaders</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                    Video Series
                  </span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Watch Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Image className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Infographic Collection</h2>
                </div>
                <p className="text-muted-foreground mb-4">Visual resources on women's rights and empowerment</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                    Infographics
                  </span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  View Collection
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Mentorship Section */}
        {selectedTab === "mentorship" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Become a Mentor */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Become a Mentor</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Share your expertise and help others grow
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Apply as Mentor
                </button>
              </div>
            </div>

            {/* Find a Mentor */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Find a Mentor</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Connect with experienced professionals in your field
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Search Mentors
                </button>
              </div>
            </div>

            {/* Mentorship Programs */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Mentorship Programs</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Join structured mentorship programs for specific industries
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  View Programs
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GenderEqualityPage; 