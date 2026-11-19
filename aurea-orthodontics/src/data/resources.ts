export interface PatientResourceItem {
  id: string;
  category: "New Patient" | "Clinical Forms (Demo)" | "Appointment Prep" | "Financial & Insurance" | "Retention Guides";
  title: string;
  description: string;
  fileFormat: string;
  fileSize: string;
  recommendedFor: string;
  highlights: string[];
  isDemoNotice: string;
}

export const PATIENT_RESOURCES: PatientResourceItem[] = [
  {
    id: "new-patient-welcome-pack",
    category: "New Patient",
    title: "New Patient Comprehensive Welcome & Clinic Journey Guide",
    description: "An overview of what to expect during your first visits at AUREA, how 3D diagnostics work, and step-by-step guidance for children, teens, and adult patients.",
    fileFormat: "PDF Overview (Demonstration)",
    fileSize: "1.8 MB",
    recommendedFor: "All prospective patients prior to their initial consultation appointment.",
    highlights: [
      "Timeline breakdown of the 45-minute discovery consultation",
      "What to bring (identification, dental insurance details)",
      "Our practice philosophy on airway and biological tooth movement",
      "Overview of digital intraoral scanning technology"
    ],
    isDemoNotice: "Sample document outline for NOVA Digital Studio portfolio demonstration."
  },
  {
    id: "health-history-demonstration-template",
    category: "Clinical Forms (Demo)",
    title: "Adult & Adolescent Medical & Dental History Questionnaire (Preview)",
    description: "Sample format illustrating the thorough medical and dental health background reviewed by specialist orthodontists before planning treatment.",
    fileFormat: "Interactive Form Specimen (Demo)",
    fileSize: "Sample Preview Only",
    recommendedFor: "Demonstration preview of orthodontic screening categories.",
    highlights: [
      "Review of systemic conditions, allergies, and bone density medications",
      "Assessment of temporomandibular joint (TMJ) symptoms or clicking",
      "History of past facial trauma or previous orthodontic treatment",
      "Personal aesthetic objectives and concerns"
    ],
    isDemoNotice: "Demonstration placeholder only. This site does NOT collect, store, or transmit real medical or personal health information."
  },
  {
    id: "pediatric-interceptive-checklist",
    category: "New Patient",
    title: "Parent's Checklist: 7 Signs Your Child Should See an Orthodontist",
    description: "An educational guide for parents highlighting early developmental signs like crossbites, mouth breathing, tongue posture, and delayed tooth loss.",
    fileFormat: "Downloadable PDF Guide (Demo)",
    fileSize: "1.2 MB",
    recommendedFor: "Parents of children ages 6 to 10 evaluating facial growth.",
    highlights: [
      "Visual indicators of narrow maxillary arches and crossbites",
      "The role of nasal breathing in optimal facial growth",
      "Understanding the American Association of Orthodontists Age 7 guideline",
      "How early intervention frequently prevents future adult extractions"
    ],
    isDemoNotice: "Educational specimen prepared for portfolio demonstration."
  },
  {
    id: "appointment-prep-guide",
    category: "Appointment Prep",
    title: "Your First Visit: What to Expect & Preparation Checklist",
    description: "Practical steps to ensure a calm, relaxed, and productive initial consultation, including questions to ask your specialist orthodontist.",
    fileFormat: "Checklist (Demonstration)",
    fileSize: "850 KB",
    recommendedFor: "New patients attending an upcoming initial evaluation.",
    highlights: [
      "Arriving 10 minutes early to enjoy our warm refreshment lounge",
      "Pre-appointment tooth brushing station amenities",
      "List of 5 insightful questions to ask your orthodontist",
      "Digital visualization demonstration walk-through"
    ],
    isDemoNotice: "Sample portfolio demonstration resource."
  },
  {
    id: "insurance-financing-guide",
    category: "Financial & Insurance",
    title: "Understanding Orthodontic Insurance & 0% In-House Financing",
    description: "A transparent breakdown of how orthodontic lifetime insurance maximums work, how to utilize FSA/HSA accounts, and how our 0% payment plans operate.",
    fileFormat: "Financial Overview (Demo)",
    fileSize: "1.1 MB",
    recommendedFor: "Patients and families planning their orthodontic investment.",
    highlights: [
      "How orthodontic insurance lifetime maximums differ from standard dental benefits",
      "Maximizing flexible spending (FSA) and health savings (HSA) pre-tax dollars",
      "Customizable zero-interest monthly payment plans tailored to your budget",
      "No hidden fees policy: all scans, appliances, and retainers included"
    ],
    isDemoNotice: "Sample guide for demonstration practice."
  },
  {
    id: "braces-survival-handbook",
    category: "Retention Guides",
    title: "AUREA Braces Care, Food Safety & Retention Handbook",
    description: "The complete patient companion covering brushing technique, safe snack alternatives, emergency relief wax usage, and retainer care protocols.",
    fileFormat: "Comprehensive Handbook (Demo)",
    fileSize: "2.4 MB",
    recommendedFor: "Current patients in active treatment or retention.",
    highlights: [
      "Full dietary safety chart and lunchbox recipe ideas",
      "Step-by-step instructions for orthodontic relief wax application",
      "Cleaning routines for clear aligners and bonded lingual retainers",
      "Emergency contact triage flowchart"
    ],
    isDemoNotice: "Demonstration handbook design created for portfolio showcase."
  }
];
