export interface FoodItem {
  id: string;
  name: string;
  category: "Dairy & Soft" | "Fruits & Vegetables" | "Proteins & Meats" | "Grains & Breads" | "Snacks & Sweets";
  status: "safe" | "caution" | "avoid";
  advice: string;
  substituteTip?: string;
}

export const FOOD_DATABASE: FoodItem[] = [
  {
    id: "yogurt-smoothies",
    name: "Yogurt, Smoothies & Puddings",
    category: "Dairy & Soft",
    status: "safe",
    advice: "Completely safe and ideal during the first 48 hours following adjustments. High in protein and calcium.",
    substituteTip: "Blend with bananas, berries (seeds strained), and Greek yogurt for nutrition without chewing strain."
  },
  {
    id: "whole-apples",
    name: "Whole Raw Apples & Pears",
    category: "Fruits & Vegetables",
    status: "avoid",
    advice: "Biting into a whole apple will directly shear brackets off front incisors due to heavy cantilever forces.",
    substituteTip: "Cut into thin, bite-sized wedges or enjoy unsweetened applesauce. Thin slices are 100% safe to chew with molars."
  },
  {
    id: "popcorn",
    name: "Popcorn",
    category: "Snacks & Sweets",
    status: "avoid",
    advice: "Popcorn kernels and unpopped husks lodge beneath brackets and deep under the gumline, triggering acute gingival abscesses.",
    substituteTip: "Opt for hulless puff snacks, baked cheese crisps, or soft rice cakes instead."
  },
  {
    id: "corn-on-the-cob",
    name: "Corn on the Cob",
    category: "Fruits & Vegetables",
    status: "avoid",
    advice: "Biting directly into a cob exerts tremendous lateral torque against anterior brackets, loosening archwire ties.",
    substituteTip: "Slice the corn off the cob with a knife and enjoy the sweet kernels with a spoon."
  },
  {
    id: "caramel-taffy",
    name: "Caramels, Taffy & Toffee",
    category: "Snacks & Sweets",
    status: "avoid",
    advice: "Extremely sticky and viscous; bends archwires, dislodges cemented molar bands, and fuels rapid acid decay around brackets.",
    substituteTip: "Enjoy smooth milk chocolate or ice cream that melts safely in the mouth."
  },
  {
    id: "nuts-almonds",
    name: "Hard Nuts, Almonds & Seeds",
    category: "Snacks & Sweets",
    status: "avoid",
    advice: "Direct mastication of hard nuts can easily fracture ceramic brackets or bend titanium wires.",
    substituteTip: "Switch to creamy almond butter, peanut butter, or softened chopped walnuts baked into soft breads."
  },
  {
    id: "crusty-bread",
    name: "Crusty Artisan Baguettes & Pizza Crust",
    category: "Grains & Breads",
    status: "caution",
    advice: "Tearing through hard, chewy baguettes with your front teeth can snap brackets.",
    substituteTip: "Tear into small bite-sized pieces and chew with back molars, or dip bread in soup to soften."
  },
  {
    id: "pasta-rice",
    name: "Pasta, Macaroni & Soft Rice",
    category: "Grains & Breads",
    status: "safe",
    advice: "Soft cooked pasta, risotto, noodles, and couscous are gentle on newly adjusted teeth and easy to clean.",
    substituteTip: "Rinse mouth with water after eating to prevent starchy remnants from lingering around ties."
  },
  {
    id: "tender-meats",
    name: "Tender Poultry, Fish & Ground Meats",
    category: "Proteins & Meats",
    status: "safe",
    advice: "Flaky salmon, slow-cooked shredded chicken, meatballs, and tofu provide ample protein with minimal biting effort.",
    substituteTip: "Avoid tough, fibrous steak or biting meat directly off chicken wings or ribs."
  },
  {
    id: "hard-raw-carrots",
    name: "Whole Raw Carrots & Celery",
    category: "Fruits & Vegetables",
    status: "caution",
    advice: "Hard raw vegetables can pop brackets off teeth if bitten whole.",
    substituteTip: "Steam or roast until tender, or shred raw carrots finely with a grater into salads."
  },
  {
    id: "chewing-gum",
    name: "Chewing Gum (Sugar & Bubble Gum)",
    category: "Snacks & Sweets",
    status: "avoid",
    advice: "Wraps around delicate ligature ties, distorts wire loops, and is difficult to remove from appliances.",
    substituteTip: "Orthodontists generally allow xylitol mints that dissolve in the mouth for fresh breath."
  },
  {
    id: "eggs-scrambled",
    name: "Scrambled Eggs, Omelettes & Quiche",
    category: "Proteins & Meats",
    status: "safe",
    advice: "Soft, gentle texture rich in vitamins; an ideal breakfast choice during wire activations.",
    substituteTip: "Add soft cheese, spinach, or avocado for healthy nutrient-dense fats."
  },
  {
    id: "ice-cubes",
    name: "Chewing Ice Cubes",
    category: "Snacks & Sweets",
    status: "avoid",
    advice: "Ice has extreme thermal hardness; chewing on ice is one of the leading causes of fractured dental enamel and destroyed brackets.",
    substituteTip: "Sip iced beverages with a reusable straw, but never crunch the leftover cubes."
  },
  {
    id: "soft-cheeses",
    name: "Cottage Cheese, Brie & Mozzarella",
    category: "Dairy & Soft",
    status: "safe",
    advice: "Gentle on sore teeth, provides essential calcium to support alveolar bone remodeling during tooth movement.",
    substituteTip: "Pairs wonderfully with ripe avocado or soft ripe fruit."
  }
];

export const ADJUSTMENT_DAY_MENU = {
  breakfast: "Warm oatmeal with mashed banana, cinnamon, and a dollop of creamy Greek yogurt.",
  lunch: "Creamy roasted butternut squash or tomato bisque soup paired with a soft steamed bao or crustless grilled cheese.",
  dinner: "Pan-seared tender salmon fillet with mashed sweet potatoes and tender steamed asparagus tips.",
  snack: "Chilled fruit smoothie made with oat milk, mango, and protein powder."
};
