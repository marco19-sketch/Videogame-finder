
# 🎮 Game Quest Hub

**Game Quest Hub** is a modern React web application that allows users to explore, discover, and save their favorite video games.
It integrates real-time data from the **RAWG Video Games Database API** and **YouTube**, enabling users to search for games, watch official trailers, and manage their personalized game lists.


## 🚀 Features

* **Game Search** — Find games by title with detailed information including release date, genres, platforms, and more.
* **YouTube Trailers** — Watch gameplay or official trailers directly inside the app.
* **Favorites List** — Save your favorite games for quick access on the *My List* page.
* **Recommendations Page** — Browse a curated selection of 16 handpicked games.
* **User Authentication** — Secure sign-up and login using Firebase Authentication.
* **User Profiles** — Each user has a personalized profile stored in Firebase Firestore.
* **Accessibility Settings** — Improved readability, ARIA roles, and keyboard navigation.
* **Responsive Design** — Fully optimized for desktop and mobile using **Tailwind CSS**.


## 🧱 Tech Stack

| Category               | Technologies                                          |
| ---------------------- | ----------------------------------------------------- |
| **Frontend**           | React 18, React Router, Context API                   |
| **Styling**            | Tailwind CSS                                          |
| **Build Tool**         | Vite                                                  |
| **Backend / Database** | Firebase Authentication, Firestore                    |
| **APIs**               | RAWG API (for games), YouTube Data API (for trailers) |


## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/game-quest-hub.git
   cd game-quest-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root and add your API keys:

   ```bash
   VITE_RAWG_API_KEY=your_rawg_api_key
   VITE_YOUTUBE_API_KEY=your_youtube_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

   > You can obtain free API keys from [RAWG.io](https://rawg.io/apidocs) and [Google Cloud Console](https://console.cloud.google.com/).

4. ### Run the app locally

This project uses **Netlify serverless functions** for API communication, so running it with the default `npm run dev` may not work correctly.

Instead, use:

```bash
npx netlify dev

This command emulates the Netlify environment locally, including redirects, environment variables, and serverless functions.
   ```


## 🧩 Project Structure

```
src/
├── components/        # Reusable UI components (Navbar, Footer, GameCard, etc.)
├── pages/             # App pages (Home, MyList, Recommendations, Contact, etc.)
├── context/           # AppContext for global state
├── firebase/          # Firebase config and utilities
├── customHooks/       # Reusable React hooks
├── assets/            # Images and icons
└── App.jsx            # Main app component
```

---

##  Authentication

* Sign up and login handled by **Firebase Auth**.
* User data (e.g., username, avatar) stored in **Firestore**.
* Protected routes ensure users can only access their own lists.

---

## 📷 Screenshots

*(Add screenshots here — e.g., homepage, search results, game modal, favorites page, etc.)*

---

##  Live Demo

> "https://gamequesthub.netlify.app/"

---

##  Future Improvements

* Implement dark/light mode toggle
* Display user game statistics
* Add community reviews and ratings


##  License

This project is open source and available under the **MIT License**.


### Affiliate Disclosure

Some game links may contain **Amazon affiliate URLs**.  
If you make a purchase through these links, a small commission may be earned at no additional cost to you.  
This helps support the project’s development.
