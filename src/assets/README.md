# Media Assets Structure

This directory contains all media assets for the echocardiography analysis application.

## Directory Structure

```
src/assets/
├── thumbnails/          # Thumbnail images for the recordings list
├── videos/
│   ├── original/       # Original echocardiogram recordings
│   └── analyzed/       # Analyzed videos with ventricle overlays
```

## Naming Conventions

### Thumbnails
Format: `patient-{id}-{date}.{ext}`
Example: `patient-001-2024-03-15.jpg`

### Videos
Format: `patient-{id}-{date}-{type}.{ext}`
Example: 
- Original: `patient-001-2024-03-15-original.mp4`
- Analyzed: `patient-001-2024-03-15-analyzed.mp4`

## File Requirements

### Thumbnails
- Format: JPG or PNG
- Size: 200x150px
- Max file size: 100KB

### Videos
- Format: MP4
- Resolution: 1280x720 (16:9 aspect ratio)
- Codec: H.264
- Max file size: 50MB per video

## Usage in Code

```typescript
// Import thumbnails
import thumbnail from '../assets/thumbnails/patient-001-2024-03-15.jpg'

// Import videos
import originalVideo from '../assets/videos/original/patient-001-2024-03-15-original.mp4'
import analyzedVideo from '../assets/videos/analyzed/patient-001-2024-03-15-analyzed.mp4'
```

## Notes
- Keep patient IDs consistent across thumbnails and videos
- Use the recording date in the filename for easy reference
- Ensure all filenames are lowercase and use hyphens for separators
- Maintain the same naming pattern for all new recordings 