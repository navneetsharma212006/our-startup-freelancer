import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { CheckCircle2Icon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Enquiries", href: "#enquiries" },
];

export const testimonials = [
  {
    user: "Somaya sharma",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Vikesh Gupta",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Very Happy with the outcomes of my project . The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Premananda Singh Chouhan",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Rajesh Chakravarty",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at OSF was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Mohammed Asif",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Arun Parmar",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "WHO WE ARE ?",
    description:
      "OSF is a modern digital services agency built to support startups, entrepreneurs, and small businesses with affordable and high-quality tech & design solutions. We work with a distributed team of skilled freelancers, developers, designers, and AI engineers to deliver powerful digital products in record time.",
  },
  {
    icon: <Fingerprint />,
    text: "OUR MISSION",
    description:
      "To empower businesses with professional digital tools while giving young talent real opportunities to grow through hands‑on projects.",
  },
  {
    icon: <ShieldHalf />,
    text: "OUR VISION",
    description:
      "A world where every startup — no matter the budget — has access to high-quality websites, branding, and AI-powered solutions.",
  },
  {
    icon: <BatteryCharging />,
    text: "THE OSF MODEL",
    description:
      " We operate on a simple, modern structure: One Company, Skilled Freelancers, Reliable Project Management, High-quality Delivery",
  },
  {
    icon: <PlugZap />,
    text: "WHAT MAKES US DIFFERENT",
    description:
      "Startup-Friendly Pricing (No inflated agency fees), Rapid Delivery(within 5-10 days), Modern Design Standards(clean, minimal, professional design), Dedicated Team Support(Each client gets a team of 3–5 specialists assigned to their project.) ",
  },
  {
    icon: <GlobeLock />,
    text: "Our Core Values",
    description:
      "Transparency , Quality-first Approach , Creativity & Innovation , Honest Communication , Client Success",
  },
];


export const features2 = [
  {
    icon: <CheckCircle2Icon />,
    text: "Website Development",
    description:
      "We build fast, responsive, modern websites for startups, small businesses, creators, and agencies. Types of Websites We Build - Landing Pages, Portfolio Websites, Business Websites, Service-based Websites ,E-commerce Lite ,Dashboards & Admin Panels , Custom SaaS UI + Backend.",
  },
  {
    icon: <CheckCircle2Icon/>,
    text: " UI/UX Designing",
    description:
      "Your product’s success depends on great user experience. OSF creates clean, intuitive, professional UI designs. UI/UX Deliverables , Figma UI Screens , Web & Mobile App UI , Dashboards , Wireframes , Style Guides, Design Systems.",
  },
  {
    icon: <CheckCircle2Icon />,
    text: " Graphic Design & Branding",
    description:
      "Perfect for businesses, creators, brands, and marketers. Design Services , Logo Design , Posters & Social Media Posts , Banners , Brochures , Brand Identity Kits , Pitch Deck Design.",
  },
  {
    icon: <CheckCircle2Icon />,
    text: " AI/ML Solutions",
    description:
      "We build simple to advanced machine-learning solutions for any business. AI Solutions We Offer - Recommendation Models, Prediction Models , NLP Tools (Chat, Sentiment Analysis) , Automation Scripts , AI Dashboards, FastAPI Model Integrations. ",
  },
  {
    icon: <CheckCircle2Icon />,
    text: "Video Editing & Content Creation",
    description:
      "YouTube Shorts , Instagram Reels , Promo Videos , Intro/Outro Animation , Product Showcases ",
  },
  {
    icon: <CheckCircle2Icon />,
    text: "Custom Solutions",
    description:
      "Have a unique idea? OSF can build custom tech, design, or AI tools tailored for your business",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Starter Projects",
    price: "₹1,000 to ₹4,999",
    features: [
      "Suitable for small tasks & basic designs & Includes:",
      "Logo Design",
      "Basic Poster Design",
      "Single Page Website (Static)",
    ],
  },
  {
    title: "Growth Projects",
    price: "₹5,000 to ₹14,999",
    features: [
      "Best for startups & creators & Includes:",
      "Portfolio Websites",
      "Business Landing Pages",
      "UI/UX Design",
      "Basic Backend APIs",
      "Simple AI Model",
    ],
  },
  {
    title: " Premium Projects",
    price: "₹15,000 to ₹35,000+",
    features: [
      "For advanced, multi-page, custom solutions & Includes:",
      "Full Website + Backend",
      "Advanced UI/UX + Design System",
      "Dashboards & Admin Panels",
      "ML Integrations",
      "Branding + Marketing Kit",
    ],
  },
  {
    title: " Custom Pricing (Quote Required)",
   
    features: [
      "For SaaS MVPs ",
      "large AI tools",
      " or complex dashboards",
     
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
