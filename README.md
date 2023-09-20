# Image2Base64

## Overview

**Image2Base64** is a straightforward web-based tool for converting image files into base64-encoded data URI schemes. This can be highly useful for embedding images directly into HTML, CSS, or JavaScript files without requiring an external image file.

**Live Demo:** [https://base64.tricks.se/](https://base64.tricks.se/)

## Features

- **Support for Various Image Types:** Handles JPEG, PNG, GIF, and more.
- **Ease of Use:** Simply upload an image and get the base64 data.
- **Fast Conversion:** Built for speed and efficiency.
- **Browser Compatibility:** Designed to work on all modern web browsers.


## Usage

1. **Visit the Website:** Navigate to [https://base64.tricks.se/](https://base64.tricks.se/). !!!(Ctrl+ Right Click to open it in a new tab)
  
2. **Upload an Image:** Click the 'Upload' button to select an image file for conversion.
  
3. **Retrieve Base64 Data:** After uploading, the base64-encoded data URI scheme will appear. Copy this data for use in your project.

### How to Use Base64 Data in a Webpage

To use the base64-encoded image data in an HTML page, you can include it like this:

```html
<img src="data:image/png;base64, YOUR_BASE64_DATA_HERE " alt="Your Image">
