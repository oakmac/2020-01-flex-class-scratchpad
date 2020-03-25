// Part 1 - .then() chaining
// Given an array of urls:

const urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
]

// Use $.get() and a chain of .then() calls to fetch these URLs one by one.
// After each .get() is done, console log "data was fetched!"

$.get(urls[0]).then(function (dogImage) {
  console.log('data was fetched:', dogImage)
  return $.get(urls[1])
}).then(function (dogImage) {
  console.log('data was fetched:', dogImage)
  return $.get(urls[2])
}).then(function (dogImage) {
  console.log('data was fetched:', dogImage)
  return $.get(urls[3])
}).then(function (dogImage) {
  console.log('data was fetched:', dogImage)
  return $.get(urls[4])
}).then(function (dogImage) {
  console.log('data was fetched:', dogImage)
}).catch(function (err) {
  console.error('error fetching a dog image :(')
})

// The above --^ fetches each dog image one-by-one. Waiting for the last image
// to finish loading before requesting the next one.

// By contrast below, we can fetch all the dog images concurrently by making
// an array of Promises and throwing them into Promise.all

function convertURLTojQueryPromise (url) {
  return $.get(url)
}

const dogImagePromises = urls.map(convertURLTojQueryPromise)

Promise.all(dogImagePromises).then(function (allImages) {
  console.log('All of the dog images fetched concurrently:')
  console.log(allImages)
})
