
// Restaurant Data for Potheri, Chennai
const restaurants = [
    {
        name: "dzok",
    
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
        rating: 4.5,
        cuisine: "Cafe & Coffee",
        deliveryTime: "15-25 min",
        category: "coffee"
    },
    {
        name: "coffee house",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
        rating: 4.6,
        cuisine: "Coffee & Beverages",
        deliveryTime: "10-20 min",
        category: "coffee"
    },
    {
        name: "alsham",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
        rating: 4.7,
        cuisine: "Multi-Cuisine",
        deliveryTime: "20-30 min",
        category: "biryani"
    },
    {
        name: "arabian bistro",
        image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=300&fit=crop",
        rating: 4.8,
        cuisine: "Arabian & Middle Eastern",
        deliveryTime: "25-35 min",
        category: "arabian"
    },
    {
        name: "chocoff",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
        rating: 4.4,
        cuisine: "Desserts & Coffee",
        deliveryTime: "15-25 min",
        category: "dessert"
    },
    {
        name: "ooty fresh",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        rating: 4.5,
        cuisine: "Fresh Juices & Snacks",
        deliveryTime: "10-20 min",
        category: "beverages"
    },
    {
        name: "taj restraunt",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
        rating: 4.7,
        cuisine: "North Indian & Biryani",
        deliveryTime: "20-30 min",
        category: "biryani"
    },
    {
        name: "cake valley",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        rating: 4.6,
        cuisine: "Bakery & Desserts",
        deliveryTime: "15-25 min",
        category: "dessert"
    },
    {
        name: "HR restraunt",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
        rating: 4.5,
        cuisine: "South Indian & Chinese",
        deliveryTime: "20-30 min",
        category: "snacks"
    }
];

// Menu Items Data (Prices in INR)
const menuItems = [
    // dzok
    {
        name: "Cappuccino",
        description: "Classic Italian coffee with steamed milk foam",
        price: 120,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
        category: "coffee",
        restaurant: "dzok"
    },
    {
        name: "Club Sandwich",
        description: "Triple-decker sandwich with chicken, bacon, and veggies",
        price: 180,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "dzok"
    },
    // coffee house
    {
        name: "Filter Coffee",
        description: "Traditional South Indian filter coffee",
        price: 80,
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop",
        category: "coffee",
        restaurant: "coffee house"
    },
    {
        name: "Cafe Latte",
        description: "Espresso with steamed milk",
        price: 130,
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop",
        category: "coffee",
        restaurant: "coffee house"
    },
    // alsham
    {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with tender chicken pieces",
        price: 220,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        category: "biryani",
        restaurant: "alsham"
    },
    {
        name: "Mutton Biryani",
        description: "Flavorful mutton cooked with aromatic spices and rice",
        price: 280,
        image: "https://images.unsplash.com/photo-1631515243349-e0db75580a26?w=400&h=300&fit=crop",
        category: "biryani",
        restaurant: "alsham"
    },
    // arabian bistro
    {
        name: "Shawarma Plate",
        description: "Grilled chicken shawarma with hummus and pita",
        price: 200,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
        category: "arabian",
        restaurant: "arabian bistro"
    },
    {
        name: "Falafel Wrap",
        description: "Crispy falafel with fresh veggies in pita bread",
        price: 150,
        image: "https://images.unsplash.com/photo-1593030668274-ade6e91c934c?w=400&h=300&fit=crop",
        category: "arabian",
        restaurant: "arabian bistro"
    },
    {
        name: "Grilled Kebab Platter",
        description: "Mixed kebab platter with Arabic rice",
        price: 320,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        category: "arabian",
        restaurant: "arabian bistro"
    },
    // chocoff
    {
        name: "Chocolate Truffle Pastry",
        description: "Rich chocolate layers with truffle cream",
        price: 140,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop",
        category: "dessert",
        restaurant: "chocoff"
    },
    {
        name: "Hot Chocolate",
        description: "Creamy hot chocolate with marshmallows",
        price: 110,
        image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&h=300&fit=crop",
        category: "coffee",
        restaurant: "chocoff"
    },
    {
        name: "Brownie with Ice Cream",
        description: "Warm brownie topped with vanilla ice cream",
        price: 160,
        image: "https://images.unsplash.com/photo-1564355808853-50b5564e2f1f?w=400&h=300&fit=crop",
        category: "dessert",
        restaurant: "chocoff"
    },
    // ooty fresh
    {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: 90,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
        category: "beverages",
        restaurant: "ooty fresh"
    },
    {
        name: "Mixed Fruit Juice",
        description: "Blend of seasonal fresh fruits",
        price: 100,
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop",
        category: "beverages",
        restaurant: "ooty fresh"
    },
    {
        name: "Vegetable Sandwich",
        description: "Grilled sandwich with fresh vegetables",
        price: 80,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "ooty fresh"
    },
    // taj restraunt
    {
        name: "Veg Biryani",
        description: "Fragrant basmati rice with mixed vegetables",
        price: 180,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        category: "biryani",
        restaurant: "taj restraunt"
    },
    {
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken",
        price: 240,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
        category: "biryani",
        restaurant: "taj restraunt"
    },
    {
        name: "Paneer Tikka",
        description: "Grilled cottage cheese with Indian spices",
        price: 200,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "taj restraunt"
    },
    // cake valley
    {
        name: "Black Forest Pastry",
        description: "Chocolate sponge with cherry and cream layers",
        price: 120,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        category: "dessert",
        restaurant: "cake valley"
    },
    {
        name: "Red Velvet Cupcake",
        description: "Moist red velvet with cream cheese frosting",
        price: 90,
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop",
        category: "dessert",
        restaurant: "cake valley"
    },
    {
        name: "Blueberry Cheesecake",
        description: "Creamy cheesecake with fresh blueberries",
        price: 150,
        image: "https://images.unsplash.com/photo-1533134242820-f8b142bc1ac2?w=400&h=300&fit=crop",
        category: "dessert",
        restaurant: "cake valley"
    },
    // HR restraunt
    {
        name: "Masala Dosa",
        description: "Crispy dosa with spiced potato filling",
        price: 60,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "HR restraunt"
    },
    {
        name: "Idli Sambar",
        description: "Steamed rice cakes with lentil soup",
        price: 50,
        image: "https://images.unsplash.com/photo-1589301760014-a0f2c4b8f9c6?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "HR restraunt"
    },
    {
        name: "Gobi Manchurian",
        description: "Indo-Chinese cauliflower in spicy sauce",
        price: 140,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
        category: "snacks",
        restaurant: "HR restraunt"
    }
];

// Cart
let cart = [];

// DOM Elements
const restaurantGrid = document.getElementById('restaurant-grid');
const menuGrid = document.getElementById('menu-grid');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const navLinks = document.querySelectorAll('.nav-link');

// Load Restaurants
function loadRestaurants() {
    restaurantGrid.innerHTML = '';
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.classList.add('restaurant-card');
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <h3>${restaurant.name}</h3>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        ${restaurant.rating}
                    </div>
                </div>
                <div class="restaurant-meta">
                    <span><i class="fas fa-utensils"></i> ${restaurant.cuisine}</span>
                    <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
                </div>
            </div>
        `;
        restaurantGrid.appendChild(restaurantCard);
    });
}

// Load Menu Items
function loadMenuItems(filter = 'all') {
    menuGrid.innerHTML = '';
    const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
    
    filteredItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="price">₹${item.price}</span>
                </div>
                <p>${item.description}</p>
                <p class="restaurant-name"><i class="fas fa-store"></i> ${item.restaurant}</p>
                <button class="add-to-cart-btn" data-index="${index}">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            addToCart(filteredItems[index]);
        });
    });
}

// Add to Cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification('Item added to cart!');
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn decrease-qty" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn increase-qty" data-index="${index}">+</button>
                        <button class="remove-item" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners for cart controls
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                cart[index].quantity++;
                updateCart();
            });
        });
        
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                cart.splice(index, 1);
                updateCart();
            });
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

// Cart Sidebar Toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// Filter Menu Items
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        loadMenuItems(filter);
    });
});

// Category Cards Click
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        // Scroll to menu section
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        // Filter menu
        setTimeout(() => {
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.click();
                }
            });
        }, 500);
    });
});

// Smooth Scrolling for Nav Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4ecdc4;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
loadRestaurants();
loadMenuItems();
updateCart();

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Checkout Button
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your order! Total: ' + cartTotal.textContent);
        cart = [];
        updateCart();
        cartSidebar.classList.remove('active');
    } else {
        alert('Your cart is empty!');
    }
});
