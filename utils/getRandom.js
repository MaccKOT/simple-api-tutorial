// return random item from array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = getRandomItem;
