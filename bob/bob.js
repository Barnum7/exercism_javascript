//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//All caps means shouting (Match this first) (doesn't have any lower case)
//Question mark at the end means question

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.isEmpty){
    return 'Fine. Be that way!';
  } else if (input.isShouting) {
    return 'Whoa, chill out!';
  } else if (input.isQuestion) {
    return "Sure.";
  }
};

String.prototype.isEmpty = function(input) {
  if (input.trim === "") {
    return true;
  } else {
    return false;
  }
};

String.prototype.isShouting = function(input) {
  if(!input.match(/a-z/) && input.trim !== "") {
    return true;
  } else {
    return false;
  }
};

String.prototype.isQuestion = function(input) {
  if(input.charAt(-1) === '?') {
    return true;
  } else {
    return false;
  }
};

module.exports = Bob;
