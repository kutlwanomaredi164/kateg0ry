import { Project, ServiceItem, StatisticItem, TestimonialItem, GalleryPhoto } from '../types';

export const AGENCY_INFO = {
  name: "KATOGRAPHY",
  fullName: "KATOGRAPHY CREATIVE STUDIO",
  tagline: "Cinema-Grade Visuals & High-Fashion Imagery",
  headline: "CRAFTING CINEMATIC VISUAL EXPERIENCES WORLDWIDE",
  description: "An elite creative studio specializing in luxury event cinematography, high-profile studio portraits, and high-impact commercial media campaigns for global brands and visionary artists.",
  credibility: [
    "Available Worldwide",
    "Award Winning Creative Studio",
    "Photography | Videography | Cinema"
  ],
  locations: ["London", "Los Angeles", "Paris", "Tokyo"],
  contact: {
    email: "studio@katography.agency",
    phone: "+44 (0) 20 7946 0912",
    whatsappNumber: "+442079460912",
    whatsappDisplay: "+44 (0) 7946 0912",
    primaryStudio: "Soho Studio 4B, 18-24 Dean Street, London W1D 3RR",
    intlHub: "Arts District, 830 E 3rd St, Los Angeles, CA 90013"
  },
  socials: [
    { name: "Instagram", handle: "@katography.studio", url: "https://instagram.com" },
    { name: "Vimeo", handle: "katography-cinema", url: "https://vimeo.com" },
    { name: "YouTube", handle: "KatographyFilms", url: "https://youtube.com" },
    { name: "Behance", handle: "katography", url: "https://behance.net" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "events-festivals",
    number: "01",
    title: "Events & Festivals",
    subtitle: "High-Energy Live Production & Immersive Atmospheres",
    description: "Multi-camera cinema coverage, dynamic drone cinematography, and hyper-stylized live photography for flagship music festivals, international tours, and private luxury galas.",
    features: [
      "RED V-Raptor & ARRI 8K/4K Live Stage Camera Crews",
      "Real-Time Same-Day Social Cutdowns & Press Drops",
      "Licensed Heavy-Lift FPV & Cinematic Drone Cinematography",
      "Stage Lighting-Matched Color Science & Master Audio Sync"
    ],
    deliverables: ["4K Master Aftermovie", "Teaser Reels & Shorts", "Full High-Res Photo Gallery", "Press Stills Package"],
    turnaround: "48-Hour Rush Available",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "portrait-studio",
    number: "02",
    title: "Portrait & Studio Shoots",
    subtitle: "Editorial Fashion, Celebrity & High-Impact Character",
    description: "Mastercrafted lighting architectures and meticulous color grading tailored for magazine covers, musician album campaigns, high-fashion lookbooks, and C-suite personal branding.",
    features: [
      "Profoto Pro-11 Studio Lighting & Sculpted Modifiers",
      "Medium Format Hasselblad & Phase One 100MP Resolution",
      "Bespoke High-End Retouching & Fine-Art Film Grain Finishing",
      "In-House Creative Direction, Moodboards & Set Styling"
    ],
    deliverables: ["Master Retouched Covers", "Digital Lookbook Files", "RAW Archival Storage", "Print-Ready Proofs"],
    turnaround: "5-7 Business Days",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "commercial-brand",
    number: "03",
    title: "Commercial & Brand Media",
    subtitle: "Narrative Advertisements & Elevated Product Storytelling",
    description: "Full-scale brand films, luxury product reveals, and omnichannel commercial assets engineered to captivate audiences and establish undisputed industry authority.",
    features: [
      "End-to-End Conceptual Treatment, Scripting & Storyboarding",
      "Anamorphic Cooke & Atlas Glass Cinema Optics",
      "Dolby Vision HDR Color Grading & Custom Sound Design",
      "Omnichannel Multi-Aspect Deliverables (16:9, 9:16, 1:1, 4:5)"
    ],
    deliverables: ["60s Director's Cut Commercial", "15s & 30s Paid Ad Cuts", "Product Macro Photo Suite", "BTS Documentary"],
    turnaround: "Custom Production Schedule",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1600&q=85"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-sonic-festival",
    title: "NEXUS WORLD STAGE",
    subtitle: "Flagship Festival Aftermovie & Night Stills",
    category: "Events & Festivals",
    client: "Nexus Global Music",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Capturing 80,000 revellers under massive kinetic light rigs across three days. We deployed a team of 8 cinematographers with ARRI LF packages and high-speed FPV pilots.",
    deliverables: ["1 x 4K Cinema Aftermovie (5m)", "12 x Vertical TikTok/Reels", "450 Graded Stills"],
    role: "Lead Cinema Production & Festival Stills",
    location: "Amsterdam, Netherlands",
    featured: true,
    aspectRatio: "landscape",
    videoPreview: true
  },
  {
    id: "solstice-vogue-editorial",
    title: "ECLIPSE NOIR",
    subtitle: "Haute Couture Editorial & Campaign Film",
    category: "Portrait & Studio Shoots",
    client: "Maison De L'Ombre",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An exploration of silhouette, sculptural tailoring, and harsh chiaroscuro lighting. Shot on medium format digital back with bespoke analog lens adaptations.",
    deliverables: ["Magazine Cover Set", "Fashion Campaign Film (90s)", "35mm Grain Archival Prints"],
    role: "Creative Direction & Photography",
    location: "Paris, France",
    featured: true,
    aspectRatio: "portrait"
  },
  {
    id: "chronos-luxury-timepiece",
    title: "KINETIC PRECISION",
    subtitle: "Global Commercial & Macro Product Film",
    category: "Commercial & Brand Media",
    client: "Chronos Haute Horlogerie",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "A symphony of titanium, sapphire crystal, and micro-movements. Captured with specialized robotic motion control rigs and probe lenses in 1000fps ultra-slow-motion.",
    deliverables: ["Global Broadcast Commercial (60s / 30s / 15s)", "8K Print Billboard Assets", "Boutique Display Loops"],
    role: "Commercial Director & Tabletop DP",
    location: "Geneva, Switzerland",
    featured: true,
    aspectRatio: "landscape",
    videoPreview: true
  },
  {
    id: "veloce-supercar-cinematics",
    title: "THE MIDNIGHT RUN",
    subtitle: "Supercar Launch Film & Automotive Stills",
    category: "Commercial & Brand Media",
    client: "Veloce Automobili",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Pursuit vehicle camera tracking with Russian Arm crane across the Alpine mountain passes at dusk. Graded with custom analog 35mm film emulation LUTs.",
    deliverables: ["Launch Film", "Social Cutdowns", "Global Press Kit"],
    role: "Director of Photography",
    location: "Stelvio Pass, Italy",
    featured: false,
    aspectRatio: "landscape"
  },
  {
    id: "aurora-acoustic-sessions",
    title: "ECHOES IN CONCRETE",
    subtitle: "Live Acoustic Session & Intimate Docu-Series",
    category: "Events & Festivals",
    client: "Sony Music UK",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Recorded live inside a decommissioned brutalist cathedral with pristine natural acoustics and 16mm handheld cinema cameras.",
    deliverables: ["4-Track Live Performance Film", "Vinyl Gatefold Photography", "Tour Poster Series"],
    role: "Director & Cinematographer",
    location: "London, United Kingdom",
    featured: false,
    aspectRatio: "portrait"
  },
  {
    id: "celeste-fragrance-campaign",
    title: "SUBTLETY & LIGHT",
    subtitle: "High Jewelry & Fragrance Campaign",
    category: "Portrait & Studio Shoots",
    client: "L'Etoile Joaillerie",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Illuminated with prismatic crystal reflections and soft water caustics to capture the ephemeral luxury of the new parfum line.",
    deliverables: ["Sephora In-Store Video Walls", "Beauty Print Campaign", "Digital Lookbook"],
    role: "Lead Photographer & Lighting Designer",
    location: "Monaco",
    featured: true,
    aspectRatio: "square"
  }
];

export const CLIENT_LOGOS = [
  { name: "VOGUE", tag: "Editorial Partner" },
  { name: "RED BULL MEDIA", tag: "Live Production" },
  { name: "SONY MUSIC", tag: "Artist Campaign" },
  { name: "BOILER ROOM", tag: "Festival Broadcast" },
  { name: "BALENCIAGA", tag: "Haute Runway" },
  { name: "PORSCHE", tag: "Automotive Cinema" },
  { name: "GQ MAGAZINE", tag: "Cover Feature" },
  { name: "WARNER RECORDS", tag: "Global Tours" }
];

export const STATISTICS: StatisticItem[] = [
  {
    id: "productions",
    value: 680,
    suffix: "+",
    label: "Productions Completed",
    description: "Across 34 countries worldwide"
  },
  {
    id: "experience",
    value: 14,
    suffix: " Yrs",
    label: "Years of Experience",
    description: "From underground clubs to global stadiums"
  },
  {
    id: "collaborations",
    value: 160,
    suffix: "+",
    label: "Brand Collaborations",
    description: "Partnering with Tier-1 global institutions"
  },
  {
    id: "satisfaction",
    value: 99.8,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Flawless delivery, guaranteed confidentiality"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "CYBER CITY PYROTECHNICS",
    category: "Events & Festivals",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 md:col-span-2 row-span-2",
    cameraInfo: "ARRI Alexa Mini LF",
    location: "Ultra Music Festival, Miami",
    isoAperture: "35mm • f/1.8 • ISO 1600"
  },
  {
    id: "gal-2",
    title: "SHADOW MONOLOGUE",
    category: "Portrait & Studio",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 row-span-1",
    cameraInfo: "Hasselblad H6D-100c",
    location: "Studio 4B, London",
    isoAperture: "100mm • f/4.0 • ISO 64"
  },
  {
    id: "gal-3",
    title: "CHROMIUM SPEED",
    category: "Commercial Media",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 row-span-2",
    cameraInfo: "RED V-Raptor XL 8K",
    location: "Gotthard Pass, Switzerland",
    isoAperture: "50mm Anamorphic • T2.0 • ISO 800"
  },
  {
    id: "gal-4",
    title: "SOLAR FLARE BACKSTAGE",
    category: "Events & Festivals",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 row-span-1",
    cameraInfo: "Leica M11-P",
    location: "Printworks, London",
    isoAperture: "28mm Summicron • f/2.0 • ISO 3200"
  },
  {
    id: "gal-5",
    title: "AVANT-GARDE SILHOUETTE",
    category: "Portrait & Studio",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 md:col-span-2 row-span-1",
    cameraInfo: "Canon Cinema C500 Mk II",
    location: "Palais de Tokyo, Paris",
    isoAperture: "85mm • f/1.4 • ISO 400"
  },
  {
    id: "gal-6",
    title: "SOUNDWAVE SYNTHESIS",
    category: "Events & Festivals",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85",
    spanClass: "col-span-1 row-span-1",
    cameraInfo: "Sony FX9 Cinema Line",
    location: "Sónar Festival, Barcelona",
    isoAperture: "24-70mm G Master • f/2.8 • ISO 2000"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "Global Head of Brand Experience",
    company: "Luxe Cosmopolitan Group",
    companyTier: "LVMH PARTNER",
    quote: "Katography transformed our flagship European launch from a standard campaign into a transcendent cinematic event. The footage felt like a feature film—exquisite lighting, breathtaking composition, and an unbelievable 48-hour delivery.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    projectTitle: "Spring Haute Couture Premiere"
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Festival Executive Producer",
    company: "Nexus Live Entertainment",
    companyTier: "GLOBAL TOURS",
    quote: "In 15 years producing worldwide stadium tours, I have never seen a camera crew capture the electric soul of a crowd like Katography. Their drone pilots and stage operators move with pure artistic instincts.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    projectTitle: "80,000-Cap Stadium Tour Aftermovie"
  },
  {
    id: "test-3",
    name: "Julian Chen",
    role: "Creative Director",
    company: "Chronos Haute Horlogerie",
    companyTier: "SWISS LUXURY",
    quote: "The macro cinematography and bespoke lighting they engineered for our timepiece campaign set a new benchmark in luxury marketing. They are true masters of optical craftsmanship.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    projectTitle: "Chronos Kinetic Heritage Reveal"
  }
];

export const ABOUT_STORY = {
  established: "2012",
  founder: "Kato Vance",
  title: "Founder & Director of Photography",
  manifesto: "We do not simply document moments; we sculpt atmosphere, tension, and enduring legacy through light and shadow.",
  story: "Founded in London and operating across continents, Katography was born from an obsession with cinematic texture and the raw, electric energy of live human experience. What began as a rogue duo capturing underground electronic music culture evolved into one of the industry's most sought-after visual production houses.",
  vision: "To blur the boundaries between fine-art photography, high-fashion editorial, and Hollywood-grade cinematography for institutions that refuse mediocrity.",
  mission: "Equipped with state-of-the-art ARRI, RED, and medium-format optics, our multidisciplinary team provides directors, brands, and festival visionaries with uncompromising visual assets engineered to arrest attention in a world overwhelmed with noise."
};
