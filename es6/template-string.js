  /******************************* template strings ******************************/

  let firstName = "zain";
  let lastName = "ali";
  
  function fullname(firstName, lastName){
     return `${firstName} ${lastName}`;
  }
  
  let hello = `Hello  ${fullname(firstName, lastName)}  Welcome to 2021.`;
  
  document.write(hello);
  