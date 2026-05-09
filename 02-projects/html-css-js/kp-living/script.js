/* ==================================================
   KP Living - Main JavaScript File
   Technologies used: Vanilla JavaScript only
   Purpose: Navigation, products, cart, checkout, forms
   ================================================== */

/* ==================================================
   1. PRODUCT DATA
   Product information is stored in a JavaScript array.
   This makes the website dynamic without using a backend.
   ================================================== */

function imageFromKeyword(keyword, imageNumber) {
    return (
        'https://source.unsplash.com/900x700/?' +
        encodeURIComponent(keyword) +
        '&sig=' +
        imageNumber
    );
}

const products = [
    {
        id: 'aarav-wooden-sofa-set',
        name: 'Aarav Wooden Sofa Set',
        category: 'Sofa Sets',
        room: 'Living Room',
        material: 'Sheesham Wood',
        color: 'Walnut Brown',
        price: 34999,
        oldPrice: 46999,
        discount: 26,
        rating: 4.7,
        reviews: 214,
        popularity: 98,
        availability: 'In Stock',
        isNew: false,
        description:
            'A warm wooden sofa set with comfortable cushions, made for family seating and daily Indian home use.',
        dimensions: '82 x 34 x 32 inches',
        delivery:
            'Free delivery in selected cities. Usually delivered within 5 to 8 days.',
        images: [
            imageFromKeyword('wooden sofa set living room', 1),
            imageFromKeyword('indian living room sofa', 2),
            imageFromKeyword('premium sofa furniture', 3),
            imageFromKeyword('brown sofa set', 4),
        ],
    },
    {
        id: 'isha-sectional-sofa',
        name: 'Isha L Shape Sectional Sofa',
        category: 'Sectional Sofas',
        room: 'Living Room',
        material: 'Fabric and Solid Wood',
        color: 'Beige',
        price: 52999,
        oldPrice: 69999,
        discount: 24,
        rating: 4.6,
        reviews: 176,
        popularity: 94,
        availability: 'Limited Stock',
        isNew: true,
        description:
            'A spacious L shape sofa for movie nights, family talks, and weekend comfort.',
        dimensions: '102 x 68 x 33 inches',
        delivery:
            'Delivered within 7 to 10 days. Assembly support available in selected cities.',
        images: [
            imageFromKeyword('l shape sofa beige living room', 5),
            imageFromKeyword('sectional sofa modern home', 6),
            imageFromKeyword('cream sectional sofa', 7),
            imageFromKeyword('large living room sofa', 8),
        ],
    },
    {
        id: 'veer-recliner-chair',
        name: 'Veer Comfort Recliner',
        category: 'Recliners',
        room: 'Living Room',
        material: 'Premium Leatherette',
        color: 'Tan Brown',
        price: 24999,
        oldPrice: 32999,
        discount: 24,
        rating: 4.5,
        reviews: 143,
        popularity: 88,
        availability: 'In Stock',
        isNew: false,
        description:
            'A relaxing recliner for reading, watching TV, and evening rest after a long day.',
        dimensions: '38 x 36 x 40 inches',
        delivery:
            'Delivered within 4 to 7 days. No complicated assembly required.',
        images: [
            imageFromKeyword('brown recliner chair', 9),
            imageFromKeyword('leather recliner furniture', 10),
            imageFromKeyword('recliner chair living room', 11),
            imageFromKeyword('comfortable recliner', 12),
        ],
    },
    {
        id: 'kerala-cane-chair',
        name: 'Kerala Cane Chair',
        category: 'Armchairs',
        room: 'Living Room',
        material: 'Cane and Wood',
        color: 'Natural Cane',
        price: 8999,
        oldPrice: 11999,
        discount: 25,
        rating: 4.4,
        reviews: 98,
        popularity: 82,
        availability: 'In Stock',
        isNew: true,
        description:
            'A light and breathable cane chair that adds a warm Indian touch to your room.',
        dimensions: '28 x 28 x 34 inches',
        delivery: 'Usually delivered within 5 to 7 days.',
        images: [
            imageFromKeyword('cane chair wooden furniture', 13),
            imageFromKeyword('rattan armchair', 14),
            imageFromKeyword('natural cane chair', 15),
            imageFromKeyword('wood cane chair', 16),
        ],
    },
    {
        id: 'meera-queen-size-bed',
        name: 'Meera Queen Size Bed',
        category: 'Wooden Beds',
        room: 'Bedroom',
        material: 'Engineered Wood',
        color: 'Honey Oak',
        price: 27999,
        oldPrice: 38999,
        discount: 28,
        rating: 4.8,
        reviews: 256,
        popularity: 99,
        availability: 'In Stock',
        isNew: false,
        description:
            'A sturdy queen size bed with a clean headboard and warm wooden finish for peaceful sleep.',
        dimensions: '84 x 64 x 38 inches',
        delivery:
            'Delivered in 6 to 9 days. Assembly support included in selected cities.',
        images: [
            imageFromKeyword('queen size wooden bed', 17),
            imageFromKeyword('bedroom wooden bed', 18),
            imageFromKeyword('modern bed furniture', 19),
            imageFromKeyword('wooden bed headboard', 20),
        ],
    },
    {
        id: 'suhana-storage-bed',
        name: 'Suhana Hydraulic Storage Bed',
        category: 'Wooden Beds',
        room: 'Bedroom',
        material: 'Sheesham Wood',
        color: 'Dark Walnut',
        price: 45999,
        oldPrice: 58999,
        discount: 22,
        rating: 4.7,
        reviews: 188,
        popularity: 91,
        availability: 'Limited Stock',
        isNew: true,
        description:
            'A premium storage bed for compact homes where extra space is always useful.',
        dimensions: '85 x 66 x 40 inches',
        delivery: 'Delivered in 8 to 12 days with assembly support.',
        images: [
            imageFromKeyword('storage bed wooden', 21),
            imageFromKeyword('hydraulic storage bed', 22),
            imageFromKeyword('bed with storage', 23),
            imageFromKeyword('dark wood bed', 24),
        ],
    },
    {
        id: 'nandi-orthopedic-mattress',
        name: 'Nandi Orthopedic Mattress',
        category: 'Mattresses',
        room: 'Bedroom',
        material: 'High Density Foam',
        color: 'White',
        price: 12999,
        oldPrice: 17999,
        discount: 28,
        rating: 4.5,
        reviews: 121,
        popularity: 76,
        availability: 'In Stock',
        isNew: false,
        description:
            'A supportive mattress designed for comfortable sleep and better back support.',
        dimensions: '78 x 60 x 6 inches',
        delivery: 'Rolled pack delivery within 3 to 6 days.',
        images: [
            imageFromKeyword('white mattress bedroom', 25),
            imageFromKeyword('orthopedic mattress', 26),
            imageFromKeyword('foam mattress', 27),
            imageFromKeyword('bed mattress', 28),
        ],
    },
    {
        id: 'royal-sheesham-dining-table',
        name: 'Royal Sheesham Dining Table',
        category: 'Dining Tables',
        room: 'Dining Room',
        material: 'Sheesham Wood',
        color: 'Teak Brown',
        price: 38999,
        oldPrice: 52999,
        discount: 26,
        rating: 4.8,
        reviews: 201,
        popularity: 96,
        availability: 'In Stock',
        isNew: false,
        description:
            'A solid dining table made for family dinners, guests, and festive meals.',
        dimensions: '72 x 36 x 30 inches',
        delivery:
            'Delivered within 7 to 10 days. Assembly available in selected cities.',
        images: [
            imageFromKeyword('wooden dining table', 29),
            imageFromKeyword('dining room table chairs', 30),
            imageFromKeyword('sheesham dining table', 31),
            imageFromKeyword('family dining table', 32),
        ],
    },
    {
        id: 'delhi-study-desk',
        name: 'Delhi Study Desk',
        category: 'Study Tables',
        room: 'Study Room',
        material: 'Engineered Wood',
        color: 'Light Oak',
        price: 7999,
        oldPrice: 10999,
        discount: 27,
        rating: 4.3,
        reviews: 87,
        popularity: 75,
        availability: 'In Stock',
        isNew: false,
        description:
            'A simple and strong study desk for students, coding practice, and work-from-home use.',
        dimensions: '42 x 22 x 30 inches',
        delivery: 'Delivered within 4 to 6 days.',
        images: [
            imageFromKeyword('study desk wooden', 33),
            imageFromKeyword('home office desk', 34),
            imageFromKeyword('student study table', 35),
            imageFromKeyword('wooden writing desk', 36),
        ],
    },
    {
        id: 'kavya-bookshelf',
        name: 'Kavya Bookshelf',
        category: 'Bookshelves',
        room: 'Study Room',
        material: 'Engineered Wood',
        color: 'Walnut Brown',
        price: 9999,
        oldPrice: 13999,
        discount: 29,
        rating: 4.4,
        reviews: 112,
        popularity: 78,
        availability: 'In Stock',
        isNew: true,
        description:
            'A clean bookshelf for books, decor, study notes, and everyday storage.',
        dimensions: '30 x 14 x 66 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: [
            imageFromKeyword('wooden bookshelf', 37),
            imageFromKeyword('bookcase furniture', 38),
            imageFromKeyword('study room bookshelf', 39),
            imageFromKeyword('modern bookshelf', 40),
        ],
    },
    {
        id: 'mumbai-compact-shoe-rack',
        name: 'Mumbai Compact Shoe Rack',
        category: 'Shoe Racks',
        room: 'Entryway',
        material: 'Engineered Wood',
        color: 'Soft Brown',
        price: 4999,
        oldPrice: 6999,
        discount: 29,
        rating: 4.2,
        reviews: 75,
        popularity: 73,
        availability: 'In Stock',
        isNew: false,
        description:
            'A slim shoe rack that keeps the entrance clean and works well for compact homes.',
        dimensions: '32 x 14 x 36 inches',
        delivery: 'Delivered within 3 to 6 days.',
        images: [
            imageFromKeyword('wooden shoe rack', 41),
            imageFromKeyword('compact shoe cabinet', 42),
            imageFromKeyword('entryway shoe rack', 43),
            imageFromKeyword('shoe storage cabinet', 44),
        ],
    },
    {
        id: 'nila-storage-cabinet',
        name: 'Nila Storage Cabinet',
        category: 'Storage Cabinets',
        room: 'Compact Homes',
        material: 'Engineered Wood',
        color: 'Warm White',
        price: 14999,
        oldPrice: 20999,
        discount: 29,
        rating: 4.5,
        reviews: 131,
        popularity: 85,
        availability: 'In Stock',
        isNew: false,
        description:
            'A neat storage cabinet for clothes, files, toys, kitchen extras, or home essentials.',
        dimensions: '36 x 16 x 54 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: [
            imageFromKeyword('white storage cabinet', 45),
            imageFromKeyword('wooden storage cabinet', 46),
            imageFromKeyword('home storage furniture', 47),
            imageFromKeyword('modern cabinet', 48),
        ],
    },
    {
        id: 'rajasthan-wardrobe',
        name: 'Rajasthan Two Door Wardrobe',
        category: 'Wardrobes',
        room: 'Bedroom',
        material: 'Engineered Wood',
        color: 'Walnut Brown',
        price: 22999,
        oldPrice: 31999,
        discount: 28,
        rating: 4.3,
        reviews: 102,
        popularity: 80,
        availability: 'Limited Stock',
        isNew: false,
        description:
            'A practical wardrobe with hanging space and shelves for organized daily storage.',
        dimensions: '32 x 20 x 72 inches',
        delivery: 'Delivered within 7 to 10 days with assembly support.',
        images: [
            imageFromKeyword('wooden wardrobe', 49),
            imageFromKeyword('two door wardrobe', 50),
            imageFromKeyword('bedroom wardrobe', 51),
            imageFromKeyword('closet furniture', 52),
        ],
    },
    {
        id: 'jaipur-coffee-table',
        name: 'Jaipur Coffee Table',
        category: 'Coffee Tables',
        room: 'Living Room',
        material: 'Mango Wood',
        color: 'Natural Wood',
        price: 6999,
        oldPrice: 9999,
        discount: 30,
        rating: 4.4,
        reviews: 158,
        popularity: 87,
        availability: 'In Stock',
        isNew: true,
        description:
            'A beautiful wooden coffee table for snacks, chai, books, and living room decor.',
        dimensions: '42 x 22 x 18 inches',
        delivery: 'Delivered within 4 to 6 days.',
        images: [
            imageFromKeyword('wooden coffee table', 53),
            imageFromKeyword('living room coffee table', 54),
            imageFromKeyword('mango wood table', 55),
            imageFromKeyword('rustic coffee table', 56),
        ],
    },
    {
        id: 'tara-side-table',
        name: 'Tara Side Table',
        category: 'Side Tables',
        room: 'Bedroom',
        material: 'Solid Wood',
        color: 'Honey Oak',
        price: 3499,
        oldPrice: 4999,
        discount: 30,
        rating: 4.1,
        reviews: 69,
        popularity: 68,
        availability: 'In Stock',
        isNew: false,
        description:
            'A small side table for lamps, books, water bottles, and bedside essentials.',
        dimensions: '18 x 18 x 22 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: [
            imageFromKeyword('wooden side table', 57),
            imageFromKeyword('bedside table', 58),
            imageFromKeyword('nightstand furniture', 59),
            imageFromKeyword('small wooden table', 60),
        ],
    },
    {
        id: 'cozy-balcony-chair-set',
        name: 'Cozy Balcony Chair Set',
        category: 'Balcony Chairs',
        room: 'Balcony',
        material: 'Metal and Rope',
        color: 'Cream',
        price: 11999,
        oldPrice: 15999,
        discount: 25,
        rating: 4.5,
        reviews: 147,
        popularity: 90,
        availability: 'In Stock',
        isNew: true,
        description:
            'A compact balcony chair set for morning tea, evening chai, and relaxed talks.',
        dimensions: '2 chairs and 1 table set',
        delivery: 'Delivered within 4 to 7 days.',
        images: [
            imageFromKeyword('balcony chair set', 61),
            imageFromKeyword('outdoor chair set balcony', 62),
            imageFromKeyword('patio chairs small balcony', 63),
            imageFromKeyword('balcony furniture', 64),
        ],
    },
    {
        id: 'arjun-office-chair',
        name: 'Arjun Office Chair',
        category: 'Office Chairs',
        room: 'Study Room',
        material: 'Mesh and Metal',
        color: 'Charcoal',
        price: 8999,
        oldPrice: 12999,
        discount: 31,
        rating: 4.6,
        reviews: 222,
        popularity: 93,
        availability: 'In Stock',
        isNew: false,
        description:
            'An ergonomic office chair for work-from-home, study, coding, and long desk hours.',
        dimensions: '24 x 24 x 42 inches',
        delivery: 'Delivered within 3 to 6 days.',
        images: [
            imageFromKeyword('ergonomic office chair', 65),
            imageFromKeyword('black office chair', 66),
            imageFromKeyword('work from home chair', 67),
            imageFromKeyword('mesh office chair', 68),
        ],
    },
    {
        id: 'pune-office-desk',
        name: 'Pune Office Desk',
        category: 'Office Desks',
        room: 'Study Room',
        material: 'Engineered Wood and Metal',
        color: 'Oak and Black',
        price: 13999,
        oldPrice: 18999,
        discount: 26,
        rating: 4.4,
        reviews: 104,
        popularity: 79,
        availability: 'In Stock',
        isNew: true,
        description:
            'A modern office desk with enough space for laptop, monitor, books, and notes.',
        dimensions: '48 x 24 x 30 inches',
        delivery: 'Delivered within 4 to 7 days.',
        images: [
            imageFromKeyword('office desk wooden metal', 69),
            imageFromKeyword('modern work desk', 70),
            imageFromKeyword('home office table', 71),
            imageFromKeyword('computer desk', 72),
        ],
    },
    {
        id: 'ayodhya-mandir-unit',
        name: 'Ayodhya Mandir Unit',
        category: 'Mandir Units',
        room: 'Prayer Room',
        material: 'Engineered Wood',
        color: 'White and Gold',
        price: 16999,
        oldPrice: 22999,
        discount: 26,
        rating: 4.7,
        reviews: 184,
        popularity: 89,
        availability: 'In Stock',
        isNew: true,
        description:
            'A graceful mandir unit with storage for pooja items and a calm home prayer space.',
        dimensions: '30 x 16 x 60 inches',
        delivery: 'Delivered within 5 to 9 days.',
        images: [
            imageFromKeyword('home mandir unit', 73),
            imageFromKeyword('pooja mandir furniture', 74),
            imageFromKeyword('white wooden temple cabinet', 75),
            imageFromKeyword('indian pooja unit', 76),
        ],
    },
    {
        id: 'surya-floor-lamp',
        name: 'Surya Floor Lamp',
        category: 'Lamps',
        room: 'Living Room',
        material: 'Metal and Fabric Shade',
        color: 'Soft Gold',
        price: 3999,
        oldPrice: 5999,
        discount: 33,
        rating: 4.2,
        reviews: 91,
        popularity: 72,
        availability: 'In Stock',
        isNew: false,
        description:
            'A warm floor lamp that gives your living room a calm and premium evening glow.',
        dimensions: '15 x 15 x 58 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: [
            imageFromKeyword('floor lamp living room', 77),
            imageFromKeyword('gold floor lamp', 78),
            imageFromKeyword('modern lamp furniture', 79),
            imageFromKeyword('lamp home decor', 80),
        ],
    },
    {
        id: 'chandni-wall-mirror',
        name: 'Chandni Wall Mirror',
        category: 'Mirrors',
        room: 'Bedroom',
        material: 'Glass and Wood Frame',
        color: 'Natural Wood',
        price: 5499,
        oldPrice: 7499,
        discount: 27,
        rating: 4.3,
        reviews: 84,
        popularity: 70,
        availability: 'In Stock',
        isNew: false,
        description:
            'A clean wall mirror that makes rooms feel brighter and more open.',
        dimensions: '24 x 36 inches',
        delivery: 'Delivered within 4 to 6 days with safe packaging.',
        images: [
            imageFromKeyword('wooden wall mirror', 81),
            imageFromKeyword('bedroom wall mirror', 82),
            imageFromKeyword('round wall mirror', 83),
            imageFromKeyword('decor mirror', 84),
        ],
    },
    {
        id: 'banaras-rug',
        name: 'Banaras Pattern Rug',
        category: 'Rugs',
        room: 'Living Room',
        material: 'Cotton Blend',
        color: 'Cream and Brown',
        price: 4499,
        oldPrice: 6499,
        discount: 31,
        rating: 4.1,
        reviews: 64,
        popularity: 66,
        availability: 'In Stock',
        isNew: true,
        description:
            'A soft patterned rug that adds warmth and character to your living room floor.',
        dimensions: '5 x 7 feet',
        delivery: 'Delivered within 3 to 5 days.',
        images: [
            imageFromKeyword('cream brown rug living room', 85),
            imageFromKeyword('pattern rug home', 86),
            imageFromKeyword('living room carpet rug', 87),
            imageFromKeyword('indian pattern rug', 88),
        ],
    },
    {
        id: 'rangoli-cushion-set',
        name: 'Rangoli Cushion Set',
        category: 'Cushions',
        room: 'Living Room',
        material: 'Cotton Fabric',
        color: 'Multicolor',
        price: 1499,
        oldPrice: 2499,
        discount: 40,
        rating: 4.0,
        reviews: 73,
        popularity: 65,
        availability: 'In Stock',
        isNew: true,
        description:
            'A set of soft cushions that brings color and comfort to your sofa or bed.',
        dimensions: '16 x 16 inches, set of 5',
        delivery: 'Delivered within 2 to 4 days.',
        images: [
            imageFromKeyword('colorful cushion set', 89),
            imageFromKeyword('sofa cushions', 90),
            imageFromKeyword('home decor pillows', 91),
            imageFromKeyword('cotton cushion covers', 92),
        ],
    },
    {
        id: 'malabar-curtains',
        name: 'Malabar Cotton Curtains',
        category: 'Curtains',
        room: 'Living Room',
        material: 'Cotton Blend',
        color: 'Beige',
        price: 2499,
        oldPrice: 3499,
        discount: 29,
        rating: 4.2,
        reviews: 58,
        popularity: 64,
        availability: 'In Stock',
        isNew: false,
        description:
            'Simple beige curtains that soften sunlight and make your room feel calm.',
        dimensions: 'Door size, set of 2',
        delivery: 'Delivered within 2 to 5 days.',
        images: [
            imageFromKeyword('beige curtains living room', 93),
            imageFromKeyword('cotton curtains', 94),
            imageFromKeyword('window curtains home', 95),
            imageFromKeyword('warm curtains', 96),
        ],
    },
    {
        id: 'udaipur-wall-shelf',
        name: 'Udaipur Wall Shelf',
        category: 'Wall Shelves',
        room: 'Compact Homes',
        material: 'Engineered Wood',
        color: 'Walnut Brown',
        price: 2999,
        oldPrice: 4499,
        discount: 33,
        rating: 4.1,
        reviews: 81,
        popularity: 67,
        availability: 'In Stock',
        isNew: false,
        description:
            'A wall shelf for books, plants, frames, and small decor without using floor space.',
        dimensions: '36 x 8 x 10 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: [
            imageFromKeyword('wooden wall shelf', 97),
            imageFromKeyword('floating wall shelf', 98),
            imageFromKeyword('wall shelf decor', 99),
            imageFromKeyword('small wall storage', 100),
        ],
    },
    {
        id: 'mysore-tv-unit',
        name: 'Mysore TV Unit',
        category: 'TV Units',
        room: 'Living Room',
        material: 'Engineered Wood',
        color: 'Teak Brown',
        price: 18999,
        oldPrice: 25999,
        discount: 27,
        rating: 4.5,
        reviews: 133,
        popularity: 84,
        availability: 'In Stock',
        isNew: false,
        description:
            'A smart TV unit with shelves for set-top box, books, decor, and living room storage.',
        dimensions: '60 x 16 x 22 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: [
            imageFromKeyword('wooden tv unit', 101),
            imageFromKeyword('living room tv cabinet', 102),
            imageFromKeyword('modern tv console', 103),
            imageFromKeyword('tv stand furniture', 104),
        ],
    },
    {
        id: 'mitti-decor-vase-set',
        name: 'Mitti Decor Vase Set',
        category: 'Decor Items',
        room: 'Living Room',
        material: 'Ceramic',
        color: 'Terracotta',
        price: 1999,
        oldPrice: 2999,
        discount: 33,
        rating: 4.3,
        reviews: 95,
        popularity: 69,
        availability: 'In Stock',
        isNew: true,
        description:
            'A warm ceramic vase set for shelves, coffee tables, side tables, and festive decor.',
        dimensions: 'Set of 3 assorted sizes',
        delivery: 'Delivered within 2 to 5 days with safe packaging.',
        images: [
            imageFromKeyword('ceramic vase set', 105),
            imageFromKeyword('terracotta vase decor', 106),
            imageFromKeyword('home decor vase', 107),
            imageFromKeyword('table decor items', 108),
        ],
    },
];

/* ==================================================
   2. GENERAL HELPERS
   These helper functions are reused across pages.
   ================================================== */

const CART_STORAGE_KEY = 'kpLivingCart';
let productsVisibleCount = 12;
let filteredProductsForPage = [];
let selectedDetailsQuantity = 1;
let checkoutCouponDiscount = 0;
let activeCouponCode = '';

function getCurrentPageName() {
    return document.body.dataset.page || '';
}

function formatPrice(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

function getCart() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY);

    if (!cartString) {
        return [];
    }

    try {
        return JSON.parse(cartString);
    } catch (error) {
        console.warn('Cart data was not valid. Resetting cart.', error);
        localStorage.removeItem(CART_STORAGE_KEY);
        return [];
    }
}

function saveCart(cartItems) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function findProductById(productId) {
    return products.find(function (product) {
        return product.id === productId;
    });
}

function getCartWithProductDetails() {
    const cartItems = getCart();

    return cartItems
        .map(function (cartItem) {
            const product = findProductById(cartItem.id);

            if (!product) {
                return null;
            }

            return {
                product: product,
                quantity: cartItem.quantity,
            };
        })
        .filter(function (item) {
            return item !== null;
        });
}

function updateCartCounter() {
    const counterElement = document.getElementById('cartCounter');

    if (!counterElement) {
        return;
    }

    const cartItems = getCart();
    let totalQuantity = 0;

    cartItems.forEach(function (item) {
        totalQuantity = totalQuantity + item.quantity;
    });

    counterElement.textContent = totalQuantity;
}

function showToast(message) {
    const toast = document.getElementById('toast');

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(function () {
        toast.classList.remove('show');
    }, 2500);
}

function getQueryParameter(parameterName) {
    const urlParameters = new URLSearchParams(window.location.search);
    return urlParameters.get(parameterName);
}

function createRatingStars(rating) {
    const roundedRating = Math.round(rating);
    let stars = '';

    for (let count = 1; count <= 5; count++) {
        if (count <= roundedRating) {
            stars = stars + '★';
        } else {
            stars = stars + '☆';
        }
    }

    return stars;
}

/* ==================================================
   3. NAVIGATION AND GLOBAL SEARCH
   This section handles mobile navigation, sticky header,
   global product search, and page-wide cart counter.
   ================================================== */

function initializeNavigation() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mainNav = document.getElementById('mainNav');
    const siteHeader = document.getElementById('siteHeader');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        });
    }

    if (siteHeader) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }
}

function initializeGlobalSearch() {
    const globalSearchForm = document.getElementById('globalSearchForm');
    const globalSearchInput = document.getElementById('globalSearchInput');

    if (!globalSearchForm || !globalSearchInput) {
        return;
    }

    globalSearchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchText = globalSearchInput.value.trim();

        if (searchText.length === 0) {
            window.location.href = 'products.html';
            return;
        }

        window.location.href =
            'products.html?search=' + encodeURIComponent(searchText);
    });
}

/* ==================================================
   4. PRODUCT CARD RENDERING
   The same product card is used on home, products,
   details related products, and filtered product grid.
   ================================================== */

function createProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image-wrap">
                <img src="${product.images[0]}" alt="${product.name} - ${product.category}" loading="lazy">
                <span class="discount-badge">${product.discount}% OFF</span>
                <span class="availability-badge">${product.availability}</span>
            </div>
            <div class="product-content">
                <div class="product-tags">
                    <span>${product.category}</span>
                    <span>${product.room}</span>
                    <span>${product.material}</span>
                </div>
                <h3>${product.name}</h3>
                <div class="product-rating">${createRatingStars(product.rating)} ${product.rating} (${product.reviews})</div>
                <p>${product.description}</p>
                <div class="price-row">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                </div>
                <div class="product-actions">
                    <button type="button" class="secondary-button view-details-button" data-product-id="${product.id}">View Details</button>
                    <button type="button" class="primary-button add-cart-button" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </article>
    `;
}

function attachProductCardEvents(parentElement) {
    if (!parentElement) {
        return;
    }

    parentElement.addEventListener('click', function (event) {
        const viewDetailsButton = event.target.closest('.view-details-button');
        const addCartButton = event.target.closest('.add-cart-button');

        if (viewDetailsButton) {
            const productId = viewDetailsButton.dataset.productId;
            localStorage.setItem('kpLivingSelectedProduct', productId);
            window.location.href =
                'product-details.html?id=' + encodeURIComponent(productId);
        }

        if (addCartButton) {
            const productId = addCartButton.dataset.productId;
            addProductToCart(productId, 1);
            showToast('Product added to cart');

            setTimeout(function () {
                window.location.href = 'cart.html';
            }, 500);
        }
    });
}

/* ==================================================
   5. HOME PAGE SECTIONS
   Best sellers and new arrivals are rendered dynamically.
   ================================================== */

function initializeHomePage() {
    if (getCurrentPageName() !== 'home') {
        return;
    }

    const bestSellerGrid = document.getElementById('bestSellerGrid');
    const newArrivalGrid = document.getElementById('newArrivalGrid');

    if (bestSellerGrid) {
        const bestSellers = products
            .slice()
            .sort(function (firstProduct, secondProduct) {
                return secondProduct.popularity - firstProduct.popularity;
            })
            .slice(0, 4);

        bestSellerGrid.innerHTML = bestSellers.map(createProductCard).join('');
        attachProductCardEvents(bestSellerGrid);
    }

    if (newArrivalGrid) {
        const newArrivals = products
            .filter(function (product) {
                return product.isNew === true;
            })
            .slice(0, 4);

        newArrivalGrid.innerHTML = newArrivals.map(createProductCard).join('');
        attachProductCardEvents(newArrivalGrid);
    }
}

/* ==================================================
   6. PRODUCTS PAGE
   Search, filters, sorting, product count, and load more.
   ================================================== */

function getUniqueValues(keyName) {
    const values = products.map(function (product) {
        return product[keyName];
    });

    const uniqueValues = [];

    values.forEach(function (value) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    });

    return uniqueValues.sort();
}

function fillFilterOptions(selectId, values) {
    const selectElement = document.getElementById(selectId);

    if (!selectElement) {
        return;
    }

    values.forEach(function (value) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

function initializeProductFilters() {
    fillFilterOptions('filterCategory', getUniqueValues('category'));
    fillFilterOptions('filterRoom', getUniqueValues('room'));
    fillFilterOptions('filterMaterial', getUniqueValues('material'));
    fillFilterOptions('filterColor', getUniqueValues('color'));
}

function setFiltersFromUrl() {
    const searchQuery = getQueryParameter('search');
    const categoryQuery = getQueryParameter('category');
    const roomQuery = getQueryParameter('room');
    const discountQuery = getQueryParameter('discount');
    const sortQuery = getQueryParameter('sort');

    const productSearchInput = document.getElementById('productSearchInput');
    const filterCategory = document.getElementById('filterCategory');
    const filterRoom = document.getElementById('filterRoom');
    const filterDiscount = document.getElementById('filterDiscount');
    const sortProducts = document.getElementById('sortProducts');

    if (searchQuery && productSearchInput) {
        productSearchInput.value = searchQuery;
    }

    if (categoryQuery && filterCategory) {
        filterCategory.value = categoryQuery;
    }

    if (roomQuery && filterRoom) {
        filterRoom.value = roomQuery;
    }

    if (discountQuery && filterDiscount) {
        filterDiscount.value = discountQuery;
    }

    if (sortQuery && sortProducts) {
        if (sortQuery === 'popularity') {
            sortProducts.value = 'popularityHighLow';
        }

        if (sortQuery === 'newest') {
            sortProducts.value = 'default';
        }
    }
}

function getCurrentFilterValues() {
    return {
        searchText: (document.getElementById('productSearchInput')?.value || '')
            .trim()
            .toLowerCase(),
        category: document.getElementById('filterCategory')?.value || '',
        room: document.getElementById('filterRoom')?.value || '',
        priceRange: document.getElementById('filterPrice')?.value || '',
        material: document.getElementById('filterMaterial')?.value || '',
        color: document.getElementById('filterColor')?.value || '',
        rating: document.getElementById('filterRating')?.value || '',
        discount: document.getElementById('filterDiscount')?.value || '',
        availability:
            document.getElementById('filterAvailability')?.value || '',
        sortBy: document.getElementById('sortProducts')?.value || 'default',
    };
}

function productMatchesPriceRange(product, priceRange) {
    if (!priceRange) {
        return true;
    }

    const priceParts = priceRange.split('-');
    const minimumPrice = Number(priceParts[0]);
    const maximumPrice = Number(priceParts[1]);

    return product.price >= minimumPrice && product.price <= maximumPrice;
}

function filterProducts() {
    const filters = getCurrentFilterValues();

    let result = products.filter(function (product) {
        const searchableText = [
            product.name,
            product.category,
            product.room,
            product.material,
            product.color,
            product.description,
        ]
            .join(' ')
            .toLowerCase();

        const matchesSearch =
            filters.searchText === '' ||
            searchableText.includes(filters.searchText);
        const matchesCategory =
            filters.category === '' || product.category === filters.category;
        const matchesRoom =
            filters.room === '' || product.room === filters.room;
        const matchesPrice = productMatchesPriceRange(
            product,
            filters.priceRange
        );
        const matchesMaterial =
            filters.material === '' || product.material === filters.material;
        const matchesColor =
            filters.color === '' || product.color === filters.color;
        const matchesRating =
            filters.rating === '' || product.rating >= Number(filters.rating);
        const matchesDiscount =
            filters.discount === '' ||
            product.discount >= Number(filters.discount);
        const matchesAvailability =
            filters.availability === '' ||
            product.availability === filters.availability;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesRoom &&
            matchesPrice &&
            matchesMaterial &&
            matchesColor &&
            matchesRating &&
            matchesDiscount &&
            matchesAvailability
        );
    });

    result = sortProductList(result, filters.sortBy);
    return result;
}

function sortProductList(productList, sortBy) {
    const sortedList = productList.slice();

    if (sortBy === 'priceLowHigh') {
        sortedList.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortBy === 'priceHighLow') {
        sortedList.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    if (sortBy === 'ratingHighLow') {
        sortedList.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }

    if (sortBy === 'discountHighLow') {
        sortedList.sort(function (a, b) {
            return b.discount - a.discount;
        });
    }

    if (sortBy === 'popularityHighLow') {
        sortedList.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
    }

    return sortedList;
}

function renderProductsPage() {
    const productsGrid = document.getElementById('productsGrid');
    const productCountText = document.getElementById('productCountText');
    const noProductsMessage = document.getElementById('noProductsMessage');
    const loadMoreButton = document.getElementById('loadMoreButton');

    if (!productsGrid) {
        return;
    }

    filteredProductsForPage = filterProducts();

    const visibleProducts = filteredProductsForPage.slice(
        0,
        productsVisibleCount
    );
    productsGrid.innerHTML = visibleProducts.map(createProductCard).join('');

    if (productCountText) {
        productCountText.textContent =
            'Showing ' +
            visibleProducts.length +
            ' of ' +
            filteredProductsForPage.length +
            ' products';
    }

    if (noProductsMessage) {
        if (filteredProductsForPage.length === 0) {
            noProductsMessage.classList.add('show');
        } else {
            noProductsMessage.classList.remove('show');
        }
    }

    if (loadMoreButton) {
        if (productsVisibleCount >= filteredProductsForPage.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'inline-flex';
        }
    }
}

function initializeProductsPage() {
    if (getCurrentPageName() !== 'products') {
        return;
    }

    initializeProductFilters();
    setFiltersFromUrl();
    renderProductsPage();

    const productsGrid = document.getElementById('productsGrid');
    const loadMoreButton = document.getElementById('loadMoreButton');
    const clearFiltersButton = document.getElementById('clearFiltersButton');

    attachProductCardEvents(productsGrid);

    const filterElements = [
        'productSearchInput',
        'filterCategory',
        'filterRoom',
        'filterPrice',
        'filterMaterial',
        'filterColor',
        'filterRating',
        'filterDiscount',
        'filterAvailability',
        'sortProducts',
    ];

    filterElements.forEach(function (elementId) {
        const element = document.getElementById(elementId);

        if (element) {
            element.addEventListener('input', function () {
                productsVisibleCount = 12;
                renderProductsPage();
            });

            element.addEventListener('change', function () {
                productsVisibleCount = 12;
                renderProductsPage();
            });
        }
    });

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            productsVisibleCount = productsVisibleCount + 6;
            renderProductsPage();
        });
    }

    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', function () {
            filterElements.forEach(function (elementId) {
                const element = document.getElementById(elementId);

                if (element) {
                    element.value =
                        elementId === 'sortProducts' ? 'default' : '';
                }
            });

            productsVisibleCount = 12;
            renderProductsPage();
        });
    }
}

/* ==================================================
   7. CART FUNCTIONS
   These functions add products to localStorage and update
   cart totals on cart and checkout pages.
   ================================================== */

function addProductToCart(productId, quantityToAdd) {
    const product = findProductById(productId);

    if (!product) {
        showToast('Product not found');
        return;
    }

    const cartItems = getCart();
    const existingCartItem = cartItems.find(function (item) {
        return item.id === productId;
    });

    if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + quantityToAdd;
    } else {
        cartItems.push({
            id: productId,
            quantity: quantityToAdd,
        });
    }

    saveCart(cartItems);
    updateCartCounter();
}

function updateCartItemQuantity(productId, newQuantity) {
    let cartItems = getCart();

    if (newQuantity <= 0) {
        cartItems = cartItems.filter(function (item) {
            return item.id !== productId;
        });
    } else {
        cartItems = cartItems.map(function (item) {
            if (item.id === productId) {
                return {
                    id: item.id,
                    quantity: newQuantity,
                };
            }

            return item;
        });
    }

    saveCart(cartItems);
    updateCartCounter();
}

function removeProductFromCart(productId) {
    const updatedCart = getCart().filter(function (item) {
        return item.id !== productId;
    });

    saveCart(updatedCart);
    updateCartCounter();
}

function calculateCartTotals(couponDiscountAmount) {
    const detailedCart = getCartWithProductDetails();

    let subtotalBeforeDiscount = 0;
    let subtotalAfterProductDiscount = 0;

    detailedCart.forEach(function (item) {
        subtotalBeforeDiscount =
            subtotalBeforeDiscount + item.product.oldPrice * item.quantity;
        subtotalAfterProductDiscount =
            subtotalAfterProductDiscount + item.product.price * item.quantity;
    });

    const productDiscount =
        subtotalBeforeDiscount - subtotalAfterProductDiscount;
    const safeCouponDiscount = Math.min(
        couponDiscountAmount || 0,
        subtotalAfterProductDiscount
    );
    const taxableAmount = Math.max(
        subtotalAfterProductDiscount - safeCouponDiscount,
        0
    );
    const deliveryCharge =
        taxableAmount === 0 || taxableAmount >= 25000 ? 0 : 299;
    const tax = Math.round(taxableAmount * 0.18);
    const totalAmount = taxableAmount + deliveryCharge + tax;

    return {
        subtotalBeforeDiscount: subtotalBeforeDiscount,
        subtotalAfterProductDiscount: subtotalAfterProductDiscount,
        productDiscount: productDiscount,
        couponDiscount: safeCouponDiscount,
        deliveryCharge: deliveryCharge,
        tax: tax,
        totalAmount: totalAmount,
    };
}

/* ==================================================
   8. PRODUCT DETAILS PAGE
   Loads selected product using URL parameter or localStorage.
   ================================================== */

function initializeProductDetailsPage() {
    if (getCurrentPageName() !== 'details') {
        return;
    }

    const detailsContainer = document.getElementById('productDetailsContainer');
    const relatedProductsGrid = document.getElementById('relatedProductsGrid');

    if (!detailsContainer) {
        return;
    }

    const productIdFromUrl = getQueryParameter('id');
    const productIdFromStorage = localStorage.getItem(
        'kpLivingSelectedProduct'
    );
    const selectedProductId =
        productIdFromUrl || productIdFromStorage || products[0].id;
    const selectedProduct = findProductById(selectedProductId);

    if (!selectedProduct) {
        detailsContainer.innerHTML = `
            <div class="empty-state show">
                <h2>Product not found</h2>
                <p>The product you are looking for is not available.</p>
                <a href="products.html" class="primary-button">Back to Products</a>
            </div>
        `;
        return;
    }

    document.title = selectedProduct.name + ' | KP Living';
    selectedDetailsQuantity = 1;

    detailsContainer.innerHTML = `
        <div class="details-grid">
            <div class="details-gallery-card">
                <img src="${selectedProduct.images[0]}" alt="${selectedProduct.name}" class="main-details-image" id="mainDetailsImage">
                <div class="thumbnail-row">
                    ${selectedProduct.images
                        .map(function (imageUrl, index) {
                            return `
                            <button type="button" class="thumbnail-button ${index === 0 ? 'active' : ''}" data-image-url="${imageUrl}">
                                <img src="${imageUrl}" alt="${selectedProduct.name} view ${index + 1}">
                            </button>
                        `;
                        })
                        .join('')}
                </div>
            </div>

            <div class="details-info-card">
                <p class="eyebrow">${selectedProduct.category}</p>
                <h1 class="details-title">${selectedProduct.name}</h1>
                <div class="product-rating">${createRatingStars(selectedProduct.rating)} ${selectedProduct.rating} (${selectedProduct.reviews} reviews)</div>
                <p class="details-description">${selectedProduct.description}</p>
                <div class="price-row">
                    <span class="current-price">${formatPrice(selectedProduct.price)}</span>
                    <span class="old-price">${formatPrice(selectedProduct.oldPrice)}</span>
                    <span class="discount-badge static-discount">${selectedProduct.discount}% OFF</span>
                </div>
                <div class="details-table">
                    <div><span>Material</span><span>${selectedProduct.material}</span></div>
                    <div><span>Dimensions</span><span>${selectedProduct.dimensions}</span></div>
                    <div><span>Room Type</span><span>${selectedProduct.room}</span></div>
                    <div><span>Availability</span><span>${selectedProduct.availability}</span></div>
                </div>
                <h3>Color Options</h3>
                <div class="color-options">
                    <span class="color-pill">${selectedProduct.color}</span>
                    <span class="color-pill">Warm White</span>
                    <span class="color-pill">Soft Brown</span>
                </div>
                <div class="delivery-box">
                    <strong>Delivery Information</strong>
                    <p>${selectedProduct.delivery}</p>
                </div>
                <h3>Quantity</h3>
                <div class="quantity-selector">
                    <button type="button" id="decreaseDetailsQuantity">−</button>
                    <span id="detailsQuantityText">1</span>
                    <button type="button" id="increaseDetailsQuantity">+</button>
                </div>
                <div class="details-actions">
                    <button type="button" class="secondary-button" id="detailsAddToCartButton">Add to Cart</button>
                    <button type="button" class="primary-button" id="detailsBuyNowButton">Buy Now</button>
                </div>
            </div>
        </div>
    `;

    initializeDetailsPageEvents(selectedProduct);
    renderRelatedProducts(selectedProduct, relatedProductsGrid);
}

function initializeDetailsPageEvents(selectedProduct) {
    const mainDetailsImage = document.getElementById('mainDetailsImage');
    const thumbnailButtons = document.querySelectorAll('.thumbnail-button');
    const decreaseButton = document.getElementById('decreaseDetailsQuantity');
    const increaseButton = document.getElementById('increaseDetailsQuantity');
    const quantityText = document.getElementById('detailsQuantityText');
    const addToCartButton = document.getElementById('detailsAddToCartButton');
    const buyNowButton = document.getElementById('detailsBuyNowButton');

    thumbnailButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            thumbnailButtons.forEach(function (thumbnail) {
                thumbnail.classList.remove('active');
            });

            button.classList.add('active');

            if (mainDetailsImage) {
                mainDetailsImage.src = button.dataset.imageUrl;
            }
        });
    });

    if (decreaseButton && quantityText) {
        decreaseButton.addEventListener('click', function () {
            if (selectedDetailsQuantity > 1) {
                selectedDetailsQuantity = selectedDetailsQuantity - 1;
                quantityText.textContent = selectedDetailsQuantity;
            }
        });
    }

    if (increaseButton && quantityText) {
        increaseButton.addEventListener('click', function () {
            selectedDetailsQuantity = selectedDetailsQuantity + 1;
            quantityText.textContent = selectedDetailsQuantity;
        });
    }

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            addProductToCart(selectedProduct.id, selectedDetailsQuantity);
            showToast('Added ' + selectedDetailsQuantity + ' item(s) to cart');
        });
    }

    if (buyNowButton) {
        buyNowButton.addEventListener('click', function () {
            addProductToCart(selectedProduct.id, selectedDetailsQuantity);
            showToast('Product added. Opening checkout.');

            setTimeout(function () {
                window.location.href = 'checkout.html';
            }, 500);
        });
    }
}

function renderRelatedProducts(selectedProduct, relatedProductsGrid) {
    if (!relatedProductsGrid) {
        return;
    }

    const relatedProducts = products
        .filter(function (product) {
            return (
                product.id !== selectedProduct.id &&
                (product.category === selectedProduct.category ||
                    product.room === selectedProduct.room)
            );
        })
        .slice(0, 4);

    relatedProductsGrid.innerHTML = relatedProducts
        .map(createProductCard)
        .join('');
    attachProductCardEvents(relatedProductsGrid);
}

/* ==================================================
   9. CART PAGE
   Loads cart from localStorage and updates totals live.
   ================================================== */

function initializeCartPage() {
    if (getCurrentPageName() !== 'cart') {
        return;
    }

    renderCartPage();
}

function renderCartPage() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartSummaryCard = document.getElementById('cartSummaryCard');

    if (!cartItemsContainer) {
        return;
    }

    const detailedCart = getCartWithProductDetails();

    if (detailedCart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage?.classList.add('show');
        if (cartSummaryCard) {
            cartSummaryCard.style.display = 'none';
        }
        return;
    }

    emptyCartMessage?.classList.remove('show');
    if (cartSummaryCard) {
        cartSummaryCard.style.display = 'block';
    }

    cartItemsContainer.innerHTML = detailedCart
        .map(function (item) {
            return `
            <div class="cart-item">
                <img src="${item.product.images[0]}" alt="${item.product.name}">
                <div>
                    <h3 class="cart-item-name">${item.product.name}</h3>
                    <p class="cart-item-meta">${item.product.category} • ${item.product.material} • ${item.product.color}</p>
                    <div class="cart-item-actions">
                        <button type="button" class="small-action-button decrease-cart-item" data-product-id="${item.product.id}">−</button>
                        <strong>${item.quantity}</strong>
                        <button type="button" class="small-action-button increase-cart-item" data-product-id="${item.product.id}">+</button>
                        <button type="button" class="remove-button remove-cart-item" data-product-id="${item.product.id}">Remove</button>
                    </div>
                </div>
                <div class="cart-item-price-row">
                    <strong>${formatPrice(item.product.price * item.quantity)}</strong>
                    <span class="old-price">${formatPrice(item.product.oldPrice * item.quantity)}</span>
                </div>
            </div>
        `;
        })
        .join('');

    attachCartPageEvents(cartItemsContainer);
    updateCartSummary();
}

function attachCartPageEvents(cartItemsContainer) {
    cartItemsContainer.onclick = function (event) {
        const increaseButton = event.target.closest('.increase-cart-item');
        const decreaseButton = event.target.closest('.decrease-cart-item');
        const removeButton = event.target.closest('.remove-cart-item');

        if (increaseButton) {
            const productId = increaseButton.dataset.productId;
            const cartItem = getCart().find(function (item) {
                return item.id === productId;
            });

            if (cartItem) {
                updateCartItemQuantity(productId, cartItem.quantity + 1);
                renderCartPage();
            }
        }

        if (decreaseButton) {
            const productId = decreaseButton.dataset.productId;
            const cartItem = getCart().find(function (item) {
                return item.id === productId;
            });

            if (cartItem) {
                updateCartItemQuantity(productId, cartItem.quantity - 1);
                renderCartPage();
            }
        }

        if (removeButton) {
            const productId = removeButton.dataset.productId;
            removeProductFromCart(productId);
            showToast('Item removed from cart');
            renderCartPage();
        }
    };
}

function updateCartSummary() {
    const totals = calculateCartTotals(0);

    const subtotalElement = document.getElementById('cartSubtotal');
    const discountElement = document.getElementById('cartDiscount');
    const deliveryElement = document.getElementById('cartDelivery');
    const taxElement = document.getElementById('cartTax');
    const totalElement = document.getElementById('cartTotal');

    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(
            totals.subtotalBeforeDiscount
        );
    }

    if (discountElement) {
        discountElement.textContent = '-' + formatPrice(totals.productDiscount);
    }

    if (deliveryElement) {
        deliveryElement.textContent =
            totals.deliveryCharge === 0
                ? 'Free'
                : formatPrice(totals.deliveryCharge);
    }

    if (taxElement) {
        taxElement.textContent = formatPrice(totals.tax);
    }

    if (totalElement) {
        totalElement.textContent = formatPrice(totals.totalAmount);
    }
}

/* ==================================================
   10. CHECKOUT PAGE
   Handles order summary, coupon, validation, payment,
   order success message, and cart clearing.
   ================================================== */

function initializeCheckoutPage() {
    if (getCurrentPageName() !== 'checkout') {
        return;
    }

    renderCheckoutSummary();
    initializeCouponSystem();
    initializeCheckoutForm();
}

function renderCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const detailedCart = getCartWithProductDetails();

    if (!checkoutItems) {
        return;
    }

    if (detailedCart.length === 0) {
        checkoutItems.innerHTML = `
            <div class="empty-state show">
                <h3>No items in cart</h3>
                <p>Add products before checkout.</p>
                <a href="products.html" class="primary-button">Shop Products</a>
            </div>
        `;
    } else {
        checkoutItems.innerHTML = detailedCart
            .map(function (item) {
                return `
                <div class="checkout-mini-item">
                    <img src="${item.product.images[0]}" alt="${item.product.name}">
                    <div>
                        <h3>${item.product.name}</h3>
                        <p>Qty: ${item.quantity} • ${formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                </div>
            `;
            })
            .join('');
    }

    updateCheckoutTotals();
}

function updateCheckoutTotals() {
    const totals = calculateCartTotals(checkoutCouponDiscount);

    const subtotalElement = document.getElementById('checkoutSubtotal');
    const discountElement = document.getElementById('checkoutDiscount');
    const couponDiscountElement = document.getElementById(
        'checkoutCouponDiscount'
    );
    const deliveryElement = document.getElementById('checkoutDelivery');
    const taxElement = document.getElementById('checkoutTax');
    const totalElement = document.getElementById('checkoutTotal');

    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(
            totals.subtotalBeforeDiscount
        );
    }

    if (discountElement) {
        discountElement.textContent = '-' + formatPrice(totals.productDiscount);
    }

    if (couponDiscountElement) {
        couponDiscountElement.textContent =
            '-' + formatPrice(totals.couponDiscount);
    }

    if (deliveryElement) {
        deliveryElement.textContent =
            totals.deliveryCharge === 0
                ? 'Free'
                : formatPrice(totals.deliveryCharge);
    }

    if (taxElement) {
        taxElement.textContent = formatPrice(totals.tax);
    }

    if (totalElement) {
        totalElement.textContent = formatPrice(totals.totalAmount);
    }
}

function initializeCouponSystem() {
    const applyCouponButton = document.getElementById('applyCouponButton');
    const couponInput = document.getElementById('couponInput');
    const couponMessage = document.getElementById('couponMessage');

    if (!applyCouponButton || !couponInput || !couponMessage) {
        return;
    }

    applyCouponButton.addEventListener('click', function () {
        const couponCode = couponInput.value.trim().toUpperCase();
        const totalsWithoutCoupon = calculateCartTotals(0);
        const cartValue = totalsWithoutCoupon.subtotalAfterProductDiscount;

        checkoutCouponDiscount = 0;
        activeCouponCode = '';

        if (couponCode === '') {
            couponMessage.textContent = 'Please enter a coupon code.';
            couponMessage.className = 'form-message error';
            updateCheckoutTotals();
            return;
        }

        if (couponCode === 'FESTIVE500') {
            if (cartValue >= 5000) {
                checkoutCouponDiscount = 500;
                activeCouponCode = couponCode;
                couponMessage.textContent =
                    'FESTIVE500 applied. You saved ₹500.';
                couponMessage.className = 'form-message success';
            } else {
                couponMessage.textContent =
                    'FESTIVE500 works on orders above ₹5,000.';
                couponMessage.className = 'form-message error';
            }
        } else if (couponCode === 'KPLIVING10') {
            checkoutCouponDiscount = Math.round(cartValue * 0.1);
            activeCouponCode = couponCode;
            couponMessage.textContent = 'KPLIVING10 applied. You saved 10%.';
            couponMessage.className = 'form-message success';
        } else {
            couponMessage.textContent =
                'Invalid coupon. Try FESTIVE500 or KPLIVING10.';
            couponMessage.className = 'form-message error';
        }

        updateCheckoutTotals();
    });
}

function initializeCheckoutForm() {
    const checkoutForm = document.getElementById('checkoutForm');

    if (!checkoutForm) {
        return;
    }

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const cartItems = getCartWithProductDetails();

        if (cartItems.length === 0) {
            showToast('Your cart is empty. Add products first.');
            return;
        }

        const isFormValid = validateCheckoutForm();

        if (!isFormValid) {
            showToast('Please fix the form details.');
            return;
        }

        localStorage.removeItem(CART_STORAGE_KEY);
        updateCartCounter();
        checkoutCouponDiscount = 0;
        activeCouponCode = '';

        const successBox = document.getElementById('orderSuccessBox');

        if (successBox) {
            successBox.textContent =
                'Order placed successfully. Thank you for shopping with KP Living. Our team will contact you soon for delivery updates.';
            successBox.classList.add('show');
        }

        checkoutForm.reset();
        renderCheckoutSummary();
        showToast('Order placed successfully');
    });
}

function validateCheckoutForm() {
    let isValid = true;

    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');
    const emailInput = document.getElementById('checkoutEmail');
    const addressInput = document.getElementById('checkoutAddress');
    const cityInput = document.getElementById('checkoutCity');
    const stateInput = document.getElementById('checkoutState');
    const pincodeInput = document.getElementById('checkoutPincode');
    const selectedPaymentMethod = document.querySelector(
        "input[name='paymentMethod']:checked"
    );
    const paymentMessage = document.getElementById('paymentMessage');

    if (!validateRequiredInput(nameInput, 'Name is required.')) {
        isValid = false;
    }

    if (!validateIndianPhone(phoneInput, true)) {
        isValid = false;
    }

    if (!validateEmail(emailInput, true)) {
        isValid = false;
    }

    if (!validateRequiredInput(addressInput, 'Address is required.')) {
        isValid = false;
    }

    if (!validateRequiredInput(cityInput, 'City is required.')) {
        isValid = false;
    }

    if (!validateRequiredInput(stateInput, 'State is required.')) {
        isValid = false;
    }

    if (!validatePincode(pincodeInput)) {
        isValid = false;
    }

    if (!selectedPaymentMethod) {
        if (paymentMessage) {
            paymentMessage.textContent = 'Please select a payment method.';
            paymentMessage.className = 'form-message error';
        }
        isValid = false;
    } else if (paymentMessage) {
        paymentMessage.textContent =
            'Payment method selected: ' + selectedPaymentMethod.value;
        paymentMessage.className = 'form-message success';
    }

    return isValid;
}

/* ==================================================
   11. CONTACT AND NEWSLETTER FORMS
   Basic frontend validation only.
   ================================================== */

function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (!newsletterForm || !newsletterEmail || !newsletterMessage) {
        return;
    }

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (isValidEmail(newsletterEmail.value.trim())) {
            newsletterMessage.textContent =
                'Thank you. You will receive KP Living updates soon.';
            newsletterMessage.className = 'form-message success';
            newsletterForm.reset();
        } else {
            newsletterMessage.textContent =
                'Please enter a valid email address.';
            newsletterMessage.className = 'form-message error';
        }
    });
}

function initializeContactForm() {
    if (getCurrentPageName() !== 'contact') {
        return;
    }

    const contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const phoneInput = document.getElementById('contactPhone');
        const messageInput = document.getElementById('contactMessage');
        const contactFormMessage =
            document.getElementById('contactFormMessage');

        let isValid = true;

        if (!validateRequiredInput(nameInput, 'Name is required.')) {
            isValid = false;
        }

        if (!validateEmail(emailInput, true)) {
            isValid = false;
        }

        if (!validateIndianPhone(phoneInput, false)) {
            isValid = false;
        }

        if (!validateRequiredInput(messageInput, 'Message is required.')) {
            isValid = false;
        }

        if (isValid) {
            contactFormMessage.textContent =
                'Message sent successfully. KP Living team will contact you soon.';
            contactFormMessage.className = 'form-message success';
            contactForm.reset();
            showToast('Message submitted successfully');
        } else {
            contactFormMessage.textContent =
                'Please fix the highlighted fields.';
            contactFormMessage.className = 'form-message error';
        }
    });
}

function validateRequiredInput(inputElement, errorMessage) {
    if (!inputElement) {
        return false;
    }

    const value = inputElement.value.trim();

    if (value === '') {
        setFieldError(inputElement, errorMessage);
        return false;
    }

    setFieldSuccess(inputElement);
    return true;
}

function validateEmail(inputElement, isRequired) {
    if (!inputElement) {
        return false;
    }

    const value = inputElement.value.trim();

    if (value === '' && !isRequired) {
        setFieldSuccess(inputElement);
        return true;
    }

    if (value === '') {
        setFieldError(inputElement, 'Email is required.');
        return false;
    }

    if (!isValidEmail(value)) {
        setFieldError(inputElement, 'Please enter a valid email address.');
        return false;
    }

    setFieldSuccess(inputElement);
    return true;
}

function validateIndianPhone(inputElement, isRequired) {
    if (!inputElement) {
        return false;
    }

    const value = inputElement.value.trim();
    const indianPhonePattern = /^[6-9]\d{9}$/;

    if (value === '' && !isRequired) {
        setFieldSuccess(inputElement);
        return true;
    }

    if (value === '') {
        setFieldError(inputElement, 'Phone number is required.');
        return false;
    }

    if (!indianPhonePattern.test(value)) {
        setFieldError(
            inputElement,
            'Enter a valid 10-digit Indian mobile number.'
        );
        return false;
    }

    setFieldSuccess(inputElement);
    return true;
}

function validatePincode(inputElement) {
    if (!inputElement) {
        return false;
    }

    const value = inputElement.value.trim();
    const pincodePattern = /^\d{6}$/;

    if (value === '') {
        setFieldError(inputElement, 'Pincode is required.');
        return false;
    }

    if (!pincodePattern.test(value)) {
        setFieldError(inputElement, 'Pincode must be 6 digits.');
        return false;
    }

    setFieldSuccess(inputElement);
    return true;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function setFieldError(inputElement, message) {
    const formGroup = inputElement.closest('.form-group');
    const smallElement = formGroup ? formGroup.querySelector('small') : null;

    if (formGroup) {
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
    }

    if (smallElement) {
        smallElement.textContent = message;
    }
}

function setFieldSuccess(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    const smallElement = formGroup ? formGroup.querySelector('small') : null;

    if (formGroup) {
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    }

    if (smallElement) {
        smallElement.textContent = '';
    }
}

/* ==================================================
   12. PAGE STARTUP
   DOMContentLoaded runs after the HTML is loaded.
   Each page checks its body data-page value and runs only
   the JavaScript needed for that page.
   ================================================== */

document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeGlobalSearch();
    updateCartCounter();
    initializeHomePage();
    initializeProductsPage();
    initializeProductDetailsPage();
    initializeCartPage();
    initializeCheckoutPage();
    initializeNewsletterForm();
    initializeContactForm();
});
