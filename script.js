// script.js - ONLY for Page 1 (Home)

// Fruit images for Page 1 - Use your original .jpg files in fruits/ folder
const fruitImages = [
    { src: 'fruits/mango.jpg', name: 'Mango' },
    { src: 'fruits/cherries.jpg', name: 'Cherries' },
    { src: 'fruits/banana.jpg', name: 'Banana' },
    { src: 'fruits/papaya.jpg', name: 'Papaya' },
    { src: 'fruits/lemon.jpg', name: 'Lemon' },
    { src: 'fruits/granada.jpg', name: 'Pomegranate' },
    { src: 'fruits/peach.jpg', name: 'Peach' },
    { src: 'fruits/tomato.jpg', name: 'Tomato' },
    { src: 'fruits/avocado.jpg', name: 'Avocado' },
    { src: 'fruits/orange.jpg', name: 'Orange' },
    { src: 'fruits/strawberries.jpg', name: 'Strawberries' },
    { src: 'fruits/watermelon.jpg', name: 'Watermelon' },
];

// Initialize image grid for Page 1
function initImageGrid() {
    console.log('Initializing image grid...');
    const imageGrid = document.getElementById('imageGrid');
    if (!imageGrid) {
        console.error('Image grid element not found!');
        return;
    }
    
    imageGrid.innerHTML = '';
    
    // Create 12 image items
    for (let i = 0; i < 12; i++) {
        const imageIndex = i % fruitImages.length;
        const image = fruitImages[imageIndex];
        
        const item = document.createElement('div');
        item.className = 'image-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.name;
        img.loading = 'eager';
        
        // Simple error handling for images
        img.onerror = function() {
            console.error(`Failed to load image: ${image.src}`);
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPiRGcnVpdDwvdGV4dD48L3N2Zz4=';
        };
        
        // Add hover effect
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'invert(1) brightness(0.8)';
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(0.85)';
            this.style.transform = 'scale(0.95)';
        });
        
        item.appendChild(img);
        imageGrid.appendChild(item);
    }
    
    console.log('Image grid initialized with', fruitImages.length, 'images');
}

// Navigation
function setupNavigation() {
    console.log('Setting up navigation...');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.dataset.page;
            
            // Update active states
            navButtons.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(pageId).classList.add('active');
            
            // Handle page-specific actions
            if (pageId === 'home') {
                console.log('Switched to home page');
                initImageGrid();
            } else if (pageId === 'fruit-list') {
                console.log('Switched to fruit library page');
                // Page 3 will handle its own initialization via script3.js
            }
        });
    });
    
    console.log('Navigation setup complete');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Page 1...');
    
    setupNavigation();
    initImageGrid();
    
    // Handle window resize for Page 1
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (document.getElementById('home').classList.contains('active')) {
                console.log('Window resized, reinitializing image grid...');
                initImageGrid();
            }
        }, 250);
    });
    
    // Prevent scrolling on home page
    const homePage = document.getElementById('home');
    if (homePage) {
        homePage.addEventListener('wheel', function(e) {
            if (this.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
        
        homePage.addEventListener('touchmove', function(e) {
            if (this.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    console.log('Page 1 initialization complete');
});