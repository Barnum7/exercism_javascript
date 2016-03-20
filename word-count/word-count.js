var Words = function() {};
//Why is an empty object initialized? I've been doing this for
// every challenge and I don't know why?
Words.prototype.count = function(input) {
  var words = input.split(" ");
  var occurrences = {};

  for (var i = 0; i < words.length; i++) {
    if (words[i] in occurrences) {
      occurrences[words[i]]++
    } else {
    occurrences[words[i]] = 1;
    }
  }
  return occurrences;
}

module.exports = Words;
