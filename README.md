
# URL Shortener

A simple URL shortening application built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs into compact short codes
- Track click counts for each shortened URL
- View all shortened URLs in a responsive table
- Automatic redirect from short URL to original URL

## Prerequisites

- Node.js installed
- MongoDB running locally on `mongodb://localhost/urlShortener`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/thuodev/urlShortener.git
cd urlShortener
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the development server:
```bash
npm run devStart
```

2. Open your browser and navigate to `http://localhost:5000`

3. Enter a URL in the input field and click "Shrink"

4. Your shortened URL will appear in the table below

## Project Structure

```
urlShortener/
├── models/
│   └── shortUrls.js       # MongoDB schema for shortened URLs
├── views/
│   └── index.ejs          # EJS template for UI
├── server.js              # Express server setup
├── package.json           # Project dependencies
└── README.md              # This file
```

## Technologies

- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database
- **EJS** - Template engine
- **Bootstrap 5** - UI styling
- **shortid** - Short ID generation
- **Nodemon** - Development auto-reload

## License

ISC
