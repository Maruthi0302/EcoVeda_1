
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import DashboardHeader from './components/DashboardHeader';
import ProgressTracker from './components/ProgressTracker';
import RecentAchievements from './components/RecentAchievements';
import RecommendedCourses from './components/RecommendedCourses';
import QuickStats from './components/QuickStats';
import UpcomingEvents from './components/UpcomingEvents';
import QuickActions from './components/QuickActions';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
  const userProfile = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: null,
    role: "Community Member",
    joinDate: "Member since January 2023",
    level: 7,
    points: 850,
    nextLevel: 1000,
  };

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <DashboardHeader userProfile={userProfile} />
          <ProgressTracker userProfile={userProfile} />

          {/* Dashboard tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Dashboard content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content - 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <RecentAchievements />
              <RecommendedCourses />
            </div>

            {/* Sidebar - 1 column on large screens */}
            <div className="space-y-6">
              <QuickStats />
              <UpcomingEvents />
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
