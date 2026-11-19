export interface GalleryCase {
  id: string;
  category: "Clear Aligners" | "Aesthetic Ceramic Braces" | "Interceptive (Phase I)" | "Bite Harmonization" | "Adult Orthodontics";
  title: string;
  subtitle: string;
  patientProfile: string;
  focusArea: string;
  treatmentModality: string;
  typicalDuration: string;
  description: string;
  clinicalGoals: string[];
  imageAfter: string;
  imageDetail: string;
  disclaimer: string;
}

export const GALLERY_CASES: GalleryCase[] = [
  {
    id: "case-01",
    category: "Clear Aligners",
    title: "Anterior Crowding & Arch Coordination",
    subtitle: "Adult Clear Aligner Demonstration Model",
    patientProfile: "Adult, 29 years old",
    focusArea: "Severe lower anterior crowding and restricted maxillary arch perimeter.",
    treatmentModality: "Precision Clear Aligners with sequential staging and composite attachments",
    typicalDuration: "14 months typical guideline",
    description: "Demonstration case exploring expansion of narrow buccal corridors and gentle unraveling of lower incisor overlap without extractions, resulting in a broad, radiant smile arc.",
    clinicalGoals: [
      "Broaden maxillary transverse width by 3.5mm",
      "Relieve lower anterior imbrication to enable easy interdental flossing",
      "Establish Class I canine guidance and eliminate incisal interference"
    ],
    imageAfter: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  },
  {
    id: "case-02",
    category: "Aesthetic Ceramic Braces",
    title: "Deep Overbite & Canine Alignment",
    subtitle: "Adolescent Aesthetic Fixed Appliance Demonstration",
    patientProfile: "Teenager, 15 years old",
    focusArea: "75% deep vertical overbite with high blocked-out maxillary canines.",
    treatmentModality: "Low-profile aesthetic ceramic brackets with tooth-toned nickel-titanium archwires",
    typicalDuration: "18 months typical guideline",
    description: "Demonstration case showing vertical leveling of the curve of Spee to reduce overbite from 75% to a physiological 25%, safely bringing high canines into the functional arch without damaging root vitality.",
    clinicalGoals: [
      "Level deep overbite to protect palatal gingiva and lower incisal enamel",
      "Guide high ectopic canines smoothly into the arch perimeter",
      "Refine ideal smile arc curvature parallel to lower lip margin"
    ],
    imageAfter: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  },
  {
    id: "case-03",
    category: "Bite Harmonization",
    title: "Crossbite & Mandibular Asymmetry Relief",
    subtitle: "Complex Functional Bite Alignment Demonstration",
    patientProfile: "Adolescent, 13 years old",
    focusArea: "Unilateral posterior crossbite with functional mandibular deviation upon closing.",
    treatmentModality: "Rapid palatal expansion (RPE) followed by comprehensive low-friction fixed appliances",
    typicalDuration: "16 months typical guideline",
    description: "Demonstration case illustrating orthopedic skeletal expansion of the constricted maxillary vault to eliminate a lateral chewing slide and encourage symmetrical facial jaw growth.",
    clinicalGoals: [
      "Eliminate functional jaw shift to protect temporomandibular joint health",
      "Widen upper dental arch to achieve bilateral normal buccal overlap",
      "Coordinate dental midlines with facial midsagittal plane"
    ],
    imageAfter: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  },
  {
    id: "case-04",
    category: "Adult Orthodontics",
    title: "Relapse & Open Bite Closure",
    subtitle: "Adult Comprehensive Re-Treatment Demonstration",
    patientProfile: "Adult, 38 years old",
    focusArea: "Anterior open bite with relapse from childhood braces due to tongue thrust posture.",
    treatmentModality: "Clear aligner vertical staging with posterior molar intrusion mechanics and myofunctional therapy guidance",
    typicalDuration: "15 months typical guideline",
    description: "Demonstration case showing closure of a 4mm anterior open bite in an adult without surgery, restoring incisal guidance and chewing function.",
    clinicalGoals: [
      "Intrude upper posterior molars by 1.5mm to allow autorotation of the mandible",
      "Establish solid anterior incisal contact for shearing food",
      "Permanent bonded retention to secure tongue posture stability"
    ],
    imageAfter: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  },
  {
    id: "case-05",
    category: "Interceptive (Phase I)",
    title: "Severe Overjet & Trauma Risk Reduction",
    subtitle: "Childhood Growth Guidance Demonstration",
    patientProfile: "Child, 8 years old",
    focusArea: "10mm excessive overjet with lip incompetence and traumatic risk to protruding central incisors.",
    treatmentModality: "Phase I interceptive functional guidance and partial sectional fixed appliance (2x4)",
    typicalDuration: "10 months typical guideline",
    description: "Demonstration case illustrating gentle retraction of protruding upper incisors back into the protective muscular envelope of the lip, drastically cutting accidental sports trauma risk in half.",
    clinicalGoals: [
      "Reduce overjet from 10mm to 3mm",
      "Achieve passive, strain-free lip closure at rest",
      "Establish positive self-image and active outdoor sports safety"
    ],
    imageAfter: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  },
  {
    id: "case-06",
    category: "Clear Aligners",
    title: "Midline Diastema & Spacing Harmonization",
    subtitle: "Adult Aesthetic Smile Refinement Demonstration",
    patientProfile: "Adult, 32 years old",
    focusArea: "3.5mm prominent central diastema with generalized maxillary spacing.",
    treatmentModality: "Sequential clear aligners with aesthetic composite retention",
    typicalDuration: "8 months typical guideline",
    description: "Demonstration case showcasing precise biological bodily movement to close a central diastema while maintaining harmonious tooth proportions across the aesthetic zone.",
    clinicalGoals: [
      "Close central diastema symmetrically along the facial midline",
      "Even out lateral spacing for proportionate golden smile ratios",
      "Fit custom lingual bonded retainer and night clear retainer"
    ],
    imageAfter: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    imageDetail: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    disclaimer: "Demonstration portfolio visualization. Generic photography for aesthetic simulation only; does not depict a real clinical patient or guaranteed clinical outcome."
  }
];
