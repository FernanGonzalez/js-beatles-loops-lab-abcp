function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {
  const factsWithExclamationMarks = []

  var i = 0
  while (i < facts.length) {
    factsWithExclamationMarks.push(`${facts[i]}!!!`)
    i++
  }

  return factsWithExclamationMarks
}