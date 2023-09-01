const imageUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/2560px-Altja_j%C3%B5gi_Lahemaal.jpg',
  'https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg',
  'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
  // Add more image URLs here
];

const imageDisplay = document.getElementById('imageDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function displayImage(index) {
  imageDisplay.src = imageUrls[index];
}

function showPreviousImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = imageUrls.length - 1;
  }
  displayImage(currentIndex);
}

function showNextImage() {
  if (currentIndex < imageUrls.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  displayImage(currentIndex);
}

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

// Display the first image when the page loads
displayImage(currentIndex);
