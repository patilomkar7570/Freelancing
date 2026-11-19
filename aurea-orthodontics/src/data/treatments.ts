export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "Early" | "Adolescent" | "Adult" | "Specialized";
  idealFor: string[];
  treatmentTime: string;
  description: string;
  benefits: string[];
  features: string[];
  clinicalHighlights: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    title: "Precision Clear Aligners",
    shortDescription: "Discreet, removable custom-engineered aligners for comfortable tooth movement.",
    category: "Adult",
    treatmentTime: "Typically 6 to 18 months",
    idealFor: [
      "Adults and teens seeking an inconspicuous solution",
      "Mild to moderate crowding and spacing",
      "Patients needing removable flexibility for dining and hygiene"
    ],
    description: "Our precision clear aligner therapy uses 3D digital intraoral scanning and CAD/CAM simulation to craft a sequence of medical-grade biocompatible thermoplastic trays. Each aligner exerts gentle, calibrated forces to guide teeth gradually into their optimal biological alignment without brackets or archwires.",
    benefits: [
      "Virtually invisible in everyday conversation",
      "Completely removable for eating, brushing, and flossing",
      "Zero emergency visits for broken wires or debonded brackets",
      "Predictable digital treatment simulations prior to starting"
    ],
    features: [
      "3D digital optical scanning (no uncomfortable impression putty)",
      "High-elasticity thermoplastic material for snug, comfortable fit",
      "Monitored progress check-ins every 6–8 weeks",
      "Custom retention protocol included upon completion"
    ],
    clinicalHighlights: [
      "Controlled tooth movement velocity to safeguard root structures",
      "Composite attachment placement engineered for torque control",
      "Interproximal reduction (IPR) only when biologically indicated"
    ]
  },
  {
    id: "ceramic-braces",
    slug: "braces",
    title: "Aesthetic Ceramic Braces",
    shortDescription: "Translucent monocrystalline ceramic brackets that blend seamlessly with natural enamel.",
    category: "Adolescent",
    treatmentTime: "Typically 12 to 24 months",
    idealFor: [
      "Patients wanting the precision of fixed appliances with aesthetic discretion",
      "Moderate to complex bite misalignments and rotational corrections",
      "Teenagers and adult professionals"
    ],
    description: "Aesthetic ceramic braces provide the full biomechanical control of traditional orthodontics while utilizing ultra-smooth, translucent ceramic brackets designed to match the natural shade of your tooth enamel. Paired with rhodium-coated or tooth-toned aesthetic wires, they deliver exceptional clinical results with minimal visual impact.",
    benefits: [
      "Resistant to staining and discoloration throughout treatment",
      "Low-profile rounded contours engineered for mucosal comfort",
      "Exceptional rotational and torque control for complex malocclusions",
      "Fixed appliance means compliance is never in question"
    ],
    features: [
      "Monocrystalline sapphire-derived ceramic material",
      "Enamel-friendly debonding mechanism to protect tooth surfaces",
      "Optional rhodium-plated aesthetic archwires",
      "Clear or tooth-toned elastomeric ligatures"
    ],
    clinicalHighlights: [
      "Custom bracket height placement tailored to the golden smile arc",
      "Variable prescription brackets to match individual root anatomy",
      "Smooth glide mechanics with minimized frictional resistance"
    ]
  },
  {
    id: "low-friction-metal-braces",
    slug: "braces",
    title: "Modern Low-Profile Metal Braces",
    shortDescription: "Ultra-compact, high-grade surgical stainless steel brackets engineered for maximum efficiency.",
    category: "Adolescent",
    treatmentTime: "Typically 12 to 22 months",
    idealFor: [
      "Children, adolescents, and comprehensive adult cases",
      "Complex vertical, transverse, and sagittal bite discrepancies",
      "Severe crowding, deep impactions, or surgical orthodontic cases"
    ],
    description: "Today's metal braces are a world away from those of past decades. At AUREA, we use micro-miniature brackets crafted from biocompatible surgical-grade alloy. Their low profile significantly reduces cheek irritation, while shape-memory nickel-titanium wires exert continuous, ultra-light forces that move teeth comfortably and efficiently.",
    benefits: [
      "Unmatched durability and mechanical reliability",
      "Smallest bracket footprint available for improved oral hygiene",
      "Expressive customization with colored elastomeric ties for younger patients",
      "Most cost-effective orthodontic modality"
    ],
    features: [
      "Micro-etched mesh bases for secure, gentle bond strength",
      "Thermally activated shape-memory archwires",
      "Smooth chamfered edges to prevent lip abrasion",
      "Compatible with auxiliary appliances for skeletal corrections"
    ],
    clinicalHighlights: [
      "Gradual wire progression starting with super-elastic 0.014 NiTi",
      "Precision torque delivery without unwanted tipping forces",
      "Rigid stainless steel finishing wires for optimal root parallelism"
    ]
  },
  {
    id: "bite-correction-interceptive",
    slug: "bite-correction",
    title: "Specialized Bite Correction & Malocclusion Care",
    shortDescription: "Targeted correction of overbites, underbites, crossbites, and open bites to restore healthy jaw function.",
    category: "Specialized",
    treatmentTime: "Typically 14 to 24 months",
    idealFor: [
      "Crossbites causing functional jaw shifting or asymmetric growth",
      "Deep impinging overbites causing palate trauma or enamel wear",
      "Underbites (Class III) and anterior open bites compromising chewing",
      "Patients experiencing speech difficulties or TMJ joint strain"
    ],
    description: "Orthodontics is as much about how your upper and lower dental arches meet as it is about straight front teeth. Our bite correction protocols harmonize skeletal relationships, protect dental enamel from premature wear, relieve abnormal stresses on the temporomandibular joint, and optimize facial balance.",
    benefits: [
      "Restores natural chewing efficiency and comfortable chewing mechanics",
      "Prevents excessive incisal tooth wear and gum recession",
      "Resolves speech impediments caused by tongue thrust or open bite",
      "Supports stable airway dimensions and balanced facial symmetry"
    ],
    features: [
      "Functional appliances (such as Herbst or Twin Block when indicated)",
      "Palatal expansion for narrow maxillary arches in growing patients",
      "Elastic traction systems tailored to individual vector mechanics",
      "Interdisciplinary coordination with speech therapists and periodontists"
    ],
    clinicalHighlights: [
      "Cephalometric analysis assessing skeletal vs. dental discrepancy",
      "Airway-conscious expansion avoiding unnecessary premolar extractions",
      "Centric relation to centric occlusion (CR-CO) discrepancy elimination"
    ]
  },
  {
    id: "early-interceptive-orthodontics",
    slug: "bite-correction",
    title: "Early Interceptive Guidance (Phase I)",
    shortDescription: "Gentle developmental intervention for children ages 7–10 to guide jaw growth and make room for emerging teeth.",
    category: "Early",
    treatmentTime: "Typically 9 to 14 months",
    idealFor: [
      "Children aged 7 to 10 with emerging skeletal asymmetries",
      "Severe dental crossbites or restricted airway concerns",
      "Severe crowding blocking eruption of permanent canines",
      "Habit-related open bites (prolonged thumb sucking or tongue thrust)"
    ],
    description: "The American Association of Orthodontists recommends an initial evaluation by age 7. Phase I treatment takes advantage of active facial growth to widen constricted palates, correct crossbites before they cause permanent skeletal asymmetry, and preserve space for unerupted teeth, frequently simplifying or eliminating the need for complex future extractions.",
    benefits: [
      "Leverages natural growth spurts for non-invasive skeletal remodeling",
      "Reduces trauma risk for prominently protruding front incisors",
      "Eliminates harmful myofunctional oral habits",
      "Improves nasal breathing capacity by widening narrow nasal floors"
    ],
    features: [
      "Slow and rapid maxillary expanders (RPE)",
      "Partial fixed sectional braces ('2x4' appliances)",
      "Space maintainers and habit appliances",
      "Regular observational monitoring appointments between phases"
    ],
    clinicalHighlights: [
      "Midpalatal suture expansion prior to fusion",
      "Serial guidance of eruption preventing canine impaction",
      "Parental education and gentle child-centered appointment pacing"
    ]
  },
  {
    id: "retention-and-smile-preservation",
    slug: "braces",
    title: "Smile Preservation & Advanced Retention",
    shortDescription: "Custom bonded and clear removable retention systems to preserve your smile for a lifetime.",
    category: "Specialized",
    treatmentTime: "Long-term ongoing stability",
    idealFor: [
      "All patients completing active orthodontic or aligner treatment",
      "Patients experiencing minor post-treatment settling or relapse",
      "Individuals wanting dual-layer protection against tooth movement"
    ],
    description: "Teeth have an innate biological memory and naturally tend to shift throughout life due to physiological remodeling. Retention is the vital concluding phase of every orthodontic journey. We design bespoke retention protocols featuring invisible removable retainers and precision lingual bonded wires.",
    benefits: [
      "Guarantees lifelong preservation of your straight, healthy smile",
      "Prevents late incisor crowding and bite relapse",
      "Comfortable, low-profile designs that do not disrupt speech or sleep",
      "Periodic retention health reviews included in our care plan"
    ],
    features: [
      "Vivera-style high-durability clear retainers",
      "Precision-sculpted gold or stainless lingual fixed wire retainers",
      "Retainer replacement and digital scan storage program",
      "Custom protective night guards for patients with nocturnal bruxism"
    ],
    clinicalHighlights: [
      "Periodontal ligament reorganization stabilization monitoring",
      "Passive passive-fit verification to avoid undesirable tooth torque",
      "Digital STL file archiving for rapid one-click replacements"
    ]
  }
];
