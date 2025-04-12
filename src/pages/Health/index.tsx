import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Calendar, Brain, Video, Trophy, Target, Users, Phone, Mail, Clock, Search } from "lucide-react";

interface HealthTracker {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

interface HealthChallenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  duration: string;
  reward: string;
  progress: number;
}

interface MentalHealthResource {
  id: string;
  title: string;
  type: "article" | "meditation" | "exercise";
  duration?: string;
  description: string;
}

interface TelemedicineProvider {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  availability: string;
  image: string;
}

const mockHealthTrackers: HealthTracker[] = [
  {
    id: "1",
    name: "Fitness Tracker",
    icon: <Activity className="w-6 h-6" />,
    description: "Track your physical activity, steps, and workouts",
    stats: [
      { label: "Steps Today", value: "8,547" },
      { label: "Calories Burned", value: "420" },
      { label: "Active Minutes", value: "45" }
    ]
  },
  {
    id: "2",
    name: "Pregnancy Tracker",
    icon: <Heart className="w-6 h-6" />,
    description: "Monitor your pregnancy journey and milestones",
    stats: [
      { label: "Weeks Pregnant", value: "24" },
      { label: "Due Date", value: "Dec 15, 2024" },
      { label: "Next Checkup", value: "In 2 weeks" }
    ]
  },
  {
    id: "3",
    name: "Period Tracker",
    icon: <Calendar className="w-6 h-6" />,
    description: "Track your menstrual cycle and symptoms",
    stats: [
      { label: "Cycle Length", value: "28 days" },
      { label: "Next Period", value: "In 12 days" },
      { label: "Fertile Window", value: "In 5 days" }
    ]
  }
];

const mockChallenges: HealthChallenge[] = [
  {
    id: "1",
    title: "10K Steps Daily",
    description: "Walk 10,000 steps every day for 30 days",
    participants: 245,
    duration: "30 days",
    reward: "500 points",
    progress: 75
  },
  {
    id: "2",
    title: "Hydration Challenge",
    description: "Drink 8 glasses of water daily",
    participants: 189,
    duration: "14 days",
    reward: "300 points",
    progress: 45
  },
  {
    id: "3",
    title: "Mindfulness Streak",
    description: "Complete 10 minutes of meditation daily",
    participants: 156,
    duration: "21 days",
    reward: "400 points",
    progress: 60
  }
];

const mockMentalHealthResources: MentalHealthResource[] = [
  {
    id: "1",
    title: "Understanding Anxiety",
    type: "article",
    description: "Learn about common anxiety triggers and coping strategies",
  },
  {
    id: "2",
    title: "Guided Meditation",
    type: "meditation",
    duration: "10 min",
    description: "Calm your mind with this guided meditation session",
  },
  {
    id: "3",
    title: "Breathing Exercise",
    type: "exercise",
    duration: "5 min",
    description: "Simple breathing techniques for stress relief",
  }
];

const mockTelemedicineProviders: TelemedicineProvider[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    rating: 4.8,
    experience: "12 years",
    availability: "Available Today",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Nutritionist",
    rating: 4.9,
    experience: "8 years",
    availability: "Next: 2 PM",
    image: "https://ui-avatars.com/api/?name=Michael+Chen"
  },
  {
    id: "3",
    name: "Dr. Emily Brown",
    specialty: "Mental Health",
    rating: 4.7,
    experience: "15 years",
    availability: "Available Tomorrow",
    image: "https://ui-avatars.com/api/?name=Emily+Brown"
  }
];

const HealthPage = () => {
  const [selectedTab, setSelectedTab] = useState<"trackers" | "challenges" | "mental" | "telemedicine">("trackers");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Health & Well-being</h1>
          <p className="text-muted-foreground">Track your health journey and access comprehensive wellness resources</p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-border">
          <button
            onClick={() => setSelectedTab("trackers")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "trackers"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Health Trackers
          </button>
          <button
            onClick={() => setSelectedTab("challenges")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "challenges"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Health Challenges
          </button>
          <button
            onClick={() => setSelectedTab("mental")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "mental"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mental Health
          </button>
          <button
            onClick={() => setSelectedTab("telemedicine")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === "telemedicine"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Telemedicine
          </button>
        </div>

        {/* Health Trackers Section */}
        {selectedTab === "trackers" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {mockHealthTrackers.map((tracker) => (
              <motion.div
                key={tracker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {tracker.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{tracker.name}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{tracker.description}</p>
                <div className="space-y-2">
                  {tracker.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-sm font-medium text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  View Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Health Challenges Section */}
        {selectedTab === "challenges" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockChallenges.map((challenge) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-foreground">{challenge.title}</h2>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                      {challenge.reward}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Join Challenge
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mental Health Resources Section */}
        {selectedTab === "mental" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockMentalHealthResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {resource.type === "article" ? (
                        <Brain className="w-6 h-6" />
                      ) : resource.type === "meditation" ? (
                        <Target className="w-6 h-6" />
                      ) : (
                        <Activity className="w-6 h-6" />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{resource.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  {resource.duration && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{resource.duration}</span>
                    </div>
                  )}
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    {resource.type === "article" ? "Read Article" : "Start Now"}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Emergency Resources */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Emergency Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Crisis Helpline</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 confidential support for those in crisis
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <Phone className="w-5 h-5" />
                    <span>1-800-273-8255</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Find a Therapist</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with licensed mental health professionals
                  </p>
                  <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Search Directory
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Telemedicine Section */}
        {selectedTab === "telemedicine" && (
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
                  placeholder="Search doctors by name or specialty..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <select className="p-2 rounded-lg border border-input bg-background">
                <option>All Specialties</option>
                <option>General Physician</option>
                <option>Mental Health</option>
                <option>Nutritionist</option>
                <option>Dermatologist</option>
              </select>
            </div>

            {/* Doctor Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockTelemedicineProviders.map((provider) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-foreground">{provider.name}</h2>
                      <p className="text-muted-foreground">{provider.specialty}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-primary">★ {provider.rating}</span>
                        <span className="text-sm text-muted-foreground">• {provider.experience}</span>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{provider.availability}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                      Book Appointment
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors">
                      <Video className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HealthPage; 