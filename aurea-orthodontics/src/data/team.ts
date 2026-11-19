export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  credentials: string[];
  philosophy: string;
  clinicalFocus: string[];
  image: string;
  demonstrationNotice: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-elena-vance",
    name: "Dr. Elena Vance",
    role: "Specialist Orthodontist & Founder",
    title: "BDS, MSc (Orthodontics), MOrth RCS",
    bio: "Dr. Elena Vance brings a decade of dedicated specialist orthodontic practice, combining architectural facial symmetry with minimally invasive tooth movement. With extensive background in digital 3D treatment modeling and clear aligner biomechanics, Dr. Vance is passionate about creating smiles that honor each patient's unique facial anatomy and natural lip posture.",
    credentials: [
      "Master of Science in Specialist Orthodontics (Fictional Demonstration)",
      "Membership in Orthodontics, Royal College of Surgeons (Demonstration Profile)",
      "Fellow of the World Federation of Orthodontists (Demonstration)",
      "Certified Digital Smile Design Specialist"
    ],
    philosophy: "Orthodontics is an art form rooted in biology. Our goal is never a generic, cookie-cutter smile, but a harmonious alignment that feels natural, breathes easily, and enhances your facial confidence for decades.",
    clinicalFocus: [
      "Adult Aesthetic Clear Aligner Therapy",
      "Airway-Conscious Palatal Development",
      "Interdisciplinary Restorative Orthodontics",
      "Accelerated Tooth Movement Protocols"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    demonstrationNotice: "Fictional professional profile created exclusively for NOVA Digital Studio portfolio demonstration."
  },
  {
    id: "dr-julian-thorne",
    name: "Dr. Julian Thorne",
    role: "Specialist Orthodontist & Dentofacial Orthopedist",
    title: "DMD, MS (Craniofacial Biology), Diplomate ABO",
    bio: "Dr. Julian Thorne specializes in early childhood interceptive orthodontics and complex adolescent dentofacial orthopedics. His clinical focus centers on gentle skeletal guidance during active growth windows, resolving transverse crossbites and severe deep overbites while safeguarding natural enamel and airway vitality.",
    credentials: [
      "Doctor of Dental Medicine, Honors in Craniofacial Research",
      "Residency in Specialist Orthodontics & Dentofacial Orthopedics",
      "Diplomate, American Board of Orthodontics (Fictional Demonstration)",
      "Published Researcher in Biomimetic Orthodontic Materials"
    ],
    philosophy: "Early, thoughtful intervention can fundamentally transform a child's facial balance and self-esteem. By guiding natural growth gently, we eliminate the need for aggressive treatments later in life.",
    clinicalFocus: [
      "Phase I Interceptive Growth Guidance (Ages 7–10)",
      "Complex Skeletal Class II and Class III Corrections",
      "Low-Friction Aesthetic Ceramic Fixed Appliances",
      "Surgical Orthodontic Planning & TMJ Stability"
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    demonstrationNotice: "Fictional professional profile created exclusively for NOVA Digital Studio portfolio demonstration."
  },
  {
    id: "claire-fontaine",
    name: "Claire Fontaine",
    role: "Lead Orthodontic Therapist & Clinical Educator",
    title: "Dip Orth Therapy, RDH",
    bio: "With over eight years of clinical chairside experience, Claire oversees patient comfort, archwire exchanges, and oral hygiene education. Her calm, warm bedside manner immediately puts nervous teens and apprehensive adults at ease.",
    credentials: [
      "Diploma in Orthodontic Therapy (Distinction)",
      "Registered Dental Hygienist with Orthodontic Specialization",
      "Advanced Certification in 3D Intraoral Optical Scanning"
    ],
    philosophy: "Every appointment should feel calm, informative, and empowering. When patients understand how their treatment works, their confidence blossoms.",
    clinicalFocus: [
      "Gentle Archwire Activations",
      "Patient Ergonomics & Anxiety Reduction",
      "Preventative Enamel Care & Decalcification Defense"
    ],
    image: "https://images.unsplash.com/photo-1594824813576-9659f81a799c?auto=format&fit=crop&w=800&q=80",
    demonstrationNotice: "Fictional team profile for demonstration purposes only."
  },
  {
    id: "marcus-reynolds",
    name: "Marcus Reynolds",
    role: "Head of Digital Diagnostics & 3D Lab Technologist",
    title: "BSc Dental Technology & CAD/CAM Simulation",
    bio: "Marcus directs AUREA's in-house digital laboratory, turning optical 3D surface scans into high-precision aligner sequences, indirect bonding trays, and bespoke 3D-printed retention systems with sub-millimeter clinical accuracy.",
    credentials: [
      "BSc in Advanced Dental Technology & Digital Fabrication",
      "Certified Digital Orthodontic CAD/CAM Specialist",
      "Specialist in 3D Thermoplastic Biocompatible Materials"
    ],
    philosophy: "Digital precision eliminates guesswork. Every aligner bracket tray we print is calibrated to the micrometer for effortless seating and gentle biological force delivery.",
    clinicalFocus: [
      "3D Digital Staging & Finite Element Analysis",
      "In-House High-Precision Aligner Thermoforming",
      "Fixed Bonded Lingual Retainer Micro-Fabrication"
    ],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    demonstrationNotice: "Fictional team profile for demonstration purposes only."
  },
  {
    id: "sophia-sterling",
    name: "Sophia Sterling",
    role: "Patient Experience Director & Treatment Concierge",
    title: "BA Healthcare Administration",
    bio: "Sophia is the welcoming face and voice of AUREA. She guides prospective patients through initial scheduling, coordinates transparent financial arrangements, and ensures every visit feels seamless, unhurried, and welcoming.",
    credentials: [
      "BA in Healthcare Management & Patient Communications",
      "Orthodontic Financial Coordination & Insurance Specialist",
      "Excellence in Patient Advocacy Award (Demonstration)"
    ],
    philosophy: "Exceptional clinical care must be matched by an effortless, warm administrative experience. We treat our patients like honored guests in our home.",
    clinicalFocus: [
      "0% In-House Financing & Insurance Benefit Optimization",
      "Flexible Treatment Scheduling Concierge",
      "New Patient Onboarding & Consultation Comfort"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    demonstrationNotice: "Fictional team profile for demonstration purposes only."
  }
];
