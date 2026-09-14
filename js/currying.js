"A fn returning a function is called currying: aisa work karne k liyay jo half pehle karliya jaye or adha baad mein pore task ko complete karne k liyay"

let customer = false

const boiledNoodles = ()=> {
    console.log("boiling noodles");
}

const cookNoodles = ()=> {
    console.log("cooking noodles");
}

// const isItemReady = ()=>  boiledNoodles(); ()=> cookNoodles();
const isItemReady = () => {
    boiledNoodles();
    cookNoodles();
};

const itemIsReady = isItemReady();

setTimeout(()=> {
    customer= true;
    cookNoodles();
},5000);