// Global variables
let selectedCategory = 'all';
let selectedItem = null;
let quantity = 1;

// DOM elements
const categoryButtons = document.getElementById('categoryButtons');
const menuGrid = document.getElementById('menuGrid');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const selectedItemDiv = document.getElementById('selectedItem');
const quantityDisplay = document.getElementById('quantityDisplay');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');
const totalPrice = document.getElementById('totalPrice');
const confirmOrderBtn = document.getElementById('confirmOrder');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderCategoryButtons();
    renderMenuItems();
    setupEventListeners();
});

// Render category buttons
function renderCategoryButtons() {
    categoryButtons.innerHTML = '';
    
    Object.entries(categoryNames).forEach(([key, name]) => {
        const button = document.createElement('button');
        button.className = `category-btn ${selectedCategory === key ? 'active' : ''}`;
        button.textContent = name;
        button.addEventListener('click', () => {
            selectedCategory = key;
            renderCategoryButtons();
            renderMenuItems();
        });
        categoryButtons.appendChild(button);
    });
}

// Render menu items
function renderMenuItems() {
    const filteredItems = selectedCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === selectedCategory);
    
    menuGrid.innerHTML = '';
    
    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        menuItemDiv.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="rating-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                    </svg>
                    <span>${item.rating}</span>
                </div>
            </div>
            
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <div class="cook-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>${item.cookTime}</span>
                    </div>
                </div>
                
                <p class="menu-item-description">${item.description}</p>
                
                <div class="menu-item-footer">
                    <div class="menu-item-price">
                        ${item.price.toLocaleString()} so'm
                    </div>
                    <button class="order-btn-small" onclick="openOrderModal(${item.id})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span>Buyurtma berish</span>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItemDiv);
    });
}

// Open order modal
function openOrderModal(itemId) {
    selectedItem = menuItems.find(item => item.id === itemId);
    quantity = 1;
    
    // Reset form
    cardNumberInput.value = '';
    expiryDateInput.value = '';
    quantityDisplay.textContent = '1';
    
    // Populate selected item
    selectedItemDiv.innerHTML = `
        <img src="${selectedItem.image}" alt="${selectedItem.name}">
        <div class="selected-item-info">
            <h4>${selectedItem.name}</h4>
            <div class="selected-item-price">${selectedItem.price.toLocaleString()} so'm</div>
        </div>
    `;
    
    updateTotal();
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close order modal
function closeOrderModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedItem = null;
}

// Update total price
function updateTotal() {
    if (selectedItem) {
        const total = selectedItem.price * quantity;
        totalPrice.textContent = `${total.toLocaleString()} so'm`;
    }
}

// Format card number
function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
        return parts.join(' ');
    } else {
        return v;
    }
}

// Format expiry date
function formatExpiryDate(value) {
    const v = value.replace(/[^0-9]/g, '');
    if (v.length >= 2) {
        return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
}

// Check if form is valid
function checkFormValidity() {
    const isValid = cardNumberInput.value.length >= 19 && expiryDateInput.value.length === 5;
    confirmOrderBtn.disabled = !isValid;
}

// Setup event listeners
function setupEventListeners() {
    // Close modal
    closeModal.addEventListener('click', closeOrderModal);
    
    // Close modal when clicking outside
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });
    
    // Quantity controls
    decreaseQty.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updateTotal();
        }
    });
    
    increaseQty.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        updateTotal();
    });
    
    // Card number formatting
    cardNumberInput.addEventListener('input', (e) => {
        e.target.value = formatCardNumber(e.target.value);
        checkFormValidity();
    });
    
    // Expiry date formatting
    expiryDateInput.addEventListener('input', (e) => {
        e.target.value = formatExpiryDate(e.target.value);
        checkFormValidity();
    });
    
    // Confirm order
    confirmOrderBtn.addEventListener('click', () => {
        if (selectedItem) {
            alert(`Buyurtmangiz qabul qilindi!\n${selectedItem.name} - ${quantity} dona\nTez orada sizga aloqaga chiqamiz.`);
            closeOrderModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && orderModal.classList.contains('active')) {
            closeOrderModal();
        }
    });
}