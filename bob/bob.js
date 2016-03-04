//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//All caps means shouting (Match this first) (doesn't have any lower case)
//Question mark at the end means question

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.isEmpty()){
    return 'Fine. Be that way!';
  } else if (input.isShouting() && !input.isOnlyNumber()) {
    return 'Whoa, chill out!';
  } else if (input.isQuestion()) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};

String.prototype.isEmpty = function() {
  if (this.trim() === "") {
    return true;
  } else {
    return false;
  }
};

String.prototype.isOnlyNumber = function () {
  var splitStrings = this.split(' ');
  var isIt = false;
  for (var i = 0; i < splitStrings.length; i++) {
    if(!isNaN(parseInt(splitStrings[i]))){
      isIt = true;
    } else {
      return false;
    }
  }
  return isIt;
};

String.prototype.isShouting = function() {
  if(this.toUpperCase() == this) {
    return true;
  } else {
    return false;
  }
};

String.prototype.isQuestion = function() {
  if(this.charAt(this.length -1) === '?') {
    return true;
  } else {
    return false;
  }
};

module.exports = Bob;
