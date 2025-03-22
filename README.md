# Clicky Grid

An interactive color grid experience that transforms your clicks into a visual sequence.

## Overview

Chromatic Grid is a simple yet engaging web application that demonstrates interactive patterns and sequences. The application features a 3×3 grid where each cell changes color when clicked, recording the sequence of your interactions. Once all nine cells have been activated, the grid replays your exact sequence with a different color animation.

## Features

- **Interactive 3×3 Grid**: Click on any cell to activate it
- **Sequence Recording**: The application remembers the order of your clicks
- **Visual Feedback**: Cells change to green when clicked
- **Sequence Replay**: After clicking all nine cells, watch as the grid replays your sequence in orange
- **Reset Functionality**: Clear the grid and start a new sequence anytime

## How It Works

1. Click on any of the nine cells in the grid
2. Each cell turns green when clicked and displays its sequence number
3. Continue clicking until all nine cells are activated
4. The grid automatically plays back your exact sequence, illuminating each cell in orange
5. After playback completes, you can start a new sequence

## Technologies Used

- **React**: For building the user interface
- **JavaScript**: For application logic
- **Tailwind CSS**: For styling components
- **Framer Motion**: For smooth animations and transitions
- **Sonner**: For toast notifications

## Project Structure

- `ColorGrid.jsx`: Core component with grid logic and visualization
- `Index.jsx`: Main page layout and application structure

## Getting Started

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd chromatic-grid
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```
4. Open your browser and navigate to `http://localhost:8080`

## Usage

The application is straightforward to use - simply click on cells in any order you prefer. The system will remember your sequence and replay it after all cells have been activated. Use the "Reset Grid" button to start a new sequence at any time.