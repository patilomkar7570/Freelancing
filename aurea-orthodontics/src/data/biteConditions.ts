export interface BiteCondition {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  prevalence: string;
  description: string;
  potentialConsequences: string[];
  treatmentApproach: string[];
  clinicalInsight: string;
  diagramVisual: "crowding" | "overbite" | "underbite" | "crossbite" | "openbite" | "spacing" | "overjet";
}

export const BITE_CONDITIONS: BiteCondition[] = [
  {
    id: "crowding",
    name: "Dental Crowding",
    subtitle: "Insufficient Arch Space for Alignment",
    tagline: "Overlapping, rotated, or staggered teeth caused by disharmony between tooth size and jaw perimeter.",
    prevalence: "Most common reason patients seek orthodontic care (approx. 45% of children and adults).",
    description: "Dental crowding occurs when the dental arch does not provide adequate perimeter space for all teeth to erupt in a smooth, continuous curve. Teeth are forced to twist, tip lingually or buccally, or overlap. Crowding can complicate plaque removal, increase the risk of localized periodontal inflammation, and accelerate uneven enamel attrition.",
    potentialConsequences: [
      "Difficult plaque and tartar removal between tight contacts",
      "Elevated risk of interproximal decay and gingival inflammation",
      "Uneven incisal wear patterns and chipping of enamel edges",
      "Aesthetic self-consciousness when speaking or smiling"
    ],
    treatmentApproach: [
      "Mild cases: Gentle arch widening and interproximal reproximation to gain millimeters of perimeter space.",
      "Moderate to severe cases: Modern shape-memory archwires or sequential aligner staging.",
      "Growing children: Early orthopedic palatal expansion to gently create natural bone support."
    ],
    clinicalInsight: "At AUREA, our digital treatment planning prioritizes airway-conscious expansion and tooth uprighting over routine extractions whenever biologically sound.",
    diagramVisual: "crowding"
  },
  {
    id: "overbite",
    name: "Deep Overbite",
    subtitle: "Excessive Vertical Overlap of Front Teeth",
    tagline: "The upper front teeth excessively overlap the lower incisors vertically, often causing lower teeth to bite into the roof of the mouth.",
    prevalence: "Common across all age groups, ranging from moderate deep bite to severe impinging overbite.",
    description: "In a normal physiological bite, the upper incisors cover approximately 20% to 30% of the lower incisors vertically. In a deep overbite, this overlap increases beyond 50%, and in severe situations, the lower incisors can impinge directly upon the palatal gingiva behind the upper teeth, leading to mucosal ulceration and bone loss.",
    potentialConsequences: [
      "Severe premature attrition of lower incisal enamel",
      "Palatal tissue impingement, irritation, and soreness",
      "Increased mechanical strain on the temporomandibular joints (TMJ)",
      "A shorter lower facial profile or accentuated chin prominence"
    ],
    treatmentApproach: [
      "Leveling the curve of Spee through anterior tooth intrusion and posterior tooth extrusion.",
      "Bite opening ramps incorporated into clear aligners or fixed appliances.",
      "Comprehensive arch coordination to re-establish a healthy 2mm vertical incisal relationship."
    ],
    clinicalInsight: "Correcting a deep bite restores facial proportions, protects lower enamel for decades, and relieves compressive joint loads.",
    diagramVisual: "overbite"
  },
  {
    id: "underbite",
    name: "Underbite (Class III)",
    subtitle: "Lower Jaw / Teeth Protruding Ahead of Upper Arch",
    tagline: "The lower front teeth sit forward or overlap the upper front teeth when the jaws are closed in resting occlusion.",
    prevalence: "Affects approximately 3% to 5% of the population, frequently with genetic etiology.",
    description: "An underbite occurs when the lower dental arch sits in front of the upper teeth. This can stem from dental malposition, maxillary hypoplasia (underdeveloped upper jaw), mandibular prognathism (overdeveloped lower jaw), or a combination of both. Chewing efficiency and facial aesthetics are significantly impacted if left unaddressed.",
    potentialConsequences: [
      "Impaired masticatory function making it challenging to bite and chew foods",
      "Abnormal stress on incisors leading to chipping and bone thinning",
      "Jaw joint discomfort and muscular strain",
      "Pronounced jaw imbalance and speech alterations (lisps)"
    ],
    treatmentApproach: [
      "Early childhood intervention (Ages 7–9): Protraction face mask or skeletal anchorage to encourage upper jaw advancement.",
      "Adolescent / mild cases: Class III elastics and comprehensive fixed appliance mechanics.",
      "Severe adult skeletal cases: Combined orthodontic-orthognathic surgical planning."
    ],
    clinicalInsight: "Early diagnosis of Class III tendencies is critical: interceptive growth guidance between ages 7 and 9 offers a golden window for skeletal correction.",
    diagramVisual: "underbite"
  },
  {
    id: "crossbite",
    name: "Crossbite",
    subtitle: "Transverse Mismatch of Upper & Lower Arches",
    tagline: "One or more upper teeth bite inside the lower teeth rather than slightly outside, either in the back (posterior) or front (anterior).",
    prevalence: "Affects about 10% of children; unilateral posterior crossbite often causes functional jaw shifting.",
    description: "In a healthy bite, the upper arch is slightly wider than the lower arch, like a lid fitting snugly over a box. In a crossbite, teeth in the upper arch close inside the lower teeth. If a child shifts their jaw to one side to chew comfortably, this functional shift can lead to permanent asymmetric bone growth and facial asymmetry if untreated.",
    potentialConsequences: [
      "Asymmetric facial bone development and chin deviation",
      "Unilateral temporomandibular joint pain and clicking",
      "Localized gum recession on displaced lower teeth",
      "Chewing discomfort and selective dietary avoidance"
    ],
    treatmentApproach: [
      "Posterior crossbite: Palatal expander (RPE) to widen the upper jaw suture comfortably over 2–4 months.",
      "Anterior crossbite: Fixed brackets or sequential aligners to 'jump' the locked front tooth into proper forward position.",
      "Retention with transpalatal arches or rigid retainers to maintain transverse width."
    ],
    clinicalInsight: "A crossbite with a mandibular functional shift is one of the few true orthodontic situations requiring prompt intervention in childhood.",
    diagramVisual: "crossbite"
  },
  {
    id: "openbite",
    name: "Open Bite",
    subtitle: "Lack of Vertical Contact Between Front Teeth",
    tagline: "A vertical gap remains between the upper and lower front teeth even when the back molars are fully clenched together.",
    prevalence: "Frequently linked to digit habits (thumb sucking), tongue thrust swallowing patterns, or hyperdivergent facial growth.",
    description: "An open bite prevents the front teeth from coming into contact. This condition compromises the ability to bite through sandwiches, apples, or other foods, forcing the posterior teeth to bear excessive masticatory load. It is also commonly associated with mouth breathing, tongue posture habits, and speech lisps.",
    potentialConsequences: [
      "Inability to bite or shear food with front incisors",
      "Speech difficulties, particularly with 's' and 'z' sibilant sounds",
      "Premature wear and breakdown of posterior molar teeth",
      "Dry mouth and heightened cavity risk due to mouth breathing posture"
    ],
    treatmentApproach: [
      "Myofunctional tongue retraining and elimination of digit habits.",
      "Intrusive mechanics on posterior molars using temporary anchorage devices (TADs) or aligners.",
      "Vertical elastics and anterior extrusion mechanics for mild dental open bites.",
      "Airway assessment with an ENT specialist to address enlarged adenoids or nasal resistance."
    ],
    clinicalInsight: "Stabilizing an open bite requires addressing both the skeletal geometry and the resting posture of the tongue to prevent relapse.",
    diagramVisual: "openbite"
  },
  {
    id: "overjet",
    name: "Prominent Front Teeth (Excessive Overjet)",
    subtitle: "Upper Incisors Flaring or Protruding Forward",
    tagline: "The upper front teeth protrude significantly forward beyond the lower incisors, colloquially called 'buck teeth'.",
    prevalence: "Found in over 15% of children; increases vulnerability to accidental tooth trauma during sports or play.",
    description: "Unlike an overbite (which is vertical overlap), overjet refers to horizontal protrusion. When upper front teeth protrude excessively, lips may struggle to close naturally without strain (lip incompetence). This exposure leaves incisors vulnerable to traumatic fractures from slips, falls, or sporting activities.",
    potentialConsequences: [
      "Elevated vulnerability to chipped or broken front teeth during recreation",
      "Inability to close lips comfortably at rest (lip strain)",
      "Dryness of anterior gingival tissues leading to chronic redness",
      "Self-consciousness affecting confidence in social settings"
    ],
    treatmentApproach: [
      "Growth modification using functional appliances in adolescent patients to encourage lower jaw advancement.",
      "Class II intermaxillary elastics to coordinate sagittal dental relationships.",
      "Retraction and uprighting of upper anterior teeth with torque control to maintain full lip support."
    ],
    clinicalInsight: "Bringing protruding front teeth back into the safety of the lip envelope dramatically reduces the lifetime risk of dental trauma.",
    diagramVisual: "overjet"
  },
  {
    id: "spacing",
    name: "Diastema & Spacing",
    subtitle: "Excess Gaps Between Teeth",
    tagline: "Gaps or spaces between teeth resulting from tooth-jaw size discrepancies, missing teeth, or an oversized labial frenum.",
    prevalence: "Common in early childhood (the 'ugly duckling' stage) and present in about 20% of adults.",
    description: "Spacing can occur as a single gap between the two upper front central incisors (maxillary midline diastema) or generalized spaces across the entire arch. While sometimes purely cosmetic, persistent spacing can trap food debris, causing localized gingival inflammation and speech whistling.",
    potentialConsequences: [
      "Food impaction between open contacts causing localized discomfort",
      "Gingival inflammation in unprotected interdental papilla zones",
      "Whistling or slight air escape during sibilant speech",
      "Cosmetic dissatisfaction"
    ],
    treatmentApproach: [
      "Precision closure with clear aligners or fixed sectional brackets.",
      "Evaluation of the labial frenum; minor laser frenectomy performed only if fibrotic fibers impede closure.",
      "Long-term bonded lingual wire retention to permanently prevent spaces from reopening."
    ],
    clinicalInsight: "Midline diastemas have a high biological tendency to reopen; at AUREA, we combine bonded wire retainers with removable night retainers for lifelong closure stability.",
    diagramVisual: "spacing"
  }
];
