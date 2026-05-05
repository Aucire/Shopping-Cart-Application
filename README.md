#  React Shopping Cart App

A modern, responsive **React-based shopping application** that allows users to browse products, filter items, manage a cart, and place orders with real-time total cost calculation. The app also includes a sleek **dark mode** for enhanced user experience.

---

##  Features

-  **Product Listing**
  - Displays a collection of shopping items dynamically

- 🔍 **Filtering System**
  - Filter products based on categories, names, or criteria

-  **Dark Mode Toggle**
  - Seamless theme switching (light ↔ dark)

-  **Cart Management**
  - Add items to cart  
  - Remove items from cart  
  - View selected items in real-time  

-  **Order & Total Calculation**
  - Automatically computes total price using `reduce()`
  - Displays formatted totals

-  **Responsive Design**
  - Optimized for mobile, tablet, and desktop

---

##  Tech Stack

- **Frontend:** React (with Hooks)
- **Build Tool:** Vite  
- **Styling:** CSS / Tailwind CSS (optional)
- **State Management:** React `useState` / `useContext`

---

##  Project Structure

```bash
src/
│── components/
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── Cart.jsx
│   ├── Filter.jsx
│   └── Navbar.jsx
│
│── context/
│   └── CartContext.jsx
│
│── data/
│   └── products.js
│
│── App.jsx
│── main.jsx
|
|____index.html

```bash

⚙️ Installation & Setup

Clone the repository:

-git clone https://github.com/your-username/react-shopping-cart.git
-cd react-shopping-cart

Install dependencies:
npm install
Start development server:
npm run dev
Open in browser:
http://localhost:5173

🧮 Example: Total Calculation

The total cost is computed using reduce():

const total = cart.reduce((sum, item) => sum + item.price, 0);

Formatted for display:

Dark Mode Implementation
Uses state toggling (useState)
Applies conditional CSS classes
Can be extended using CSS variables or Tailwind themes


Product Listing
Cart View
Dark Mode
   Future Improvements
   User authentication (login/signup)
   Payment integration (Stripe / PayPal)
   Backend integration (Node.js / Firebase)
   Product ratings & reviews
   Smart recommendations
   Known Limitations
   No persistent storage (cart resets on refresh)
   No backend (currently frontend-only)


License

This project is licensed under the MIT License.

👤 Author

   JAMES OSIRE

GitHub: https://github.com/Aucire
Email: your-email@example.com
💡 Final Note

This project demonstrates core frontend engineering concepts:

   State management
   Component architecture
   Data transformation (map, filter, reduce)
   UI/UX responsiveness

