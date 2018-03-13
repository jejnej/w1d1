function obfuscate(password) {

  var newPassword = password;
  for( var i = 0; i < password.length; i++) {

    if(password[i]=== "a") {
      newPassword = newPassword.replace("a", 4)

    }else if(password[i] === "e") {
      newPassword = newPassword.replace("e", 3);

    }else if( password[i] === "o") {
      newPassword = newPassword.replace("o", 0);

    }else if(password[i] === "l") {
      newPassword = newPassword.replace("l", 1);
    }

  }

  return newPassword;

}

var userName = process.argv[2];
console.log(obfuscate(userName));