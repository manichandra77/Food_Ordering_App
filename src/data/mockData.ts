import { FoodItem } from '../types';

export const mockFoodItems: FoodItem[] = [
  // Main Course
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy tomato curry with tender chicken pieces',
    price: 320,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500',
    category: 'main-course',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '2',
    name: 'Mutton Biryani',
    description: 'Aromatic basmati rice with spiced mutton',
    price: 450,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d6?w=500',
    category: 'main-course',
    isVeg: false,
    subcategory: 'mutton'
  },
  {
    id: '3',
    name: 'Fish Curry',
    description: 'Traditional coastal fish curry with coconut',
    price: 380,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500',
    category: 'main-course',
    isVeg: false,
    subcategory: 'fish'
  },
  {
    id: '4',
    name: 'Paneer Butter Masala',
    description: 'Rich cottage cheese curry in tomato gravy',
    price: 280,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500',
    category: 'main-course',
    isVeg: true
  },
  {
    id: '101',
    name: 'Chicken & Rice Bowl',
    description: 'Savory chicken served over aromatic rice',
    price: 250,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
    category: 'main-course',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '102',
    name: 'Vegetable Pulao',
    description: 'Fragrant basmati rice with mixed vegetables',
    price: 180,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500',
    category: 'main-course',
    isVeg: true
  },
  {
    id: '103',
    name: 'Egg Fried Rice',
    description: 'Wok-tossed rice with scrambled eggs and vegetables',
    price: 150,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500',
    category: 'main-course',
    isVeg: false
  },
  {
    id: '104',
    name: 'Jeera Rice with Dal',
    description: 'Cumin-scented rice served with lentil curry',
    price: 140,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500',
    category: 'main-course',
    isVeg: true
  },
  {
    id: '105',
    name: 'Shrimp Biryani',
    description: 'Aromatic basmati rice with succulent shrimp',
    price: 480,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500',
    category: 'main-course',
    isVeg: false,
    subcategory: 'prawns'
  },

  // Starters
  {
    id: '5',
    name: 'Chicken Tikka',
    description: 'Grilled chicken marinated in yogurt and spices',
    price: 220,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '6',
    name: 'Mutton Seekh Kebab',
    description: 'Spiced minced mutton skewers',
    price: 280,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'mutton'
  },
  {
    id: '7',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with bell peppers',
    price: 180,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
    category: 'starters',
    isVeg: true
  },
  {
    id: '201',
    name: 'Tandoori Chicken',
    description: 'Clay oven roasted chicken with traditional spices',
    price: 350,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '202',
    name: 'Seekh Kebab (Chicken)',
    description: 'Spiced minced chicken skewers',
    price: 260,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '203',
    name: 'Shami Kebab',
    description: 'Tender minced meat patties with aromatic spices',
    price: 240,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'mutton'
  },
  {
    id: '204',
    name: 'Chicken 65',
    description: 'Spicy deep-fried chicken with curry leaves',
    price: 280,
    image: 'https://images.unsplash.com/photo-1606491956537-12fb9ab1e60f?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '205',
    name: 'Chilli Chicken',
    description: 'Indo-Chinese style chicken with bell peppers',
    price: 300,
    image: 'https://images.unsplash.com/photo-1606491956391-491b2b12c4ba?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },
  {
    id: '206',
    name: 'Fish Amritsari',
    description: 'Crispy batter-fried fish from Punjab',
    price: 320,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'fish'
  },
  {
    id: '207',
    name: 'Chilli Prawns',
    description: 'Spicy stir-fried prawns with onions and peppers',
    price: 380,
    image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'prawns'
  },
  {
    id: '208',
    name: 'Chicken Lollipop',
    description: 'Drumette-style chicken wings with spicy coating',
    price: 320,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
    category: 'starters',
    isVeg: false,
    subcategory: 'chicken'
  },

  // Soups
  {
    id: '8',
    name: 'Chicken Corn Soup',
    description: 'Hearty soup with chicken and sweet corn',
    price: 120,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    category: 'soups',
    isVeg: false
  },
  {
    id: '9',
    name: 'Tomato Soup',
    description: 'Classic creamy tomato soup',
    price: 90,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '301',
    name: 'Creamy Tomato & Basil Elixir',
    description: 'Velvety tomato soup infused with fresh basil',
    price: 110,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '302',
    name: 'Roasted Butternut Squash Velvet',
    description: 'Smooth and creamy roasted squash soup',
    price: 130,
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '303',
    name: 'Mushroom & Thyme Woodland Broth',
    description: 'Earthy mushroom soup with aromatic thyme',
    price: 140,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '304',
    name: 'Spiced Lentil & Coconut Harmony',
    description: 'Fragrant lentil soup with coconut milk',
    price: 120,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '305',
    name: 'Garden Fresh Minestrone Medley',
    description: 'Italian vegetable soup with fresh herbs',
    price: 125,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '306',
    name: 'Asian Lemongrass & Prawn Infusion',
    description: 'Thai-inspired soup with prawns and lemongrass',
    price: 180,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    category: 'soups',
    isVeg: false
  },
  {
    id: '307',
    name: 'Smoked Chicken & Sweet Corn Chowder',
    description: 'Rich and hearty chicken corn soup',
    price: 160,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    category: 'soups',
    isVeg: false
  },
  {
    id: '308',
    name: 'Carrot & Ginger Sunshine Sip',
    description: 'Vibrant carrot soup with a ginger kick',
    price: 110,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '309',
    name: 'Broccoli Cheddar Bliss',
    description: 'Creamy broccoli soup with melted cheddar',
    price: 150,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500',
    category: 'soups',
    isVeg: true
  },
  {
    id: '310',
    name: 'Clear Vegetable Noodle Nectar',
    description: 'Light and refreshing vegetable noodle soup',
    price: 100,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    category: 'soups',
    isVeg: true
  },

  // Desserts
  {
    id: '10',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings in sugar syrup',
    price: 80,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '11',
    name: 'Kulfi',
    description: 'Traditional Indian ice cream',
    price: 60,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '401',
    name: 'Decadent Dark Chocolate Lava Indulgence',
    description: 'Molten chocolate cake with liquid center',
    price: 180,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '402',
    name: 'Rasmalai Rose Petal Dream',
    description: 'Classic Indian dessert with rose essence',
    price: 120,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '403',
    name: 'Mango & Cardamom Kulfi Cloud',
    description: 'Creamy, aromatic, and refreshing Indian ice cream',
    price: 100,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '404',
    name: 'Blueberry Lavender Cheesecake Serenity',
    description: 'Unique flavor pairings with a calming feel',
    price: 220,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '405',
    name: 'Pistachio & Saffron Baklava Bites',
    description: 'Rich, nutty, and traditional Middle Eastern sweet',
    price: 160,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '406',
    name: 'Caramelized Apple Crumble Symphony',
    description: 'Harmonious blend of textures and sweet-tart flavors',
    price: 140,
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '407',
    name: 'Berry Burst Panna Cotta Delight',
    description: 'Light, creamy, and fruity',
    price: 130,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '408',
    name: 'Gulab Jamun Golden Globes',
    description: 'Classic Indian sweet with rich syrup',
    price: 90,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '409',
    name: 'Coconut Passion Fruit Mousse Cloud',
    description: 'Light, tropical, and airy',
    price: 150,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500',
    category: 'desserts',
    isVeg: true
  },
  {
    id: '410',
    name: 'Espresso Martini Tiramisu Rhapsody',
    description: 'Sophisticated and spirited dessert',
    price: 200,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
    category: 'desserts',
    isVeg: true
  },

  // Gourmet
  {
    id: '12',
    name: 'Lobster Thermidor',
    description: 'Luxurious lobster in creamy sauce',
    price: 850,
    image: 'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '501',
    name: 'Pan-Seared Scallops with Saffron Risotto',
    description: 'Premium scallops with saffron risotto & asparagus spears',
    price: 950,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '502',
    name: 'Duck Confit with Cherry Gastrique',
    description: 'Classic French technique with cherry sauce & creamy polenta',
    price: 880,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '503',
    name: 'Herb-Crusted Rack of Lamb',
    description: 'Premium lamb with rosemary jus & root vegetable puree',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '504',
    name: 'Black Truffle & Wild Mushroom Gnocchi',
    description: 'Luxurious gnocchi in brown butter sage sauce',
    price: 750,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500',
    category: 'gourmet',
    isVeg: true
  },
  {
    id: '505',
    name: 'Aged Balsamic Glazed Salmon',
    description: 'Premium salmon with quinoa pilaf & roasted broccolini',
    price: 720,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '506',
    name: 'Deconstructed Chicken Tikka Masala',
    description: 'Modern take with cilantro foam & basmati arancini',
    price: 680,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '507',
    name: 'Sous Vide Pork Belly',
    description: 'Tender pork with apple cider reduction & crispy crackling',
    price: 820,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '508',
    name: 'Saffron Poached Pear Salad',
    description: 'Elegant salad with goat cheese, candied pecans & fig vinaigrette',
    price: 480,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500',
    category: 'gourmet',
    isVeg: true
  },
  {
    id: '509',
    name: 'Pan-Roasted Halibut',
    description: 'Fresh halibut with lemon-dill beurre blanc & heirloom tomato confit',
    price: 890,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500',
    category: 'gourmet',
    isVeg: false
  },
  {
    id: '510',
    name: 'Venison Loin with Juniper Berry Reduction',
    description: 'Game meat with unique flavors & parsnip puree',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    category: 'gourmet',
    isVeg: false
  }
];
