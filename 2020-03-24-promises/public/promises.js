// Promise has three possible states (always):
// - pending
// - fulfilled (success)
// - rejected (error)

// Promises RESOLVE to some value

// Everything you do with a promise involves a Function
// .then() --> calls upon fulfilled
// .catch() --> calls upon rejected
// .finally() --> calls "at the end" no matter what

// You can chain these together to make dealing with asynchronous things easier.

// Less commonly-used methods:
// - Promise.all()
// - Promise.any()
// - Promise.race()
// - Promise.resolve()

// fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

function sumNumbers (num1, num2) {
  return window.fetch('/api1/sum/' + num1 + '/' + num2).then(parseJSONResponse)
}

// fetchBestFruit().then(function (result) {
//   console.log(result)
// })

// sumNumbers(3, 4).then((response) => {
//   console.log(response)
// })

function fetchEndpointThatDoesNotExist () {
  return window.fetch('/api1/aubrey').then(parseJSONResponse)
}

function fetchBestFruit () {
  return window.fetch('/api1/best-fruit').then(parseJSONResponse)
}

function parseJSONResponse (response) {
  return response.json()
}

// fetch('/api/get-stuff')
//   .then(fetchBlueStuff)
//   .then(fetchRedStuff)
//   .then(fetchGreenStuff)
//   .then(showAllTheColors)
//   .catch(showErrorMessage)
//   .finally(allFinished)

// Promise.all([fetchRedStuff, fetchBlueStuff, fetchGreenStuff])
//   .then(showAllTheColors)
//   .catch(showErrorMessage)

function clickBtn1 () {
  console.log('click button 1 happened!')
  fetchBestFruit()
    .then(function (result) {
    console.log('result from fetchBestFruit function:')
    console.log(result)
  }).catch(function (err) {
    console.log('fetch best fruit failed, and here is why:')
    console.log(err)
  }).finally(function () {
    console.log('I will happen no matter what')
  })
  console.log('end of the click button 1 function')
}

function clickBtn2 () {
  sumNumbers(1, 2).then(function (result) {
    console.log('result #1:', result)
    return sumNumbers(result.sum, '5')
  }).then(function (newResult) {
    console.log('result #2:', newResult)
    return sumNumbers(newResult.sum, '41')
  }).then(function (result3) {
    console.log('result #3:', result3)
  })
}

function clickBtn3 () {
  const promise1 = sumNumbers(4, 6)
  const promise2 = sumNumbers(10, 12)
  const promise3 = sumNumbers(7, 90)
  // const promise4 = fetchBestFruit()
  // const promise5 = fetchEndpointThatDoesNotExist()

  Promise.all([promise1, promise2, promise3])
    .then(function (sumResult) {
      let total = 0
      for (let i = 0; i < sumResult.length; i++) {
        total += sumResult[i].sum
      }
      return sumNumbers(total, '100')
    })
    .then(function (totalPlus100) {
      console.log(totalPlus100)
    })
    .then(function () {
      return fetchBestFruit()
    })
    .catch(function (err) {
      console.log("something went wrong :(")
      console.log(err)
    })
    // .finally(function (result) {
    //   console.log('finally:')
    //   console.log(result)
    // })
}

function clickBtn4 () {

}

byId('btn1').addEventListener('click', clickBtn1)
byId('btn2').addEventListener('click', clickBtn2)
byId('btn3').addEventListener('click', clickBtn3)
byId('btn4').addEventListener('click', clickBtn4)

// -----------------------------------------------------------------------------
// Functions

function byId (id) {
  return document.getElementById(id)
}
