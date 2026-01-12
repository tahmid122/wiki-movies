# Wikii Movies - Ultimate Entertainment Hub

<div align="center">

![Wikii Movies](https://img.shields.io/badge/Wikii%20Movies-Entertainment%20Platform-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac?style=flat-square&logo=tailwind-css)

**Your All-in-One Movie Discovery Platform**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Project Structure](#project-structure) • [API Documentation](#api-documentation)

</div>

---

## 📌 Overview

**Wikii Movies** is a modern, feature-rich movie discovery and information platform built with Next.js 16, React 19, and TypeScript. It provides users with comprehensive movie information, trending movies, genre-based browsing, detailed movie pages, and advanced search capabilities. The platform integrates with The Movie Database (TMDB) API to deliver up-to-date movie data, posters, cast information, and recommendations.

Whether you're looking for trending blockbusters, top-rated classics, upcoming releases, or movies currently in theaters, Wikii Movies is your ultimate entertainment hub with an intuitive interface optimized for both desktop and mobile devices.

---

## ✨ Features

### 🎬 Core Features

- **Home Page Dashboard**: Browse multiple movie categories including:

  - 🔥 **Trending Movies**: Weekly trending picks
  - ⭐ **Popular Movies**: Most popular releases
  - 🏆 **Top Rated Movies**: Critically acclaimed films
  - 🎥 **Upcoming Movies**: Release calendar
  - 🎞️ **Movies in Theater**: Current theatrical releases

- **Movie Details Page**: Comprehensive information for each movie:

  - High-quality poster and backdrop images
  - Complete overview and synopsis
  - Release date and runtime
  - Budget information
  - Vote average/ratings
  - Genre tags with browsing links
  - Production company logos
  - Cast and credits with profile images
  - Recommended movies based on genre

- **Advanced Search**: Real-time movie search functionality:

  - Instant search results as you type (debounced)
  - Responsive grid layout for results
  - Direct navigation to movie details
  - Empty state messaging

- **Genre-Based Browsing**: Explore movies by genre:

  - Clickable genre tags from movie pages
  - Paginated results per genre
  - Seamless navigation

- **Pagination System**: Navigate through large datasets:

  - Previous/Next page buttons
  - Direct page number input
  - Smooth transitions between pages

- **Responsive Design**: Mobile-first approach:

  - Desktop navigation with full menu
  - Mobile-optimized navigation with horizontal scrolling
  - Optimized grid layouts for all screen sizes
  - Touch-friendly interface elements

- **Interactive Banner**: Auto-rotating carousel
  - Swiper-based image carousel
  - Auto-play functionality
  - Dynamic pagination bullets

---

## 🛠️ Tech Stack

### Frontend Framework & Libraries

- **Next.js 16.1.1**: React framework with SSR and ISR support
- **React 19.2.3**: UI component library
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework

### UI & Interactive Components

- **Swiper 12.0.3**: Touch slider library for banner carousel
- **React Icons 5.5.0**: Icon library (FontAwesome, Feather, etc.)
- **Huge Icons React 1.1.4**: Additional icon set

### Styling & Animation

- **Tailwind CSS 4**: Modern utility-based styling
- **PostCSS 4**: CSS transformation
- **Custom CSS Utilities**: Scrollbar customization, shadow effects

### Utilities & Loaders

- **ldrs 1.1.9**: Loading skeleton components

### Development Tools

- **ESLint 9**: Code quality and linting
- **Node.js**: Runtime environment

---

## 📋 Project Structure

```
wiki-movies/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with NavBar and Footer
│   │   ├── page.tsx                # Home page with movie sections
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   ├── loading.tsx             # Global loading component
│   │   ├── not-found.tsx           # 404 error page
│   │   ├── api/
│   │   │   └── search/
│   │   │       └── route.ts        # Search API endpoint
│   │   ├── movie/
│   │   │   └── [id]/
│   │   │       ├── page.tsx        # Single movie details page
│   │   │       ├── Cast.tsx        # Movie cast display component
│   │   │       └── Recommended.tsx # Genre-based recommendations
│   │   ├── movies/
│   │   │   ├── [category]/
│   │   │   │   └── [page]/
│   │   │   │       └── page.tsx    # Paginated movies by category
│   │   │   └── genres/
│   │   │       └── [genre]/
│   │   │           └── [genre_id]/
│   │   │               └── [page]/
│   │   │                   ├── page.tsx      # Genre movies listing
│   │   │                   └── Pagination.tsx
│   │   └── search/
│   │       ├── page.tsx            # Search page
│   │       └── SearchResult.tsx    # Search results component
│   ├── components/
│   │   ├── NavBar.tsx              # Navigation header (responsive)
│   │   ├── Footer.tsx              # Footer component
│   │   ├── MoviesCard.tsx          # Movie card display component
│   │   ├── MovieSectionContainer.tsx # Movie section wrapper
│   │   ├── MoviesSection.tsx       # Movie list grid
│   │   ├── Pagination.tsx          # Pagination controls
│   │   ├── SectionTitle.tsx        # Section header component
│   │   ├── SkeltonMovies.tsx       # Loading skeleton UI
│   │   ├── BackWard.tsx            # Back navigation button
│   │   └── home/
│   │       └── Banner.tsx          # Hero banner carousel
│   ├── types/
│   │   ├── movieType.ts            # Movie interface definition
│   │   ├── resultType.ts           # API result interface
│   │   └── singleMovieType.ts      # Detailed movie interface
│   ├── utilities/
│   │   ├── baseUrls.js             # TMDB API base URLs
│   │   ├── customFetch.ts          # Generic fetch utility with ISR
│   │   └── fetchSingleMovie.ts     # Single movie fetch utility
│   └── features/                   # (Reserved for future features)
├── public/
│   └── banner/                     # Banner images
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.mjs              # PostCSS configuration
├── eslint.config.mjs               # ESLint configuration
├── package.json                    # Project dependencies
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18+ and **npm** or **yarn**
- **TMDB API Key** (Get one at https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/wiki-movies.git
   cd wiki-movies
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory:

   ```bash
   TMDB_API_KEY=your_tmdb_api_key_here
   ```

   Replace `your_tmdb_api_key_here` with your actual TMDB API key.

4. **Run Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 📖 Usage

### Home Page

Navigate to the root URL to view:

- Auto-rotating banner carousel
- Trending movies of the week
- Popular movies
- Top-rated movies
- Upcoming releases
- Movies currently in theaters

### Browsing Movies by Category

- Click on a category title or "View More" link to see all movies in that category
- Use pagination controls to navigate between pages
- Each category supports paginated browsing (up to 500+ pages)

### Searching for Movies

1. Click the search icon in the navigation bar
2. Enter a movie title in the search input
3. Results load instantly with a 1-second debounce
4. Click on any movie card to view details

### Viewing Movie Details

1. Click on any movie card to access the detailed page
2. View comprehensive information including:

   - Full movie overview
   - Production companies and logos
   - Cast and credits
   - Budget and runtime
   - Ratings and vote averages
   - Connected genres with links

3. Explore genre-based recommendations at the bottom

### Genre Browsing

- Click on any genre tag from a movie's detail page
- Browse all movies within that genre with pagination support

---

## 🔌 API Documentation

### TMDB Integration

The application uses The Movie Database (TMDB) API v3. All requests include automatic ISR (Incremental Static Regeneration) caching with 60-second revalidation.

#### Base URLs

- **API Base**: `https://api.themoviedb.org/3`
- **Image Base**: `https://image.tmdb.org/t/p/w500`

#### Key API Endpoints Used

| Endpoint               | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `/trending/movie/week` | Fetch trending movies                         |
| `/movie/popular`       | Fetch popular movies                          |
| `/movie/top_rated`     | Fetch top-rated movies                        |
| `/movie/upcoming`      | Fetch upcoming releases                       |
| `/movie/now_playing`   | Fetch movies in theaters                      |
| `/movie/{id}`          | Fetch detailed movie information              |
| `/movie/{id}/credits`  | Fetch cast and crew information               |
| `/discover/movie`      | Discover movies with filters (used for genre) |
| `/search/movie`        | Search for movies by query                    |

### Internal API Routes

#### POST/GET `/api/search`

Real-time movie search endpoint

**Query Parameters:**

- `query` (string, required): Movie title to search for

**Response:**

```json
{
  "page": 1,
  "results": [
    {
      "id": 123,
      "title": "Movie Title",
      "overview": "...",
      "poster_path": "/path/to/poster.jpg",
      "backdrop_path": "/path/to/backdrop.jpg",
      "release_date": "2024-01-01",
      "vote_average": 8.5
    }
  ],
  "total_pages": 10,
  "total_results": 200
}
```

---

## 🎨 Component Architecture

### Page Components

- **`page.tsx` (Home)**: Main landing page with movie sections
- **`movie/[id]/page.tsx`**: Single movie detail view with cast and recommendations
- **`movies/[category]/[page]/page.tsx`**: Category-based movie listing with pagination
- **`movies/genres/[genre]/[genre_id]/[page]/page.tsx`**: Genre-specific movie browsing
- **`search/page.tsx`**: Search interface page

### Reusable Components

- **`NavBar.tsx`**: Responsive navigation with mobile menu
- **`MoviesCard.tsx`**: Individual movie card with hover effects
- **`MoviesSection.tsx`**: Grid display for movie lists
- **`MovieSectionContainer.tsx`**: Section wrapper with title and link
- **`Pagination.tsx`**: Pagination controls (prev, next, input)
- **`SkeltonMovies.tsx`**: Loading skeleton UI
- **`Banner.tsx`**: Auto-rotating carousel using Swiper
- **`Cast.tsx`**: Cast member display with profile images
- **`Recommended.tsx`**: Genre-based recommendations
- **`Footer.tsx`**: Footer component
- **`BackWard.tsx`**: Back navigation button

---

## 🎯 Key Features Breakdown

### 1. **Incremental Static Regeneration (ISR)**

All data fetches use ISR with 60-second revalidation:

```typescript
{
  next: {
    revalidate: 60;
  }
}
```

This ensures:

- Blazing-fast page loads via static generation
- Automatic data updates every minute
- Optimal SEO performance

### 2. **Debounced Search**

Search results use a 1-second debounce to:

- Reduce API calls while typing
- Provide responsive user experience
- Optimize performance

### 3. **Responsive Design**

- Mobile-first approach using Tailwind CSS
- Adaptive grid layouts (2-6 columns based on screen size)
- Touch-optimized navigation

### 4. **Type Safety**

Full TypeScript implementation with:

- Defined interfaces for API responses
- Strong typing throughout the codebase
- Better IDE support and developer experience

### 5. **Image Optimization**

- Next.js Image component for optimal delivery
- Remote image support from TMDB
- Lazy loading by default
- Responsive sizing

---

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes (320px - 2560px+)

---

## 🔐 Environment Variables

```env
TMDB_API_KEY=your_api_key_here
```

**Getting Your API Key:**

1. Visit https://www.themoviedb.org/settings/api
2. Create a free account or log in
3. Request an API key
4. Copy your API key and add it to `.env.local`

---

## 📊 Performance Optimizations

- **Next.js 16**: Latest framework with improved bundling
- **Incremental Static Regeneration**: Smart caching strategy
- **Image Optimization**: Automatic format selection and sizing
- **Code Splitting**: Automatic page-based code splitting
- **Tailwind CSS 4**: Optimized CSS delivery
- **Debounced Search**: Reduced API calls
- **Suspense Boundaries**: Better loading states

---

## 🐛 Troubleshooting

### Common Issues

**Q: Getting TMDB_API_KEY is undefined error**

- Ensure `.env.local` file exists in the project root
- Restart the development server after adding environment variables
- Verify the API key is correctly copied without extra spaces

**Q: Images not loading**

- Check that TMDB API key is valid and active
- Verify internet connection
- Check browser console for specific error messages

**Q: Search not working**

- Clear browser cache
- Check network tab in DevTools for API errors
- Ensure API key has search permissions enabled

---

## 🚀 Future Enhancement Ideas

- User authentication and favorites system
- Watch list functionality
- Movie reviews and ratings
- Advanced filters (release year, language, etc.)
- Dark/Light theme toggle
- Multi-language support
- Trailer integration and playback
- User profiles and personalized recommendations
- Movie comparison tool

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

## 📌 Disclaimer

This is a portfolio project. Not for commercial uses. The design of this website is inspired by **[Bioscope+](https://www.bioscopeplus.com/)**. API for movie posters and details used from **[The Movie Database (TMDB)](https://www.themoviedb.org/)**.

---

**Made with ❤️ by Tahmid Alam**

**Whatsapp: +88 01318195591**
**Email: mdtahmidalam122@gmail.com**

<div align="center">

**[⬆ back to top](#wikii-movies---ultimate-entertainment-hub)**

</div>
