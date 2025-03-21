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

First, create the necessary directories if they don't exist:

```bash
mkdir -p src/assets/videos/original
mkdir -p src/assets/videos/analyzed
mkdir -p src/assets/thumbnails
```

Then, add your media files:

1. Place your media files in these directories:
   ```
   src/
   ├── assets/
       ├── videos/
       │   ├── original/     # Place original echocardiogram videos here
       │   │   ├── patient-001-2024-03-15-original.mp4
       │   │   └── ...
       │   │
       │   └── analyzed/     # Place AI-analyzed videos here
       │       ├── patient-001-2024-03-15-analyzed.mp4
       │       └── ...
       │
       └── thumbnails/       # Place video thumbnails here
           ├── patient-001-2024-03-15.jpg
           └── ...
   ```

2. Follow the naming convention:
   - Original videos: `patient-[ID]-[DATE]-original.mp4`
   - Analyzed videos: `patient-[ID]-[DATE]-analyzed.mp4`
   - Thumbnails: `patient-[ID]-[DATE].jpg`

   Example:
   ```
   patient-001-2024-03-15-original.mp4
   patient-001-2024-03-15-analyzed.mp4
   patient-001-2024-03-15.jpg
   ```

3. Supported formats:
   - Videos: MP4 format (H.264 codec recommended)
   - Thumbnails: JPG or PNG format (recommended size: 320x240px)

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
