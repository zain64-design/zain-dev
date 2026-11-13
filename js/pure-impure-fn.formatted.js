// ═══════════════════════════════════════════
// 📘 pure and impure function
// ═══════════════════════════════════════════

/********************** pure and impure function *****************************/
// 🔹 impure function
  function abc (val) {
      return Math.random()*val;
    }
    
    let a = abc(2);
    
    let b = abc(2);
  
  // 🔹 pure function
  
  function multi (val1,val2) {
    return val1*val2;
  }
  
  const ans1 = multi(1,3);
  const ans2 = multi(1,2);