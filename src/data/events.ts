import type { EventItem } from "../types/event";

export const events: EventItem[] = [
  {
    id: "evt-101",
    title: "Civic Leadership Seminar 2026",
    slug: "civic-leadership-seminar-2026",
    date: "2026-05-08",
    time: "9:30 AM - 12:30 PM",
    location: "Harbor Conference Center, Boston",
    category: "seminar",
    shortDescription:
      "A focused seminar on modern civic leadership, policy communication, and stakeholder trust.",
    fullDescription:
      "Join regional leaders and policy experts for a practical seminar on transparent leadership, community engagement, and strategic decision-making. The session includes keynote talks, case studies, and actionable planning tools.",
    featured: true,
    registrationUrl:
      "https://example.org/register/civic-leadership-seminar-2026",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
    limitedSeats: true,
  },
  {
    id: "evt-102",
    title: "Grant Writing Intensive Workshop",
    slug: "grant-writing-intensive-workshop",
    date: "2026-04-18",
    time: "1:00 PM - 4:30 PM",
    location: "Summit Learning Hub, Cambridge",
    category: "workshop",
    shortDescription:
      "Hands-on workshop to improve proposal clarity, outcomes framing, and funder alignment.",
    fullDescription:
      "This workshop gives nonprofit teams and project leads a practical framework for developing compelling grant proposals. Participants will leave with stronger narratives, measurable outcomes, and reusable drafting templates.",
    featured: true,
    registrationUrl:
      "https://example.org/register/grant-writing-intensive-workshop",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
  },
  {
    id: "evt-103",
    title: "Regional Impact Conference",
    slug: "regional-impact-conference",
    date: "2026-06-20",
    time: "10:00 AM - 5:00 PM",
    location: "Downtown Convention Hall, Providence",
    category: "conference",
    shortDescription:
      "A full-day conference connecting organizations shaping social and economic impact in the region.",
    fullDescription:
      "The Regional Impact Conference brings together leaders from nonprofits, education, and business sectors to discuss collaboration models, measurable impact, and funding pathways. Includes panels, networking sessions, and partner showcases.",
    featured: true,
    registrationUrl: "https://example.org/register/regional-impact-conference",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
    limitedSeats: true,
  },
  {
    id: "evt-104",
    title: "Neighborhood Innovators Meetup",
    slug: "neighborhood-innovators-meetup",
    date: "2026-04-04",
    time: "6:00 PM - 8:00 PM",
    location: "Riverside Community Center, Boston",
    category: "community meetup",
    shortDescription:
      "An open community meetup for local changemakers to share initiatives and opportunities.",
    fullDescription:
      "This evening meetup connects volunteers, local organizations, and residents driving neighborhood-level innovation. Expect short spotlight talks, idea exchanges, and partnership opportunities for upcoming community projects.",
    featured: false,
    registrationUrl:
      "https://example.org/register/neighborhood-innovators-meetup",
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
  },
  {
    id: "evt-105",
    title: "Digital Outreach Webinar",
    slug: "digital-outreach-webinar",
    date: "2026-04-25",
    time: "11:00 AM - 12:15 PM (ET)",
    location: "Online",
    category: "webinar",
    shortDescription:
      "A practical webinar on audience growth, messaging strategy, and campaign analytics.",
    fullDescription:
      "Designed for communication and program teams, this webinar covers audience segmentation, storytelling frameworks, and data-informed campaign design. Live Q&A included.",
    featured: false,
    registrationUrl: "https://example.org/register/digital-outreach-webinar",
    coverImage:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
  },
  {
    id: "evt-106",
    title: "Program Evaluation Training Session",
    slug: "program-evaluation-training-session",
    date: "2026-05-30",
    time: "2:00 PM - 5:00 PM",
    location:
      "Ex Students of Jhikargacha Govt. M L Model High School HQ, Boston",
    category: "training session",
    shortDescription:
      "Professional training on outcome measurement, data collection, and impact reporting.",
    fullDescription:
      "This training session supports teams looking to strengthen evaluation frameworks and report outcomes with confidence. Participants will work through templates for logic models, indicators, and reporting dashboards.",
    featured: false,
    registrationUrl:
      "https://example.org/register/program-evaluation-training-session",
    coverImage:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1400&q=80",
    status: "upcoming",
  },
];
