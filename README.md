# 🎨 Image Encoder/Decoder

A web-based tool that converts images into binary (JSON) format and decodes them back to visual representation. Perfect for understanding image data structures, data storage, or creating image backups in text format.

![Image Encoder](https://img.shields.io/badge/Tool-Image%20Encoder-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Canvas API](https://img.shields.io/badge/Canvas-HTML5-red)

## 🖼️ Project Description

This application uses the HTML5 Canvas API to extract pixel data from images and convert them into a JSON array format (binary representation). It can also reverse the process, reconstructing images from the encoded data.

## ✨ Features

- **Image Upload**: Load any image file from your device
- **Encode to Binary**: Convert image pixels to JSON array format [R, G, B, Alpha]
- **Decode from Binary**: Reconstruct image from JSON data
- **Canvas Rendering**: Real-time image display and manipulation
- **Transparency Handling**: Preserves alpha channel information
- **Copy/Paste Support**: Easy sharing of encoded data
- **No Server Required**: Fully client-side processing

## 🎯 Use Cases

- **Data Visualization**: Understand how images are stored as pixel data
- **Educational Tool**: Learn about image encoding and RGBA color model
- **Image Backup**: Store images as text in databases or text files
- **Data Transfer**: Share images as JSON in APIs or messaging systems
- **Image Analysis**: Examine pixel-level color information
- **Compression Research**: Experiment with image data formats

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/image-encoder.git
cd image-encoder
```

2. Open `index.html` in your web browser

No dependencies or build process required!

## 📁 Project Structure

```
image-encoder/
│
├── index1.html          # Main HTML file with UI elements
└── index.js           # Core encoding/decoding logic
```

## 🔧 How It Works

### Encoding Process

1. **Image Upload**: User selects an image file
2. **Canvas Drawing**: Image is drawn onto HTML5 canvas
3. **Pixel Extraction**: `getImageData()` extracts RGBA values for each pixel
4. **Array Creation**: Creates 2D array with format `[R, G, B, Alpha]` for each pixel
5. **Transparency Filter**: Pixels with alpha < 50 are converted to `[0,0,0,0]`
6. **JSON Output**: Array is stringified to JSON format

### Decoding Process

1. **JSON Parse**: Reads encoded JSON data
2. **ImageData Creation**: Creates new ImageData object
3. **Pixel Mapping**: Maps each `[R, G, B, Alpha]` value to canvas pixels
4. **Canvas Rendering**: Displays reconstructed image on canvas

## 📊 Data Format

### Encoded Structure

```json
[
  [[255, 0, 0, 255], [0, 255, 0, 255], [0, 0, 255, 255]],
  [[255, 255, 0, 255], [255, 0, 255, 255], [0, 255, 255, 255]],
  [[128, 128, 128, 255], [0, 0, 0, 255], [255, 255, 255, 255]]
]
```

Each pixel is represented as: `[Red, Green, Blue, Alpha]`
- **Red**: 0-255
- **Green**: 0-255
- **Blue**: 0-255
- **Alpha**: 0-255 (transparency)

## 🎮 Usage Guide

### Encoding an Image

1. Click the image input field
2. Select an image file (PNG, JPG, etc.)
3. Image will display on canvas
4. Click **"Encode"** button
5. Binary output appears in the text area
6. Copy the JSON data for storage or transfer

### Decoding an Image

1. Paste encoded JSON data into the text area
2. Click **"Decode"** button
3. Image reconstructs on the canvas
4. Right-click canvas to save the decoded image

## 🔑 Key Features Explained

### Transparency Handling

```javascript
if(alpha < 50){
    row.push([0,0,0,0]);
}
```
Pixels with low transparency (alpha < 50) are treated as fully transparent, reducing data noise.

### Dynamic Canvas Sizing

```javascript
SIZE = image_icon.width
canvas.width = image_icon.width;
canvas.height = image_icon.height;
```
Canvas automatically adjusts to match uploaded image dimensions.

### Pixel-Perfect Encoding

Each pixel's RGBA values are preserved exactly, ensuring lossless encoding/decoding.

## 💡 Technical Details

### Technologies Used

- **HTML5 Canvas API**: Image rendering and pixel manipulation
- **JavaScript FileReader API**: Image file loading
- **JSON**: Data serialization format
- **Vanilla JavaScript**: No external libraries required

### Browser APIs

- `getContext("2d")`: Canvas 2D rendering context
- `getImageData()`: Extract pixel data from canvas
- `createImageData()`: Create new image data object
- `putImageData()`: Render pixel data to canvas
- `URL.createObjectURL()`: Create temporary image URL

## 🌐 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

Requires modern browser with Canvas API support.

## ⚠️ Limitations

- **File Size**: Large images create very large JSON files
- **Performance**: Encoding/decoding large images may take time
- **Memory**: Browser memory limits may affect very large images
- **No Compression**: Raw pixel data without compression

### Recommended Image Sizes

- **Small**: 64×64 to 256×256 (ideal)
- **Medium**: 512×512 (good performance)
- **Large**: 1024×1024+ (may be slow)

## 🚀 Future Enhancements

- [ ] Add image compression options
- [ ] Support for Base64 encoding
- [ ] Download encoded data as .json file
- [ ] Batch processing for multiple images
- [ ] Image format conversion (PNG, JPEG, WebP)
- [ ] Compression algorithms (RLE, LZW)
- [ ] Color palette reduction
- [ ] Image filters and effects
- [ ] Drag-and-drop file upload
- [ ] Progress indicator for large images
- [ ] Side-by-side comparison view
- [ ] Image metadata preservation

## 🧪 Example Use Cases

### Storing Icons as Data

```javascript
const iconData = [[255,0,0,255], [0,255,0,255], [0,0,255,255]];
// Store in database or configuration file
```

### Image Transfer via API

```javascript
fetch('/api/upload', {
    method: 'POST',
    body: JSON.stringify({ imageData: encodedData })
});
```

### Creating Image Backups

```javascript
localStorage.setItem('imageBackup', JSON.stringify(encodedData));
```

## 🐛 Troubleshooting

**Canvas appears blank?**
- Ensure image file is valid
- Check browser console for errors
- Verify image has loaded completely

**Decode not working?**
- Ensure JSON format is valid
- Check for complete data (no truncation)
- Verify square brackets and commas

**Large file hanging?**
- Reduce image size before uploading
- Use smaller images (under 512×512)
- Close other browser tabs to free memory

## 📚 Learning Resources

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [HTML5 ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
- [RGBA Color Model](https://en.wikipedia.org/wiki/RGBA_color_model)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [@Neeraj_Dhyani](https://github.com/Neeraj-Dhyani)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- HTML5 Canvas API for powerful image manipulation
- JSON for simple data serialization
- The web development community

---

**Transform images into data and back again! 🎨↔️💾**

*Made with ❤️ and Canvas API*
