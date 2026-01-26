// script3.js - COMPLETE CORRECTED VERSION

// Configuration
const BATCH_SIZE = 20;
let allFruits = [];
let displayedFruits = [];
let currentIndex = 0;
let isLoading = false;
let isSearching = false;
let currentSearchTerm = '';
let currentSeasonFilter = 'all';
let currentSortOption = 'default';
let fruitLibraryInitialized = false;

// Helper function to extract numeric value from nutrition string
function extractNutritionValue(nutritionString) {
    if (!nutritionString || nutritionString === 'N/A') return 0;
    const match = nutritionString.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
}

// Sort fruits based on selected option
function sortFruits(fruits, sortOption) {
    if (sortOption === 'default') {
        return [...fruits];
    }
    
    const [nutritionType, order] = sortOption.split('_');
    
    return [...fruits].sort((a, b) => {
        const aValue = extractNutritionValue(a[nutritionType]);
        const bValue = extractNutritionValue(b[nutritionType]);
        
        if (order === 'high') {
            return bValue - aValue;
        } else {
            return aValue - bValue;
        }
    });
}

// Main initialization function
function initFruitLibrary() {
    // Check if we're on the right page
    const fruitListPage = document.getElementById('fruit-list');
    if (!fruitListPage || !fruitListPage.classList.contains('active')) {
        console.log('Not on fruit list page, skipping initialization');
        return;
    }
    
    if (fruitLibraryInitialized) {
        console.log('Fruit library already initialized');
        return;
    }
    
    console.log('=== INITIALIZING FRUIT LIBRARY ===');
    
    // Enable page 3 CSS
    const page3CSS = document.getElementById('page3-css');
    if (page3CSS) {
        page3CSS.disabled = false;
    }
    
    fixPage3Scrolling();
    
    // Check if fruitData exists
    if (!window.fruitData || !Array.isArray(window.fruitData)) {
        console.error('❌ No fruit data found');
        showError('Fruit data not loaded. Please check fruitdata.js');
        return;
    }
    
    console.log(`✅ Found ${window.fruitData.length} fruits total`);
    
    // Store all fruits
    allFruits = [...window.fruitData];
    displayedFruits = [];
    currentIndex = 0;
    
    // Clear and prepare grid
    const fruitGrid = document.getElementById('fruitDetailGrid');
    if (fruitGrid) {
        fruitGrid.innerHTML = '';
        
        // Add loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.id = 'loadingIndicator';
        loadingIndicator.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading fruits...</p>
        `;
        fruitGrid.appendChild(loadingIndicator);
    }
    
    // Load first batch
    loadMoreFruits();
    
    // Setup search
    setupSearch();
    
    // Setup season filters
    setupSeasonFilters();
    
    // Setup sort dropdown with all options
    setupSortDropdown();
    
    // Setup modal
    setupModal();
    
    // Setup infinite scroll
    setupInfiniteScroll();
    
    fruitLibraryInitialized = true;
    console.log('✅ Fruit library initialized');
}

// Load more fruits (lazy loading)
function loadMoreFruits() {
    if (isLoading) return;
    
    isLoading = true;
    
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.add('active');
    }
    
    setTimeout(() => {
        const fruitGrid = document.getElementById('fruitDetailGrid');
        if (!fruitGrid) {
            isLoading = false;
            return;
        }
        
        const nextBatch = allFruits.slice(currentIndex, currentIndex + BATCH_SIZE);
        
        if (nextBatch.length === 0) {
            if (loadingIndicator) {
                loadingIndicator.innerHTML = `
                    <i class="fas fa-check-circle" style="color: #4cd964;"></i>
                    <p>All fruits loaded</p>
                `;
                setTimeout(() => {
                    loadingIndicator.classList.remove('active');
                }, 2000);
            }
            isLoading = false;
            return;
        }
        
        displayedFruits = [...displayedFruits, ...nextBatch];
        
        nextBatch.forEach((fruit, index) => {
            const card = createFruitCard(fruit);
            card.style.animationDelay = `${index * 0.05}s`;
            fruitGrid.insertBefore(card, loadingIndicator);
        });
        
        currentIndex += nextBatch.length;
        
        if (loadingIndicator) {
            loadingIndicator.classList.remove('active');
        }
        
        console.log(`Loaded ${currentIndex} of ${allFruits.length} fruits`);
        
        isLoading = false;
    }, 300);
}

// Create a fruit card
function createFruitCard(fruit) {
    const card = document.createElement('div');
    card.className = 'fruit-card-detail';
    
    // Get season badges - use autumn for data, display as needed
    let seasonBadges = '';
    if (fruit.seasonCategories && Array.isArray(fruit.seasonCategories)) {
        seasonBadges = fruit.seasonCategories.map(season => {
            // Keep season class as it is in data, CSS will style it
            return `<span class="season-badge ${season}">${season}</span>`;
        }).join('');
    }
    
    // Get nutrition values
    const calories = fruit.calories ? `${fruit.calories} kcal` : 'N/A';
    const sugars = fruit.sugars || 'N/A';
    const fiber = fruit.fiber || 'N/A';
    const protein = fruit.protein || 'N/A';
    
    card.innerHTML = `
        <div class="fruit-image-container">
            <img src="${fruit.image || 'images/default.webp'}" alt="${fruit.name}" class="fruit-img" loading="lazy"
                 onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+JEZydWl0PC90ZXh0Pjwvc3ZnPg=='">
            <div class="season-badges">
                ${seasonBadges}
            </div>
        </div>
        <div class="fruit-info">
            <h3 class="fruit-name">${fruit.name}</h3>
            <div class="fruit-season">
                <i class="fas fa-calendar-alt"></i>
                <span>${fruit.seasonSpecific || fruit.northMonths || 'Season varies'}</span>
            </div>
            <div class="fruit-nutrition-preview">
                <div class="nutrition-item">
                    <i class="fas fa-fire"></i>
                    <div>
                        <div class="nutrition-label">Calories</div>
                        <div class="nutrition-value">${calories}</div>
                    </div>
                </div>
                <div class="nutrition-item">
                    <i class="fas fa-apple-alt"></i>
                    <div>
                        <div class="nutrition-label">Sugars</div>
                        <div class="nutrition-value">${sugars}</div>
                    </div>
                </div>
                <div class="nutrition-item">
                    <i class="fas fa-seedling"></i>
                    <div>
                        <div class="nutrition-label">Fiber</div>
                        <div class="nutrition-value">${fiber}</div>
                    </div>
                </div>
                <div class="nutrition-item">
                    <i class="fas fa-dumbbell"></i>
                    <div>
                        <div class="nutrition-label">Protein</div>
                        <div class="nutrition-value">${protein}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add click event for modal
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        showFruitDetails(fruit);
    });
    
    return card;
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('fruitSearch');
    const clearBtn = document.getElementById('clearSearch');
    
    if (!searchInput) return;
    
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearchTerm = this.value.toLowerCase().trim();
            performSearchAndFilter();
        }, 300);
    });
    
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchTerm = '';
            performSearchAndFilter();
            searchInput.focus();
        });
    }
}

// Setup season filters
function setupSeasonFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentSeasonFilter = this.dataset.season;
            performSearchAndFilter();
        });
    });
}

// Setup sort dropdown - WITH ALL OPTIONS INCLUDING FIBER AND PROTEIN
function setupSortDropdown() {
    const sortSelect = document.getElementById('nutritionSortSelect');
    
    if (!sortSelect) return;
    
    // Make sure all options are present
    sortSelect.innerHTML = `
        <option value="default">Default Order</option>
        <option value="calories_high">Calories (High to Low)</option>
        <option value="calories_low">Calories (Low to High)</option>
        <option value="sugars_high">Sugars (High to Low)</option>
        <option value="sugars_low">Sugars (Low to High)</option>
        <option value="fiber_high">Fiber (High to Low)</option>
        <option value="fiber_low">Fiber (Low to High)</option>
        <option value="protein_high">Protein (High to Low)</option>
        <option value="protein_low">Protein (Low to High)</option>
    `;
    
    sortSelect.addEventListener('change', function() {
        currentSortOption = this.value;
        performSearchAndFilter();
    });
}

// Perform combined search, season filter, and sort
function performSearchAndFilter() {
    isSearching = true;
    
    let filteredFruits = [...window.fruitData];
    
    // Apply search filter
    if (currentSearchTerm) {
        filteredFruits = filteredFruits.filter(fruit => 
            fruit.name.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // Apply season filter
    if (currentSeasonFilter !== 'all') {
        filteredFruits = filteredFruits.filter(fruit => {
            if (!fruit.seasonCategories) return false;
            
            if (currentSeasonFilter === 'year-round') {
                return fruit.seasonCategories.includes('year-round') || 
                       fruit.seasonCategories.length >= 4;
            }
            
            return fruit.seasonCategories.includes(currentSeasonFilter);
        });
    }
    
    // Apply sorting
    filteredFruits = sortFruits(filteredFruits, currentSortOption);
    
    console.log(`Found ${filteredFruits.length} fruits after filtering/sorting`);
    
    // Reset and display filtered results
    allFruits = filteredFruits;
    displayedFruits = [];
    currentIndex = 0;
    
    const fruitGrid = document.getElementById('fruitDetailGrid');
    if (fruitGrid) {
        fruitGrid.innerHTML = '';
        
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.id = 'loadingIndicator';
        loadingIndicator.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading fruits...</p>
        `;
        fruitGrid.appendChild(loadingIndicator);
        
        setTimeout(() => {
            loadMoreFruits();
            isSearching = false;
        }, 100);
    }
}

// Setup infinite scroll
function setupInfiniteScroll() {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            checkScrollPosition();
        }, 100);
    });
    
    setTimeout(checkScrollPosition, 500);
}

function checkScrollPosition() {
    if (isLoading || isSearching) return;
    
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 500;
    
    if (scrollPosition >= pageHeight - threshold) {
        loadMoreFruits();
    }
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('fruitModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) return;
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Show fruit details in modal
function showFruitDetails(fruit) {
    const modal = document.getElementById('fruitModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    // Handle season display
    const seasonDisplay = fruit.seasonSpecific || fruit.northMonths || 'Season varies';
    
    // Format nutrition values
    const calories = fruit.calories ? `${fruit.calories} kcal` : 'N/A';
    const sugars = fruit.sugars || 'N/A';
    const fiber = fruit.fiber || 'N/A';
    const protein = fruit.protein || 'N/A';
    const fat = fruit.fat || 'N/A';
    
    // Create nutrition items
    const nutritionItems = [
        { icon: 'fire', label: 'Calories', value: calories },
        { icon: 'apple-alt', label: 'Sugars', value: sugars },
        { icon: 'seedling', label: 'Fiber', value: fiber },
        { icon: 'dumbbell', label: 'Protein', value: protein },
        { icon: 'oil-can', label: 'Fat', value: fat }
    ].filter(item => item.value && item.value !== 'N/A').map(item => `
        <div class="nutrient">
            <span class="nutrient-name">
                <i class="fas fa-${item.icon}"></i> ${item.label}
            </span>
            <span class="nutrient-value">${item.value}</span>
        </div>
    `).join('');

    // Create lists from arrays
    const createListHTML = (items, fallbackText) => {
        if (!items || !Array.isArray(items) || items.length === 0) {
            return `<li><em>${fallbackText}</em></li>`;
        }
        return items.map(item => `<li>${item}</li>`).join('');
    };

    const mineralsList = createListHTML(fruit.minerals, 'No mineral data available');
    const vitaminsList = createListHTML(fruit.vitamins, 'No vitamin data available');
    const antioxidantsList = createListHTML(fruit.antioxidants, 'No antioxidant data available');
    const benefitsList = createListHTML(fruit.healthBenefits, 'No health benefit data available');

    // Build modal HTML
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-image">
                <img src="${fruit.image || 'images/default.webp'}" alt="${fruit.name}" loading="lazy">
            </div>
            <div class="modal-title">
                <h2>${fruit.name}</h2>
                <div class="modal-season">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${seasonDisplay}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-grid">
            <div class="modal-section">
                <h3><i class="fas fa-chart-bar"></i> Nutrition Facts (per 100g)</h3>
                <div class="nutrition-grid">
                    ${nutritionItems || '<p>No nutritional data available</p>'}
                </div>
            </div>
            
            ${fruit.healthBenefits && fruit.healthBenefits.length > 0 ? `
            <div class="modal-section">
                <h3><i class="fas fa-heart"></i> Health Benefits</h3>
                <ul class="list-items">
                    ${benefitsList}
                </ul>
            </div>
            ` : ''}
            
            ${(fruit.vitamins && fruit.vitamins.length > 0) || (fruit.minerals && fruit.minerals.length > 0) ? `
            <div class="modal-section">
                <h3><i class="fas fa-pills"></i> Vitamins & Minerals</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    ${fruit.vitamins && fruit.vitamins.length > 0 ? `
                    <div>
                        <h4 style="color: #ff6b6b; margin-top: 0;">Vitamins</h4>
                        <ul class="list-items">
                            ${vitaminsList}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${fruit.minerals && fruit.minerals.length > 0 ? `
                    <div>
                        <h4 style="color: #ff6b6b; margin-top: 0;">Minerals</h4>
                        <ul class="list-items">
                            ${mineralsList}
                        </ul>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            
            ${fruit.antioxidants && fruit.antioxidants.length > 0 ? `
            <div class="modal-section">
                <h3><i class="fas fa-shield-alt"></i> Antioxidants</h3>
                <ul class="list-items">
                    ${antioxidantsList}
                </ul>
            </div>
            ` : ''}
        </div>
    `;

    // Display modal
    modal.style.display = 'block';
    
    // Add image error handling
    const modalImg = modalBody.querySelector('.modal-image img');
    if (modalImg) {
        modalImg.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+JEZydWl0PC90ZXh0Pjwvc3ZnPg==';
        });
    }
}

// Fix scrolling function
function fixPage3Scrolling() {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    
    const page3 = document.getElementById('fruit-list');
    if (page3) {
        page3.style.overflowY = 'auto';
        page3.style.height = 'auto';
        page3.style.minHeight = '100vh';
    }
}

// Show error
function showError(message) {
    const fruitGrid = document.getElementById('fruitDetailGrid');
    if (fruitGrid) {
        fruitGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Error Loading Fruits</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page 3 script loaded with fixes');
    
    // Check if we're on page 3 initially
    const fruitListPage = document.getElementById('fruit-list');
    if (fruitListPage && fruitListPage.classList.contains('active')) {
        console.log('Starting on page 3');
        initFruitLibrary();
    }
    
    // Listen for navigation to page 3
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            
            if (page === 'fruit-list') {
                console.log('=== NAVIGATED TO PAGE 3 ===');
                setTimeout(initFruitLibrary, 50);
            } else {
                // Reset initialization flag when leaving page 3
                fruitLibraryInitialized = false;
            }
        });
    });
});