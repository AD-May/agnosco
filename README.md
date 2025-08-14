# Agnosco

Agnosco is a lightweight React application that enables users to search for books via the Google Books API, track reading history, and maintain a wishlist. It provides an intuitive interface for discovering new titles, saving favorites, and managing personal reading data—all powered by localStorage for persistence.

## Table of Contents

- [Features](#Features)
- [Demo](#Demo)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tech Stack](#Stack)
- [Future](#Future)

## Features

- **Search Books**: Query the Google Books API by ISBN, title, or author.
- **Pagination**: Navigate search results 5 books at a time.
- **Reading History**: Mark books as "previously read" and view in a dedicated panel.
- **Wishlist**: Mark books you want to buy or read later.
- **Persistent Client-Side Storage**: All user selections are saved in `localStorage` for persistance across sessions.
- **Responsive UI**: Built with Bootstrap for a responsive, mobile-first design.

## Demo

https://github.com/user-attachments/assets/a4c24fa5-7bb2-48db-bc7b-0d5595bb3887

## Installation

1. Clone the repo:
   `git clone https://github.com/AD-May/agnosco.git
    cd agnosco`
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm start`

*The app will be hosted via Github at the link in the description.

## Usage

- Enter a search term (author, title, or ISBN) in the search bar.
- Click the "Search" button or press Enter to fetch results.
- Use the pagination arrows to navigate through pages of results.
- Click the checkmark (✓) to add a book to "Previously Read".
- Click the gift icon (🎁) to add a book to your wishlist.
- Visit the "Previously Read" and "Wishlist" panels to review or remove saved books.

## Stack

- **React & React Hooks** for UI and state management
- **Bootstrap 5** for layout and styling
- **SASS** for common CSS abstractions
- **Vite** for bundling

## Future

- [ ] Add CSS-implmented bookshelves for wishlisted and previously read books.
- [ ] Add CSS for pulling a book off the shelf.
- [ ] Include Quick Read functionality right on the site.
