// ═══════════════════════════════════════════
// 📘 immediately invoked function
// ═══════════════════════════════════════════

/********************** immediately invoked function *****************************/
// 🔹 it is used to make private variables in js. When this is invoked the initialized var inside the function will be discart.
// 💻
let privateVar = (function() {
    let privateValue = 12;
    return {
        getter: function () {
            console.log(privateValue);
        },
        setter: function (value) {
            privateValue = value;
        }
    }
    
  })()