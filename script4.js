// script4.js - COMPLETE WITH GLOSSARY AND TERM EXPLANATIONS - FIXED VERSION

let nutritionGuideInitialized = false;
let currentFruitData = null;
let currentVitaminData = null;
let termTooltipObserver = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Nutrition Guide (with Glossary) script loaded');
    
    // Check if we're on page 4 initially
    const nutritionGuidePage = document.getElementById('nutrition-guide');
    if (nutritionGuidePage && nutritionGuidePage.classList.contains('active')) {
        console.log('Starting on Nutrition Guide page');
        setTimeout(initNutritionGuide, 100);
    }
    
    // Listen for navigation to page 4
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            
            if (page === 'nutrition-guide') {
                console.log('=== NAVIGATED TO NUTRITION GUIDE (WITH GLOSSARY) ===');
                setTimeout(initNutritionGuide, 100);
            } else {
                // Reset initialization flag when leaving page 4
                nutritionGuideInitialized = false;
            }
        });
    });
    
    function initNutritionGuide() {
        // Check if we're on the right page
        const nutritionGuidePage = document.getElementById('nutrition-guide');
        if (!nutritionGuidePage || !nutritionGuidePage.classList.contains('active')) {
            console.log('Not on nutrition guide page, skipping initialization');
            return;
        }
        
        if (nutritionGuideInitialized) {
            console.log('Nutrition Guide already initialized');
            return;
        }
        
        console.log('Initializing Nutrition Guide with Glossary...');
        
        // Enable page 4 CSS
        const page4CSS = document.getElementById('page4-css');
        if (page4CSS) {
            page4CSS.disabled = false;
            console.log('✅ Page 4 CSS enabled');
        }
        
        // Use a small delay to ensure DOM is ready for page 4
        setTimeout(() => {
            try {
                // Debug: Check if key elements exist
                checkPage4Elements();
                
                // Initialize all sections
                setupFoodSynergy();
                setupNutritionGuide();
                setupGlossaryTooltips();
                enhanceWithTermExplanations();
                
                nutritionGuideInitialized = true;
                console.log('✅ Nutrition Guide with Glossary initialized');
            } catch (error) {
                console.error('Error initializing Nutrition Guide:', error);
                // Retry once more
                setTimeout(() => {
                    try {
                        setupFoodSynergy();
                        setupNutritionGuide();
                        setupGlossaryTooltips();
                        enhanceWithTermExplanations();
                        nutritionGuideInitialized = true;
                        console.log('✅ Nutrition Guide initialized on retry');
                    } catch (retryError) {
                        console.error('Failed to initialize after retry:', retryError);
                    }
                }, 200);
            }
        }, 100);
    }
    
    function checkPage4Elements() {
        const elements = [
            'fruitSelectorButton',
            'fruitDropdown',
            'fruitOptions',
            'vitaminSelectorButton',
            'vitaminDropdown',
            'vitaminOptions',
            'synergyInfo',
            'vitaminInfo'
        ];
        
        console.log('Page 4 Element Status:');
        const missingElements = [];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (!el) {
                missingElements.push(id);
            }
            console.log(`  ${id}: ${el ? '✅ Found' : '❌ Not found'}`);
        });
        
        if (missingElements.length > 0) {
            console.warn(`Missing elements: ${missingElements.join(', ')}`);
        }
    }
    
    function setupFoodSynergy() {
        console.log('Setting up food synergy...');
        
        const fruitButton = document.getElementById('fruitSelectorButton');
        const fruitDropdown = document.getElementById('fruitDropdown');
        const fruitOptions = document.getElementById('fruitOptions');
        const fruitSearch = document.getElementById('fruitSearchDropdown');
        
        // Check if elements exist
        if (!fruitButton || !fruitDropdown || !fruitOptions) {
            console.error('Food synergy elements not found:', {
                fruitButton: !!fruitButton,
                fruitDropdown: !!fruitDropdown,
                fruitOptions: !!fruitOptions,
                fruitSearch: !!fruitSearch
            });
            
            // Show error message if synergyInfo exists
            const synergyInfo = document.getElementById('synergyInfo');
            if (synergyInfo) {
                synergyInfo.innerHTML = `
                    <div class="no-data">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>Food synergy content not available</p>
                    </div>
                `;
            }
            return;
        }
        
        // Check if we have synergy data
        if (!window.foodSynergyData || Object.keys(window.foodSynergyData).length === 0) {
            console.error('No food synergy data found');
            document.getElementById('synergyInfo').innerHTML = `
                <div class="no-data">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>No fruit data available</p>
                </div>
            `;
            return;
        }
        
        // Debounce search
        let searchTimeout;
        
        // Populate fruit options
        function populateFruitOptions(searchTerm = '') {
            fruitOptions.innerHTML = '';
            const filteredFruits = Object.keys(foodSynergyData).filter(fruitKey => {
                if (!searchTerm) return true;
                const fruit = foodSynergyData[fruitKey];
                return fruit.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            
            // Sort alphabetically
            filteredFruits.sort((a, b) => {
                return foodSynergyData[a].name.localeCompare(foodSynergyData[b].name);
            });
            
            filteredFruits.forEach(fruitKey => {
                const fruit = foodSynergyData[fruitKey];
                const option = document.createElement('div');
                option.className = 'dropdown-option';
                option.dataset.fruit = fruitKey;
                
                if (fruitKey === (currentFruitData || 'apple')) {
                    option.classList.add('active');
                }
                
                const iconClass = fruit.icon || 'fa-apple-alt';
                
                option.innerHTML = `
                    <div class="option-icon" style="background: ${fruit.color || '#10b981'};">
                        <i class="fas ${iconClass}"></i>
                    </div>
                    <div class="option-info">
                        <h5>${fruit.name}</h5>
                        <p>${fruit.keyNutrient.split('&')[0].trim()}</p>
                    </div>
                `;
                
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    selectFruit(fruitKey);
                    fruitDropdown.style.display = 'none';
                    const chevron = fruitButton.querySelector('.selector-chevron');
                    if (chevron) {
                        chevron.style.transform = 'rotate(0deg)';
                    }
                });
                
                fruitOptions.appendChild(option);
            });
        }
        
        // Toggle dropdown - ONLY add event listener if button exists
        if (fruitButton) {
            fruitButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const isVisible = fruitDropdown.style.display === 'block';
                fruitDropdown.style.display = isVisible ? 'none' : 'block';
                const chevron = fruitButton.querySelector('.selector-chevron');
                if (chevron) {
                    chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
                }
                
                if (!isVisible) {
                    if (fruitSearch) {
                        fruitSearch.focus();
                    }
                    populateFruitOptions();
                }
            });
        }
        
        // Search functionality - only if search input exists
        if (fruitSearch) {
            fruitSearch.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    populateFruitOptions(this.value);
                }, 200);
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (fruitButton && fruitDropdown && 
                !fruitButton.contains(e.target) && !fruitDropdown.contains(e.target)) {
                fruitDropdown.style.display = 'none';
                const chevron = fruitButton.querySelector('.selector-chevron');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // Select initial fruit
        selectFruit('apple');
    }
    
    function selectFruit(fruitKey) {
        const fruit = foodSynergyData[fruitKey];
        if (!fruit) {
            console.error(`Fruit data not found for key: ${fruitKey}`);
            return;
        }
        
        currentFruitData = fruit;
        const fruitButton = document.getElementById('fruitSelectorButton');
        const synergyInfo = document.getElementById('synergyInfo');
        
        // Update selector button if it exists
        if (fruitButton) {
            const iconClass = fruit.icon || 'fa-apple-alt';
            const selectorIcon = fruitButton.querySelector('.selector-icon');
            if (selectorIcon) {
                selectorIcon.innerHTML = `<i class="fas ${iconClass}"></i>`;
                selectorIcon.style.background = fruit.color || '#10b981';
            }
            
            const selectorInfo = fruitButton.querySelector('.selector-info');
            if (selectorInfo) {
                const h4 = selectorInfo.querySelector('h4');
                const p = selectorInfo.querySelector('p');
                if (h4) h4.textContent = fruit.name;
                if (p) p.textContent = `Key: ${fruit.keyNutrient}`;
            }
        }
        
        // Create synergy tips HTML
        const tipsHTML = fruit.synergyTips && fruit.synergyTips.length > 0 ? `
            <div class="tips-grid">
                ${fruit.synergyTips.map(tip => `
                    <div class="tip-card">
                        <div class="tip-header">
                            <div class="tip-icon">
                                <i class="fas ${tip.icon || 'fa-seedling'}"></i>
                            </div>
                            <div class="tip-title">With ${tip.food}</div>
                        </div>
                        <p class="tip-content">${tip.benefit}</p>
                        <span class="tip-benefit">${tip.benefitTag || 'Synergy'}</span>
                    </div>
                `).join('')}
            </div>
        ` : '<div class="no-data"><i class="fas fa-info-circle"></i><p>No synergy tips available</p></div>';
        
        // Update synergy info display if it exists
        if (synergyInfo) {
            synergyInfo.innerHTML = `
                <div class="synergy-highlight">
                    <h4 class="highlight-title"><i class="fas fa-flask"></i> Key Nutrient Synergy</h4>
                    <p class="highlight-content">
                        <strong>${fruit.keyNutrient}:</strong> 
                        ${fruit.keyNutrientDesc || 'These nutrients work synergistically to enhance overall health benefits.'}
                    </p>
                </div>
                
                ${tipsHTML}
                
                ${fruit.scienceNote ? `
                <div class="science-note">
                    <h4 class="note-title"><i class="fas fa-graduation-cap"></i> Scientific Insight</h4>
                    <p class="note-content">${fruit.scienceNote}</p>
                </div>
                ` : ''}
            `;
            
            // NO TOOLTIPS for food synergy section - terms are explained in content
        }
    }
    
    function setupNutritionGuide() {
        console.log('Setting up nutrition guide...');
        
        const vitaminButton = document.getElementById('vitaminSelectorButton');
        const vitaminDropdown = document.getElementById('vitaminDropdown');
        const vitaminOptions = document.getElementById('vitaminOptions');
        const vitaminSearch = document.getElementById('vitaminSearch');
        
        // Check if elements exist
        if (!vitaminButton || !vitaminDropdown || !vitaminOptions || !vitaminSearch) {
            console.error('Nutrition guide elements not found:', {
                vitaminButton: !!vitaminButton,
                vitaminDropdown: !!vitaminDropdown,
                vitaminOptions: !!vitaminOptions,
                vitaminSearch: !!vitaminSearch
            });
            
            // Show error message if vitaminInfo exists
            const vitaminInfo = document.getElementById('vitaminInfo');
            if (vitaminInfo) {
                vitaminInfo.innerHTML = `
                    <div class="no-data">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>Nutrition guide content not available</p>
                    </div>
                `;
            }
            return;
        }
        
        // Check if we have nutrition data
        if (!window.nutritionGuideData || Object.keys(nutritionGuideData).length === 0) {
            console.error('No nutrition guide data found');
            document.getElementById('vitaminInfo').innerHTML = `
                <div class="no-data">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>No nutrient data available</p>
                </div>
            `;
            return;
        }
        
        // Debounce search
        let searchTimeout;
        
        // Populate vitamin options
        function populateVitaminOptions(searchTerm = '') {
            vitaminOptions.innerHTML = '';
            const filteredVitamins = Object.keys(nutritionGuideData).filter(vitaminKey => {
                if (!searchTerm) return true;
                const vitamin = nutritionGuideData[vitaminKey];
                return vitamin.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            
            // Sort alphabetically
            filteredVitamins.sort((a, b) => {
                return nutritionGuideData[a].name.localeCompare(nutritionGuideData[b].name);
            });
            
            filteredVitamins.forEach(vitaminKey => {
                const vitamin = nutritionGuideData[vitaminKey];
                const option = document.createElement('div');
                option.className = 'dropdown-option';
                option.dataset.vitamin = vitaminKey;
                
                if (vitaminKey === (currentVitaminData || Object.keys(nutritionGuideData)[0])) {
                    option.classList.add('active');
                }
                
                option.innerHTML = `
                    <div class="option-icon" style="background: ${vitamin.color || '#10b981'};">
                        <i class="fas ${vitamin.icon || 'fa-capsules'}"></i>
                    </div>
                    <div class="option-info">
                        <h5>${vitamin.name}</h5>
                        <p>${vitamin.category || 'Essential Nutrient'}</p>
                    </div>
                `;
                
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    selectVitamin(vitaminKey);
                    vitaminDropdown.style.display = 'none';
                    const chevron = vitaminButton.querySelector('.selector-chevron');
                    if (chevron) {
                        chevron.style.transform = 'rotate(0deg)';
                    }
                });
                
                vitaminOptions.appendChild(option);
            });
        }
        
        // Toggle dropdown - ONLY add event listener if button exists
        if (vitaminButton) {
            vitaminButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const isVisible = vitaminDropdown.style.display === 'block';
                vitaminDropdown.style.display = isVisible ? 'none' : 'block';
                const chevron = vitaminButton.querySelector('.selector-chevron');
                if (chevron) {
                    chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
                }
                
                if (!isVisible) {
                    vitaminSearch.focus();
                    populateVitaminOptions();
                }
            });
        }
        
        // Search functionality
        if (vitaminSearch) {
            vitaminSearch.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    populateVitaminOptions(this.value);
                }, 200);
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (vitaminButton && vitaminDropdown && 
                !vitaminButton.contains(e.target) && !vitaminDropdown.contains(e.target)) {
                vitaminDropdown.style.display = 'none';
                const chevron = vitaminButton.querySelector('.selector-chevron');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // Select initial vitamin
        const firstVitaminKey = Object.keys(nutritionGuideData)[0];
        if (firstVitaminKey) {
            selectVitamin(firstVitaminKey);
        }
    }
    
    function selectVitamin(vitaminKey) {
        const vitamin = nutritionGuideData[vitaminKey];
        if (!vitamin) {
            console.error(`Vitamin data not found for key: ${vitaminKey}`);
            return;
        }
        
        currentVitaminData = vitamin;
        const vitaminButton = document.getElementById('vitaminSelectorButton');
        const vitaminInfo = document.getElementById('vitaminInfo');
        
        // Update selector button if it exists
        if (vitaminButton) {
            const selectorIcon = vitaminButton.querySelector('.selector-icon');
            if (selectorIcon) {
                selectorIcon.innerHTML = `<i class="fas ${vitamin.icon || 'fa-capsules'}"></i>`;
                selectorIcon.style.background = vitamin.color || '#10b981';
            }
            
            const selectorInfo = vitaminButton.querySelector('.selector-info');
            if (selectorInfo) {
                const h4 = selectorInfo.querySelector('h4');
                const p = selectorInfo.querySelector('p');
                if (h4) h4.textContent = vitamin.name;
                if (p) p.textContent = vitamin.category || 'Essential Nutrient';
            }
        }
        
        // Create sources table HTML
        const sourcesHTML = vitamin.topSources && vitamin.topSources.length > 0 ? `
            <table class="sources-table">
                <thead>
                    <tr>
                        <th class="rank-cell">#</th>
                        <th class="name-cell">Food Source</th>
                        <th class="amount-cell">Amount</th>
                        <th class="percent-cell">% DV</th>
                    </tr>
                </thead>
                <tbody>
                    ${vitamin.topSources.slice(0, 5).map((source, index) => `
                        <tr>
                            <td class="rank-cell">${index + 1}</td>
                            <td class="name-cell">${source.name}</td>
                            <td class="amount-cell">${source.amount}</td>
                            <td class="percent-cell">${source.percent}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        ` : '<div class="no-data"><i class="fas fa-info-circle"></i><p>No source data available</p></div>';
        
        // Create health tips HTML
        const healthTipsHTML = vitamin.healthTips && vitamin.healthTips.length > 0 ? `
            <ul class="tips-list">
                ${vitamin.healthTips.slice(0, 5).map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        ` : '';
        
        // Create synergy HTML
        const synergyHTML = vitamin.synergyWith && vitamin.synergyWith.length > 0 ? `
            <div class="synergy-tags-container">
                <h4 class="highlight-title"><i class="fas fa-handshake"></i> Synergistic Nutrients</h4>
                <div class="tags-grid">
                    ${vitamin.synergyWith.map(nutrient => `
                        <span class="nutrient-tag">${nutrient}</span>
                    `).join('')}
                </div>
            </div>
        ` : '';
        
        // Update vitamin info display if it exists
        if (vitaminInfo) {
            vitaminInfo.innerHTML = `
                <div class="vitamin-quick-info">
                    <div class="info-item">
                        <p class="info-label"><i class="fas fa-tag"></i> Category</p>
                        <p class="info-value">${vitamin.category || 'Nutrient'}</p>
                    </div>
                    <div class="info-item">
                        <p class="info-label"><i class="fas fa-bullseye"></i> Daily Need</p>
                        <p class="info-value">${vitamin.dailyNeed || 'Varies'}</p>
                    </div>
                </div>
                
                <div class="synergy-highlight">
                    <h4 class="highlight-title"><i class="fas fa-info-circle"></i> Functions & Benefits</h4>
                    <p class="highlight-content">${vitamin.description || 'Essential nutrient with multiple health benefits.'}</p>
                </div>
                
                <h4 class="highlight-title"><i class="fas fa-apple-alt"></i> Top Food Sources</h4>
                ${sourcesHTML}
                
                ${healthTipsHTML ? `
                <h4 class="highlight-title"><i class="fas fa-lightbulb"></i> Practical Tips</h4>
                ${healthTipsHTML}
                ` : ''}
                
                ${synergyHTML}
                
                ${vitamin.scienceNote ? `
                <div class="science-note">
                    <h4 class="note-title"><i class="fas fa-microscope"></i> Scientific Note</h4>
                    <p class="note-content">${vitamin.scienceNote}</p>
                </div>
                ` : ''}
            `;
            
            // ADD TOOLTIPS for nutrition guide section
            addTermTooltipsToElement(vitaminInfo);
        }
    }
    
    // ========== GLOSSARY AND TERM EXPLANATIONS ==========
    
    function setupGlossaryTooltips() {
        // Create glossary CSS
        const glossaryCSS = `
            .term-tooltip {
                border-bottom: 1px dashed #10b981;
                cursor: help;
                position: relative;
                color: #2d3748;
            }
            
            .term-tooltip:hover {
                color: #10b981;
            }
            
            .tooltip-text {
                visibility: hidden;
                width: 280px;
                background-color: #2d3748;
                color: white;
                text-align: left;
                border-radius: 8px;
                padding: 12px;
                position: absolute;
                z-index: 1000;
                bottom: 125%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.85rem;
                opacity: 0;
                transition: opacity 0.3s, visibility 0.3s;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                pointer-events: none;
            }
            
            .tooltip-text::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #2d3748 transparent transparent transparent;
            }
            
            .term-tooltip:hover .tooltip-text {
                visibility: visible;
                opacity: 1;
            }
            
            .tooltip-term {
                font-weight: bold;
                color: #10b981;
                margin-bottom: 8px;
                font-size: 0.9rem;
            }
            
            .tooltip-definition {
                margin-bottom: 8px;
                line-height: 1.4;
            }
            
            .tooltip-benefits {
                color: #10b981;
                font-style: italic;
                font-size: 0.8rem;
                margin-bottom: 8px;
            }
            
            .tooltip-examples {
                color: #a0aec0;
                font-size: 0.8rem;
                border-top: 1px solid #4a5568;
                padding-top: 8px;
            }
            
            .glossary-section {
                grid-column: 1 / -1;
                margin-top: 30px;
            }
            
            .term-category {
                background: #e2e8f0;
                border: none;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 0.85rem;
                cursor: pointer;
                transition: all 0.2s ease;
                color: #4a5568;
                margin-right: 8px;
                margin-bottom: 10px;
            }
            
            .term-category:hover {
                background: #cbd5e0;
            }
            
            .term-category.active {
                background: #10b981;
                color: white;
            }
            
            .quick-term-card {
                background: #f8fafc;
                border-radius: 8px;
                padding: 15px;
                border: 1px solid #e2e8f0;
                transition: all 0.2s ease;
                height: 100%;
            }
            
            .quick-term-card:hover {
                border-color: #10b981;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            
            .quick-term-icon {
                width: 30px;
                height: 30px;
                background: #10b98120;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #10b981;
                flex-shrink: 0;
            }
            
            .quick-term-content h4 {
                margin: 0 0 5px 0;
                color: #2d3748;
                font-size: 0.95rem;
            }
            
            .quick-term-content p {
                margin: 0;
                color: #4a5568;
                font-size: 0.85rem;
                line-height: 1.4;
            }
            
            .term-benefit-tag {
                color: #10b981;
                background: #10b98110;
                padding: 3px 8px;
                border-radius: 10px;
                font-size: 0.8rem;
                display: inline-block;
            }
            
            .term-example {
                color: #718096;
                font-size: 0.8rem;
            }
        `;
        
        // Add CSS to document
        const style = document.createElement('style');
        style.textContent = glossaryCSS;
        document.head.appendChild(style);
    }
    
    function enhanceWithTermExplanations() {
        // Add glossary section to the page
        addGlossarySection();
        
        // Add tooltips to vitamin content only (NOT food synergy)
        setTimeout(() => {
            const vitaminInfo = document.getElementById('vitaminInfo');
            if (vitaminInfo) addTermTooltipsToElement(vitaminInfo);
            // Note: NOT adding tooltips to synergyInfo anymore
        }, 100);
        
        // Setup mutation observer for dynamic content
        setupTermTooltipObserver();
    }
    
    function addGlossarySection() {
        const mainContainer = document.querySelector('.main-container');
        if (!mainContainer) return;
        
        const glossarySection = document.createElement('div');
        glossarySection.className = 'section-card glossary-section';
        
        glossarySection.innerHTML = `
            <div class="section-header">
                <div class="section-title">
                    <i class="fas fa-book"></i>
                    <h2>Nutrition Terms Explained</h2>
                </div>
                <div class="section-badge">
                    <i class="fas fa-lightbulb"></i>
                    Quick Reference
                </div>
            </div>
            
            <div class="compact-selector">
                <p class="selector-header"><i class="fas fa-filter"></i> Browse Terms by Category</p>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;" id="glossaryCategories">
                    <button class="term-category active" data-category="all">All Terms</button>
                    <button class="term-category" data-category="antioxidants">Antioxidants</button>
                    <button class="term-category" data-category="enzymes">Enzymes</button>
                    <button class="term-category" data-category="compounds">Special Compounds</button>
                    <button class="term-category" data-category="vitamins">Vitamins & Minerals</button>
                </div>
            </div>
            
            <div id="quickGlossary" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;">
                <!-- Terms will be populated here -->
            </div>
        `;
        
        mainContainer.appendChild(glossarySection);
        populateQuickGlossary('all');
        
        // Add event listeners to category buttons
        glossarySection.querySelectorAll('.term-category').forEach(btn => {
            btn.addEventListener('click', function() {
                glossarySection.querySelectorAll('.term-category').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                populateQuickGlossary(this.dataset.category);
            });
        });
    }
    
    function populateQuickGlossary(category = 'all') {
        const container = document.getElementById('quickGlossary');
        if (!container || !window.nutritionGlossary) return;
        
        container.innerHTML = '';
        
        const categories = {
            antioxidants: ['anthocyanins', 'ellagic acid', 'quercetin', 'lycopene', 'resveratrol', 'beta-carotene', 'lutein', 'zeaxanthin', 'punicalagins', 'pterostilbene', 'fisetin'],
            enzymes: ['bromelain', 'papain', 'actinidin'],
            compounds: ['citrulline', 'melatonin', 'mangiferin', 'pectin', 'resistant starch', 'urolithin a'],
            vitamins: ['vitamin c', 'vitamin k', 'potassium', 'magnesium']
        };
        
        let termsToShow = [];
        
        if (category === 'all') {
            // Show a curated selection of most important terms
            termsToShow = [
                'anthocyanins', 'lycopene', 'citrulline', 'bromelain', 
                'quercetin', 'vitamin c', 'potassium', 'magnesium',
                'ellagic acid', 'resveratrol', 'beta-carotene', 'melatonin'
            ];
        } else if (categories[category]) {
            termsToShow = categories[category];
        }
        
        termsToShow.forEach(termKey => {
            const term = window.nutritionGlossary[termKey];
            if (!term) return;
            
            const termCard = document.createElement('div');
            termCard.className = 'quick-term-card';
            
            termCard.innerHTML = `
                <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
                    <div class="quick-term-icon">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="quick-term-content">
                        <h4>${term.term}</h4>
                        <p>${term.definition.substring(0, 120)}...</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="term-benefit-tag">${term.benefits.split(',')[0].trim()}</span>
                    <span class="term-example">${term.examples.split(',')[0].trim()}</span>
                </div>
            `;
            
            // Add click to show full definition
            termCard.addEventListener('click', () => {
                showTermDetail(term);
            });
            
            container.appendChild(termCard);
        });
    }
    
    function showTermDetail(term) {
        // Remove any existing detail modal
        const existingModal = document.getElementById('termDetailModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create modal
        const modal = document.createElement('div');
        modal.id = 'termDetailModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 12px;
                padding: 25px;
                max-width: 500px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            ">
                <button id="closeTermModal" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #718096;
                    cursor: pointer;
                ">&times;</button>
                
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #10b981; margin: 0 0 10px 0; font-size: 1.3rem;">${term.term}</h3>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <span style="background: #10b98110; color: #10b981; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">
                            <i class="fas fa-heart"></i> ${term.benefits}
                        </span>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2d3748; margin: 0 0 8px 0; font-size: 1rem;">Definition</h4>
                    <p style="color: #4a5568; line-height: 1.5; margin: 0;">${term.definition}</p>
                </div>
                
                <div>
                    <h4 style="color: #2d3748; margin: 0 0 8px 0; font-size: 1rem;">Food Sources</h4>
                    <p style="color: #4a5568; line-height: 1.5; margin: 0;">
                        <i class="fas fa-apple-alt" style="color: #10b981; margin-right: 8px;"></i>
                        ${term.examples}
                    </p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal events
        document.getElementById('closeTermModal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    function addTermTooltipsToElement(element) {
        if (!element || !window.nutritionGlossary) return;
        
        const terms = window.nutritionGlossary;
        let html = element.innerHTML;
        
        // Create a map of terms and their variations
        const termMap = {};
        
        // First, build a comprehensive map of all terms and variations
        Object.keys(terms).forEach(termKey => {
            const term = terms[termKey];
            
            // Add the term key itself
            termMap[termKey] = termKey;
            
            // Add the full term name (lowercase)
            const fullTerm = term.term.toLowerCase();
            termMap[fullTerm] = termKey;
            
            // Handle specific variations
            if (termKey === 'vitamin c') {
                termMap['ascorbic acid'] = termKey;
                termMap['ascorbic'] = termKey;
                termMap['vit c'] = termKey;
            } else if (termKey === 'vitamin k') {
                termMap['vitamin k1'] = termKey;
                termMap['vitamin k2'] = termKey;
                termMap['vit k'] = termKey;
            } else if (termKey === 'beta-carotene') {
                termMap['beta carotene'] = termKey;
                termMap['carotene'] = termKey;
            } else if (termKey === 'ellagic acid') {
                termMap['ellagitannins'] = termKey;
            }
            
            // Also add individual words from the term (for longer terms)
            const words = fullTerm.split(' ');
            words.forEach(word => {
                const cleanWord = word.replace(/[()]/g, '');
                if (cleanWord.length > 3 && !termMap[cleanWord]) {
                    termMap[cleanWord] = termKey;
                }
            });
        });
        
        // Sort terms by length (longest first) to avoid partial matches
        const sortedTermKeys = Object.keys(termMap).sort((a, b) => b.length - a.length);
        
        // Process each term variation
        sortedTermKeys.forEach(searchTerm => {
            const termKey = termMap[searchTerm];
            const term = terms[termKey];
            
            if (!term || searchTerm.length < 3) return;
            
            try {
                // Escape regex special characters
                const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
                
                html = html.replace(regex, (match, offset, string) => {
                    // Check if we're inside HTML tags
                    const before = string.substring(0, offset);
                    
                    // Skip if inside an HTML tag
                    const tagOpen = before.lastIndexOf('<');
                    const tagClose = before.lastIndexOf('>');
                    if (tagOpen > tagClose) {
                        return match; // Inside an HTML tag
                    }
                    
                    // Skip if already inside a tooltip
                    if (before.includes('class="term-tooltip"') || before.includes('data-term=')) {
                        return match;
                    }
                    
                    // Skip if the match is part of a URL or attribute
                    if (match.includes('href=') || match.includes('src=') || match.includes('data-')) {
                        return match;
                    }
                    
                    // Create the tooltip
                    return `<span class="term-tooltip" data-term="${termKey}">
                        ${match}
                        <span class="tooltip-text">
                            <div class="tooltip-term">${term.term}</div>
                            <div class="tooltip-definition">${term.definition}</div>
                            <div class="tooltip-benefits">${term.benefits}</div>
                            <div class="tooltip-examples">Found in: ${term.examples}</div>
                        </span>
                    </span>`;
                });
            } catch (error) {
                console.warn(`Failed to process term "${searchTerm}":`, error);
            }
        });
        
        element.innerHTML = html;
    }
    
    function setupTermTooltipObserver() {
        if (termTooltipObserver) {
            termTooltipObserver.disconnect();
        }
        
        termTooltipObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            // Only observe vitaminInfo, not synergyInfo
                            if (node.id === 'vitaminInfo') {
                                addTermTooltipsToElement(node);
                            } else if (node.querySelector && node.querySelector('#vitaminInfo')) {
                                const vitaminInfo = node.querySelector('#vitaminInfo');
                                if (vitaminInfo) {
                                    addTermTooltipsToElement(vitaminInfo);
                                }
                            }
                        }
                    });
                }
            });
        });
        
        // Observe the main container for changes
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) {
            termTooltipObserver.observe(mainContainer, {
                childList: true,
                subtree: true
            });
        }
    }
});