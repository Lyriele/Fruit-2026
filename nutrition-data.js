// nutrition-data.js - COMPREHENSIVE NUTRITION DATA

// ========== TECHNICAL TERMS GLOSSARY ==========
window.nutritionGlossary = {
    // Antioxidants & Polyphenols
    "anthocyanins": {
        term: "Anthocyanins",
        definition: "Blue/purple/red pigments in fruits & vegetables that protect against oxidative stress and inflammation. Found in berries, cherries, and purple grapes.",
        benefits: "Brain protection, heart health, anti-aging",
        examples: "Blueberries, blackberries, raspberries"
    },
    "ellagic acid": {
        term: "Ellagic Acid",
        definition: "Polyphenol antioxidant that helps protect cells from DNA damage. Converted by gut bacteria to urolithins.",
        benefits: "DNA protection, anti-cancer properties",
        examples: "Strawberries, raspberries, pomegranate"
    },
    "quercetin": {
        term: "Quercetin",
        definition: "Flavonoid antioxidant with strong anti-inflammatory and antiviral properties. Helps stabilize immune cells.",
        benefits: "Allergy relief, immune support, heart health",
        examples: "Apples, onions, capers"
    },
    "lycopene": {
        term: "Lycopene",
        definition: "Red carotenoid pigment (not converted to vitamin A) with powerful antioxidant effects, especially for prostate health.",
        benefits: "Prostate protection, skin UV protection",
        examples: "Tomatoes, watermelon, pink grapefruit"
    },
    "resveratrol": {
        term: "Resveratrol",
        definition: "Polyphenol that activates longevity genes (sirtuins). Famous from red wine, but also in grapes.",
        benefits: "Anti-aging, heart protection",
        examples: "Red grapes, blueberries, peanuts"
    },
    
    // Enzymes
    "bromelain": {
        term: "Bromelain",
        definition: "Protein-digesting enzyme from pineapple stems/fruit. Also has anti-inflammatory properties.",
        benefits: "Digestive aid, reduces swelling",
        examples: "Pineapple"
    },
    "papain": {
        term: "Papain",
        definition: "Proteolytic enzyme from papaya latex that breaks down proteins. Used as meat tenderizer.",
        benefits: "Protein digestion, anti-inflammatory",
        examples: "Papaya"
    },
    "actinidin": {
        term: "Actinidin",
        definition: "Unique protein-digesting enzyme found only in kiwi fruit. More effective than stomach acid alone.",
        benefits: "Enhanced protein digestion",
        examples: "Kiwi fruit"
    },
    
    // Amino Acids & Special Compounds
    "citrulline": {
        term: "Citrulline",
        definition: "Amino acid that converts to arginine in the body, increasing nitric oxide production for better blood flow.",
        benefits: "Exercise performance, blood pressure",
        examples: "Watermelon, bitter melon"
    },
    "melatonin": {
        term: "Melatonin",
        definition: "Hormone that regulates sleep-wake cycles. Some fruits contain dietary melatonin.",
        benefits: "Sleep regulation, antioxidant",
        examples: "Tart cherries, grapes, strawberries"
    },
    "mangiferin": {
        term: "Mangiferin",
        definition: "Unique polyphenol in mango with strong antioxidant and anti-inflammatory properties.",
        benefits: "Metabolic health, anti-inflammatory",
        examples: "Mango, iris plants"
    },
    
    // Fiber Types
    "pectin": {
        term: "Pectin",
        definition: "Soluble fiber that forms gel, slowing digestion and feeding beneficial gut bacteria.",
        benefits: "Cholesterol lowering, gut health",
        examples: "Apples, citrus peels, berries"
    },
    "resistant starch": {
        term: "Resistant Starch",
        definition: "Starch that resists digestion, acting as prebiotic fiber for colon bacteria. Increases with cooking/cooling.",
        benefits: "Blood sugar control, colon health",
        examples: "Green bananas, cooked/cooled potatoes"
    },
    
    // Carotenoids
    "beta-carotene": {
        term: "Beta-Carotene",
        definition: "Orange pigment converted to vitamin A as needed. Provitamin A carotenoid.",
        benefits: "Vision, immune function, skin health",
        examples: "Carrots, sweet potatoes, mango"
    },
    "lutein": {
        term: "Lutein",
        definition: "Yellow carotenoid that accumulates in the eyes, protecting against blue light damage.",
        benefits: "Eye protection, macular health",
        examples: "Avocado, kale, egg yolks"
    },
    "zeaxanthin": {
        term: "Zeaxanthin",
        definition: "Yellow carotenoid that works with lutein to protect the central retina.",
        benefits: "Macular degeneration prevention",
        examples: "Goji berries, corn, orange peppers"
    },
    
    // Unique Compounds
    "punicalagins": {
        term: "Punicalagins",
        definition: "Large polyphenol molecules in pomegranate that break down into smaller, active compounds.",
        benefits: "Antioxidant, anti-inflammatory",
        examples: "Pomegranate"
    },
    "urolithin a": {
        term: "Urolithin A",
        definition: "Metabolite produced by gut bacteria from ellagitannins. Supports mitochondrial health.",
        benefits: "Cellular energy, anti-aging",
        examples: "Produced from pomegranate, berries"
    },
    "pterostilbene": {
        term: "Pterostilbene",
        definition: "Compound similar to resveratrol but more bioavailable. Found in blueberries.",
        benefits: "Brain health, blood sugar control",
        examples: "Blueberries, grapes"
    },
    "fisetin": {
        term: "Fisetin",
        definition: "Flavonoid with strong neuroprotective effects and potential anti-aging properties.",
        benefits: "Brain health, longevity",
        examples: "Strawberries, apples, onions"
    },
    
    // Vitamins & Minerals
    "vitamin c": {
        term: "Vitamin C (Ascorbic Acid)",
        definition: "Water-soluble antioxidant essential for collagen synthesis, immune function, and iron absorption.",
        benefits: "Immune support, skin health, antioxidant",
        examples: "Citrus, kiwi, bell peppers"
    },
    "vitamin k": {
        term: "Vitamin K",
        definition: "Fat-soluble vitamin essential for blood clotting (K1) and bone/artery health (K2).",
        benefits: "Bone density, heart health",
        examples: "Leafy greens, natto, kiwi"
    },
    "potassium": {
        term: "Potassium",
        definition: "Essential mineral electrolyte that regulates fluid balance, nerve signals, and muscle contractions.",
        benefits: "Blood pressure, heart rhythm",
        examples: "Bananas, avocado, potatoes"
    },
    "magnesium": {
        term: "Magnesium",
        definition: "Mineral involved in 300+ enzyme reactions including energy production and muscle function.",
        benefits: "Sleep, muscle relaxation, energy",
        examples: "Spinach, almonds, avocado"
    }
};


window.foodSynergyData = {
    "apple": {
        name: "Apple",
        icon: "fa-apple-alt",
        keyNutrient: "Quercetin & Pectin",
        keyNutrientDesc: "Powerful antioxidants that work synergistically with other nutrients",
        synergyTips: [
            {
                food: "Spinach/Kale",
                icon: "fa-seedling",
                benefit: "Vitamin C from apples increases non-heme iron absorption 3-4x",
                benefitTag: "+300% Iron Absorption",
                science: "Apple's vitamin C reduces iron to more absorbable ferrous form"
            },
            {
                food: "Fatty Fish",
                icon: "fa-fish",
                benefit: "Polyphenols enhance omega-3 absorption and reduce inflammation",
                benefitTag: "Better Omega-3 Utilization",
                science: "Quercetin reduces oxidative damage to omega-3 fatty acids"
            },
            {
                food: "Yogurt/Kefir",
                icon: "fa-cheese",
                benefit: "Pectin acts as prebiotic, feeding probiotics for gut health",
                benefitTag: "Enhanced Gut Microbiome",
                science: "Apple pectin increases Bifidobacteria and Lactobacillus populations"
            },
            {
                food: "Turmeric",
                icon: "fa-mortar-pestle",
                benefit: "Piperine in black pepper (with turmeric) absorption enhanced by apple",
                benefitTag: "200% Curcumin Bioavailability",
                science: "Apple's fatsoluble compounds help curcumin cross intestinal barrier"
            }
        ],
        scienceNote: "Apples contain over 100 phytochemicals including flavonoids, phenolic acids, and triterpenoids that work synergistically to enhance nutrient absorption, reduce inflammation, and support gut health."
    },
    "banana": {
        name: "Banana",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Potassium & Resistant Starch",
        keyNutrientDesc: "Electrolyte balance and prebiotic fiber for gut health",
        synergyTips: [
            {
                food: "Avocado",
                icon: "fa-seedling",
                benefit: "Healthy fats enhance absorption of fat-soluble vitamins in banana",
                benefitTag: "Better Vitamin A/E Absorption",
                science: "Monounsaturated fats in avocado improve carotenoid absorption"
            },
            {
                food: "Greek Yogurt",
                icon: "fa-cheese",
                benefit: "Protein slows sugar absorption for sustained energy release",
                benefitTag: "Balanced Glycemic Response",
                science: "Protein reduces glycemic index of banana from 62 to ~40"
            },
            {
                food: "Almond Butter",
                icon: "fa-seedling",
                benefit: "Vitamin E in almonds protects banana's nutrients during digestion",
                benefitTag: "Enhanced Nutrient Preservation",
                science: "Vitamin E prevents oxidation of banana's dopamine and catechins"
            }
        ],
        scienceNote: "Bananas provide resistant starch that acts as a prebiotic, feeding beneficial gut bacteria. Their potassium works with sodium to regulate fluid balance and nerve function."
    },
    "orange": {
        name: "Orange",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Vitamin C & Bioflavonoids",
        keyNutrientDesc: "Enhances iron absorption and boosts antioxidant network",
        synergyTips: [
            {
                food: "Spinach",
                icon: "fa-seedling",
                benefit: "Non-heme iron absorption increases 4-6x with vitamin C",
                benefitTag: "4-6x Iron Boost",
                science: "Vitamin C reduces ferric iron to more absorbable ferrous iron"
            },
            {
                food: "Chicken/Fish",
                icon: "fa-drumstick-bite",
                benefit: "Vitamin C enhances collagen synthesis from protein",
                benefitTag: "Enhanced Collagen Production",
                science: "Vitamin C is cofactor for prolyl and lysyl hydroxylase enzymes"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "EGCG absorption increases with vitamin C's antioxidant recycling",
                benefitTag: "300% EGCG Bioavailability",
                science: "Vitamin C regenerates oxidized EGCG, maintaining antioxidant capacity"
            }
        ],
        scienceNote: "Oranges contain hesperidin and other bioflavonoids that enhance vitamin C's effects, improve capillary integrity, and work synergistically with other antioxidants."
    },
    "blueberry": {
        name: "Blueberry",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Anthocyanins & Pterostilbene",
        keyNutrientDesc: "Cross blood-brain barrier for cognitive protection",
        synergyTips: [
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Omega-3s enhance anthocyanin absorption for brain health",
                benefitTag: "Enhanced Neuroprotection",
                science: "DHA helps anthocyanins cross blood-brain barrier more efficiently"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Catechins and anthocyanins create powerful anti-aging synergy",
                benefitTag: "Cellular Longevity",
                science: "Synergistic activation of Nrf2 pathway for antioxidant defense"
            },
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Flavonoids from both enhance endothelial function",
                benefitTag: "Improved Blood Flow",
                science: "Synergistic increase in nitric oxide production"
            }
        ],
        scienceNote: "Blueberries contain 25+ anthocyanin compounds that work synergistically with other polyphenols to provide neuroprotective, anti-inflammatory, and cardiovascular benefits."
    },
    "avocado": {
        name: "Avocado",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Monounsaturated Fats & Lutein",
        keyNutrientDesc: "Fat-soluble nutrient absorption and eye health",
        synergyTips: [
            {
                food: "Tomato",
                icon: "fa-apple-alt", // Using apple as fallback
                benefit: "Lycopene absorption increases 4.4x with avocado fats",
                benefitTag: "4.4x Lycopene Boost",
                science: "Fats enhance micelle formation for carotenoid absorption"
            },
            {
                food: "Carrots",
                icon: "fa-carrot",
                benefit: "Beta-carotene to vitamin A conversion increases 6.6x",
                benefitTag: "Enhanced Vitamin A Production",
                science: "Fats improve cleavage of beta-carotene to retinol"
            },
            {
                food: "Leafy Greens",
                icon: "fa-seedling",
                benefit: "Vitamin K absorption increases 3-5x with healthy fats",
                benefitTag: "3-5x Vitamin K Absorption",
                science: "Fat required for chylomicron formation and lymphatic transport"
            }
        ],
        scienceNote: "Avocado's monounsaturated fats enhance absorption of fat-soluble vitamins (A, D, E, K) and carotenoids while providing heart-healthy benefits."
    },
    "strawberry": {
        name: "Strawberry",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Ellagic Acid & Vitamin C",
        keyNutrientDesc: "DNA protection and collagen synthesis",
        synergyTips: [
            {
                food: "Spinach",
                icon: "fa-seedling",
                benefit: "Vitamin C boosts iron absorption while ellagic acid protects cells",
                benefitTag: "Dual Protection",
                science: "Synergy between iron absorption enhancement and DNA protection"
            },
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Flavonoids create enhanced cardiovascular protection",
                benefitTag: "Heart Health Synergy",
                science: "Combined improvement in endothelial function and blood pressure"
            },
            {
                food: "Yogurt",
                icon: "fa-cheese",
                benefit: "Probiotics utilize strawberry fiber for butyrate production",
                benefitTag: "Enhanced SCFA Production",
                science: "Fiber feeds bacteria that produce anti-inflammatory short-chain fatty acids"
            }
        ],
        scienceNote: "Strawberries contain fisetin, which has shown neuroprotective effects, and work synergistically with other polyphenols to provide comprehensive antioxidant protection."
    },
    "kiwi": {
        name: "Kiwi",
        icon: "fa-apple-alt", // Using apple as fallback
        keyNutrient: "Vitamin C & Actinidin",
        keyNutrientDesc: "Protein digestion and immune support",
        synergyTips: [
            {
                food: "Meat/Fish",
                icon: "fa-drumstick-bite",
                benefit: "Actinidin enzyme enhances protein digestion and amino acid absorption",
                benefitTag: "Improved Protein Utilization",
                science: "Actinidin breaks down proteins more effectively than stomach acid alone"
            },
            {
                food: "Iron-rich Foods",
                icon: "fa-seedling",
                benefit: "High vitamin C content maximizes non-heme iron absorption",
                benefitTag: "Optimal Iron Absorption",
                science: "One kiwi provides 100% DV vitamin C for iron reduction"
            },
            {
                food: "Nuts",
                icon: "fa-nut",
                benefit: "Vitamin C protects omega-3s from oxidation during digestion",
                benefitTag: "Nutrient Preservation",
                science: "Antioxidant protection of unsaturated fatty acids"
            }
        ],
        scienceNote: "Kiwi contains the unique enzyme actinidin that enhances protein digestion, plus exceptional vitamin C content and prebiotic fibers for comprehensive digestive health."
    }
};

// COMPREHENSIVE VITAMIN & MINERAL GUIDE DATA
window.nutritionGuideData = {
    "vitamin-c": {
        name: "Vitamin C",
        icon: "fa-virus-slash",
        color: "#ff6b6b",
        category: "Vitamin",
        dailyNeed: "75-90mg",
        description: "Water-soluble antioxidant essential for collagen synthesis, immune function, iron absorption, and neurotransmitter production. Acts as cofactor for 8+ enzymatic reactions.",
        topSources: [
            { name: "Guava", amount: "228mg per 100g", percent: "253%", note: "Highest vitamin C content of any fruit" },
            { name: "Kiwi", amount: "93mg per 100g", percent: "103%", note: "Also contains actinidin enzyme" },
            { name: "Orange", amount: "53mg per 100g", percent: "59%", note: "Rich in bioflavonoids" },
            { name: "Strawberry", amount: "59mg per 100g", percent: "66%", note: "Contains ellagic acid" },
            { name: "Papaya", amount: "61mg per 100g", percent: "68%", note: "Also provides papain enzyme" }
        ],
        healthTips: [
            "Water-soluble: excess excreted, requires daily intake",
            "Heat-sensitive: raw or lightly cooked preserves content",
            "Smokers need 35mg more daily due to oxidative stress",
            "Enhances non-heme iron absorption 4-6x",
            "Regenerates vitamin E and glutathione antioxidants"
        ],
        synergyWith: ["Iron", "Vitamin E", "Bioflavonoids", "Zinc"]
    },
    "vitamin-a": {
        name: "Vitamin A",
        icon: "fa-eye",
        color: "#ff9500",
        category: "Vitamin",
        dailyNeed: "700-900mcg RAE",
        description: "Fat-soluble vitamin crucial for vision (rhodopsin synthesis), immune function, cell differentiation, reproduction, and skin health. Comes as retinol (animal) and carotenoids (plant).",
        topSources: [
            { name: "Mango", amount: "54mcg per 100g", percent: "6%", note: "Rich in beta-carotene" },
            { name: "Cantaloupe", amount: "169mcg per 100g", percent: "19%", note: "High in beta-carotene" },
            { name: "Apricot", amount: "96mcg per 100g", percent: "11%", note: "Dried form concentrated" },
            { name: "Papaya", amount: "47mcg per 100g", percent: "5%", note: "Also contains papain" },
            { name: "Watermelon", amount: "28mcg per 100g", percent: "3%", note: "Lycopene source too" }
        ],
        healthTips: [
            "Fat-soluble: requires dietary fat for absorption",
            "Beta-carotene converts to retinol as needed",
            "Essential for night vision and eye adaptation",
            "Toxicity possible with supplements, not food sources",
            "Works synergistically with zinc and vitamin D"
        ],
        synergyWith: ["Zinc", "Vitamin D", "Healthy Fats", "Vitamin E"]
    },
    "potassium": {
        name: "Potassium",
        icon: "fa-heartbeat",
        color: "#4cd964",
        category: "Mineral",
        dailyNeed: "3,500-4,700mg",
        description: "Essential electrolyte that maintains fluid balance, nerve transmission, muscle contraction, and blood pressure regulation. Works with sodium to maintain cellular function.",
        topSources: [
            { name: "Avocado", amount: "485mg per 100g", percent: "10%", note: "Also healthy fats" },
            { name: "Banana", amount: "358mg per 100g", percent: "8%", note: "Classic potassium source" },
            { name: "Coconut Water", amount: "250mg per 100ml", percent: "5%", note: "Natural electrolyte drink" },
            { name: "Orange", amount: "181mg per 100g", percent: "4%", note: "With vitamin C" },
            { name: "Cantaloupe", amount: "267mg per 100g", percent: "6%", note: "Hydrating fruit" }
        ],
        healthTips: [
            "Balances sodium: aim for 5:1 potassium:sodium ratio",
            "Critical for heart rhythm and muscle function",
            "Athletes lose through sweat: replenish regularly",
            "Diuretics can deplete potassium levels",
            "Works with magnesium for optimal muscle function"
        ],
        synergyWith: ["Magnesium", "Sodium Balance", "Vitamin B6"]
    },
    "magnesium": {
        name: "Magnesium",
        icon: "fa-atom",
        color: "#34c759",
        category: "Mineral",
        dailyNeed: "310-420mg",
        description: "Cofactor for 300+ enzymatic reactions including energy production, protein synthesis, nerve function, blood glucose control, and blood pressure regulation.",
        topSources: [
            { name: "Avocado", amount: "29mg per 100g", percent: "7%", note: "Also healthy fats" },
            { name: "Banana", amount: "27mg per 100g", percent: "6%", note: "With potassium" },
            { name: "Figs", amount: "17mg per 100g", percent: "4%", note: "Dried form concentrated" },
            { name: "Raspberries", amount: "22mg per 100g", percent: "5%", note: "High in fiber" },
            { name: "Guava", amount: "18mg per 100g", percent: "4%", note: "Vitamin C rich" }
        ],
        healthTips: [
            "Deficiency common due to soil depletion and processing",
            "Works with calcium for bone health (2:1 calcium:magnesium)",
            "Essential for ATP (energy) production",
            "Helps regulate melatonin and sleep cycles",
            "Stress depletes magnesium stores"
        ],
        synergyWith: ["Calcium", "Vitamin D", "Vitamin B6", "Potassium"]
    },
    "fiber": {
        name: "Fiber",
        icon: "fa-seedling",
        color: "#5ac8fa",
        category: "Nutrient",
        dailyNeed: "25-38g",
        description: "Indigestible carbohydrate that promotes digestive health, regulates blood sugar, lowers cholesterol, and supports gut microbiome. Includes soluble (gels) and insoluble (bulk) types.",
        topSources: [
            { name: "Raspberries", amount: "6.5g per 100g", percent: "23%", note: "Highest fiber berry" },
            { name: "Pear", amount: "3.1g per 100g", percent: "11%", note: "Skin has most fiber" },
            { name: "Apple", amount: "2.4g per 100g", percent: "9%", note: "Pectin is soluble fiber" },
            { name: "Banana", amount: "2.6g per 100g", percent: "9%", note: "Resistant starch too" },
            { name: "Orange", amount: "2.4g per 100g", percent: "9%", note: "White pith is fiber-rich" }
        ],
        healthTips: [
            "Increase gradually to avoid bloating and gas",
            "Drink plenty of water with high-fiber diet",
            "Soluble fiber lowers LDL cholesterol",
            "Insoluble fiber prevents constipation",
            "Prebiotic fibers feed beneficial gut bacteria"
        ],
        synergyWith: ["Water", "Probiotics", "Polyphenols"]
    },
    "antioxidants-complex": {
        name: "Antioxidant Complex",
        icon: "fa-shield-alt",
        color: "#af52de",
        category: "Phytochemicals",
        dailyNeed: "Varies by type",
        description: "Diverse group of compounds that neutralize free radicals, reduce oxidative stress, and protect cells from damage. Includes polyphenols, carotenoids, vitamins C/E, and trace minerals.",
        topSources: [
            { name: "Blueberries", amount: "Highest ORAC score", percent: "★★★★★", note: "Anthocyanins, pterostilbene" },
            { name: "Pomegranate", amount: "Rich in punicalagins", percent: "★★★★★", note: "Ellagitannins, anthocyanins" },
            { name: "Goji Berries", amount: "Zeaxanthin, polysaccharides", percent: "★★★★☆", note: "Eye-protective carotenoids" },
            { name: "Strawberries", amount: "Ellagic acid, vitamin C", percent: "★★★★☆", note: "Fisetin for brain health" }
        ],
        healthTips: [
            "Different antioxidants protect different cell components",
            "Synergy: antioxidants regenerate each other (vitamin C → E)",
            "Eat rainbow of colors for diverse antioxidants",
            "Some cooking increases antioxidant availability (tomatoes)",
            "Fat enhances absorption of fat-soluble antioxidants"
        ],
        synergyWith: ["Vitamin C", "Vitamin E", "Selenium", "Zinc"]
    },
    "vitamin-k": {
        name: "Vitamin K",
        icon: "fa-tint",
        color: "#5856d6",
        category: "Vitamin",
        dailyNeed: "90-120mcg",
        description: "Fat-soluble vitamin essential for blood clotting (K1) and bone metabolism (K2). Activates proteins involved in calcium regulation and arterial health.",
        topSources: [
            { name: "Kiwi", amount: "40mcg per 100g", percent: "33%", note: "Unexpectedly high source" },
            { name: "Avocado", amount: "21mcg per 100g", percent: "18%", note: "With healthy fats" },
            { name: "Blueberries", amount: "19mcg per 100g", percent: "16%", note: "Also anthocyanins" },
            { name: "Grapes", amount: "15mcg per 100g", percent: "13%", note: "Resveratrol source" }
        ],
        healthTips: [
            "Fat-soluble: requires dietary fat for absorption",
            "K2 (menaquinone) from fermented foods more bioavailable",
            "Important for bone density and arterial flexibility",
            "Blood thinners (warfarin) affect vitamin K needs",
            "Works with vitamin D for calcium regulation"
        ],
        synergyWith: ["Vitamin D", "Calcium", "Magnesium", "Healthy Fats"]
    },
    "zinc": {
        name: "Zinc",
        icon: "fa-microscope",
        color: "#ff9500",
        category: "Mineral",
        dailyNeed: "8-11mg",
        description: "Essential trace mineral involved in 100+ enzymatic reactions, immune function, protein synthesis, wound healing, DNA synthesis, and cell division.",
        topSources: [
            { name: "Avocado", amount: "0.6mg per 100g", percent: "4%", note: "Unexpected fruit source" },
            { name: "Pomegranate", amount: "0.4mg per 100g", percent: "3%", note: "With antioxidants" },
            { name: "Blackberries", amount: "0.5mg per 100g", percent: "3%", note: "Fiber-rich" },
            { name: "Dates", amount: "0.4mg per 100g", percent: "3%", note: "Dried concentrated" }
        ],
        healthTips: [
            "Vitamin C enhances zinc absorption from plant sources",
            "Phytates in grains/legumes can inhibit absorption",
            "Critical for immune cell development and function",
            "Important for taste and smell perception",
            "Works with copper in balanced ratio (10:1 zinc:copper)"
        ],
        synergyWith: ["Vitamin C", "Copper Balance", "Vitamin A", "Protein"]
    }
};// nutrition-data.js - EXTENDED COMPREHENSIVE NUTRITION DATA

// COMPREHENSIVE FOOD SYNERGY DATA - 20+ FRUITS
window.foodSynergyData = {
    "apple": {
        name: "Apple",
        icon: "fa-apple-alt",
        color: "#ff6b6b",
        keyNutrient: "Quercetin & Pectin",
        keyNutrientDesc: "Powerful antioxidants that work synergistically with other nutrients",
        synergyTips: [
            {
                food: "Spinach/Kale",
                icon: "fa-seedling",
                benefit: "Vitamin C from apples increases non-heme iron absorption 3-4x",
                benefitTag: "+300% Iron Absorption",
                science: "Apple's vitamin C reduces iron to more absorbable ferrous form"
            },
            {
                food: "Fatty Fish (Salmon)",
                icon: "fa-fish",
                benefit: "Polyphenols enhance omega-3 absorption and reduce inflammation",
                benefitTag: "Better Omega-3 Utilization",
                science: "Quercetin reduces oxidative damage to omega-3 fatty acids"
            },
            {
                food: "Greek Yogurt",
                icon: "fa-cheese",
                benefit: "Pectin acts as prebiotic, feeding probiotics for gut health",
                benefitTag: "Enhanced Gut Microbiome",
                science: "Apple pectin increases Bifidobacteria and Lactobacillus populations"
            },
            {
                food: "Turmeric + Black Pepper",
                icon: "fa-mortar-pestle",
                benefit: "Piperine absorption enhanced by apple's polyphenols",
                benefitTag: "200% Curcumin Bioavailability",
                science: "Apple's compounds help curcumin cross intestinal barrier"
            }
        ],
        scienceNote: "Apples contain over 100 phytochemicals including flavonoids, phenolic acids, and triterpenoids that work synergistically to enhance nutrient absorption, reduce inflammation, and support gut health."
    },
    "banana": {
        name: "Banana",
        icon: "fa-apple-alt",
        color: "#ffd700",
        keyNutrient: "Potassium & Resistant Starch",
        keyNutrientDesc: "Electrolyte balance and prebiotic fiber for gut health",
        synergyTips: [
            {
                food: "Avocado",
                icon: "fa-seedling",
                benefit: "Healthy fats enhance absorption of fat-soluble vitamins in banana",
                benefitTag: "Better Vitamin A/E Absorption",
                science: "Monounsaturated fats improve carotenoid absorption"
            },
            {
                food: "Greek Yogurt",
                icon: "fa-cheese",
                benefit: "Protein slows sugar absorption for sustained energy release",
                benefitTag: "Balanced Glycemic Response",
                science: "Protein reduces glycemic index of banana from 62 to ~40"
            },
            {
                food: "Almond Butter",
                icon: "fa-seedling",
                benefit: "Vitamin E in almonds protects banana's nutrients during digestion",
                benefitTag: "Enhanced Nutrient Preservation",
                science: "Vitamin E prevents oxidation of banana's dopamine and catechins"
            },
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Magnesium in chocolate works with banana's potassium for muscle function",
                benefitTag: "Electrolyte Synergy",
                science: "Potassium-magnesium synergy for nerve and muscle function"
            }
        ],
        scienceNote: "Bananas provide resistant starch that acts as a prebiotic, feeding beneficial gut bacteria. Their potassium works with sodium to regulate fluid balance and nerve function. Green bananas have more resistant starch."
    },
    "orange": {
        name: "Orange",
        icon: "fa-apple-alt",
        color: "#ff9500",
        keyNutrient: "Vitamin C & Hesperidin",
        keyNutrientDesc: "Enhances iron absorption and boosts antioxidant network",
        synergyTips: [
            {
                food: "Spinach",
                icon: "fa-seedling",
                benefit: "Non-heme iron absorption increases 4-6x with vitamin C",
                benefitTag: "4-6x Iron Boost",
                science: "Vitamin C reduces ferric iron to more absorbable ferrous iron"
            },
            {
                food: "Chicken/Fish",
                icon: "fa-drumstick-bite",
                benefit: "Vitamin C enhances collagen synthesis from protein",
                benefitTag: "Enhanced Collagen Production",
                science: "Vitamin C is cofactor for prolyl and lysyl hydroxylase enzymes"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "EGCG absorption increases with vitamin C's antioxidant recycling",
                benefitTag: "300% EGCG Bioavailability",
                science: "Vitamin C regenerates oxidized EGCG, maintaining antioxidant capacity"
            },
            {
                food: "Whole Grains",
                icon: "fa-seedling",
                benefit: "Vitamin C improves iron absorption inhibited by phytates",
                benefitTag: "Mineral Absorption",
                science: "Overcomes phytate inhibition of mineral absorption"
            }
        ],
        scienceNote: "Oranges contain hesperidin and other bioflavonoids that enhance vitamin C's effects, improve capillary integrity, and work synergistically with other antioxidants. The white pith is particularly rich in bioflavonoids."
    },
    "blueberry": {
        name: "Blueberry",
        icon: "fa-apple-alt",
        color: "#5856d6",
        keyNutrient: "Anthocyanins & Pterostilbene",
        keyNutrientDesc: "Cross blood-brain barrier for cognitive protection",
        synergyTips: [
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Omega-3s enhance anthocyanin absorption for brain health",
                benefitTag: "Enhanced Neuroprotection",
                science: "DHA helps anthocyanins cross blood-brain barrier more efficiently"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Catechins and anthocyanins create powerful anti-aging synergy",
                benefitTag: "Cellular Longevity",
                science: "Synergistic activation of Nrf2 pathway for antioxidant defense"
            },
            {
                food: "Dark Chocolate (70%+)",
                icon: "fa-candy",
                benefit: "Flavonoids from both enhance endothelial function",
                benefitTag: "Improved Blood Flow",
                science: "Synergistic increase in nitric oxide production"
            },
            {
                food: "Greek Yogurt",
                icon: "fa-cheese",
                benefit: "Probiotics metabolize blueberry polyphenols into active forms",
                benefitTag: "Enhanced Polyphenol Activation",
                science: "Gut bacteria convert polyphenols to more bioavailable metabolites"
            }
        ],
        scienceNote: "Blueberries contain 25+ anthocyanin compounds that work synergistically with other polyphenols to provide neuroprotective, anti-inflammatory, and cardiovascular benefits. Wild blueberries have 2x antioxidants."
    },
    "avocado": {
        name: "Avocado",
        icon: "fa-apple-alt",
        color: "#34c759",
        keyNutrient: "Monounsaturated Fats & Lutein",
        keyNutrientDesc: "Fat-soluble nutrient absorption and eye health",
        synergyTips: [
            {
                food: "Tomato",
                icon: "fa-apple-alt",
                benefit: "Lycopene absorption increases 4.4x with avocado fats",
                benefitTag: "4.4x Lycopene Boost",
                science: "Fats enhance micelle formation for carotenoid absorption"
            },
            {
                food: "Carrots",
                icon: "fa-carrot",
                benefit: "Beta-carotene to vitamin A conversion increases 6.6x",
                benefitTag: "Enhanced Vitamin A Production",
                science: "Fats improve cleavage of beta-carotene to retinol"
            },
            {
                food: "Spinach/Kale",
                icon: "fa-seedling",
                benefit: "Vitamin K absorption increases 3-5x with healthy fats",
                benefitTag: "3-5x Vitamin K Absorption",
                science: "Fat required for chylomicron formation and lymphatic transport"
            },
            {
                food: "Eggs",
                icon: "fa-egg",
                benefit: "Combined fats enhance absorption of all fat-soluble vitamins",
                benefitTag: "Maximized Nutrient Absorption",
                science: "Synergistic effect on chylomicron production and nutrient packaging"
            }
        ],
        scienceNote: "Avocado's monounsaturated fats enhance absorption of fat-soluble vitamins (A, D, E, K) and carotenoids while providing heart-healthy benefits. Also contains unique compounds like persenones with anti-inflammatory properties."
    },
    "strawberry": {
        name: "Strawberry",
        icon: "fa-apple-alt",
        color: "#ff3b30",
        keyNutrient: "Ellagic Acid & Vitamin C",
        keyNutrientDesc: "DNA protection and collagen synthesis",
        synergyTips: [
            {
                food: "Spinach",
                icon: "fa-seedling",
                benefit: "Vitamin C boosts iron absorption while ellagic acid protects cells",
                benefitTag: "Dual Protection",
                science: "Synergy between iron absorption enhancement and DNA protection"
            },
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Flavonoids create enhanced cardiovascular protection",
                benefitTag: "Heart Health Synergy",
                science: "Combined improvement in endothelial function and blood pressure"
            },
            {
                food: "Kefir",
                icon: "fa-cheese",
                benefit: "Probiotics utilize strawberry fiber for butyrate production",
                benefitTag: "Enhanced SCFA Production",
                science: "Fiber feeds bacteria that produce anti-inflammatory short-chain fatty acids"
            },
            {
                food: "Almonds",
                icon: "fa-nut",
                benefit: "Vitamin E protects strawberry's vitamin C during digestion",
                benefitTag: "Antioxidant Recycling",
                science: "Vitamin E regenerates oxidized vitamin C"
            }
        ],
        scienceNote: "Strawberries contain fisetin, which has shown neuroprotective effects, and work synergistically with other polyphenols to provide comprehensive antioxidant protection. Also rich in manganese for bone health."
    },
    "kiwi": {
        name: "Kiwi",
        icon: "fa-apple-alt",
        color: "#8bc34a",
        keyNutrient: "Vitamin C & Actinidin",
        keyNutrientDesc: "Protein digestion and immune support",
        synergyTips: [
            {
                food: "Meat/Fish",
                icon: "fa-drumstick-bite",
                benefit: "Actinidin enzyme enhances protein digestion and amino acid absorption",
                benefitTag: "Improved Protein Utilization",
                science: "Actinidin breaks down proteins more effectively than stomach acid alone"
            },
            {
                food: "Iron-rich Foods",
                icon: "fa-seedling",
                benefit: "High vitamin C content maximizes non-heme iron absorption",
                benefitTag: "Optimal Iron Absorption",
                science: "One kiwi provides 100% DV vitamin C for iron reduction"
            },
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Vitamin C protects omega-3s from oxidation during digestion",
                benefitTag: "Nutrient Preservation",
                science: "Antioxidant protection of unsaturated fatty acids"
            },
            {
                food: "Quinoa",
                icon: "fa-seedling",
                benefit: "Enzyme helps break down plant proteins for better amino acid profile",
                benefitTag: "Complete Plant Protein",
                science: "Actinidin enhances digestibility of plant proteins"
            }
        ],
        scienceNote: "Kiwi contains the unique enzyme actinidin that enhances protein digestion, plus exceptional vitamin C content and prebiotic fibers for comprehensive digestive health. Gold kiwi has higher vitamin C content."
    },
    "pineapple": {
        name: "Pineapple",
        icon: "fa-apple-alt",
        color: "#ffcc00",
        keyNutrient: "Bromelain & Manganese",
        keyNutrientDesc: "Protein digestion and anti-inflammatory enzymes",
        synergyTips: [
            {
                food: "Protein Meals",
                icon: "fa-drumstick-bite",
                benefit: "Bromelain breaks down proteins, reducing digestive burden",
                benefitTag: "Improved Protein Digestion",
                science: "Proteolytic enzymes predigest proteins in stomach"
            },
            {
                food: "Turmeric",
                icon: "fa-mortar-pestle",
                benefit: "Bromelain enhances curcumin absorption and anti-inflammatory effects",
                benefitTag: "Enhanced Anti-inflammatory",
                science: "Synergistic inhibition of COX-2 and inflammatory pathways"
            },
            {
                food: "Iron-rich Foods",
                icon: "fa-seedling",
                benefit: "Vitamin C and bromelain enhance iron absorption",
                benefitTag: "3x Iron Absorption",
                science: "Combined effect on iron bioavailability"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Manganese works with EGCG for antioxidant synergy",
                benefitTag: "Antioxidant Cofactor",
                science: "Manganese is cofactor for superoxide dismutase antioxidant enzyme"
            }
        ],
        scienceNote: "Pineapple contains bromelain, a mixture of proteolytic enzymes with anti-inflammatory properties. Also rich in manganese, essential for antioxidant defense and bone health."
    },
    "mango": {
        name: "Mango",
        icon: "fa-apple-alt",
        color: "#ff9500",
        keyNutrient: "Vitamin A & Mangiferin",
        keyNutrientDesc: "Eye health and unique polyphenol benefits",
        synergyTips: [
            {
                food: "Healthy Fats",
                icon: "fa-seedling",
                benefit: "Fat enhances absorption of mango's vitamin A precursors",
                benefitTag: "Better Vitamin A Conversion",
                science: "Fats necessary for beta-carotene to retinol conversion"
            },
            {
                food: "Protein Sources",
                icon: "fa-drumstick-bite",
                benefit: "Mangiferin enhances protein synthesis and utilization",
                benefitTag: "Improved Protein Metabolism",
                science: "Unique polyphenol supports cellular protein pathways"
            },
            {
                food: "Turmeric",
                icon: "fa-mortar-pestle",
                benefit: "Mangiferin and curcumin work synergistically for inflammation",
                benefitTag: "Anti-inflammatory Synergy",
                science: "Dual pathway inhibition of NF-kB inflammatory signaling"
            },
            {
                food: "Yogurt",
                icon: "fa-cheese",
                benefit: "Probiotics enhance mango polyphenol metabolism",
                benefitTag: "Polyphenol Activation",
                science: "Gut bacteria convert mangiferin to active metabolites"
            }
        ],
        scienceNote: "Mango contains mangiferin, a unique polyphenol with antioxidant, anti-inflammatory, and metabolic benefits. Also rich in vitamin C and vitamin A precursors for comprehensive nutrient profile."
    },
    "pomegranate": {
        name: "Pomegranate",
        icon: "fa-apple-alt",
        color: "#c2185b",
        keyNutrient: "Punicalagins & Urolithin A",
        keyNutrientDesc: "Mitochondrial health and cellular recycling",
        synergyTips: [
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Omega-3s enhance punicalagin absorption and conversion",
                benefitTag: "Enhanced Mitochondrial Support",
                science: "Fats improve absorption of ellagitannins"
            },
            {
                food: "Fermented Foods",
                icon: "fa-cheese",
                benefit: "Probiotics convert ellagitannins to bioactive urolithins",
                benefitTag: "Metabolite Production",
                science: "Gut bacteria essential for urolithin A production"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Synergistic effect on endothelial function and blood flow",
                benefitTag: "Vascular Health",
                science: "Combined nitric oxide boosting effects"
            },
            {
                food: "Salmon",
                icon: "fa-fish",
                benefit: "Reduces oxidative damage to omega-3 fatty acids",
                benefitTag: "Fat Protection",
                science: "Polyphenols protect unsaturated fats from oxidation"
            }
        ],
        scienceNote: "Pomegranate contains unique ellagitannins converted by gut bacteria to urolithins, which support mitochondrial function and cellular autophagy (cleaning). Also rich in vitamin C and potassium."
    },
    "grapefruit": {
        name: "Grapefruit",
        icon: "fa-apple-alt",
        color: "#ff5252",
        keyNutrient: "Naringenin & Vitamin C",
        keyNutrientDesc: "Metabolic support and detoxification",
        synergyTips: [
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Naringenin enhances EGCG bioavailability and effects",
                benefitTag: "Metabolic Synergy",
                science: "Combined activation of AMPK metabolic pathway"
            },
            {
                food: "Healthy Fats",
                icon: "fa-seedling",
                benefit: "Fats enhance absorption of grapefruit's fat-soluble nutrients",
                benefitTag: "Nutrient Absorption",
                science: "Improves bioavailability of limonoids and carotenoids"
            },
            {
                food: "Cruciferous Vegetables",
                icon: "fa-seedling",
                benefit: "Synergistic detoxification enzyme activation",
                benefitTag: "Enhanced Detox",
                science: "Activates phase II detoxification enzymes"
            },
            {
                food: "Note: Medication Interaction",
                icon: "fa-exclamation-triangle",
                benefit: "Interacts with many medications - check with doctor",
                benefitTag: "CAUTION",
                science: "Inhibits CYP3A4 enzyme affecting drug metabolism"
            }
        ],
        scienceNote: "Grapefruit contains naringenin which affects drug metabolism pathways. Also rich in vitamin C and unique compounds like limonoids with anti-cancer properties. Consult doctor if on medications."
    },
    "watermelon": {
        name: "Watermelon",
        icon: "fa-apple-alt",
        color: "#ff5252",
        keyNutrient: "Lycopene & Citrulline",
        keyNutrientDesc: "Cardiovascular and exercise recovery",
        synergyTips: [
            {
                food: "Healthy Fats",
                icon: "fa-seedling",
                benefit: "Fats increase lycopene absorption 2-3x",
                benefitTag: "Enhanced Lycopene Uptake",
                science: "Fat necessary for carotenoid absorption"
            },
            {
                food: "Protein Post-Workout",
                icon: "fa-drumstick-bite",
                benefit: "Citrulline converts to arginine for nitric oxide and recovery",
                benefitTag: "Improved Recovery",
                science: "Supports protein synthesis and reduces muscle soreness"
            },
            {
                food: "Spinach",
                icon: "fa-seedling",
                benefit: "Vitamin C in watermelon enhances iron absorption",
                benefitTag: "Iron Absorption Boost",
                science: "Converts non-heme iron to more absorbable form"
            },
            {
                food: "Nuts/Seeds",
                icon: "fa-nut",
                benefit: "Magnesium works with watermelon's potassium for hydration",
                benefitTag: "Electrolyte Balance",
                science: "Potassium-magnesium synergy for cellular hydration"
            }
        ],
        scienceNote: "Watermelon contains citrulline which converts to arginine, supporting nitric oxide production and blood flow. Also rich in lycopene, more bioavailable from watermelon than tomatoes."
    },
    "pear": {
        name: "Pear",
        icon: "fa-apple-alt",
        color: "#d1c4e9",
        keyNutrient: "Fiber & Arbutin",
        keyNutrientDesc: "Gut health and antioxidant protection",
        synergyTips: [
            {
                food: "Yogurt/Kefir",
                icon: "fa-cheese",
                benefit: "Pectin fiber feeds probiotics for enhanced gut health",
                benefitTag: "Prebiotic-Probiotic Synergy",
                science: "Pectin increases production of short-chain fatty acids"
            },
            {
                food: "Cinnamon",
                icon: "fa-mortar-pestle",
                benefit: "Combined effect on blood sugar regulation",
                benefitTag: "Glycemic Control",
                science: "Fiber slows absorption while cinnamon improves insulin sensitivity"
            },
            {
                food: "Almonds",
                icon: "fa-nut",
                benefit: "Healthy fats enhance absorption of pear's phytonutrients",
                benefitTag: "Nutrient Bioavailability",
                science: "Fats improve absorption of fat-soluble compounds"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Arbutin works with EGCG for antioxidant synergy",
                benefitTag: "Antioxidant Network",
                science: "Multiple antioxidant pathways for comprehensive protection"
            }
        ],
        scienceNote: "Pears contain unique compounds like arbutin with antioxidant properties. The skin is particularly rich in fiber and phytonutrients. Different varieties offer varied nutrient profiles."
    },
    "cherry": {
        name: "Cherry",
        icon: "fa-apple-alt",
        color: "#d32f2f",
        keyNutrient: "Anthocyanins & Melatonin",
        keyNutrientDesc: "Exercise recovery and sleep support",
        synergyTips: [
            {
                food: "Protein Post-Workout",
                icon: "fa-drumstick-bite",
                benefit: "Reduces inflammation and muscle soreness after exercise",
                benefitTag: "Enhanced Recovery",
                science: "Anthocyanins reduce oxidative stress and inflammation markers"
            },
            {
                food: "Banana",
                icon: "fa-apple-alt",
                benefit: "Potassium and melatonin synergy for sleep and recovery",
                benefitTag: "Sleep Quality",
                science: "Melatonin with potassium for muscle relaxation and sleep"
            },
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Flavonoid synergy for cardiovascular protection",
                benefitTag: "Heart Health",
                science: "Combined effect on blood pressure and endothelial function"
            },
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Omega-3s enhance anthocyanin absorption and effects",
                benefitTag: "Bioavailability Boost",
                science: "Fats improve absorption of fat-soluble antioxidants"
            }
        ],
        scienceNote: "Cherries are one of the few natural food sources of melatonin, supporting sleep cycles. Tart cherries are particularly rich in anthocyanins for inflammation reduction and exercise recovery."
    },
    "papaya": {
        name: "Papaya",
        icon: "fa-apple-alt",
        color: "#ffcc80",
        keyNutrient: "Papain & Vitamin C",
        keyNutrientDesc: "Protein digestion and immune support",
        synergyTips: [
            {
                food: "Protein Meals",
                icon: "fa-drumstick-bite",
                benefit: "Papain enzyme predigests proteins for better absorption",
                benefitTag: "Protein Utilization",
                science: "Proteolytic enzymes break peptide bonds"
            },
            {
                food: "Iron-rich Foods",
                icon: "fa-seedling",
                benefit: "Vitamin C enhances iron absorption 3-4x",
                benefitTag: "Iron Absorption",
                science: "Reduces ferric to ferrous iron for better uptake"
            },
            {
                food: "Healthy Fats",
                icon: "fa-seedling",
                benefit: "Enhances absorption of papaya's fat-soluble nutrients",
                benefitTag: "Nutrient Bioavailability",
                science: "Carotenoids and vitamin E absorption improved"
            },
            {
                food: "Turmeric",
                icon: "fa-mortar-pestle",
                benefit: "Enzyme activity enhances curcumin absorption",
                benefitTag: "Curcumin Absorption",
                science: "Improves solubility and absorption of curcumin"
            }
        ],
        scienceNote: "Papaya contains papain, a proteolytic enzyme that aids protein digestion. Also rich in vitamin C, vitamin A, and unique compounds like carpaine with cardiovascular benefits."
    },
    "raspberry": {
        name: "Raspberry",
        icon: "fa-apple-alt",
        color: "#e91e63",
        keyNutrient: "Ellagic Acid & Fiber",
        keyNutrientDesc: "DNA protection and gut health",
        synergyTips: [
            {
                food: "Dark Chocolate",
                icon: "fa-candy",
                benefit: "Flavonoid synergy for antioxidant and cardiovascular benefits",
                benefitTag: "Cardiovascular Protection",
                science: "Combined improvement in endothelial function"
            },
            {
                food: "Yogurt/Kefir",
                icon: "fa-cheese",
                benefit: "High fiber content feeds probiotics for gut health",
                benefitTag: "Prebiotic Effect",
                science: "Fiber increases production of beneficial short-chain fatty acids"
            },
            {
                food: "Walnuts",
                icon: "fa-nut",
                benefit: "Omega-3s enhance absorption of raspberry polyphenols",
                benefitTag: "Polyphenol Absorption",
                science: "Fats improve bioavailability of ellagic acid"
            },
            {
                food: "Green Tea",
                icon: "fa-mug-hot",
                benefit: "Synergistic effect on metabolic health",
                benefitTag: "Metabolic Support",
                science: "Combined activation of AMPK pathway"
            }
        ],
        scienceNote: "Raspberries are exceptionally high in fiber and ellagic acid, with anti-cancer properties. Also contain ketones that may support metabolic health. Black raspberries have even higher anthocyanin content."
    }
};

// EXTENDED VITAMIN & MINERAL GUIDE DATA
window.nutritionGuideData = {
    "vitamin-c": {
        name: "Vitamin C",
        icon: "fa-virus-slash",
        color: "#ff6b6b",
        category: "Vitamin",
        dailyNeed: "75-90mg",
        description: "Water-soluble antioxidant essential for collagen synthesis, immune function, iron absorption, and neurotransmitter production. Acts as cofactor for 8+ enzymatic reactions including dopamine and carnitine synthesis.",
        topSources: [
            { name: "Guava", amount: "228mg per 100g", percent: "253% DV", note: "Highest of any fruit" },
            { name: "Kiwi (Gold)", amount: "161mg per 100g", percent: "179% DV", note: "Higher than oranges" },
            { name: "Papaya", amount: "61mg per 100g", percent: "68% DV", note: "Also contains papain" },
            { name: "Strawberry", amount: "59mg per 100g", percent: "66% DV", note: "Rich in ellagic acid" },
            { name: "Orange", amount: "53mg per 100g", percent: "59% DV", note: "Classic source" }
        ],
        healthTips: [
            "Water-soluble: excess excreted, requires daily intake",
            "Heat-sensitive: raw or lightly cooked preserves content",
            "Smokers need 35mg more daily due to oxidative stress",
            "Enhances non-heme iron absorption 4-6x",
            "Regenerates vitamin E and glutathione antioxidants"
        ],
        synergyWith: ["Iron", "Vitamin E", "Bioflavonoids", "Zinc"]
    },
    "vitamin-a": {
        name: "Vitamin A",
        icon: "fa-eye",
        color: "#ff9500",
        category: "Vitamin",
        dailyNeed: "700-900mcg RAE",
        description: "Fat-soluble vitamin crucial for vision (rhodopsin synthesis), immune function, cell differentiation, reproduction, and skin health. Comes as retinol (animal) and carotenoids (plant like beta-carotene).",
        topSources: [
            { name: "Mango", amount: "54mcg per 100g", percent: "6% DV", note: "Beta-carotene rich" },
            { name: "Cantaloupe", amount: "169mcg per 100g", percent: "19% DV", note: "Orange flesh indicates beta-carotene" },
            { name: "Apricot (dried)", amount: "180mcg per 100g", percent: "20% DV", note: "Concentrated source" },
            { name: "Papaya", amount: "47mcg per 100g", percent: "5% DV", note: "Also vitamin C" },
            { name: "Watermelon", amount: "28mcg per 100g", percent: "3% DV", note: "Lycopene too" }
        ],
        healthTips: [
            "Fat-soluble: requires dietary fat for absorption",
            "Beta-carotene converts to retinol as needed, no toxicity risk",
            "Essential for night vision and eye adaptation",
            "Works synergistically with zinc and vitamin D",
            "Supports mucosal surfaces and immune barriers"
        ],
        synergyWith: ["Zinc", "Vitamin D", "Healthy Fats", "Vitamin E"]
    },
    "potassium": {
        name: "Potassium",
        icon: "fa-heartbeat",
        color: "#10b981",
        category: "Mineral",
        dailyNeed: "3,500-4,700mg",
        description: "Essential electrolyte that maintains fluid balance, nerve transmission, muscle contraction, and blood pressure regulation. Works with sodium to maintain cellular function and pH balance.",
        topSources: [
            { name: "Avocado", amount: "485mg per 100g", percent: "10% DV", note: "Also healthy fats" },
            { name: "Banana", amount: "358mg per 100g", percent: "8% DV", note: "Classic source" },
            { name: "Coconut Water", amount: "250mg per 100ml", percent: "5% DV", note: "Natural electrolyte" },
            { name: "Cantaloupe", amount: "267mg per 100g", percent: "6% DV", note: "Hydrating" },
            { name: "Orange", amount: "181mg per 100g", percent: "4% DV", note: "With vitamin C" }
        ],
        healthTips: [
            "Balances sodium: aim for 5:1 potassium:sodium ratio",
            "Critical for heart rhythm and muscle function",
            "Athletes lose through sweat: replenish regularly",
            "Diuretics can deplete potassium levels",
            "Works with magnesium for optimal muscle function"
        ],
        synergyWith: ["Magnesium", "Sodium Balance", "Vitamin B6"]
    },
    "magnesium": {
        name: "Magnesium",
        icon: "fa-atom",
        color: "#34c759",
        category: "Mineral",
        dailyNeed: "310-420mg",
        description: "Cofactor for 300+ enzymatic reactions including energy production (ATP), protein synthesis, nerve function, blood glucose control, blood pressure regulation, and DNA synthesis.",
        topSources: [
            { name: "Avocado", amount: "29mg per 100g", percent: "7% DV", note: "Also potassium" },
            { name: "Banana", amount: "27mg per 100g", percent: "6% DV", note: "With resistant starch" },
            { name: "Figs (dried)", amount: "68mg per 100g", percent: "16% DV", note: "Concentrated" },
            { name: "Raspberries", amount: "22mg per 100g", percent: "5% DV", note: "High fiber too" },
            { name: "Kiwi", amount: "17mg per 100g", percent: "4% DV", note: "With vitamin C" }
        ],
        healthTips: [
            "Deficiency common due to soil depletion and processing",
            "Works with calcium for bone health (2:1 calcium:magnesium ideal)",
            "Essential for ATP (energy) production",
            "Helps regulate melatonin and sleep cycles",
            "Stress depletes magnesium stores rapidly"
        ],
        synergyWith: ["Calcium", "Vitamin D", "Vitamin B6", "Potassium"]
    },
    "fiber": {
        name: "Fiber",
        icon: "fa-seedling",
        color: "#8bc34a",
        category: "Nutrient",
        dailyNeed: "25-38g",
        description: "Indigestible carbohydrate that promotes digestive health, regulates blood sugar, lowers cholesterol, and supports gut microbiome. Includes soluble (gels, pectin) and insoluble (bulk, cellulose) types.",
        topSources: [
            { name: "Raspberries", amount: "6.5g per 100g", percent: "23% DV", note: "Highest fiber berry" },
            { name: "Blackberries", amount: "5.3g per 100g", percent: "19% DV", note: "Also antioxidants" },
            { name: "Pear (with skin)", amount: "3.1g per 100g", percent: "11% DV", note: "Skin has most fiber" },
            { name: "Apple (with skin)", amount: "2.4g per 100g", percent: "9% DV", note: "Pectin is soluble" },
            { name: "Banana", amount: "2.6g per 100g", percent: "9% DV", note: "Resistant starch too" }
        ],
        healthTips: [
            "Increase gradually to avoid bloating and gas",
            "Drink plenty of water with high-fiber diet",
            "Soluble fiber lowers LDL cholesterol (oat beta-glucan, pectin)",
            "Insoluble fiber prevents constipation and feeds gut bacteria",
            "Prebiotic fibers specifically feed beneficial bacteria"
        ],
        synergyWith: ["Water", "Probiotics", "Polyphenols"]
    },
    "antioxidants": {
        name: "Antioxidant Complex",
        icon: "fa-shield-alt",
        color: "#af52de",
        category: "Phytochemicals",
        dailyNeed: "Varies by type",
        description: "Diverse group of compounds that neutralize free radicals, reduce oxidative stress, and protect cells from damage. Includes polyphenols, carotenoids, vitamins C/E, and unique fruit compounds.",
        topSources: [
            { name: "Blueberries", amount: "Highest ORAC", percent: "★★★★★", note: "Anthocyanins, pterostilbene" },
            { name: "Pomegranate", amount: "Punicalagins", percent: "★★★★★", note: "Ellagitannins, anthocyanins" },
            { name: "Goji Berries", amount: "Zeaxanthin", percent: "★★★★☆", note: "Eye-protective carotenoids" },
            { name: "Strawberries", amount: "Ellagic acid", percent: "★★★★☆", note: "Fisetin for brain" },
            { name: "Red Grapes", amount: "Resveratrol", percent: "★★★☆☆", note: "Cardiovascular protection" }
        ],
        healthTips: [
            "Different antioxidants protect different cell components",
            "Synergy: antioxidants regenerate each other (vitamin C → E)",
            "Eat rainbow of colors for diverse antioxidants",
            "Some cooking increases antioxidant availability (tomatoes)",
            "Fat enhances absorption of fat-soluble antioxidants"
        ],
        synergyWith: ["Vitamin C", "Vitamin E", "Selenium", "Zinc"]
    },
    "vitamin-k": {
        name: "Vitamin K",
        icon: "fa-tint",
        color: "#5856d6",
        category: "Vitamin",
        dailyNeed: "90-120mcg",
        description: "Fat-soluble vitamin essential for blood clotting (K1) and bone metabolism (K2). Activates proteins involved in calcium regulation, arterial health, and cellular growth regulation.",
        topSources: [
            { name: "Kiwi", amount: "40mcg per 100g", percent: "33% DV", note: "Unexpectedly high" },
            { name: "Avocado", amount: "21mcg per 100g", percent: "18% DV", note: "With healthy fats" },
            { name: "Blueberries", amount: "19mcg per 100g", percent: "16% DV", note: "Also anthocyanins" },
            { name: "Grapes", amount: "15mcg per 100g", percent: "13% DV", note: "Resveratrol too" },
            { name: "Pomegranate", amount: "16mcg per 100g", percent: "13% DV", note: "Antioxidant rich" }
        ],
        healthTips: [
            "Fat-soluble: requires dietary fat for absorption",
            "K2 (menaquinone) from fermented foods more bioavailable",
            "Important for bone density and arterial flexibility",
            "Blood thinners (warfarin) affect vitamin K needs",
            "Works with vitamin D for calcium regulation"
        ],
        synergyWith: ["Vitamin D", "Calcium", "Magnesium", "Healthy Fats"]
    },
    "iron": {
        name: "Iron",
        icon: "fa-tint",
        color: "#d32f2f",
        category: "Mineral",
        dailyNeed: "8-18mg",
        description: "Essential for oxygen transport (hemoglobin), energy production, immune function, and cognitive development. Exists as heme (animal) and non-heme (plant) iron with different absorption rates.",
        topSources: [
            { name: "Dried Apricots", amount: "2.7mg per 100g", percent: "15% DV", note: "Concentrated when dried" },
            { name: "Raisins", amount: "1.9mg per 100g", percent: "11% DV", note: "Also potassium" },
            { name: "Prunes", amount: "0.9mg per 100g", percent: "5% DV", note: "With fiber" },
            { name: "Dates", amount: "0.9mg per 100g", percent: "5% DV", note: "Natural sweetener" },
            { name: "Watermelon", amount: "0.2mg per 100g", percent: "1% DV", note: "With vitamin C" }
        ],
        healthTips: [
            "Vitamin C enhances non-heme iron absorption 4-6x",
            "Calcium and tannins (tea/coffee) can inhibit absorption",
            "Pair with vitamin C-rich fruits for better absorption",
            "Plant-based iron less absorbed than animal sources",
            "Important for women of childbearing age"
        ],
        synergyWith: ["Vitamin C", "Vitamin A", "Copper", "B Vitamins"]
    },
    "calcium": {
        name: "Calcium",
        icon: "fa-bone",
        color: "#bdbdbd",
        category: "Mineral",
        dailyNeed: "1000-1300mg",
        description: "Essential for bone and tooth structure, muscle function, nerve transmission, blood clotting, and cellular signaling. 99% stored in bones and teeth as hydroxyapatite crystals.",
        topSources: [
            { name: "Oranges (fortified)", amount: "Varies", percent: "Varies", note: "Some fortified with calcium" },
            { name: "Figs (dried)", amount: "162mg per 100g", percent: "12% DV", note: "Natural source" },
            { name: "Kiwi", amount: "34mg per 100g", percent: "3% DV", note: "With vitamin C" },
            { name: "Blackberries", amount: "29mg per 100g", percent: "2% DV", note: "Also antioxidants" },
            { name: "Mulberries", amount: "39mg per 100g", percent: "3% DV", note: "Less common fruit" }
        ],
        healthTips: [
            "Vitamin D essential for calcium absorption",
            "Magnesium needed for calcium utilization in bones",
            "Excess sodium increases calcium excretion",
            "Weight-bearing exercise enhances bone calcium retention",
            "Works with phosphorus for bone mineralization"
        ],
        synergyWith: ["Vitamin D", "Magnesium", "Vitamin K", "Phosphorus"]
    },
    "b-vitamins": {
        name: "B Vitamins",
        icon: "fa-bolt",
        color: "#ffb300",
        category: "Vitamin Complex",
        dailyNeed: "Varies by type",
        description: "Water-soluble vitamins essential for energy production, DNA synthesis, brain function, red blood cell formation, and nervous system health. Work synergistically as coenzymes.",
        topSources: [
            { name: "Banana", amount: "B6: 0.4mg", percent: "20% DV", note: "Good B6 source" },
            { name: "Avocado", amount: "B5, B6, folate", percent: "Varies", note: "Multiple B vitamins" },
            { name: "Orange", amount: "Folate: 30mcg", percent: "8% DV", note: "Important for DNA" },
            { name: "Watermelon", amount: "B1, B6", percent: "Varies", note: "Hydrating source" },
            { name: "Pomegranate", amount: "B5, B6", percent: "Varies", note: "Antioxidant rich" }
        ],
        healthTips: [
            "Work best together - deficiency in one affects others",
            "Water-soluble: excess excreted, regular intake needed",
            "Alcohol consumption increases B vitamin needs",
            "Important for converting food to energy (ATP)",
            "Folate crucial during pregnancy for neural tube development"
        ],
        synergyWith: ["Magnesium", "Iron", "Vitamin C", "Other B Vitamins"]
    }
};