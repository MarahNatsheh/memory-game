const images = require.context('../Images', false, /\.(png|jpe?g|svg)$/);

const flowerImages = images.keys()
  .filter((filename) => !filename.includes('EducativeIcon')) 
  .map((filename) => ({
    src: images(filename), 
    matched: false, 
  }));

const educativeIcon = {
  src: images('./EducativeIcon.png'), 
  matched: false,
};

export const cardImages = flowerImages;
export const educativeCard = educativeIcon;
