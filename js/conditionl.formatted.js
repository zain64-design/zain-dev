// ═══════════════════════════════════════════
// 📘 if else if
// ═══════════════════════════════════════════

/********************** if else if *****************************/

// 🔹 syntax
// 💻
if (condition) {
    // 🔹 this part of the code runs for truthy condition
  } else {
    // 🔹 this part of the code runs for false condition
  }
  
  let per = prompt("enter correct value");
  
  if (per >= 90 && per <= 100) {
      alert("you achieved A grade");
  }
  else if (per >= 80 && per <= 89) {
      alert("you achieved B grade");
  }
  else if (per >= 70 && per <= 79) {
      alert("you achieved C grade");
  }
  else if (per >= 60 && per <= 69) {
      alert("you achieved D grade");
  }
  else if (per >= 50 && per <= 59) {
      alert("you achieved E grade");
  }
  else {
      alert("you are failed");
  }
  
  
  function testLogicalAnd(val) {
    // 🔹 Only change the code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // 🔹 Only change code above this line
    return "No";
  }
  testLogicalAnd(10);
  
  
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  
    else{
        return "Between 5 and 10";
    }
  }
  
  testElseIf(7);