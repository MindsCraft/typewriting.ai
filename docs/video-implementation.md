# Video Implementation in Hero Section

## Overview
This document provides instructions on how to implement a video in the hero section of the Typewriting.ai website.

## Implementation Details
The hero section has been updated to include a video player that will display your demo video. The implementation includes:

1. A video element with controls, autoplay, muted, loop, and playsInline attributes
2. A fallback display that shows when the video is loading or unavailable
3. JavaScript to handle the transition between the video and fallback display
4. The fallback display has `pointer-events-none` to ensure it doesn't interfere with video hover interactions

## How to Add Your Video

### Step 1: Prepare Your Video
- Format: MP4 is recommended for best browser compatibility
- Resolution: 16:9 aspect ratio is recommended (the container has `aspect-video` class)
- Size: Keep the file size reasonable for fast loading (under 10MB if possible)
- Duration: Short videos (30-60 seconds) work best for hero sections

### Step 2: Add the Video to the Project
1. Rename your video file to `demo-video.mp4`
2. Place the file in the `public` directory of the project
   - The video will be accessed at the URL path `/demo-video.mp4`

### Step 3: Alternative Video Path (Optional)
If you want to use a different filename or path for your video:
1. Open `src/app/home/Hero.tsx`
2. Find the line: `<source src="/demo-video.mp4" type="video/mp4" />`
3. Change the `src` attribute to match your video's path
   - Example: `<source src="/videos/my-custom-video.mp4" type="video/mp4" />`

### Step 4: Testing
1. Start the development server
2. Visit the homepage and verify that the video plays correctly
3. Test on different devices and browsers to ensure compatibility

## Customization Options

### Video Controls
The video element has the following attributes and behaviors:
- `controls`: Shows video controls (play, pause, volume, etc.) only when hovering over the video
- `autoPlay`: Automatically starts playing when the page loads
- `muted`: Starts with no sound (required for autoplay in most browsers)
- `loop`: Continuously plays the video
- `playsInline`: Plays inline on iOS devices instead of fullscreen
- `controlsList="nodownload"`: Prevents the download option from appearing in the controls
- Hover behavior: Controls only appear when the user hovers over the video and disappear when the mouse leaves

The hover behavior is implemented using the following event handlers:
```jsx
onMouseEnter={(e) => e.currentTarget.controls = true}
onMouseLeave={(e) => e.currentTarget.controls = false}
```

You can modify these attributes and event handlers in `src/app/home/Hero.tsx` based on your preferences.

### Styling
The video is styled with `className="w-full h-full object-cover"` which makes it fill the container while maintaining its aspect ratio. You can adjust this styling as needed.

## Troubleshooting
- If the video doesn't play, check the browser console for errors
- Ensure the video file is in the correct location and format
- Some browsers have restrictions on autoplay; the video must be muted to autoplay
