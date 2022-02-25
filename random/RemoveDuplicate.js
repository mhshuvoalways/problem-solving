function removeDuplicate(str) {
  let result = "";
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  if (unique === str) {
    result = "EMPTY";
  } else {
    result = unique;
  }
  console.log(result);
}

removeDuplicate("programming");
// removeDuplicate("apple");
// removeDuplicate("orange");
