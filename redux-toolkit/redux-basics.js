// step 1 (Action is a plane js obj) you will create object, that the object will tell the redux what is new value you want to update/delete/add.
  
// Type: based on type you will update specific data 


// step 2 (dispatch fn provided by redux we will pass the action) you will send the information created in step 1 by calling a function, this function is provided by redux. dispatch fn will call all the reducer fn with provided action object 

// step 3 (reducer is function is pure js functions this is a call back fn redux will call this internally and they have  your whole state of your app this reducer will give us prev state and action that) Updated function this will check what to updated and based on that, it will update the store and notify you.

// step (useSelector / subscribe) 4 base on notification update the UI or do whatever you want to do.

// step 1
const initialState = {};

// step 2 
const store = createStore(reducer);

// step 3
// it will recieve state and action 
function reducer(state=initialState,action) {
            // based on action return a new state
        // this reducer fn must return a state
    if(action.type ===  'UPDATE_NAME') {
        const oldState = {...state};
        oldState.name = action.value;
        return oldState;
    }
    return state;
}

// step 4
const action = {
    type: 'UPDATE_NAME',
    value: 'JS',
}

// step 6
store.subscribe(()=> {
    console.log('store changed',store.getState());
})


// step 5
store.dispatch(action);

console.log(store.getState());




// 3: Do note mutate state (redux-immutable-state-invariant)

// example

const store = {date: new Date(), fn: function(){}};

const str = JSON.stringify(store);

const obj = JSON.parse(str);

console.log(obj,store);


// Redux solve the problem of mutability

// by introducing Immutability

// 3 principle of redux 

// 1= one single store. store is a js obj which hold our app data.

// 2= state or store should be read only .

// 3= state or store update should happen only via actions.

// 4= try to normalize your store remove nesting try to have you array of objects,in a object by id data structure.

// 5= we don't have to deep clone state , unnecessarily.





