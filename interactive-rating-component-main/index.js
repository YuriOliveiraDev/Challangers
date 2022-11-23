function result() {
    const note = document.querySelector('input[name="note"]:checked').value

    const result = document.getElementById('jsResult')
    const displaySubmit = document.getElementById('submit') 
    const displayResult = document.getElementById('result') 
    let rate = ''

    
    displaySubmit.style.display = 'none'
    displayResult.style.display = 'block'

    // if else mode

//         if (note == '1') {
//        result.innerHTML = '1'
//      } else if (note == '2') {
//         result.innerHTML = '2'
//      } else if (note == '3') {
//         result.innerHTML = '3'
//      } else if (note == '4') {
//         result.innerHTML = '4'
//      } else if (note == '5') {
//         result.innerHTML = '5'
//      }
    // switch mode

switch (note) {
    case '1' : result.innerHTML = '1'
    break
    case '2' : result.innerHTML = '2'
    break
    case '3' : result.innerHTML = '3'
    break
    case '4' : result.innerHTML = '4'
    break
    case '5' : result.innerHTML = '5'
    break
 }
}