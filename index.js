let saturdayFun = function (input = 'roller-skate') {
  return `This Saturday, I want to ${input}!`;
}

let mondayWork = function (input = 'go to the office') {
  return `This Monday, I will ${input}.`
}

let wrapAdjective = function (flair = '*') {
  return function (adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  }
} 