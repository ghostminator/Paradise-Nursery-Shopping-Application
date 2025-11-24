# Paradise-Nursery-Shopping-Application
A React-based frontend for an e-commerce plant nursery. Features include product categorization, a dynamic shopping cart with quantity adjustments, and global state management for real-time total calculations.

Paradise Nursery is a frontend e-commerce application built with React. This project serves as a virtual plant shopping experience, allowing users to browse various categories of house plants, manage a shopping cart, and view real-time pricing updates.



**Features**

The application is divided into three main distinct interfaces, designed to provide a seamless user experience:

1. Landing Page
Engaging UI: Features a welcoming background image and a brief introduction to the Paradise Nursery brand.

Navigation: A clear "Get Started" call-to-action that directs users to the product catalog.

2. Product Listing Page
Categorized Catalog: Plants are grouped by specific features (e.g., Air Purifying, Aromatic) to assist with browsing.


Plant Cards: Each item displays a thumbnail, name, price, and description.
Smart Interaction:

Add to Cart: Users can add items to their basket.

State Awareness: The "Add to Cart" button becomes disabled and changes text to "Added to Cart" to prevent duplicate entries.

Header Navigation: Includes a persistent navigation bar with the company logo (links to Home) and a dynamic cart icon showing the current total quantity of items.

3. Shopping Cart Page
Cart Management: Displays selected items with thumbnails and unit prices.

Quantity Control: Users can increase or decrease item quantities.

Logic Note: Decreasing an item to zero automatically removes it from the cart and re-enables the "Add to Cart" button on the listing page.

Cost Calculation:

Displays subtotal per item type.

Calculates and displays the Total Cart Quantity and Grand Total Cost.

Checkout: A layout placeholder for the final checkout process.


**Tech Stack**

Framework: React

Styling: CSS / CSS Modules

State Management: React Hooks
