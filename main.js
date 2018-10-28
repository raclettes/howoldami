function show() {
  document.getElementById('dob').style.display = 'none'
  document.getElementById('timer').style.display = 'block'

  iteration = 1
  type = 0

  // Milliseconds, Seconds, Minutes, hours, days, years.

  setInterval(function () {
    if (iteration++ % 1000 === 0) {
      type++
    }

    var now = new Date()
    var then = new Date(parseInt(document.getElementById('year').value), parseInt(document.getElementById('month').value) - 1, parseInt(document.getElementById('day').value))
    
    var time = now - then
    switch (type % 5) {
      // case 0:
      //   document.getElementById('cd').innerText = `${time * 1} milliseconds`
      //   break;
      case 0:
        document.getElementById('cd').innerText = `${(time / (1000)).toFixed(3)} seconds`
        break
      case 1:
        document.getElementById('cd').innerText = `${(time / (1000 * 60)).toFixed(3)} minutes`
        break
      case 2:
        document.getElementById('cd').innerText = `${(time / (1000 * 60 * 60)).toFixed(3)} hours`
        break
      case 3:
        document.getElementById('cd').innerText = `${(time / (1000 * 60 * 60 * 24)).toFixed(3)} days`
        break
      case 4:
        document.getElementById('cd').innerText = `${(time / (1000 * 60 * 60 * 24 * 365)).toFixed(3)} years`
        break
      default:
        break;
    }
  }, 1)
}