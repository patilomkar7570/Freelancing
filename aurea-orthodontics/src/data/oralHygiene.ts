export interface HygieneStep {
  step: number;
  title: string;
  timeEstimate: string;
  tool: string;
  instructions: string;
  proTip: string;
}

export const HYGIENE_STEPS: HygieneStep[] = [
  {
    step: 1,
    title: "Pre-Rinse & Plaque Loosening",
    timeEstimate: "30 seconds",
    tool: "Warm water or alcohol-free antimicrobial mouthwash",
    instructions: "Before applying your toothbrush, vigorously swish warm water or an antimicrobial rinse for 30 seconds. This flushes away loose food debris caught between archwires and reduces surface bacterial bio-load.",
    proTip: "Never skip the pre-rinse: it clears the larger particles so your bristles can focus directly on the bracket-tooth junction."
  },
  {
    step: 2,
    title: "The 45-Degree Bracket Angle Brush",
    timeEstimate: "2 full minutes (minimum)",
    tool: "Soft-bristled orthodontic toothbrush or sonic electric brush with ortho head",
    instructions: "Angle your brush at 45 degrees downward along the top of the brackets to clean along the gumline. Use small, circular vibrating strokes. Then, reverse the angle to 45 degrees upward along the underside of the brackets to thoroughly clean the bottom surfaces and underneath the wire.",
    proTip: "Inspect each tooth in a mirror: the enamel adjacent to the bracket must look glossy, not chalky or dull."
  },
  {
    step: 3,
    title: "Interdental Brushing Beneath the Wire",
    timeEstimate: "1 to 2 minutes",
    tool: "Interdental 'proxabrush' / tree-shaped micro brush",
    instructions: "Gently insert the miniature proxy brush beneath the archwire between each pair of brackets. Slide the brush up and down along the sides of each bracket and between the teeth. This is where conventional bristles cannot reach.",
    proTip: "Keep a travel-size interdental brush in your bag or pocket for quick, discrete cleans after lunches and snacks."
  },
  {
    step: 4,
    title: "Flossing with Orthodontic Threaders or Water Flosser",
    timeEstimate: "2 to 3 minutes",
    tool: "Superfloss with rigid leader, ortho flossers, or pulsed water flosser",
    instructions: "Feed the stiffened end of orthodontic floss under the archwire, then gently curve the floss into a 'C' shape around the side of the tooth. Slide it gently beneath the gumline to lift plaque, then repeat on the adjacent tooth before pulling the floss through.",
    proTip: "If threaders feel tedious at night, a pulsed water flosser set to low-to-medium pressure provides a phenomenal adjunct to remove subgingival debris."
  },
  {
    step: 5,
    title: "Fluoride Protection & Final Inspection",
    timeEstimate: "1 minute",
    tool: "0.05% sodium fluoride rinse or remineralizing paste",
    instructions: "Spit out excess toothpaste without rinsing immediately with water, or rinse with an over-the-counter fluoride mouthwash. Avoid drinking or eating for 30 minutes to allow the fluoride ions to strengthen the vulnerable enamel borders around your brackets.",
    proTip: "White spot lesions (decalcification) occur when acid-producing plaque sits around brackets. Diligent fluoride habits prevent these marks 100%."
  }
];

export const HYGIENE_TOOLS = [
  {
    name: "Orthodontic V-Trim Toothbrush",
    description: "Features shorter center bristles that fit over brackets and longer outer bristles that clean the tooth enamel and gingiva simultaneously.",
    icon: "brush"
  },
  {
    name: "Interdental Proxy Brushes",
    description: "Tiny, flexible cylindrical brushes designed to clean in the 2-millimeter gaps between brackets and under the archwires.",
    icon: "sparkles"
  },
  {
    name: "Orthodontic Floss Threaders / Superfloss",
    description: "A stiffened plastic bridge that guides standard dental floss under orthodontic wires without snagging.",
    icon: "shield-check"
  },
  {
    name: "Pulsed Water Flosser",
    description: "Delivers a calibrated stream of pulsating water to flush away trapped particles and massage gingival tissue around appliances.",
    icon: "droplets"
  },
  {
    name: "Orthodontic Relief Wax",
    description: "Medical-grade silicone or beeswax that covers sharp bracket edges or irritating wire ends to give oral tissue time to adapt.",
    icon: "heart"
  }
];
