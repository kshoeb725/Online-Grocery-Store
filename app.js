// FreshMart Grocery Store Application
class FreshMartApp {
    constructor() {
        // Initialize data from provided JSON
        this.data = {
            "products": [
                {
                    "id": 1,
                    "name": "Fresh Bananas",
                    "category": "Fruits & Vegetables",
                    "subcategory": "Fruits",
                    "price": 2.99,
                    "originalPrice": 3.49,
                    "unit": "per lb",
                    "image": "🍌",
                    "description": "Fresh, ripe bananas perfect for snacking or baking",
                    "inStock": true,
                    "stockQuantity": 150,
                    "brand": "Fresh Farm",
                    "rating": 4.5,
                    "reviews": 23,
                    "organic": true,
                    "nutrition": {"calories": 105, "fiber": "3g", "potassium": "422mg"}
                },
                {
                    "id": 2,
                    "name": "Whole Milk",
                    "category": "Dairy & Eggs",
                    "subcategory": "Milk",
                    "price": 4.29,
                    "originalPrice": 4.29,
                    "unit": "1 gallon",
                    "image": "🥛",
                    "description": "Fresh whole milk from local dairy farms",
                    "inStock": true,
                    "stockQuantity": 45,
                    "brand": "Dairy Fresh",
                    "rating": 4.7,
                    "reviews": 89,
                    "organic": false,
                    "nutrition": {"calories": 150, "protein": "8g", "calcium": "280mg"}
                },
                {
                    "id": 3,
                    "name": "Organic Apples",
                    "category": "Fruits & Vegetables",
                    "subcategory": "Fruits",
                    "price": 5.99,
                    "originalPrice": 6.99,
                    "unit": "3 lb bag",
                    "image": "🍎",
                    "description": "Crisp organic apples, perfect for snacking",
                    "inStock": true,
                    "stockQuantity": 67,
                    "brand": "Organic Valley",
                    "rating": 4.8,
                    "reviews": 156,
                    "organic": true,
                    "nutrition": {"calories": 80, "fiber": "4g", "vitamin_c": "14%"}
                },
                {
                    "id": 4,
                    "name": "Fresh Bread",
                    "category": "Bakery & Bread",
                    "subcategory": "Bread",
                    "price": 3.49,
                    "originalPrice": 3.49,
                    "unit": "1 loaf",
                    "image": "🍞",
                    "description": "Freshly baked whole wheat bread",
                    "inStock": true,
                    "stockQuantity": 28,
                    "brand": "Bakery Fresh",
                    "rating": 4.3,
                    "reviews": 45,
                    "organic": false,
                    "nutrition": {"calories": 80, "fiber": "3g", "protein": "4g"}
                },
                {
                    "id": 5,
                    "name": "Ground Beef",
                    "category": "Meat & Seafood",
                    "subcategory": "Beef",
                    "price": 8.99,
                    "originalPrice": 9.99,
                    "unit": "per lb",
                    "image": "🥩",
                    "description": "Fresh ground beef, 85% lean",
                    "inStock": true,
                    "stockQuantity": 22,
                    "brand": "Prime Cut",
                    "rating": 4.4,
                    "reviews": 67,
                    "organic": false,
                    "nutrition": {"calories": 250, "protein": "22g", "iron": "15%"}
                },
                {
                    "id": 6,
                    "name": "Large Eggs",
                    "category": "Dairy & Eggs",
                    "subcategory": "Eggs",
                    "price": 3.99,
                    "originalPrice": 4.49,
                    "unit": "12 count",
                    "image": "🥚",
                    "description": "Farm fresh large eggs",
                    "inStock": true,
                    "stockQuantity": 89,
                    "brand": "Farm Fresh",
                    "rating": 4.6,
                    "reviews": 134,
                    "organic": true,
                    "nutrition": {"calories": 70, "protein": "6g", "vitamin_d": "10%"}
                },
                {
                    "id": 7,
                    "name": "Potato Chips",
                    "category": "Snacks & Beverages",
                    "subcategory": "Chips",
                    "price": 4.99,
                    "originalPrice": 5.99,
                    "unit": "8 oz bag",
                    "image": "🍟",
                    "description": "Crispy potato chips, original flavor",
                    "inStock": true,
                    "stockQuantity": 156,
                    "brand": "Crispy Crunch",
                    "rating": 4.2,
                    "reviews": 298,
                    "organic": false,
                    "nutrition": {"calories": 160, "fat": "10g", "sodium": "180mg"}
                },
                {
                    "id": 8,
                    "name": "Orange Juice",
                    "category": "Snacks & Beverages",
                    "subcategory": "Juices",
                    "price": 3.79,
                    "originalPrice": 4.29,
                    "unit": "64 fl oz",
                    "image": "🧃",
                    "description": "100% pure orange juice, no pulp",
                    "inStock": true,
                    "stockQuantity": 73,
                    "brand": "Sunny Grove",
                    "rating": 4.5,
                    "reviews": 189,
                    "organic": false,
                    "nutrition": {"calories": 110, "vitamin_c": "120%", "folate": "10%"}
                },
                {
                    "id": 9,
                    "name": "Frozen Pizza",
                    "category": "Frozen Foods",
                    "subcategory": "Pizza",
                    "price": 6.99,
                    "originalPrice": 7.99,
                    "unit": "12 inch",
                    "image": "🍕",
                    "description": "Delicious pepperoni pizza, ready in 15 minutes",
                    "inStock": true,
                    "stockQuantity": 34,
                    "brand": "Quick Bite",
                    "rating": 4.1,
                    "reviews": 87,
                    "organic": false,
                    "nutrition": {"calories": 290, "protein": "12g", "sodium": "650mg"}
                },
                {
                    "id": 10,
                    "name": "Greek Yogurt",
                    "category": "Dairy & Eggs",
                    "subcategory": "Yogurt",
                    "price": 5.49,
                    "originalPrice": 5.99,
                    "unit": "32 oz",
                    "image": "🥛",
                    "description": "Creamy Greek yogurt, vanilla flavor",
                    "inStock": true,
                    "stockQuantity": 56,
                    "brand": "Greek Delight",
                    "rating": 4.7,
                    "reviews": 223,
                    "organic": true,
                    "nutrition": {"calories": 100, "protein": "15g", "probiotics": "Yes"}
                },
                {
                    "id": 11,
                    "name": "Broccoli",
                    "category": "Fruits & Vegetables",
                    "subcategory": "Vegetables",
                    "price": 2.49,
                    "originalPrice": 2.99,
                    "unit": "1 bunch",
                    "image": "🥦",
                    "description": "Fresh broccoli crowns, perfect for steaming",
                    "inStock": true,
                    "stockQuantity": 41,
                    "brand": "Garden Fresh",
                    "rating": 4.3,
                    "reviews": 76,
                    "organic": true,
                    "nutrition": {"calories": 25, "vitamin_c": "135%", "fiber": "2g"}
                },
                {
                    "id": 12,
                    "name": "Salmon Fillet",
                    "category": "Meat & Seafood",
                    "subcategory": "Fish",
                    "price": 12.99,
                    "originalPrice": 14.99,
                    "unit": "per lb",
                    "image": "🐟",
                    "description": "Fresh Atlantic salmon fillet",
                    "inStock": true,
                    "stockQuantity": 18,
                    "brand": "Ocean Fresh",
                    "rating": 4.8,
                    "reviews": 92,
                    "organic": false,
                    "nutrition": {"calories": 206, "protein": "22g", "omega3": "High"}
                },
                {
                    "id": 13,
                    "name": "Laundry Detergent",
                    "category": "Household & Cleaning",
                    "subcategory": "Laundry",
                    "price": 11.99,
                    "originalPrice": 13.99,
                    "unit": "64 fl oz",
                    "image": "🧴",
                    "description": "Concentrated laundry detergent, 40 loads",
                    "inStock": true,
                    "stockQuantity": 67,
                    "brand": "Clean Pro",
                    "rating": 4.4,
                    "reviews": 167,
                    "organic": false,
                    "features": ["Stain fighting", "Fresh scent", "HE compatible"]
                },
                {
                    "id": 14,
                    "name": "Toothpaste",
                    "category": "Health & Personal Care",
                    "subcategory": "Oral Care",
                    "price": 4.49,
                    "originalPrice": 4.99,
                    "unit": "4.7 oz",
                    "image": "🦷",
                    "description": "Fluoride toothpaste for cavity protection",
                    "inStock": true,
                    "stockQuantity": 123,
                    "brand": "Smile Bright",
                    "rating": 4.5,
                    "reviews": 245,
                    "organic": false,
                    "features": ["Whitening", "Cavity protection", "Fresh mint"]
                },
                {
                    "id": 15,
                    "name": "Baby Diapers",
                    "category": "Baby & Pet Care",
                    "subcategory": "Baby",
                    "price": 24.99,
                    "originalPrice": 27.99,
                    "unit": "Size 3, 84 count",
                    "image": "👶",
                    "description": "Ultra-soft baby diapers with wetness indicator",
                    "inStock": true,
                    "stockQuantity": 45,
                    "brand": "Baby Soft",
                    "rating": 4.6,
                    "reviews": 189,
                    "organic": false,
                    "features": ["12-hour protection", "Hypoallergenic", "Wetness indicator"]
                },
                {
                    "id": 16,
                    "name": "Canned Tomatoes",
                    "category": "Pantry & Canned Goods",
                    "subcategory": "Canned Vegetables",
                    "price": 1.29,
                    "originalPrice": 1.49,
                    "unit": "14.5 oz",
                    "image": "🥫",
                    "description": "Whole peeled tomatoes in juice",
                    "inStock": true,
                    "stockQuantity": 234,
                    "brand": "Garden Valley",
                    "rating": 4.2,
                    "reviews": 156,
                    "organic": true,
                    "nutrition": {"calories": 20, "vitamin_c": "15%", "lycopene": "High"}
                },
                {
                    "id": 17,
                    "name": "Rice",
                    "category": "Pantry & Canned Goods",
                    "subcategory": "Grains",
                    "price": 8.99,
                    "originalPrice": 9.99,
                    "unit": "5 lb bag",
                    "image": "🍚",
                    "description": "Long grain white rice, premium quality",
                    "inStock": true,
                    "stockQuantity": 89,
                    "brand": "Golden Grain",
                    "rating": 4.4,
                    "reviews": 267,
                    "organic": false,
                    "nutrition": {"calories": 160, "carbs": "35g", "protein": "3g"}
                },
                {
                    "id": 18,
                    "name": "Ice Cream",
                    "category": "Frozen Foods",
                    "subcategory": "Desserts",
                    "price": 7.99,
                    "originalPrice": 8.99,
                    "unit": "1.5 qt",
                    "image": "🍦",
                    "description": "Premium vanilla ice cream",
                    "inStock": true,
                    "stockQuantity": 78,
                    "brand": "Creamy Dreams",
                    "rating": 4.6,
                    "reviews": 312,
                    "organic": false,
                    "nutrition": {"calories": 140, "fat": "7g", "sugar": "14g"}
                },
                {
                    "id": 19,
                    "name": "Dog Food",
                    "category": "Baby & Pet Care",
                    "subcategory": "Pet",
                    "price": 19.99,
                    "originalPrice": 22.99,
                    "unit": "15 lb bag",
                    "image": "🐕",
                    "description": "Premium dry dog food for adult dogs",
                    "inStock": true,
                    "stockQuantity": 23,
                    "brand": "Happy Paws",
                    "rating": 4.7,
                    "reviews": 145,
                    "organic": false,
                    "features": ["Real chicken", "No fillers", "Omega fatty acids"]
                },
                {
                    "id": 20,
                    "name": "Pasta",
                    "category": "Pantry & Canned Goods",
                    "subcategory": "Pasta",
                    "price": 1.99,
                    "originalPrice": 2.29,
                    "unit": "1 lb box",
                    "image": "🍝",
                    "description": "Premium spaghetti pasta",
                    "inStock": true,
                    "stockQuantity": 167,
                    "brand": "Italiano",
                    "rating": 4.3,
                    "reviews": 198,
                    "organic": false,
                    "nutrition": {"calories": 200, "carbs": "42g", "protein": "7g"}
                }
            ],
            "categories": [
                {
                    "name": "Fruits & Vegetables",
                    "icon": "🥬",
                    "subcategories": ["Fruits", "Vegetables", "Organic Produce", "Herbs"]
                },
                {
                    "name": "Dairy & Eggs",
                    "icon": "🥛",
                    "subcategories": ["Milk", "Cheese", "Eggs", "Yogurt", "Butter"]
                },
                {
                    "name": "Meat & Seafood",
                    "icon": "🥩",
                    "subcategories": ["Beef", "Chicken", "Pork", "Fish", "Seafood"]
                },
                {
                    "name": "Bakery & Bread",
                    "icon": "🍞",
                    "subcategories": ["Bread", "Pastries", "Cakes", "Cookies"]
                },
                {
                    "name": "Pantry & Canned Goods",
                    "icon": "🥫",
                    "subcategories": ["Canned Vegetables", "Grains", "Pasta", "Spices", "Condiments"]
                },
                {
                    "name": "Snacks & Beverages",
                    "icon": "🥤",
                    "subcategories": ["Chips", "Crackers", "Juices", "Soft Drinks", "Water"]
                },
                {
                    "name": "Frozen Foods",
                    "icon": "🧊",
                    "subcategories": ["Pizza", "Desserts", "Vegetables", "Meals"]
                },
                {
                    "name": "Health & Personal Care",
                    "icon": "🧴",
                    "subcategories": ["Oral Care", "Hair Care", "Skincare", "Vitamins"]
                },
                {
                    "name": "Household & Cleaning",
                    "icon": "🧽",
                    "subcategories": ["Laundry", "Kitchen", "Bathroom", "Paper Products"]
                },
                {
                    "name": "Baby & Pet Care",
                    "icon": "👶",
                    "subcategories": ["Baby", "Pet", "Toys"]
                }
            ],
            "users": [
                {
                    "id": 1,
                    "email": "admin@freshmart.com",
                    "password": "admin123",
                    "name": "Admin User",
                    "role": "admin",
                    "phone": "+1-234-567-8900",
                    "address": "123 Admin Street, Admin City, AC 12345"
                },
                {
                    "id": 2,
                    "email": "john@example.com",
                    "password": "customer123",
                    "name": "John Doe",
                    "role": "customer",
                    "phone": "+1-555-123-4567",
                    "address": "456 Customer Ave, Customer City, CC 67890"
                }
            ],
            "orders": [
                {
                    "id": 1001,
                    "userId": 2,
                    "customerName": "John Doe",
                    "email": "john@example.com",
                    "phone": "+1-555-123-4567",
                    "address": "456 Customer Ave, Customer City, CC 67890",
                    "items": [
                        {"productId": 1, "name": "Fresh Bananas", "price": 2.99, "quantity": 2},
                        {"productId": 2, "name": "Whole Milk", "price": 4.29, "quantity": 1},
                        {"productId": 6, "name": "Large Eggs", "price": 3.99, "quantity": 1}
                    ],
                    "subtotal": 14.26,
                    "tax": 1.14,
                    "delivery": 4.99,
                    "total": 20.39,
                    "status": "delivered",
                    "orderDate": "2025-08-25T10:30:00Z",
                    "deliveryDate": "2025-08-25T14:30:00Z",
                    "paymentMethod": "Credit Card"
                },
                {
                    "id": 1002,
                    "userId": 2,
                    "customerName": "John Doe",
                    "email": "john@example.com",
                    "phone": "+1-555-123-4567",
                    "address": "456 Customer Ave, Customer City, CC 67890",
                    "items": [
                        {"productId": 3, "name": "Organic Apples", "price": 5.99, "quantity": 1},
                        {"productId": 4, "name": "Fresh Bread", "price": 3.49, "quantity": 2}
                    ],
                    "subtotal": 12.97,
                    "tax": 1.04,
                    "delivery": 4.99,
                    "total": 18.00,
                    "status": "processing",
                    "orderDate": "2025-08-27T09:15:00Z",
                    "estimatedDelivery": "2025-08-28T15:00:00Z",
                    "paymentMethod": "Debit Card"
                }
            ],
            "coupons": [
                {
                    "code": "WELCOME10",
                    "description": "10% off your first order",
                    "discount": 0.10,
                    "type": "percentage",
                    "minOrder": 25,
                    "maxDiscount": 10,
                    "active": true
                },
                {
                    "code": "SAVE5",
                    "description": "$5 off orders over $50",
                    "discount": 5,
                    "type": "fixed",
                    "minOrder": 50,
                    "active": true
                },
                {
                    "code": "FREESHIP",
                    "description": "Free shipping on orders over $75",
                    "discount": 4.99,
                    "type": "shipping",
                    "minOrder": 75,
                    "active": true
                }
            ],
            "storeInfo": {
                "name": "FreshMart Grocery Store",
                "tagline": "Fresh groceries delivered to your door",
                "phone": "+1-800-FRESH-MART",
                "email": "support@freshmart.com",
                "address": "123 Fresh Street, Grocery City, GC 12345",
                "hours": {
                    "monday": "8:00 AM - 10:00 PM",
                    "tuesday": "8:00 AM - 10:00 PM",
                    "wednesday": "8:00 AM - 10:00 PM",
                    "thursday": "8:00 AM - 10:00 PM",
                    "friday": "8:00 AM - 11:00 PM",
                    "saturday": "8:00 AM - 11:00 PM",
                    "sunday": "9:00 AM - 9:00 PM"
                },
                "deliveryFee": 4.99,
                "freeDeliveryMinimum": 75,
                "taxRate": 0.08
            }
        };

        // Initialize state
        this.currentUser = null;
        this.cart = [];
        this.wishlist = [];
        this.currentPage = 'home';
        this.isAuthMode = 'login';
        this.checkoutStep = 1;
        this.appliedCoupon = null;

        // Load data from localStorage
        this.loadFromStorage();

        // Initialize the application
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderCategories();
        this.renderFeaturedProducts();
        this.renderAllProducts();
        this.updateCartUI();
        this.updateWishlistUI();
        this.updateAuthUI();
        this.populateCategoryFilters();
        this.initializeAdminData();
    }

    setupEventListeners() {
        // Fix navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPage(e.target.dataset.page);
            });
        });

        // Fix logo click to go home
        document.querySelector('.header__logo').addEventListener('click', (e) => {
            e.preventDefault();
            this.showPage('home');
        });

        // Search
        document.getElementById('searchBtn').addEventListener('click', () => this.handleSearch());
        document.getElementById('searchInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });

        // Fix auth modal - ensure proper event binding
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.currentUser) {
                this.logout();
            } else {
                this.openAuthModal();
            }
        });

        document.getElementById('closeAuthBtn').addEventListener('click', () => this.closeModal('authModal'));
        document.getElementById('authForm').addEventListener('submit', (e) => this.handleAuth(e));
        document.getElementById('authSwitchBtn').addEventListener('click', () => this.toggleAuthMode());

        // Fix cart functionality
        document.getElementById('cartBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.openCartSidebar();
        });
        document.getElementById('closeCartBtn').addEventListener('click', () => this.closeCartSidebar());
        document.getElementById('continueShopping').addEventListener('click', () => this.closeCartSidebar());
        document.getElementById('checkoutBtn').addEventListener('click', () => this.openCheckoutModal());

        // Wishlist
        document.getElementById('wishlistBtn').addEventListener('click', () => this.openWishlistModal());
        document.getElementById('closeWishlistBtn').addEventListener('click', () => this.closeModal('wishlistModal'));

        // Product filters
        document.getElementById('categoryFilter').addEventListener('change', () => this.filterProducts());
        document.getElementById('sortBy').addEventListener('change', () => this.filterProducts());
        document.getElementById('organicFilter').addEventListener('change', () => this.filterProducts());

        // Checkout
        document.getElementById('closeCheckoutBtn').addEventListener('click', () => this.closeModal('checkoutModal'));
        document.getElementById('nextToPayment').addEventListener('click', () => this.nextCheckoutStep());
        document.getElementById('nextToReview').addEventListener('click', () => this.nextCheckoutStep());
        document.getElementById('backToDelivery').addEventListener('click', () => this.prevCheckoutStep());
        document.getElementById('backToPayment').addEventListener('click', () => this.prevCheckoutStep());
        document.getElementById('placeOrderBtn').addEventListener('click', () => this.placeOrder());
        document.getElementById('applyCouponBtn').addEventListener('click', () => this.applyCoupon());

        // Fix product detail modal closing
        document.getElementById('closeProductBtn').addEventListener('click', () => this.closeModal('productModal'));

        // Admin
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.showAdminTab(e.target.dataset.tab));
        });
        document.getElementById('addProductBtn').addEventListener('click', () => this.openAddProductModal());
        document.getElementById('closeAddProductBtn').addEventListener('click', () => this.closeModal('addProductModal'));
        document.getElementById('addProductForm').addEventListener('submit', (e) => this.handleAddProduct(e));

        // Shop now button
        document.getElementById('shopNowBtn').addEventListener('click', () => this.showPage('products'));

        // Toast close
        document.getElementById('toastClose').addEventListener('click', () => this.hideToast());

        // Add modal click-outside-to-close functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                const modalId = e.target.id;
                this.closeModal(modalId);
            }
        });

        // Add escape key functionality for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal:not(.hidden)');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    // Storage methods
    saveToStorage() {
        const storageData = {
            currentUser: this.currentUser,
            cart: this.cart,
            wishlist: this.wishlist,
            orders: this.data.orders,
            products: this.data.products
        };
        try {
            localStorage.setItem('freshmart-data', JSON.stringify(storageData));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem('freshmart-data');
            if (stored) {
                const data = JSON.parse(stored);
                this.currentUser = data.currentUser || null;
                this.cart = data.cart || [];
                this.wishlist = data.wishlist || [];
                if (data.orders) this.data.orders = data.orders;
                if (data.products) this.data.products = data.products;
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }

    // Page navigation
    showPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        // Show selected page
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        const navBtn = document.querySelector(`[data-page="${page}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
        }

        this.currentPage = page;

        // Load page-specific content
        if (page === 'orders') {
            this.renderOrders();
        } else if (page === 'admin') {
            this.renderAdminDashboard();
        } else if (page === 'categories') {
            this.renderCategoriesPage();
        }
    }

    // Authentication
    openAuthModal() {
        this.openModal('authModal');
    }

    toggleAuthMode() {
        this.isAuthMode = this.isAuthMode === 'login' ? 'register' : 'login';
        const title = document.getElementById('authModalTitle');
        const submitBtn = document.getElementById('authSubmitBtn');
        const switchText = document.getElementById('authSwitchText');
        const switchBtn = document.getElementById('authSwitchBtn');
        const registerFields = document.getElementById('registerFields');

        if (this.isAuthMode === 'login') {
            title.textContent = 'Login';
            submitBtn.textContent = 'Login';
            switchText.textContent = "Don't have an account?";
            switchBtn.textContent = 'Register';
            registerFields.style.display = 'none';
        } else {
            title.textContent = 'Register';
            submitBtn.textContent = 'Register';
            switchText.textContent = 'Already have an account?';
            switchBtn.textContent = 'Login';
            registerFields.style.display = 'block';
        }
    }

    handleAuth(e) {
        e.preventDefault();
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;

        if (this.isAuthMode === 'login') {
            const user = this.data.users.find(u => u.email === email && u.password === password);
            if (user) {
                this.currentUser = user;
                this.showToast('Login successful!');
                this.closeModal('authModal');
                this.updateAuthUI();
                this.saveToStorage();
                document.getElementById('authForm').reset();
            } else {
                this.showToast('Invalid email or password', 'error');
            }
        } else {
            // Register new user
            const name = document.getElementById('authName').value;
            const phone = document.getElementById('authPhone').value;
            const address = document.getElementById('authAddress').value;

            if (!name || !phone || !address) {
                this.showToast('Please fill in all fields', 'error');
                return;
            }

            const existingUser = this.data.users.find(u => u.email === email);
            if (existingUser) {
                this.showToast('Email already exists', 'error');
                return;
            }

            const newUser = {
                id: this.data.users.length + 1,
                email,
                password,
                name,
                role: 'customer',
                phone,
                address
            };

            this.data.users.push(newUser);
            this.currentUser = newUser;
            this.showToast('Registration successful!');
            this.closeModal('authModal');
            this.updateAuthUI();
            this.saveToStorage();
            document.getElementById('authForm').reset();
        }
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        const ordersNavBtn = document.getElementById('ordersNavBtn');
        const adminNavBtn = document.getElementById('adminNavBtn');

        if (this.currentUser) {
            loginBtn.textContent = `👋 ${this.currentUser.name}`;
            ordersNavBtn.style.display = 'block';
            
            if (this.currentUser.role === 'admin') {
                adminNavBtn.style.display = 'block';
            }
        } else {
            loginBtn.textContent = 'Login';
            ordersNavBtn.style.display = 'none';
            adminNavBtn.style.display = 'none';
        }
    }

    logout() {
        this.currentUser = null;
        this.cart = [];
        this.wishlist = [];
        this.updateAuthUI();
        this.updateCartUI();
        this.updateWishlistUI();
        this.showPage('home');
        this.showToast('Logged out successfully');
        this.saveToStorage();
    }

    // Product rendering
    renderCategories() {
        const container = document.getElementById('categoriesGrid');
        container.innerHTML = this.data.categories.map(category => `
            <div class="category-card" onclick="app.filterByCategory('${category.name}')">
                <div class="category-card__icon">${category.icon}</div>
                <h4 class="category-card__name">${category.name}</h4>
            </div>
        `).join('');
    }

    renderCategoriesPage() {
        const container = document.getElementById('categoriesPage-grid');
        container.innerHTML = this.data.categories.map(category => `
            <div class="category-card" onclick="app.filterByCategory('${category.name}')">
                <div class="category-card__icon">${category.icon}</div>
                <h4 class="category-card__name">${category.name}</h4>
                <p>Browse ${category.subcategories.join(', ')}</p>
            </div>
        `).join('');
    }

    renderFeaturedProducts() {
        const featured = this.data.products.slice(0, 6);
        const container = document.getElementById('featuredProducts');
        container.innerHTML = featured.map(product => this.createProductCard(product)).join('');
    }

    renderAllProducts() {
        this.filterProducts();
    }

    filterProducts() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const sortBy = document.getElementById('sortBy').value;
        const organicOnly = document.getElementById('organicFilter').checked;

        let filteredProducts = [...this.data.products];

        // Filter by category
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
        }

        // Filter by organic
        if (organicOnly) {
            filteredProducts = filteredProducts.filter(p => p.organic === true);
        }

        // Sort products
        switch (sortBy) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        const container = document.getElementById('productsGrid');
        container.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
    }

    filterByCategory(categoryName) {
        document.getElementById('categoryFilter').value = categoryName;
        this.showPage('products');
        this.filterProducts();
    }

    handleSearch() {
        const query = document.getElementById('searchInput').value.toLowerCase().trim();
        if (!query) return;

        const results = this.data.products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );

        this.showPage('products');
        const container = document.getElementById('productsGrid');
        
        if (results.length === 0) {
            container.innerHTML = '<p class="text-center">No products found for your search.</p>';
        } else {
            container.innerHTML = results.map(product => this.createProductCard(product)).join('');
        }
    }

    createProductCard(product) {
        const isInWishlist = this.wishlist.some(item => item.id === product.id);
        const discount = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

        return `
            <div class="product-card" onclick="app.showProductDetail(${product.id})">
                <div class="product-card__image">${product.image}</div>
                <div class="product-card__content">
                    <div class="product-card__header">
                        <h4 class="product-card__name">${product.name}</h4>
                        <button class="product-card__wishlist ${isInWishlist ? 'active' : ''}" 
                                onclick="event.stopPropagation(); app.toggleWishlist(${product.id})">
                            ${isInWishlist ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <p class="product-card__brand">${product.brand}</p>
                    <div class="product-card__price">
                        <span class="product-card__price-current">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice > product.price ? `<span class="product-card__price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        <span class="product-card__unit">${product.unit}</span>
                    </div>
                    <div class="product-card__rating">
                        <span class="product-card__stars">${this.generateStars(product.rating)}</span>
                        <span class="product-card__reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-card__badges">
                        ${discount > 0 ? `<span class="badge badge--sale">${discount}% OFF</span>` : ''}
                        ${product.organic ? '<span class="badge badge--organic">ORGANIC</span>' : ''}
                    </div>
                    <div class="product-card__actions">
                        <button class="btn btn--primary btn--add-cart" 
                                onclick="event.stopPropagation(); app.addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '★'.repeat(fullStars);
        if (hasHalfStar) stars += '☆';
        return stars;
    }

    showProductDetail(productId) {
        const product = this.data.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const title = document.getElementById('productModalTitle');
        const body = document.getElementById('productModalBody');

        title.textContent = product.name;
        body.innerHTML = `
            <div class="product-detail">
                <div class="product-detail__image">
                    <div style="font-size: 8rem; text-align: center; padding: 2rem; background: var(--color-bg-2); border-radius: var(--radius-lg);">
                        ${product.image}
                    </div>
                </div>
                <div class="product-detail__info">
                    <h3>${product.name}</h3>
                    <p class="text-muted">${product.brand} - ${product.unit}</p>
                    <div class="product-detail__price">
                        <span style="font-size: 1.5rem; color: var(--color-primary); font-weight: 600;">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice > product.price ? `<span style="text-decoration: line-through; color: var(--color-text-secondary);">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-detail__rating" style="margin: 1rem 0;">
                        <span style="color: #ffc107;">${this.generateStars(product.rating)}</span>
                        <span class="text-muted">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-detail__badges" style="margin: 1rem 0;">
                        ${product.organic ? '<span class="badge badge--organic">ORGANIC</span>' : ''}
                        ${product.inStock ? '<span class="status status--success">In Stock</span>' : '<span class="status status--error">Out of Stock</span>'}
                    </div>
                    <p>${product.description}</p>
                    ${product.nutrition ? `
                        <div class="product-detail__nutrition">
                            <h4>Nutrition Facts</h4>
                            ${Object.entries(product.nutrition).map(([key, value]) => 
                                `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`
                            ).join('')}
                        </div>
                    ` : ''}
                    ${product.features ? `
                        <div class="product-detail__features">
                            <h4>Features</h4>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    <div class="product-detail__actions" style="margin-top: 2rem;">
                        <button class="btn btn--primary" onclick="app.addToCart(${product.id}); app.closeModal('productModal');">
                            Add to Cart - $${product.price.toFixed(2)}
                        </button>
                        <button class="btn btn--outline" onclick="app.toggleWishlist(${product.id})">
                            ${this.wishlist.some(item => item.id === product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.openModal('productModal');
    }

    populateCategoryFilters() {
        const select = document.getElementById('categoryFilter');
        const productCategorySelect = document.getElementById('productCategory');
        
        this.data.categories.forEach(category => {
            const option = new Option(category.name, category.name);
            select.appendChild(option.cloneNode(true));
            if (productCategorySelect) {
                productCategorySelect.appendChild(option);
            }
        });
    }

    // Cart functionality
    addToCart(productId, quantity = 1) {
        const product = this.data.products.find(p => p.id === productId);
        if (!product || !product.inStock) {
            this.showToast('Product not available', 'error');
            return;
        }

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity
            });
        }

        this.updateCartUI();
        this.showToast(`${product.name} added to cart!`);
        this.saveToStorage();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartUI();
        this.saveToStorage();
    }

    updateCartQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.updateCartUI();
            this.saveToStorage();
        }
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const cartContent = document.getElementById('cartContent');
        const cartFooter = document.getElementById('cartFooter');

        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (this.cart.length === 0) {
            cartContent.innerHTML = `
                <div class="cart-empty">
                    <p>Your cart is empty</p>
                    <button class="btn btn--primary" onclick="app.closeCartSidebar()">Continue Shopping</button>
                </div>
            `;
            cartFooter.style.display = 'none';
        } else {
            cartContent.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item__image">${item.image}</div>
                    <div class="cart-item__details">
                        <div class="cart-item__name">${item.name}</div>
                        <div class="cart-item__price">$${item.price.toFixed(2)} ${item.unit}</div>
                        <div class="cart-item__controls">
                            <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span class="cart-item__quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            <button class="btn btn--outline btn--sm ml-8" onclick="app.removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Update totals
            const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * this.data.storeInfo.taxRate;
            const delivery = subtotal >= this.data.storeInfo.freeDeliveryMinimum ? 0 : this.data.storeInfo.deliveryFee;
            const total = subtotal + tax + delivery;

            document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`;
            document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;

            cartFooter.style.display = 'block';
        }
    }

    openCartSidebar() {
        document.getElementById('cartSidebar').classList.add('open');
    }

    closeCartSidebar() {
        document.getElementById('cartSidebar').classList.remove('open');
    }

    // Wishlist functionality
    toggleWishlist(productId) {
        const product = this.data.products.find(p => p.id === productId);
        if (!product) return;

        const existingIndex = this.wishlist.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            this.wishlist.splice(existingIndex, 1);
            this.showToast(`${product.name} removed from wishlist`);
        } else {
            this.wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit
            });
            this.showToast(`${product.name} added to wishlist!`);
        }

        this.updateWishlistUI();
        this.saveToStorage();
        
        // Update wishlist buttons in product cards
        document.querySelectorAll('.product-card__wishlist').forEach(btn => {
            const productCard = btn.closest('.product-card');
            if (productCard) {
                const cardProductId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
                if (cardProductId === productId) {
                    const isInWishlist = this.wishlist.some(item => item.id === productId);
                    btn.innerHTML = isInWishlist ? '❤️' : '🤍';
                    btn.classList.toggle('active', isInWishlist);
                }
            }
        });
    }

    updateWishlistUI() {
        const wishlistCount = document.getElementById('wishlistCount');
        wishlistCount.textContent = this.wishlist.length;
    }

    openWishlistModal() {
        const content = document.getElementById('wishlistContent');
        
        if (this.wishlist.length === 0) {
            content.innerHTML = `
                <div class="wishlist-empty">
                    <p>Your wishlist is empty</p>
                    <button class="btn btn--primary" onclick="app.closeModal('wishlistModal')">Continue Shopping</button>
                </div>
            `;
        } else {
            content.innerHTML = `
                <div class="wishlist-items">
                    ${this.wishlist.map(item => `
                        <div class="cart-item">
                            <div class="cart-item__image">${item.image}</div>
                            <div class="cart-item__details">
                                <div class="cart-item__name">${item.name}</div>
                                <div class="cart-item__price">$${item.price.toFixed(2)} ${item.unit}</div>
                                <div class="cart-item__controls" style="margin-top: 0.5rem;">
                                    <button class="btn btn--primary btn--sm" onclick="app.addToCart(${item.id}); app.closeModal('wishlistModal');">Add to Cart</button>
                                    <button class="btn btn--outline btn--sm ml-8" onclick="app.toggleWishlist(${item.id})">Remove</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        this.openModal('wishlistModal');
    }

    // Checkout functionality
    openCheckoutModal() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty', 'error');
            return;
        }

        this.checkoutStep = 1;
        this.updateCheckoutStep();
        this.populateDeliveryForm();
        this.openModal('checkoutModal');
    }

    populateDeliveryForm() {
        if (this.currentUser) {
            document.getElementById('deliveryName').value = this.currentUser.name || '';
            document.getElementById('deliveryPhone').value = this.currentUser.phone || '';
            document.getElementById('deliveryAddress').value = this.currentUser.address || '';
        }
    }

    nextCheckoutStep() {
        if (this.checkoutStep === 1) {
            // Validate delivery form
            const name = document.getElementById('deliveryName').value.trim();
            const phone = document.getElementById('deliveryPhone').value.trim();
            const address = document.getElementById('deliveryAddress').value.trim();
            const time = document.getElementById('deliveryTime').value;

            if (!name || !phone || !address || !time) {
                this.showToast('Please fill in all delivery information', 'error');
                return;
            }
        } else if (this.checkoutStep === 2) {
            // Validate payment form
            const paymentMethod = document.getElementById('paymentMethod').value;
            if (!paymentMethod) {
                this.showToast('Please select a payment method', 'error');
                return;
            }
        }

        this.checkoutStep++;
        this.updateCheckoutStep();

        if (this.checkoutStep === 3) {
            this.renderOrderReview();
        }
    }

    prevCheckoutStep() {
        this.checkoutStep--;
        this.updateCheckoutStep();
    }

    updateCheckoutStep() {
        // Update step indicators
        document.querySelectorAll('.step').forEach((step, index) => {
            step.classList.toggle('active', index + 1 === this.checkoutStep);
        });

        // Show/hide step content
        document.querySelectorAll('.checkout-step').forEach((step, index) => {
            step.classList.toggle('active', index + 1 === this.checkoutStep);
        });
    }

    applyCoupon() {
        const code = document.getElementById('couponCode').value.trim().toUpperCase();
        const coupon = this.data.coupons.find(c => c.code === code && c.active);
        
        if (!coupon) {
            this.showToast('Invalid coupon code', 'error');
            return;
        }

        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        if (subtotal < coupon.minOrder) {
            this.showToast(`Minimum order of $${coupon.minOrder} required for this coupon`, 'error');
            return;
        }

        this.appliedCoupon = coupon;
        this.showToast(`Coupon applied: ${coupon.description}`);
    }

    renderOrderReview() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * this.data.storeInfo.taxRate;
        let delivery = subtotal >= this.data.storeInfo.freeDeliveryMinimum ? 0 : this.data.storeInfo.deliveryFee;
        let discount = 0;

        if (this.appliedCoupon) {
            if (this.appliedCoupon.type === 'percentage') {
                discount = Math.min(subtotal * this.appliedCoupon.discount, this.appliedCoupon.maxDiscount || Infinity);
            } else if (this.appliedCoupon.type === 'fixed') {
                discount = this.appliedCoupon.discount;
            } else if (this.appliedCoupon.type === 'shipping') {
                delivery = 0;
                discount = this.appliedCoupon.discount;
            }
        }

        const total = subtotal - discount + tax + delivery;

        const deliveryInfo = {
            name: document.getElementById('deliveryName').value,
            phone: document.getElementById('deliveryPhone').value,
            address: document.getElementById('deliveryAddress').value,
            time: document.getElementById('deliveryTime').options[document.getElementById('deliveryTime').selectedIndex].text
        };

        const paymentMethod = document.getElementById('paymentMethod').options[document.getElementById('paymentMethod').selectedIndex].text;

        document.getElementById('orderReview').innerHTML = `
            <div class="order-review">
                <h4>Order Summary</h4>
                <div class="order-items">
                    ${this.cart.map(item => `
                        <div class="order-item">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="order-totals">
                    <div class="order-item">
                        <span>Subtotal:</span>
                        <span>$${subtotal.toFixed(2)}</span>
                    </div>
                    ${discount > 0 ? `
                        <div class="order-item">
                            <span>Discount (${this.appliedCoupon.code}):</span>
                            <span>-$${discount.toFixed(2)}</span>
                        </div>
                    ` : ''}
                    <div class="order-item">
                        <span>Tax:</span>
                        <span>$${tax.toFixed(2)}</span>
                    </div>
                    <div class="order-item">
                        <span>Delivery:</span>
                        <span>${delivery === 0 ? 'FREE' : '$' + delivery.toFixed(2)}</span>
                    </div>
                    <div class="order-item" style="font-weight: 600; border-top: 1px solid var(--color-border); padding-top: 0.5rem; margin-top: 0.5rem;">
                        <span>Total:</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>

                <div class="delivery-info" style="margin-top: 1.5rem;">
                    <h4>Delivery Information</h4>
                    <p><strong>Name:</strong> ${deliveryInfo.name}</p>
                    <p><strong>Phone:</strong> ${deliveryInfo.phone}</p>
                    <p><strong>Address:</strong> ${deliveryInfo.address}</p>
                    <p><strong>Delivery Time:</strong> ${deliveryInfo.time}</p>
                    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                </div>
            </div>
        `;
    }

    placeOrder() {
        if (!this.currentUser) {
            this.showToast('Please login to place an order', 'error');
            return;
        }

        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * this.data.storeInfo.taxRate;
        let delivery = subtotal >= this.data.storeInfo.freeDeliveryMinimum ? 0 : this.data.storeInfo.deliveryFee;
        let discount = 0;

        if (this.appliedCoupon) {
            if (this.appliedCoupon.type === 'percentage') {
                discount = Math.min(subtotal * this.appliedCoupon.discount, this.appliedCoupon.maxDiscount || Infinity);
            } else if (this.appliedCoupon.type === 'fixed') {
                discount = this.appliedCoupon.discount;
            } else if (this.appliedCoupon.type === 'shipping') {
                delivery = 0;
                discount = this.appliedCoupon.discount;
            }
        }

        const total = subtotal - discount + tax + delivery;

        const order = {
            id: Math.max(...this.data.orders.map(o => o.id), 1000) + 1,
            userId: this.currentUser.id,
            customerName: document.getElementById('deliveryName').value,
            email: this.currentUser.email,
            phone: document.getElementById('deliveryPhone').value,
            address: document.getElementById('deliveryAddress').value,
            items: this.cart.map(item => ({
                productId: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            subtotal: subtotal,
            discount: discount,
            tax: tax,
            delivery: delivery,
            total: total,
            status: 'processing',
            orderDate: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            paymentMethod: document.getElementById('paymentMethod').options[document.getElementById('paymentMethod').selectedIndex].text,
            couponCode: this.appliedCoupon ? this.appliedCoupon.code : null
        };

        this.data.orders.push(order);
        this.cart = [];
        this.appliedCoupon = null;
        
        this.updateCartUI();
        this.closeModal('checkoutModal');
        this.closeCartSidebar();
        
        this.showToast(`Order #${order.id} placed successfully!`);
        this.saveToStorage();
        
        // Show order confirmation
        setTimeout(() => {
            this.showPage('orders');
        }, 1000);
    }

    // Orders functionality
    renderOrders() {
        if (!this.currentUser) {
            document.getElementById('ordersContainer').innerHTML = '<p>Please login to view your orders.</p>';
            return;
        }

        const userOrders = this.data.orders.filter(order => order.userId === this.currentUser.id);
        
        if (userOrders.length === 0) {
            document.getElementById('ordersContainer').innerHTML = '<p>No orders found.</p>';
            return;
        }

        document.getElementById('ordersContainer').innerHTML = userOrders
            .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
            .map(order => `
                <div class="order-card">
                    <div class="order-card__header">
                        <div>
                            <div class="order-card__id">Order #${order.id}</div>
                            <div class="order-card__date">${new Date(order.orderDate).toLocaleDateString()}</div>
                        </div>
                        <div class="status status--${order.status === 'delivered' ? 'success' : order.status === 'processing' ? 'info' : 'warning'}">
                            ${order.status.toUpperCase()}
                        </div>
                    </div>
                    <div class="order-card__items">
                        ${order.items.map(item => `
                            <div class="order-item">
                                <span>${item.name} × ${item.quantity}</span>
                                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-card__total">
                        <span>Total: $${order.total.toFixed(2)}</span>
                    </div>
                    <div class="order-card__actions">
                        ${order.status === 'processing' ? '<button class="btn btn--outline btn--sm">Cancel Order</button>' : ''}
                        <button class="btn btn--primary btn--sm" onclick="app.reorder(${order.id})">Reorder</button>
                    </div>
                </div>
            `).join('');
    }

    reorder(orderId) {
        const order = this.data.orders.find(o => o.id === orderId);
        if (!order) return;

        // Add all items from the order to cart
        order.items.forEach(item => {
            const product = this.data.products.find(p => p.id === item.productId);
            if (product && product.inStock) {
                this.addToCart(item.productId, item.quantity);
            }
        });

        this.showToast('Items added to cart from previous order!');
        this.openCartSidebar();
    }

    // Admin functionality
    initializeAdminData() {
        if (this.currentUser && this.currentUser.role === 'admin') {
            this.renderAdminDashboard();
        }
    }

    showAdminTab(tab) {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
        
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        document.getElementById(`admin${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add('active');

        if (tab === 'products') {
            this.renderAdminProducts();
        } else if (tab === 'orders') {
            this.renderAdminOrders();
        }
    }

    renderAdminDashboard() {
        if (!this.currentUser || this.currentUser.role !== 'admin') return;

        const totalProducts = this.data.products.length;
        const totalOrders = this.data.orders.length;
        const totalRevenue = this.data.orders.reduce((sum, order) => sum + order.total, 0);

        document.getElementById('totalProducts').textContent = totalProducts;
        document.getElementById('totalOrders').textContent = totalOrders;
        document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    }

    renderAdminProducts() {
        const container = document.getElementById('adminProductsList');
        container.innerHTML = this.data.products.map(product => `
            <div class="admin-product-card">
                <div class="admin-product-card__header">
                    <div>
                        <h4>${product.name}</h4>
                        <p class="text-muted">${product.brand} - ${product.category}</p>
                        <p>Stock: ${product.stockQuantity} | Price: $${product.price.toFixed(2)}</p>
                    </div>
                    <div class="admin-product-card__actions">
                        <button class="btn btn--outline btn--sm" onclick="app.editProduct(${product.id})">Edit</button>
                        <button class="btn btn--outline btn--sm" onclick="app.deleteProduct(${product.id})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderAdminOrders() {
        const container = document.getElementById('adminOrdersList');
        container.innerHTML = this.data.orders
            .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
            .map(order => `
                <div class="admin-order-card">
                    <div class="admin-order-card__header">
                        <div>
                            <h4>Order #${order.id}</h4>
                            <p class="text-muted">${order.customerName} - ${new Date(order.orderDate).toLocaleDateString()}</p>
                            <p>Total: $${order.total.toFixed(2)} | ${order.items.length} items</p>
                        </div>
                        <div class="admin-order-card__actions">
                            <div class="admin-order-card__status">
                                <select onchange="app.updateOrderStatus(${order.id}, this.value)">
                                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                                    <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
    }

    updateOrderStatus(orderId, newStatus) {
        const order = this.data.orders.find(o => o.id === orderId);
        if (order) {
            order.status = newStatus;
            this.showToast(`Order #${orderId} status updated to ${newStatus}`);
            this.saveToStorage();
        }
    }

    openAddProductModal() {
        this.openModal('addProductModal');
    }

    handleAddProduct(e) {
        e.preventDefault();
        
        const newProduct = {
            id: Math.max(...this.data.products.map(p => p.id)) + 1,
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            price: parseFloat(document.getElementById('productPrice').value),
            originalPrice: parseFloat(document.getElementById('productPrice').value),
            description: document.getElementById('productDescription').value,
            stockQuantity: parseInt(document.getElementById('productStock').value),
            brand: document.getElementById('productBrand').value,
            unit: document.getElementById('productUnit').value,
            organic: document.getElementById('productOrganic').checked,
            inStock: true,
            rating: 4.0,
            reviews: 0,
            image: '📦' // Default image
        };

        this.data.products.push(newProduct);
        this.showToast('Product added successfully!');
        this.closeModal('addProductModal');
        this.renderAdminProducts();
        this.renderAllProducts();
        this.saveToStorage();
        document.getElementById('addProductForm').reset();
    }

    editProduct(productId) {
        // Simplified edit - just show current values
        const product = this.data.products.find(p => p.id === productId);
        if (product) {
            const newPrice = prompt(`Edit price for ${product.name}:`, product.price);
            const newStock = prompt(`Edit stock for ${product.name}:`, product.stockQuantity);
            
            if (newPrice !== null) product.price = parseFloat(newPrice) || product.price;
            if (newStock !== null) product.stockQuantity = parseInt(newStock) || product.stockQuantity;
            
            this.renderAdminProducts();
            this.renderAllProducts();
            this.showToast('Product updated!');
            this.saveToStorage();
        }
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.data.products = this.data.products.filter(p => p.id !== productId);
            this.renderAdminProducts();
            this.renderAllProducts();
            this.showToast('Product deleted!');
            this.saveToStorage();
        }
    }

    // Modal management
    openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Toast notifications
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        toast.className = `toast show ${type}`;
        
        setTimeout(() => {
            this.hideToast();
        }, 3000);
    }

    hideToast() {
        document.getElementById('toast').classList.remove('show');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.app = new FreshMartApp();
});

// Global function for page navigation (called from HTML)
function showPage(page) {
    if (window.app) {
        window.app.showPage(page);
    }
}