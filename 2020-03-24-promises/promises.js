


function fetchBlueStuff (originalStuff) {
  $.ajax({
    url: '/api/blue-stuff/' + originalStuff.stuffId,
    success: function (blueStuff) {
      fetchRedStuff(blueStuff.username)
    },
    error: showErrorMessage
  })
}

$.ajax({
  url: '/api/get-stuff/',
  success: function (stuff) {
    fetchBlueStuff(stuff)
  },
  error: function (err) {

  }
})


fetch('/api/get-stuff')
  .then(fetchBlueStuff)
  .then(fetchRedStuff)
  .then(fetchGreenStuff)
  .then(showAllTheColors)
  .catch(showErrorMessage)
  // .finally(allFinished)

Promise.all([fetchRedStuff, fetchBlueStuff, fetchGreenStuff])
  .then(showAllTheColors)
  .catch(showErrorMessage)
