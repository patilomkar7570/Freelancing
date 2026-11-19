export interface FAQItem {
  id: string;
  category: "General & First Steps" | "Braces & Aligners" | "Comfort & Daily Life" | "Investment & Logistics" | "Retention & Results";
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "when-ortho-evaluation",
    category: "General & First Steps",
    question: "At what age should a child have their first orthodontic consultation?",
    answer: "The American Association of Orthodontists (AAO) and our clinical team recommend that every child receive an initial orthodontic screening by age 7. By this age, the first adult molars and incisors have erupted, allowing a specialist to identify early signs of crossbites, severe crowding, skeletal jaw discrepancies, or airway concerns. Most children will not need immediate treatment, but early observation allows us to time future care precisely to their growth spurts."
  },
  {
    id: "am-i-too-old",
    category: "General & First Steps",
    question: "Can adults benefit from orthodontic treatment, or is it only for adolescents?",
    answer: "Healthy teeth can be moved at virtually any age! In fact, approximately one in three orthodontic patients today is an adult. The biological mechanisms responsible for tooth movement (bone resorption and remodeling) function throughout adult life. Adults often choose discreet clear aligners or aesthetic ceramic brackets to address crowding, bite collapse, or long-standing functional concerns with tremendous success."
  },
  {
    id: "first-appointment-expectations",
    category: "General & First Steps",
    question: "What actually happens during the initial consultation at AUREA?",
    answer: "Your initial 45-minute consultation is a relaxed, comprehensive discovery session. We begin with comfortable 3D digital intraoral scans and high-resolution facial photography. Dr. Vance or Dr. Thorne will perform a thorough clinical examination of your teeth, bite, and jaw joints, discuss your personal smile goals, and review a 3D digital simulation of potential outcomes. You will receive a clear breakdown of estimated treatment timelines, options, and transparent payment plans before making any decision."
  },
  {
    id: "braces-pain-level",
    category: "Braces & Aligners",
    question: "Do braces or clear aligners hurt?",
    answer: "Placing braces or fitting your first aligner is completely painless; there are no needles or drilling involved. In the 24 to 48 hours following your appointment, you may experience mild tooth soreness or tenderness when chewing as the biological remodeling process begins. This is typically easily managed with over-the-counter pain relievers and soft foods, subsiding quickly within 3 to 5 days."
  },
  {
    id: "aligners-vs-braces",
    category: "Braces & Aligners",
    question: "How do I decide between clear aligners and modern braces?",
    answer: "Both systems are highly effective diagnostic tools in the hands of an experienced specialist. Clear aligners offer unmatched discretion and can be removed for dining and brushing, but require disciplined daily wear (22 hours per day). Aesthetic fixed braces work continuously without relying on compliance and excel at complex root torque and severe rotations. During your consultation, we will assess your dental anatomy and lifestyle to recommend the modality that ensures the most predictable outcome."
  },
  {
    id: "treatment-duration",
    category: "Braces & Aligners",
    question: "How long does typical orthodontic treatment take?",
    answer: "Treatment duration varies based on the biological responsiveness of your bone, the severity of the malocclusion, and patient compliance (especially with elastic wear or aligner hours). Minor aesthetic alignments can take as few as 6 to 9 months, while comprehensive adolescent and adult bite corrections generally range between 14 and 22 months. We provide an estimated timeline during your initial plan presentation."
  },
  {
    id: "brushing-time",
    category: "Comfort & Daily Life",
    question: "How much longer will it take to clean my teeth with braces?",
    answer: "Brushing with braces generally requires about 3 to 4 minutes per session instead of the conventional 2 minutes. You will need to brush along the gumline, above and below the brackets, and use an interdental brush under the wire. We equip every new patient with a comprehensive Orthodontic Care Kit, complete with specialized tools, relief wax, and step-by-step video tutorials."
  },
  {
    id: "sports-and-instruments",
    category: "Comfort & Daily Life",
    question: "Can I still play contact sports or wind instruments?",
    answer: "Absolutely! For sports (such as soccer, basketball, martial arts, or football), we provide custom-fitted orthodontic mouthguards designed to protect both your teeth and your brackets. For wind or brass musicians, there is a brief adaptation period of 1 to 2 weeks while your lips adjust to the appliance contours, after which playing returns to normal."
  },
  {
    id: "cost-and-payment-options",
    category: "Investment & Logistics",
    question: "How much does orthodontic care cost, and are payment plans available?",
    answer: "Because orthodontic treatment is customized to individual complexity, costs reflect the specific appliance system and treatment duration. At AUREA, we believe financial considerations should never prevent access to exceptional care. We offer 0% interest flexible in-house monthly financing, accept dental insurance with orthodontic benefits, and coordinate HSA/FSA health savings accounts. You will receive an all-inclusive fee quote with zero hidden surprise charges."
  },
  {
    id: "general-dentist-visits",
    category: "Investment & Logistics",
    question: "Do I still need to see my regular family dentist during treatment?",
    answer: "Yes, more than ever! Your general dentist and dental hygienist are essential partners during orthodontic care. We strongly recommend continuing routine dental cleanings and examinations every 3 to 6 months to ensure your teeth and gums remain pristinely clean and free of cavities while your teeth are moving."
  },
  {
    id: "retainer-lifespan",
    category: "Retention & Results",
    question: "Will I have to wear retainers forever once my braces come off?",
    answer: "In short: 'Nighttime for a lifetime.' The human body undergoes continuous physiological remodeling as we age, and teeth naturally tend to drift forward over decades. Wearing your custom clear retainers while sleeping (typically 3 to 5 nights per week after an initial stabilizing period) preserves your beautiful alignment for life. We also offer fixed bonded lingual retainers for seamless, worry-free security."
  },
  {
    id: "broken-retainer-action",
    category: "Retention & Results",
    question: "What should I do if my retainer cracks or gets lost?",
    answer: "Contact our clinic as soon as possible. Because we store your post-treatment digital 3D scans securely in our laboratory cloud, we can fabricate an exact precision replacement retainer quickly, often without needing to take a new scan. Do not wait weeks, as minor relapse can occur rapidly."
  }
];
