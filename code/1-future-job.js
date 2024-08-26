// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'space doctor',
  'pilot',
  'teacher'
]

function getJob() {
  let index = Math.floor(Math.random() * 5)

  alert('Your future job will be ' + jobs[0])
}
