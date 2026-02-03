# VideoHost - Local Video Hosting Website

A simple video hosting website template that demonstrates how a recommendation database algorithm works. Designed for local hosting with sample videos from public sources.

## Features

- Responsive video grid layout
- Video playback functionality
- Recommendation algorithm visualization
- Sample videos and thumbnails from public sources
- Easy local hosting setup

## How the Recommendation Algorithm Works

1. **Data Collection**: The system gathers data on user interactions, viewing habits, and preferences
2. **Content Analysis**: Video metadata like tags, categories, and descriptions are analyzed
3. **Similarity Matching**: Videos similar to those you've enjoyed are identified
4. **Personalized Recommendations**: Based on your preferences, new videos are suggested

## Getting Started

1. Make sure you have Python 3 installed on your system
2. Run the local server using the provided script:
   ```bash
   ./run_server.sh
   ```
3. Open your web browser and go to `http://localhost:8000`

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Styling for the website
- `script.js` - JavaScript functionality including the recommendation algorithm
- `server.py` - Python server to host the website locally
- `run_server.sh` - Bash script to easily start the server
- `README.md` - This documentation file

## Video Sources

All videos and thumbnails are sourced from public domains:

- Thumbnails: picsum.photos (placeholder images)
- Sample videos: Google's sample video bucket (Big Buck Bunny trailer)

## Usage

- Browse through the trending videos
- Click on any video thumbnail to play it
- View the recommendation algorithm explanation section
- Explore the recommended videos section

## Customization

To add your own videos:
1. Place video files in the `/videos` directory
2. Place corresponding thumbnails in the `/thumbnails` directory
3. Update the video data array in `script.js` with your video information

## License

This project is open source and available under the MIT License.