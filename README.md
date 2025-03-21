# Rapha - AI-Powered Echocardiogram Analysis

Rapha is a modern web application that provides automated analysis of echocardiograms, focusing on heart component segmentation and ejection fraction calculation. The application offers a user-friendly interface for medical professionals to upload, view, and analyze echocardiogram recordings.

## Features

- 📊 Automated analysis of echocardiogram recordings
- 🫀 Heart component segmentation
- 📈 Real-time calculation of key metrics:
  - Ejection Fraction
  - End Systolic Volume
  - End Diastolic Volume
  - Heart Rate
- 🎥 Side-by-side comparison of original and analyzed recordings
- 📱 Responsive design for various screen sizes

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Video.js (for video playback)

## Project Structure

```
src/
├── assets/
│   ├── brand/        # Logo and brand assets
│   ├── thumbnails/   # Video thumbnails
│   └── videos/       # Original and analyzed videos
├── components/       # React components
└── types/           # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v18.16.1 or higher)
- npm (v9.5.1 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rapha.git
cd rapha
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Adding Your Own Recordings

1. Place your echocardiogram recordings in:
   - Original videos: `src/assets/videos/original/`
   - Analyzed videos: `src/assets/videos/analyzed/`
   - Thumbnails: `src/assets/thumbnails/`

2. Follow the naming convention:
   - Original: `patient-001-2024-03-15-original.mp4`
   - Analyzed: `patient-001-2024-03-15-analyzed.mp4`
   - Thumbnail: `patient-001-2024-03-15.jpg`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Powered by Vite
