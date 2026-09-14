// Redux toolkit

// action and reducer ko slice k andar bana sakte hein

// redux components

// 1) Action, (2) Reducer (3)Store (4) Dispatcher, Selected

// action wo data hota hai jo hum log store karwane wale hote hein redux store k andar.
// reducer action wale data ko store karti hai redux store mein
// action hamara plain object hota hai in the form of data jo k reducer k through redux store mein save karta hai or phr us data ka ko kisi dosre comp mein use karte hein.on page load hamara store kara hua data remove hojata hai.agar save rakhna ho to redux persist lib ki help se save rakh sakte hein but yai app ko slow kardeta hai

// redux ka data flow bi directional hota ya uni directional hota? ans) bi directional means dono direction mein jasakta hai and uni directional means UI => action => Reducers => Store => UI and redux mein uni directional chalta hai.

// slice collection hai hamaray action and redux reducer logic ka and yai dono same feature k sath hone chahiyay us slice mein

// core principles of redux

// 1) single source of truth

// 2) state is read only
// 3) dont change any thing manually in redux state

// changes are made with pure functions

// what is redux

// 1) redux is state management lib 

// 2) with redux we can share data between components

// 3) redux can use with any js lib

// 4) we can make only one store in project

// 5) useDispatch is redux hook use for pass data from comp to redux store.

// what is rtk

// 1) rtk is a redux toolkit which provides us with the following features

// 2) slice creators

// 3) rtk is the wrapper over the redux 

// 4) simple file structure

// diff b/w store & state

// 1) store is where we store all the data. store is an object that holds the entire state of the application.

// 2) state is the data that the store holds. state is an object that represents the current state of the application.

// 3) state is the data that the app need to render ui.

// what is provider in react-redux ?

// 1) provider is a react component that provides the store to all the child components.

// 2) provider is used in our app to make our store available to all the components.

// popular redux middleware

// by default redux uses redux thunk middleware

// 1) redux-thunk

// 2) redux-saga

// 3) redux-observable

// 4) redux-logger

// 5) redux-persist

// 6) redux-form

// 7) redux-devtools-extension

// what is slice in rtk

// 1) slice is a collection of redux reducer logic and action for a single feature in your app.


// main components of the redux

// 1) action: plain object that describes what happened.

// 2) reducer: pure function that takes the previous state and an action, and returns the new state.

// 3) store: holds the state tree of your app.

// 4) provider 

// 5) selected: component that connects to the store and renders UI based on the state.

// 6) dispatch: function that takes an action as an argument and sends it to the reducer.








