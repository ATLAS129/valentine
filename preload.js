function preloadImages(imageUrls) {
  // Optional: keep a reference to the images to prevent garbage collection
  // for memory consumption reasons, some developers remove the reference
  // after the onload event fires
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  const list = preloadImages.list;

  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.onload = function () {
      // Image has loaded into the browser cache
      const index = list.indexOf(this);
      if (index !== -1) {
        list.splice(index, 1); // Remove from list once loaded
      }
    };
    img.src = imageUrls[i];
    list.push(img); // Add to the list to maintain reference while loading
  }
}

// Call the function with the list of images you want to cache
const sources = [
  "public/1_Ekd1R2efxOmzf_vnP56wjA.jpg",
  "public/taylor-swift-falling-in-love-1420x798.jpg",
];

// Execute this when the page/app opens
window.onload = function () {
  preloadImages(sources);
};
