/*
==================================================
KP Living - Main JavaScript File
Technology: Vanilla JavaScript only
Purpose:
1. Mobile menu
2. Sticky header
3. Product rendering
4. Product search and filters
5. Product details page
6. Cart using localStorage
7. Checkout validation
8. Contact form validation
9. Newsletter validation
==================================================
*/

/*
==================================================
1. PRODUCT DATA
All product data is stored in this JavaScript array.
No backend is used.
==================================================
*/

// function createImageUrl(keyword, imageNumber) {
//     return (
//         'https://source.unsplash.com/900x700/?' +
//         encodeURIComponent(keyword) +
//         '&sig=' +
//         imageNumber
//     );
// }

// function createProductImages(keyword, startNumber) {
//     return [
//         createImageUrl(keyword, startNumber),
//         createImageUrl(keyword + ' furniture', startNumber + 1),
//         createImageUrl(keyword + ' home decor', startNumber + 2),
//         createImageUrl(keyword + ' modern indian home', startNumber + 3),
//     ];
// }

function getUnsplashImage(photoId) {
    return 'https://images.unsplash.com/' + photoId + '?auto=format&fit=crop&w=900&q=80';
}

function createProductImages(keyword, startNumber) {
    const productKeyword = keyword.toLowerCase();

    const sofaImages = [getUnsplashImage('photo-1555041469-a586c61ea9bc'), getUnsplashImage('photo-1540574163026-643ea20ade25'), getUnsplashImage('photo-1618220179428-22790b461013'), getUnsplashImage('photo-1616486338812-3dadae4b4ace')];

    const bedImages = [getUnsplashImage('photo-1505693416388-ac5ce068fe85'), getUnsplashImage('photo-1616594039964-ae9021a400a0'), getUnsplashImage('photo-1560448204-e02f11c3d0e2'), getUnsplashImage('photo-1615873968403-89e068629265')];

    const diningImages = [getUnsplashImage('photo-1617806118233-18e1de247200'), getUnsplashImage('photo-1604578762246-41134e37f9cc'), getUnsplashImage('photo-1560184897-ae75f418493e'), getUnsplashImage('photo-1600210491892-03d54c0aaf87')];

    const chairImages = [getUnsplashImage('photo-1586023492125-27b2c045efd7'), getUnsplashImage('photo-1567538096630-e0c55bd6374c'), getUnsplashImage('photo-1506439773649-6e0eb8cfb237'), getUnsplashImage('photo-1592078615290-033ee584e267')];

    const deskImages = [getUnsplashImage('photo-1518455027359-f3f8164ba6bd'), getUnsplashImage('photo-1497366754035-f200968a6e72'), getUnsplashImage('photo-1516321318423-f06f85e504b3'), getUnsplashImage('photo-1524758631624-e2822e304c36')];

    const storageImages = [getUnsplashImage('photo-1595428774223-ef52624120d2'), getUnsplashImage('photo-1594026112284-02bb6f3352fe'), getUnsplashImage('photo-1598300042247-d088f8ab3a91'), getUnsplashImage('photo-1583847268964-b28dc8f51f92')];

    const decorImages = [getUnsplashImage('photo-1513519245088-0e12902e5a38'), getUnsplashImage('photo-1524758631624-e2822e304c36'), getUnsplashImage('photo-1494438639946-1ebd1d20bf85'), getUnsplashImage('photo-1485955900006-10f4d324d411')];

    const balconyImages = [getUnsplashImage('photo-1600210491369-e753d80a41f3'), getUnsplashImage('photo-1600607687939-ce8a6c25118c'), getUnsplashImage('photo-1600566753151-384129cf4e3e'), getUnsplashImage('photo-1600607687920-4e2a09cf159d')];

    const defaultFurnitureImages = [getUnsplashImage('photo-1618220179428-22790b461013'), getUnsplashImage('photo-1616486338812-3dadae4b4ace'), getUnsplashImage('photo-1555041469-a586c61ea9bc'), getUnsplashImage('photo-1600210491892-03d54c0aaf87')];

    if (productKeyword.includes('sofa') || productKeyword.includes('sectional')) {
        return sofaImages;
    }

    if (productKeyword.includes('bed') || productKeyword.includes('mattress')) {
        return bedImages;
    }

    if (productKeyword.includes('dining')) {
        return diningImages;
    }

    if (productKeyword.includes('chair') || productKeyword.includes('recliner')) {
        return chairImages;
    }

    if (productKeyword.includes('desk') || productKeyword.includes('study') || productKeyword.includes('office')) {
        return deskImages;
    }

    if (productKeyword.includes('storage') || productKeyword.includes('cabinet') || productKeyword.includes('wardrobe') || productKeyword.includes('shoe') || productKeyword.includes('bookshelf') || productKeyword.includes('shelf') || productKeyword.includes('tv unit')) {
        return storageImages;
    }

    if (productKeyword.includes('lamp') || productKeyword.includes('mirror') || productKeyword.includes('rug') || productKeyword.includes('cushion') || productKeyword.includes('curtain') || productKeyword.includes('decor') || productKeyword.includes('vase') || productKeyword.includes('mandir')) {
        return decorImages;
    }

    if (productKeyword.includes('balcony')) {
        return balconyImages;
    }

    return defaultFurnitureImages;
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
        description: 'A warm wooden sofa set with comfortable cushions, made for family seating and daily Indian home use.',
        dimensions: '82 x 34 x 32 inches',
        delivery: 'Free delivery in selected cities. Usually delivered within 5 to 8 days.',
        images: createProductImages('wooden sofa set living room', 1),
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
        description: 'A spacious L shape sofa for movie nights, family talks, and weekend comfort.',
        dimensions: '102 x 68 x 33 inches',
        delivery: 'Delivered within 7 to 10 days. Assembly support available in selected cities.',
        images: createProductImages('beige l shape sectional sofa', 10),
    },
    {
        id: 'veer-comfort-recliner',
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
        description: 'A relaxing recliner for reading, watching TV, and evening rest after a long day.',
        dimensions: '38 x 36 x 40 inches',
        delivery: 'Delivered within 4 to 7 days. No complicated assembly required.',
        images: createProductImages('brown recliner chair', 20),
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
        description: 'A light and breathable cane chair that adds a warm Indian touch to your room.',
        dimensions: '28 x 28 x 34 inches',
        delivery: 'Usually delivered within 5 to 7 days.',
        images: createProductImages('cane chair wooden furniture', 30),
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
        description: 'A sturdy queen size bed with a clean headboard and warm wooden finish for peaceful sleep.',
        dimensions: '84 x 64 x 38 inches',
        delivery: 'Delivered in 6 to 9 days. Assembly support included in selected cities.',
        images: createProductImages('queen size wooden bed', 40),
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
        description: 'A premium storage bed for compact homes where extra space is always useful.',
        dimensions: '85 x 66 x 40 inches',
        delivery: 'Delivered in 8 to 12 days with assembly support.',
        images: createProductImages('wooden storage bed', 50),
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
        description: 'A supportive mattress designed for comfortable sleep and better back support.',
        dimensions: '78 x 60 x 6 inches',
        delivery: 'Rolled pack delivery within 3 to 6 days.',
        images: createProductImages('white orthopedic mattress', 60),
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
        description: 'A solid dining table made for family dinners, guests, and festive meals.',
        dimensions: '72 x 36 x 30 inches',
        delivery: 'Delivered within 7 to 10 days. Assembly available in selected cities.',
        images: createProductImages('wooden dining table', 70),
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
        description: 'A simple and strong study desk for students, coding practice, and work-from-home use.',
        dimensions: '42 x 22 x 30 inches',
        delivery: 'Delivered within 4 to 6 days.',
        images: createProductImages('wooden study desk', 80),
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
        description: 'A clean bookshelf for books, decor, study notes, and everyday storage.',
        dimensions: '30 x 14 x 66 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: createProductImages('wooden bookshelf', 90),
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
        description: 'A slim shoe rack that keeps the entrance clean and works well for compact homes.',
        dimensions: '32 x 14 x 36 inches',
        delivery: 'Delivered within 3 to 6 days.',
        images: createProductImages('wooden shoe rack', 100),
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
        description: 'A neat storage cabinet for clothes, files, toys, kitchen extras, or home essentials.',
        dimensions: '36 x 16 x 54 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: createProductImages('white storage cabinet', 110),
    },
    {
        id: 'rajasthan-two-door-wardrobe',
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
        description: 'A practical wardrobe with hanging space and shelves for organized daily storage.',
        dimensions: '32 x 20 x 72 inches',
        delivery: 'Delivered within 7 to 10 days with assembly support.',
        images: createProductImages('wooden wardrobe', 120),
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
        description: 'A beautiful wooden coffee table for snacks, chai, books, and living room decor.',
        dimensions: '42 x 22 x 18 inches',
        delivery: 'Delivered within 4 to 6 days.',
        images: createProductImages('wooden coffee table', 130),
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
        description: 'A small side table for lamps, books, water bottles, and bedside essentials.',
        dimensions: '18 x 18 x 22 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: createProductImages('wooden side table', 140),
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
        description: 'A compact balcony chair set for morning tea, evening chai, and relaxed talks.',
        dimensions: '2 chairs and 1 table set',
        delivery: 'Delivered within 4 to 7 days.',
        images: createProductImages('balcony chair set', 150),
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
        description: 'An ergonomic office chair for work-from-home, study, coding, and long desk hours.',
        dimensions: '24 x 24 x 42 inches',
        delivery: 'Delivered within 3 to 6 days.',
        images: createProductImages('ergonomic office chair', 160),
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
        description: 'A modern office desk with enough space for laptop, monitor, books, and notes.',
        dimensions: '48 x 24 x 30 inches',
        delivery: 'Delivered within 4 to 7 days.',
        images: createProductImages('office desk wooden metal', 170),
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
        description: 'A graceful mandir unit with storage for pooja items and a calm home prayer space.',
        dimensions: '30 x 16 x 60 inches',
        delivery: 'Delivered within 5 to 9 days.',
        images: createProductImages('home mandir unit', 180),
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
        description: 'A warm floor lamp that gives your living room a calm and premium evening glow.',
        dimensions: '15 x 15 x 58 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: createProductImages('floor lamp living room', 190),
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
        description: 'A clean wall mirror that makes rooms feel brighter and more open.',
        dimensions: '24 x 36 inches',
        delivery: 'Delivered within 4 to 6 days with safe packaging.',
        images: createProductImages('wooden wall mirror', 200),
    },
    {
        id: 'banaras-pattern-rug',
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
        description: 'A soft patterned rug that adds warmth and character to your living room floor.',
        dimensions: '5 x 7 feet',
        delivery: 'Delivered within 3 to 5 days.',
        images: createProductImages('cream brown rug living room', 210),
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
        description: 'A set of soft cushions that brings color and comfort to your sofa or bed.',
        dimensions: '16 x 16 inches, set of 5',
        delivery: 'Delivered within 2 to 4 days.',
        images: createProductImages('colorful cushion set', 220),
    },
    {
        id: 'malabar-cotton-curtains',
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
        description: 'Simple beige curtains that soften sunlight and make your room feel calm.',
        dimensions: 'Door size, set of 2',
        delivery: 'Delivered within 2 to 5 days.',
        images: createProductImages('beige curtains living room', 230),
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
        description: 'A wall shelf for books, plants, frames, and small decor without using floor space.',
        dimensions: '36 x 8 x 10 inches',
        delivery: 'Delivered within 3 to 5 days.',
        images: createProductImages('wooden wall shelf', 240),
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
        description: 'A smart TV unit with shelves for set-top box, books, decor, and living room storage.',
        dimensions: '60 x 16 x 22 inches',
        delivery: 'Delivered within 5 to 8 days.',
        images: [
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
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
        description: 'A warm ceramic vase set for shelves, coffee tables, side tables, and festive decor.',
        dimensions: 'Set of 3 assorted sizes',
        delivery: 'Delivered within 2 to 5 days with safe packaging.',
        images: createProductImages('ceramic vase set', 260),
    },
];

/*
==================================================
2. GLOBAL VARIABLES AND HELPER FUNCTIONS
==================================================
*/

const cartStorageKey = 'kpLivingCart';

let productsVisibleCount = 12;
let selectedDetailsQuantity = 1;
let checkoutCouponDiscount = 0;

function getCurrentPageName() {
    return document.body.getAttribute('data-page') || '';
}

function formatPrice(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

function getQueryParameter(parameterName) {
    const urlParameters = new URLSearchParams(window.location.search);
    return urlParameters.get(parameterName);
}

function findProductById(productId) {
    return products.find(function (product) {
        return product.id === productId;
    });
}

function createRatingStars(rating) {
    const roundedRating = Math.round(rating);
    let starsText = '';

    for (let count = 1; count <= 5; count++) {
        if (count <= roundedRating) {
            starsText = starsText + '★';
        } else {
            starsText = starsText + '☆';
        }
    }

    return starsText;
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

/*
==================================================
3. NAVIGATION AND GLOBAL SEARCH
==================================================
*/

function initializeTopStrip() {
    const topStrip = document.getElementById('topStrip');
    const topStripCloseButton = document.getElementById('topStripCloseButton');
    const topStripStorageKey = 'kpLivingTopStripClosed';

    if (!topStrip || !topStripCloseButton) {
        return;
    }

    const isTopStripClosed = localStorage.getItem(topStripStorageKey) === 'true';

    if (isTopStripClosed) {
        topStrip.classList.add('hide');
        return;
    }

    topStripCloseButton.addEventListener('click', function () {
        topStrip.classList.add('hide');
        localStorage.setItem(topStripStorageKey, 'true');
    });
}

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

        if (searchText === '') {
            window.location.href = 'products.html';
            return;
        }

        window.location.href = 'products.html?search=' + encodeURIComponent(searchText);
    });
}

/*
==================================================
4. CART STORAGE FUNCTIONS
==================================================
*/

function getCart() {
    const cartString = localStorage.getItem(cartStorageKey);

    if (!cartString) {
        return [];
    }

    try {
        return JSON.parse(cartString);
    } catch (error) {
        localStorage.removeItem(cartStorageKey);
        return [];
    }
}

function saveCart(cartItems) {
    localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
}

function updateCartCounter() {
    const counterElement = document.getElementById('cartCounter');

    if (!counterElement) {
        return;
    }

    const cartItems = getCart();
    let totalQuantity = 0;

    cartItems.forEach(function (cartItem) {
        totalQuantity = totalQuantity + cartItem.quantity;
    });

    counterElement.textContent = totalQuantity;
}

function addProductToCart(productId, quantityToAdd) {
    const product = findProductById(productId);

    if (!product) {
        showToast('Product not found');
        return;
    }

    const cartItems = getCart();

    const existingCartItem = cartItems.find(function (cartItem) {
        return cartItem.id === productId;
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
        cartItems = cartItems.filter(function (cartItem) {
            return cartItem.id !== productId;
        });
    } else {
        cartItems = cartItems.map(function (cartItem) {
            if (cartItem.id === productId) {
                return {
                    id: cartItem.id,
                    quantity: newQuantity,
                };
            }

            return cartItem;
        });
    }

    saveCart(cartItems);
    updateCartCounter();
}

function removeProductFromCart(productId) {
    const cartItems = getCart();

    const updatedCartItems = cartItems.filter(function (cartItem) {
        return cartItem.id !== productId;
    });

    saveCart(updatedCartItems);
    updateCartCounter();
}

function getCartWithProductDetails() {
    const cartItems = getCart();

    const detailedCartItems = cartItems
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

    return detailedCartItems;
}

function calculateCartTotals(couponDiscountAmount) {
    const detailedCartItems = getCartWithProductDetails();

    let subtotalBeforeDiscount = 0;
    let subtotalAfterProductDiscount = 0;

    detailedCartItems.forEach(function (item) {
        subtotalBeforeDiscount = subtotalBeforeDiscount + item.product.oldPrice * item.quantity;
        subtotalAfterProductDiscount = subtotalAfterProductDiscount + item.product.price * item.quantity;
    });

    const productDiscount = subtotalBeforeDiscount - subtotalAfterProductDiscount;
    const safeCouponDiscount = Math.min(couponDiscountAmount || 0, subtotalAfterProductDiscount);
    const taxableAmount = Math.max(subtotalAfterProductDiscount - safeCouponDiscount, 0);
    const deliveryCharge = taxableAmount === 0 || taxableAmount >= 25000 ? 0 : 299;
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

/*
==================================================
5. PRODUCT CARD CREATION
==================================================
*/

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

				<div class="product-rating">
					${createRatingStars(product.rating)} ${product.rating} (${product.reviews})
				</div>

				<p>${product.description}</p>

				<div class="price-row">
					<span class="current-price">${formatPrice(product.price)}</span>
					<span class="old-price">${formatPrice(product.oldPrice)}</span>
				</div>

				<div class="product-actions">
					<button type="button" class="secondary-button view-details-button" data-product-id="${product.id}">
						View Details
					</button>

					<button type="button" class="primary-button add-cart-button" data-product-id="${product.id}">
						Add to Cart
					</button>
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
            const productId = viewDetailsButton.getAttribute('data-product-id');
            localStorage.setItem('kpLivingSelectedProduct', productId);
            window.location.href = 'product-details.html?id=' + encodeURIComponent(productId);
        }

        if (addCartButton) {
            const productId = addCartButton.getAttribute('data-product-id');
            addProductToCart(productId, 1);
            showToast('Product added to cart');

            setTimeout(function () {
                window.location.href = 'cart.html';
            }, 500);
        }
    });
}

/*
==================================================
6. HOME PAGE
==================================================
*/

function renderHomeProductSection(gridElement, productList) {
    if (!gridElement) {
        return;
    }

    gridElement.innerHTML = productList.map(createProductCard).join('');
    attachProductCardEvents(gridElement);
}

function initializeHomePage() {
    if (getCurrentPageName() !== 'home') {
        return;
    }

    const bestSellerGrid = document.getElementById('bestSellerGrid');
    const newArrivalGrid = document.getElementById('newArrivalGrid');

    const bestSellerProducts = products
        .slice()
        .sort(function (firstProduct, secondProduct) {
            return secondProduct.popularity - firstProduct.popularity;
        })
        .slice(0, 6);

    const newArrivalProducts = products
        .filter(function (product) {
            return product.isNew;
        })
        .sort(function (firstProduct, secondProduct) {
            return secondProduct.popularity - firstProduct.popularity;
        })
        .slice(0, 6);

    renderHomeProductSection(bestSellerGrid, bestSellerProducts);
    renderHomeProductSection(newArrivalGrid, newArrivalProducts);
}

/*
==================================================
7. PRODUCTS PAGE
==================================================
*/

function getUniqueProductValues(keyName) {
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

function fillSelectOptions(selectId, values) {
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

function initializeProductFilterOptions() {
    fillSelectOptions('categoryFilter', getUniqueProductValues('category'));
    fillSelectOptions('roomFilter', getUniqueProductValues('room'));
    fillSelectOptions('materialFilter', getUniqueProductValues('material'));
    fillSelectOptions('colorFilter', getUniqueProductValues('color'));
}

function setProductFiltersFromUrl() {
    const searchQuery = getQueryParameter('search');
    const categoryQuery = getQueryParameter('category');
    const roomQuery = getQueryParameter('room');
    const discountQuery = getQueryParameter('discount');
    const sortQuery = getQueryParameter('sort');

    const productSearchInput = document.getElementById('productSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const roomFilter = document.getElementById('roomFilter');
    const discountFilter = document.getElementById('discountFilter');
    const sortSelect = document.getElementById('sortSelect');

    if (searchQuery && productSearchInput) {
        productSearchInput.value = searchQuery;
    }

    if (categoryQuery && categoryFilter) {
        categoryFilter.value = categoryQuery;
    }

    if (roomQuery && roomFilter) {
        roomFilter.value = roomQuery;
    }

    if (discountQuery && discountFilter) {
        discountFilter.value = discountQuery;
    }

    if (sortQuery && sortSelect) {
        sortSelect.value = sortQuery;
    }
}

function getCurrentProductFilterValues() {
    const productSearchInput = document.getElementById('productSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const roomFilter = document.getElementById('roomFilter');
    const priceFilter = document.getElementById('priceFilter');
    const materialFilter = document.getElementById('materialFilter');
    const colorFilter = document.getElementById('colorFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const discountFilter = document.getElementById('discountFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    const sortSelect = document.getElementById('sortSelect');

    return {
        searchText: productSearchInput ? productSearchInput.value.trim().toLowerCase() : '',
        category: categoryFilter ? categoryFilter.value : '',
        room: roomFilter ? roomFilter.value : '',
        priceRange: priceFilter ? priceFilter.value : '',
        material: materialFilter ? materialFilter.value : '',
        color: colorFilter ? colorFilter.value : '',
        rating: ratingFilter ? ratingFilter.value : '',
        discount: discountFilter ? discountFilter.value : '',
        availability: availabilityFilter ? availabilityFilter.value : '',
        sortBy: sortSelect ? sortSelect.value : 'default',
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

function getFilteredProducts() {
    const filters = getCurrentProductFilterValues();

    let filteredProducts = products.filter(function (product) {
        const searchableText = [product.name, product.category, product.room, product.material, product.color, product.description].join(' ').toLowerCase();

        const matchesSearch = filters.searchText === '' || searchableText.includes(filters.searchText);
        const matchesCategory = filters.category === '' || product.category === filters.category;
        const matchesRoom = filters.room === '' || product.room === filters.room;
        const matchesPrice = productMatchesPriceRange(product, filters.priceRange);
        const matchesMaterial = filters.material === '' || product.material === filters.material;
        const matchesColor = filters.color === '' || product.color === filters.color;
        const matchesRating = filters.rating === '' || product.rating >= Number(filters.rating);
        const matchesDiscount = filters.discount === '' || product.discount >= Number(filters.discount);
        const matchesAvailability = filters.availability === '' || product.availability === filters.availability;

        return matchesSearch && matchesCategory && matchesRoom && matchesPrice && matchesMaterial && matchesColor && matchesRating && matchesDiscount && matchesAvailability;
    });

    filteredProducts = sortProductList(filteredProducts, filters.sortBy);

    return filteredProducts;
}

function sortProductList(productList, sortBy) {
    const sortedList = productList.slice();

    if (sortBy === 'price-low') {
        sortedList.sort(function (firstProduct, secondProduct) {
            return firstProduct.price - secondProduct.price;
        });
    }

    if (sortBy === 'price-high') {
        sortedList.sort(function (firstProduct, secondProduct) {
            return secondProduct.price - firstProduct.price;
        });
    }

    if (sortBy === 'rating-high') {
        sortedList.sort(function (firstProduct, secondProduct) {
            return secondProduct.rating - firstProduct.rating;
        });
    }

    if (sortBy === 'discount-high') {
        sortedList.sort(function (firstProduct, secondProduct) {
            return secondProduct.discount - firstProduct.discount;
        });
    }

    if (sortBy === 'popularity') {
        sortedList.sort(function (firstProduct, secondProduct) {
            return secondProduct.popularity - firstProduct.popularity;
        });
    }

    if (sortBy === 'newest') {
        sortedList.sort(function (firstProduct, secondProduct) {
            if (firstProduct.isNew === secondProduct.isNew) {
                return secondProduct.popularity - firstProduct.popularity;
            }

            return firstProduct.isNew ? -1 : 1;
        });
    }

    return sortedList;
}

function renderProductsPage() {
    const productsGrid = document.getElementById('productsGrid');
    const productCountHeading = document.getElementById('productCountHeading');
    const productCountText = document.getElementById('productCountText');
    const emptyProductsMessage = document.getElementById('emptyProductsMessage');
    const loadMoreButton = document.getElementById('loadMoreButton');

    if (!productsGrid) {
        return;
    }

    const filteredProducts = getFilteredProducts();
    const visibleProducts = filteredProducts.slice(0, productsVisibleCount);

    productsGrid.innerHTML = visibleProducts.map(createProductCard).join('');

    if (productCountHeading) {
        productCountHeading.textContent = 'All Products';
    }

    if (productCountText) {
        productCountText.textContent = 'Showing ' + visibleProducts.length + ' of ' + filteredProducts.length + ' products';
    }

    if (emptyProductsMessage) {
        if (filteredProducts.length === 0) {
            emptyProductsMessage.classList.add('show');
        } else {
            emptyProductsMessage.classList.remove('show');
        }
    }

    if (loadMoreButton) {
        if (productsVisibleCount >= filteredProducts.length) {
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

    initializeProductFilterOptions();
    setProductFiltersFromUrl();
    renderProductsPage();

    const productsGrid = document.getElementById('productsGrid');
    const loadMoreButton = document.getElementById('loadMoreButton');
    const clearFiltersButton = document.getElementById('clearFiltersButton');

    attachProductCardEvents(productsGrid);

    const filterElementIds = ['productSearchInput', 'categoryFilter', 'roomFilter', 'priceFilter', 'materialFilter', 'colorFilter', 'ratingFilter', 'discountFilter', 'availabilityFilter', 'sortSelect'];

    filterElementIds.forEach(function (elementId) {
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
            filterElementIds.forEach(function (elementId) {
                const element = document.getElementById(elementId);

                if (element) {
                    if (elementId === 'sortSelect') {
                        element.value = 'default';
                    } else {
                        element.value = '';
                    }
                }
            });

            productsVisibleCount = 12;
            renderProductsPage();
        });
    }
}

/*
==================================================
8. PRODUCT DETAILS PAGE
==================================================
*/

function initializeProductDetailsPage() {
    if (getCurrentPageName() !== 'product-details') {
        return;
    }

    const detailsContainer = document.getElementById('productDetailsContainer');
    const relatedProductsGrid = document.getElementById('relatedProductsGrid');

    if (!detailsContainer) {
        return;
    }

    const productIdFromUrl = getQueryParameter('id');
    const productIdFromStorage = localStorage.getItem('kpLivingSelectedProduct');
    const selectedProductId = productIdFromUrl || productIdFromStorage || products[0].id;
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

			<div class="product-rating">
				${createRatingStars(selectedProduct.rating)} ${selectedProduct.rating} (${selectedProduct.reviews} reviews)
			</div>

			<p class="details-description">${selectedProduct.description}</p>

			<div class="price-row">
				<span class="current-price">${formatPrice(selectedProduct.price)}</span>
				<span class="old-price">${formatPrice(selectedProduct.oldPrice)}</span>
			</div>

			<div class="details-table">
				<div>
					<span>Material</span>
					<span>${selectedProduct.material}</span>
				</div>

				<div>
					<span>Dimensions</span>
					<span>${selectedProduct.dimensions}</span>
				</div>

				<div>
					<span>Room Type</span>
					<span>${selectedProduct.room}</span>
				</div>

				<div>
					<span>Discount</span>
					<span>${selectedProduct.discount}% OFF</span>
				</div>

				<div>
					<span>Availability</span>
					<span>${selectedProduct.availability}</span>
				</div>
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
	`;

    initializeProductDetailsEvents(selectedProduct);
    renderRelatedProducts(selectedProduct, relatedProductsGrid);
}

function initializeProductDetailsEvents(selectedProduct) {
    const mainDetailsImage = document.getElementById('mainDetailsImage');
    const thumbnailButtons = document.querySelectorAll('.thumbnail-button');
    const decreaseButton = document.getElementById('decreaseDetailsQuantity');
    const increaseButton = document.getElementById('increaseDetailsQuantity');
    const quantityText = document.getElementById('detailsQuantityText');
    const addToCartButton = document.getElementById('detailsAddToCartButton');
    const buyNowButton = document.getElementById('detailsBuyNowButton');

    thumbnailButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            thumbnailButtons.forEach(function (thumbnailButton) {
                thumbnailButton.classList.remove('active');
            });

            button.classList.add('active');

            if (mainDetailsImage) {
                mainDetailsImage.src = button.getAttribute('data-image-url');
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
            const isSameProduct = product.id === selectedProduct.id;
            const isRelatedCategory = product.category === selectedProduct.category;
            const isRelatedRoom = product.room === selectedProduct.room;

            return !isSameProduct && (isRelatedCategory || isRelatedRoom);
        })
        .slice(0, 4);

    relatedProductsGrid.innerHTML = relatedProducts.map(createProductCard).join('');
    attachProductCardEvents(relatedProductsGrid);
}

/*
==================================================
9. CART PAGE
==================================================
*/

function initializeCartPage() {
    if (getCurrentPageName() !== 'cart') {
        return;
    }

    renderCartPage();
}

function renderCartPage() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const checkoutButton = document.getElementById('checkoutButton');

    if (!cartItemsContainer) {
        return;
    }

    const detailedCartItems = getCartWithProductDetails();

    if (detailedCartItems.length === 0) {
        cartItemsContainer.innerHTML = '';

        if (emptyCartMessage) {
            emptyCartMessage.classList.add('show');
        }

        if (checkoutButton) {
            checkoutButton.style.pointerEvents = 'none';
            checkoutButton.style.opacity = '0.5';
        }

        updateCartSummary();
        return;
    }

    if (emptyCartMessage) {
        emptyCartMessage.classList.remove('show');
    }

    if (checkoutButton) {
        checkoutButton.style.pointerEvents = 'auto';
        checkoutButton.style.opacity = '1';
    }

    cartItemsContainer.innerHTML = detailedCartItems
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

    attachCartItemEvents(cartItemsContainer);
    updateCartSummary();
}

function attachCartItemEvents(cartItemsContainer) {
    cartItemsContainer.onclick = function (event) {
        const increaseButton = event.target.closest('.increase-cart-item');
        const decreaseButton = event.target.closest('.decrease-cart-item');
        const removeButton = event.target.closest('.remove-cart-item');

        if (increaseButton) {
            const productId = increaseButton.getAttribute('data-product-id');
            const cartItem = getCart().find(function (item) {
                return item.id === productId;
            });

            if (cartItem) {
                updateCartItemQuantity(productId, cartItem.quantity + 1);
                renderCartPage();
            }
        }

        if (decreaseButton) {
            const productId = decreaseButton.getAttribute('data-product-id');
            const cartItem = getCart().find(function (item) {
                return item.id === productId;
            });

            if (cartItem) {
                updateCartItemQuantity(productId, cartItem.quantity - 1);
                renderCartPage();
            }
        }

        if (removeButton) {
            const productId = removeButton.getAttribute('data-product-id');
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
        subtotalElement.textContent = formatPrice(totals.subtotalBeforeDiscount);
    }

    if (discountElement) {
        discountElement.textContent = '-' + formatPrice(totals.productDiscount);
    }

    if (deliveryElement) {
        if (totals.deliveryCharge === 0) {
            deliveryElement.textContent = 'Free';
        } else {
            deliveryElement.textContent = formatPrice(totals.deliveryCharge);
        }
    }

    if (taxElement) {
        taxElement.textContent = formatPrice(totals.tax);
    }

    if (totalElement) {
        totalElement.textContent = formatPrice(totals.totalAmount);
    }
}

/*
==================================================
10. CHECKOUT PAGE
==================================================
*/

function initializeCheckoutPage() {
    if (getCurrentPageName() !== 'checkout') {
        return;
    }

    renderCheckoutSummary();
    initializeCouponSystem();
    initializeCheckoutForm();
}

function renderCheckoutSummary() {
    const checkoutItemsContainer = document.getElementById('checkoutItemsContainer');

    if (!checkoutItemsContainer) {
        return;
    }

    const detailedCartItems = getCartWithProductDetails();

    if (detailedCartItems.length === 0) {
        checkoutItemsContainer.innerHTML = `
			<div class="empty-state show">
				<h3>No items in cart</h3>
				<p>Add products before checkout.</p>
				<a href="products.html" class="primary-button">Shop Products</a>
			</div>
		`;
    } else {
        checkoutItemsContainer.innerHTML = detailedCartItems
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
    const deliveryElement = document.getElementById('checkoutDelivery');
    const taxElement = document.getElementById('checkoutTax');
    const totalElement = document.getElementById('checkoutTotal');

    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(totals.subtotalBeforeDiscount);
    }

    if (discountElement) {
        discountElement.textContent = '-' + formatPrice(totals.productDiscount + totals.couponDiscount);
    }

    if (deliveryElement) {
        if (totals.deliveryCharge === 0) {
            deliveryElement.textContent = 'Free';
        } else {
            deliveryElement.textContent = formatPrice(totals.deliveryCharge);
        }
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

        if (couponCode === '') {
            couponMessage.textContent = 'Please enter a coupon code.';
            couponMessage.className = 'form-message error';
            updateCheckoutTotals();
            return;
        }

        if (couponCode === 'FESTIVE500') {
            if (cartValue >= 5000) {
                checkoutCouponDiscount = 500;
                couponMessage.textContent = 'FESTIVE500 applied. You saved ₹500.';
                couponMessage.className = 'form-message success';
            } else {
                couponMessage.textContent = 'FESTIVE500 works on orders above ₹5,000.';
                couponMessage.className = 'form-message error';
            }
        } else if (couponCode === 'KPLIVING10') {
            checkoutCouponDiscount = Math.round(cartValue * 0.1);
            couponMessage.textContent = 'KPLIVING10 applied. You saved 10%.';
            couponMessage.className = 'form-message success';
        } else {
            couponMessage.textContent = 'Invalid coupon. Try FESTIVE500 or KPLIVING10.';
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

        localStorage.removeItem(cartStorageKey);
        updateCartCounter();

        checkoutCouponDiscount = 0;

        const successBox = document.getElementById('orderSuccessBox');

        if (successBox) {
            successBox.textContent = 'Order placed successfully. Thank you for shopping with KP Living. Our team will contact you soon for delivery updates.';
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
    const selectedPaymentMethod = document.querySelector("input[name='paymentMethod']:checked");
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
    } else {
        if (paymentMessage) {
            paymentMessage.textContent = 'Payment method selected: ' + selectedPaymentMethod.value;
            paymentMessage.className = 'form-message success';
        }
    }

    return isValid;
}

/*
==================================================
11. NEWSLETTER AND CONTACT FORMS
==================================================
*/

function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (!newsletterForm || !newsletterEmail || !newsletterMessage) {
        return;
    }

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailValue = newsletterEmail.value.trim();

        if (isValidEmail(emailValue)) {
            newsletterMessage.textContent = 'Thank you. You will receive KP Living updates soon.';
            newsletterMessage.className = 'form-message success';
            newsletterForm.reset();
        } else {
            newsletterMessage.textContent = 'Please enter a valid email address.';
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
        const contactFormMessage = document.getElementById('contactFormMessage');

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
            if (contactFormMessage) {
                contactFormMessage.textContent = 'Message sent successfully. KP Living team will contact you soon.';
                contactFormMessage.className = 'form-message success';
            }

            contactForm.reset();
            showToast('Message submitted successfully');
        } else {
            if (contactFormMessage) {
                contactFormMessage.textContent = 'Please fix the highlighted fields.';
                contactFormMessage.className = 'form-message error';
            }
        }
    });
}

/*
==================================================
12. FORM VALIDATION HELPERS
==================================================
*/

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
        setFieldError(inputElement, 'Enter a valid 10-digit Indian mobile number.');
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

/*
==================================================
13. PAGE STARTUP
This runs after the HTML page is loaded.
Each page uses data-page to run only the required code.
==================================================
*/

document.addEventListener('DOMContentLoaded', function () {
    initializeTopStrip();
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
