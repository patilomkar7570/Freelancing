export interface OrthodonticEmergency {
  id: string;
  title: string;
  severity: "low" | "medium" | "urgent";
  summary: string;
  immediateSteps: string[];
  whatToAvoid: string[];
  whenToCall: string;
  homeRemedyTool: string;
}

export const ORTHODONTIC_EMERGENCIES: OrthodonticEmergency[] = [
  {
    id: "poking-wire",
    title: "Wire Poking Cheek or Gum",
    severity: "medium",
    summary: "As teeth move and spaces close, the archwire can slide toward the back of the mouth, protruding past the terminal molar tube.",
    immediateSteps: [
      "Roll a pea-sized ball of orthodontic relief wax between clean fingers until warm and pliable.",
      "Thoroughly dry the offending wire end with a cotton swab or tissue (wax will not stick to wet surfaces).",
      "Press the wax firmly over the protruding wire tip to create a smooth protective barrier.",
      "Alternative temporary fix: Use the clean eraser end of a pencil to gently tuck the flexible wire back toward the tooth."
    ],
    whatToAvoid: [
      "Do not attempt to cut the thick archwire with dull household scissors, which can crack teeth or swallow wire clippings.",
      "Do not yank or twist the archwire with pliers."
    ],
    whenToCall: "Contact our clinic during regular hours. Our clinical team can trim the wire comfortably in under two minutes.",
    homeRemedyTool: "Orthodontic wax, cotton swab, pencil eraser"
  },
  {
    id: "loose-bracket",
    title: "Loose or Floating Bracket",
    severity: "low",
    summary: "A bracket has detached from the tooth surface but remains threaded onto the flexible archwire, sliding or rotating.",
    immediateSteps: [
      "If the bracket is still secured to the wire: Gently slide it with a clean finger or tweezers between two teeth so it rests flat.",
      "Apply a generous ball of orthodontic wax over the bracket to immobilize it and prevent irritation to the lip.",
      "If the bracket has completely detached from the wire: Carefully remove it from your mouth, place it in a clean zip pouch, and bring it to your next visit."
    ],
    whatToAvoid: [
      "Never attempt to superglue or cement the bracket back onto your tooth; dental adhesives require specialized sterile preparation.",
      "Avoid eating hard or crunchy foods on that side."
    ],
    whenToCall: "Call our office so we can assess whether to see you immediately or simply reschedule your next adjustment appointment with additional time to rebond.",
    homeRemedyTool: "Orthodontic wax, clean tweezers, small storage pouch"
  },
  {
    id: "soreness-ache",
    title: "General Tooth Soreness After Adjustments",
    severity: "low",
    summary: "Normal biological response occurring 12 to 48 hours following a new archwire activation or new clear aligner tray.",
    immediateSteps: [
      "Rinse with a warm saltwater solution (1/2 teaspoon table salt in 1 cup warm water) for 60 seconds, 3 to 4 times daily, to soothe inflamed mucosal tissues.",
      "Consume soft foods such as smoothies, yogurts, soups, and eggs during the first 48 hours.",
      "Over-the-counter pain relief (such as acetaminophen or ibuprofen, taken as directed by your physician or pharmacist) can ease discomfort."
    ],
    whatToAvoid: [
      "Avoid clenching teeth or testing tooth mobility by pushing with your tongue.",
      "Avoid cold ice cubes or acidic citrus juices directly against sensitive teeth."
    ],
    whenToCall: "Soreness usually subsides completely within 3 to 5 days. If severe throbbing pain persists beyond 7 days without improvement, contact the clinic.",
    homeRemedyTool: "Warm salt water rinse, soft food diet, OTC analgesics"
  },
  {
    id: "lost-aligner",
    title: "Lost or Broken Clear Aligner",
    severity: "medium",
    summary: "An aligner tray has cracked, torn, or been misplaced while dining or traveling.",
    immediateSteps: [
      "Check how many days you have worn the current tray. If you are on day 10 of a 14-day cycle, your orthodontist may advise moving forward to the next tray early.",
      "If you only just started the tray (days 1 to 4), retrieve your previous aligner tray from its protective case and wear it to prevent tooth relapse.",
      "Never leave your teeth without an aligner, as teeth can begin shifting backwards in as little as 24 hours."
    ],
    whatToAvoid: [
      "Never discard your previous aligner set when switching to a new tray—always keep the most recent past set as an emergency backup.",
      "Do not wear a severely fractured tray with sharp plastic spurs that could lacerate the tongue."
    ],
    whenToCall: "Call our clinic immediately. We will review your digital staging and either approve advancing to the next tray or order a replacement from our laboratory.",
    homeRemedyTool: "Previous aligner set, clean aligner storage case"
  },
  {
    id: "soft-tissue-irritation",
    title: "Canker Sore / Lip or Cheek Abrasion",
    severity: "low",
    summary: "New brackets or hooks can create small frictional rubbing zones as oral tissues undergo mucosal adaptation.",
    immediateSteps: [
      "Apply orthodontic wax to the corresponding bracket whenever you feel rubbing.",
      "Apply a small dab of over-the-counter benzocaine oral anesthetic gel or hydrogen-peroxide oral rinse directly to the sore spot.",
      "Warm saltwater rinses promote rapid healing of oral tissues (mouth tissues heal remarkably quickly, often within 48–72 hours)."
    ],
    whatToAvoid: [
      "Avoid spicy, acidic, or highly salty foods that sting open abrasions.",
      "Avoid touching the sore spot with unwashed hands."
    ],
    whenToCall: "If a sore does not heal after 10–14 days or enlarges noticeably, have it checked by your dentist or orthodontic specialist.",
    homeRemedyTool: "Oral anesthetic gel, orthodontic wax, warm saline"
  },
  {
    id: "trauma-facial-impact",
    title: "Direct Facial Trauma or Sports Impact",
    severity: "urgent",
    summary: "A blow to the face during sports, a fall, or an accident causing loose, displaced, or knocked-out teeth alongside bracket damage.",
    immediateSteps: [
      "Apply a clean cold compress to the face to reduce swelling and control bleeding.",
      "If a permanent tooth is partially dislodged or knocked out, seek emergency dental/orthodontic or hospital emergency care immediately (within 60 minutes).",
      "Do not try to forcefully pull appliances out of the mouth if they are embedded in swollen tissue."
    ],
    whatToAvoid: [
      "Do not clean a knocked-out tooth with soap or scrub the root surface; keep it moist in cold milk or saliva.",
      "Do not delay seeking clinical care."
    ],
    whenToCall: "Call our emergency line immediately. For life-threatening head trauma or continuous hemorrhage, proceed to your nearest emergency department first.",
    homeRemedyTool: "Cold compress, cold milk storage, emergency telephone contact"
  }
];
