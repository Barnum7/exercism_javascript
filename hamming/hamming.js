var Hamming = function() {};
//Iterate through a string
Hamming.prototype.compute = function(string1, string2) {
  if (string1.length != string2.length){
    throw 'DNA strands must be of equal length.';
  }
  var ham = 0;
  if (string1 === string2) {
    return ham;
  } else {
    for (var i = 0; i < string1.length; i++) {
      if (string1.charAt(i) != string2.charAt(i)) {
        ham++;
      }
    }
    return ham;
  }
};

module.exports = Hamming;
