import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, Building2, Clock } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedAt: string;
  description: string;
  requirements: string[];
  skills: string[];
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Environmental Policy Analyst",
    company: "Green Earth Foundation",
    location: "New York, NY",
    type: "Full-time",
    postedAt: "2 days ago",
    description: "We are seeking an experienced Environmental Policy Analyst to help shape our sustainability initiatives...",
    requirements: [
      "Bachelor's degree in Environmental Science or related field",
      "3+ years of experience in policy analysis",
      "Strong research and analytical skills"
    ],
    skills: ["Policy Analysis", "Environmental Science", "Research", "Data Analysis"]
  },
  {
    id: "2",
    title: "Sustainable Energy Engineer",
    company: "EcoPower Solutions",
    location: "Remote",
    type: "Full-time",
    postedAt: "1 week ago",
    description: "Join our team to develop innovative sustainable energy solutions...",
    requirements: [
      "Master's degree in Engineering",
      "Experience with renewable energy systems",
      "Project management skills"
    ],
    skills: ["Renewable Energy", "Engineering", "Project Management", "Sustainability"]
  },
  // Add more mock jobs as needed
];

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = mockJobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Opportunities</h1>
          <p className="text-muted-foreground">Find your next career in sustainability and environmental conservation</p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                    {job.type}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.postedAt}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Job Details */}
          <div className="sticky top-6">
            {selectedJob ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{selectedJob.title}</h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Building2 className="w-5 h-5" />
                  <span>{selectedJob.company}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedJob.location}</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedJob.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                Select a job to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage; 