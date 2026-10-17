const landingData = {
  header: {
    logo: {
      name: "NovaFlow",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop",
    },

    navLinks: [
      { id: 1, label: "Home", href: "#home" },
      { id: 2, label: "Features", href: "#features" },
      { id: 3, label: "Testimonials", href: "#testimonials" },
      { id: 4, label: "Pricing", href: "#pricing" },
    ],

    buttons: [
      { id: 1, label: "Log in", href: "/login", variant: "secondary" },
      { id: 2, label: "Get Started", href: "/signup", variant: "primary" },
    ],
  },

  hero: {
    badge: "Your productivity, reimagined",

    title: "Make Space for Your Best Work",

    highlightedText: "Best Work",

    description:
      "Plan projects, collaborate with your team, and turn your biggest ideas into reality with one simple workspace.",

    buttons: [
      { id: 1, label: "Start for Free", href: "#signup", variant: "primary" },
      { id: 2, label: "Explore Features", href: "#features", variant: "secondary" },
    ],

    heroImage: {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=85",
      alt: "Modern workspace with desks and natural lighting",
    },

    stats: [
      { id: 1, value: "12k+", label: "Active Users" },
      { id: 2, value: "4.9/5", label: "User Rating" },
      { id: 3, value: "35%", label: "Time Saved" },
    ],
  },

  features: {
    sectionBadge: "POWERFUL FEATURES",

    title: "Everything You Need to Work Smarter",

    description:
      "Simple tools that help you stay organized, work together, and achieve more every day.",

    items: [
      {
        id: 1,
        icon: "📋",
        title: "Smart Task Management",
        description:
          "Organize tasks, set priorities, and track progress without losing sight of your goals.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        alt: "Team planning tasks and reviewing project documents",
      },
      {
        id: 2,
        icon: "🤝",
        title: "Team Collaboration",
        description:
          "Bring your team together, share ideas, and keep everyone aligned in one workspace.",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80",
        alt: "Colleagues collaborating in a team meeting",
      },
      {
        id: 3,
        icon: "📊",
        title: "Progress Analytics",
        description:
          "Understand performance with clear insights, progress reports, and useful metrics.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        alt: "Analytics dashboard on a computer",
      },
      {
        id: 4,
        icon: "⏰",
        title: "Time Tracking",
        description:
          "See where your time goes and focus on the work that matters most.",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80",
        alt: "Planner and calendar for organizing time",
      },
      {
        id: 5,
        icon: "☁️",
        title: "Cloud Workspace",
        description:
          "Access projects and files from anywhere and keep your work organized.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
        alt: "Developer workspace with a laptop",
      },
      {
        id: 6,
        icon: "🔒",
        title: "Secure by Design",
        description:
          "Keep your team's workspace protected with access controls and security features.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        alt: "Person working with digital tools on a laptop",
      },
    ],
  },

  testimonials: {
    sectionBadge: "CUSTOMER STORIES",

    title: "Loved by Teams That Get Things Done",

    description:
      "Discover how a better workflow can make everyday work feel easier.",

    items: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "BrightLabs",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
        rating: 5,
        quote:
          "NovaFlow has made managing our projects so much easier. Everyone knows what to do, and our team stays organized even during busy weeks.",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Startup Founder",
        company: "LaunchPeak",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
        rating: 5,
        quote:
          "We needed one place to manage tasks and collaborate. The simple interface helped us bring our workflow together without unnecessary complexity.",
      },
      {
        id: 3,
        name: "Ayesha Khan",
        role: "UI/UX Designer",
        company: "PixelCraft",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
        rating: 5,
        quote:
          "I love having our project details and team updates in one place. It makes collaboration smoother and gives me more time to focus on design.",
      },
    ],
  },
};

export default landingData;
