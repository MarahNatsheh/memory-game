// Dynamically import all images from the Images directory
const images = require.context('../Images', false, /\.(png|jpe?g|svg)$/);

// Separate flower images and the EducativeIcon
const flowerImages = images.keys()
  .filter((filename) => !filename.includes('EducativeIcon')) // Exclude EducativeIcon
  .map((filename) => ({
    src: images(filename), // Load flower images
    matched: false, // Initialize the matched property
  }));

const educativeIcon = {
  src: images('./EducativeIcon.png'), // Load the EducativeIcon specifically
  matched: false,
};

// Export flower images and EducativeIcon separately
export const cardImages = flowerImages;
export const educativeCard = educativeIcon;
