# Movie App

A modern, feature-rich movie browsing application built with React Native and Expo. Browse trending movies, search for your favorites, save them to your collection, and view detailed information about each film.

## Features

- Browse trending and popular movies
- Search functionality to find specific movies
- Save favorite movies with persistent storage
- View detailed movie information including cast, ratings, and overview
- Beautiful dark-themed UI with smooth animations
- Tab-based navigation for easy access to different sections
- User profile with statistics and preferences

## Tech Stack

### Core Technologies
- **React Native** (v0.81.4) - Cross-platform mobile app framework
- **Expo** (v54.0.12) - Development platform for React Native
- **TypeScript** (v5.9.2) - Type-safe JavaScript
- **React** (v19.1.0) - UI library

### Navigation & Routing
- **Expo Router** (v6.0.10) - File-based routing system
- **React Navigation** (v7.1.8) - Navigation library
- **Bottom Tabs** (v7.4.0) - Tab-based navigation

### State Management & Storage
- **React Context API** - Global state management for favorites
- **AsyncStorage** (v2.2.0) - Persistent local storage

### UI & Animations
- **React Native Reanimated** (v4.1.1) - Smooth animations
- **React Native Gesture Handler** (v2.28.0) - Touch gestures
- **Safe Area Context** (v5.6.0) - Handle device safe areas
- **Expo Haptics** (v15.0.7) - Tactile feedback

### Backend & API
- **React Native Appwrite** (v0.16.0) - Backend services integration
- **TMDB API** - Movie data and information

### Other Libraries
- **Expo Vector Icons** (v15.0.2) - Icon library
- **Expo Image** (v3.0.8) - Optimized image component
- **Expo Status Bar** (v3.0.8) - Status bar management

## Folder Structure

```
Movie_App/
├── app/                          # Main application code
│   ├── (tabs)/                   # Tab-based screens
│   │   ├── index.jsx            # Home screen (trending movies)
│   │   ├── search.jsx           # Search movies screen
│   │   ├── fav.jsx              # Favorites collection screen
│   │   ├── profile.jsx          # User profile screen
│   │   └── _layout.tsx          # Tab navigator layout
│   ├── movie/                    # Movie details
│   │   └── [id].tsx             # Dynamic movie details screen
│   └── _layout.tsx              # Root layout configuration
│
├── components/                   # Reusable components
│   ├── MovieCard.jsx            # Movie card display component
│   ├── searchBar.jsx            # Search input component
│   └── tabIcon.jsx              # Custom tab icon component
│
├── constants/                    # Static constants
│   ├── appImages.jsx            # Image asset mappings
│   └── icons.jsx                # Icon asset mappings
│
├── context/                      # React Context providers
│   └── FavoritesContext.tsx     # Favorites state management
│
├── assets/                       # Static assets
│   ├── images/                  # App images and backgrounds
│   └── icons/                   # Icon files
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── app.json                     # Expo configuration
└── README.md                    # Project documentation
```

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Movie_App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on your preferred platform:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app for physical device

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality

## Key Features Breakdown

### Home Screen
Displays trending movies with sorting options (popular, top-rated, now playing). Features a custom search bar and movie cards with ratings and release dates.

### Search Screen
Full-screen search functionality to find movies by title with real-time results and responsive movie grid display.

### Favorites Screen
Shows saved favorite movies with persistent storage using AsyncStorage. Displays empty state when no favorites are saved.

### Profile Screen
User profile with statistics, account settings, preferences, and app information. Features a clean, organized section-based layout.

### Movie Details
Detailed view of each movie including poster, title, overview, ratings, release date, runtime, and cast information.

## Development

This project uses:
- File-based routing with Expo Router
- TypeScript for type safety
- Context API for state management
- AsyncStorage for data persistence
- Custom hooks for reusable logic

## License

This project is private and not open for public distribution.
