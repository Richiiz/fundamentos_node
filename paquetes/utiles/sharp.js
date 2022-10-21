const sharp = require('sharp');

sharp('chef_chiquito.jpg')
    .resize(80)
    .grayscale()
    .toFile('resized.jpg')