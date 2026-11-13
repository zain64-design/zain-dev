// ═══════════════════════════════════════════
// 📘 reduce
// ═══════════════════════════════════════════


// 🔹 "reduce method mein aik cb fn pass hota hai jis mein 2 param milte hein pehla accumulator and dusra currentValue. accumulator empty var hota hai or first time jab loop invoke hota hai to jo initial value hum dete hein wo is accum mein store hojati hai and current value array se milti hai or operation perform hone k baad jo value ati hai wo again accum mein store hojati hai or phr again operation perform hota hai and so on jab tak loop end na hojaye:"

// 💻
const array = [1,2,3,4,5,6,7,8,9,10];
const initialValue = 0

const sumWithInitial = array.reduce((accumulator,currentValue)=> accumulator+currentValue ,initialValue)

console.log(sumWithInitial);



const Data = [{ id: 1, price: 100 }, { id: 2, price: 200 }, { id: 3, price: 300 }, { id: 4, price: 400 }, { id: 5, price: 500 }]

// 🔹 "accumulator initial value is 0"
// 💻
const totalPrice = Data.reduce((accumulator,item)=> accumulator + item.price,0)
console.log(totalPrice);
