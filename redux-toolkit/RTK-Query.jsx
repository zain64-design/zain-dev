// RTK mein api call lagane k liyay hamary pass async actions hote hein thunks and saga.

// agar kisi comp se api call lagani hoti hai to hum use karte hein to useDispatche use karte hein isko use kar k dispatch function milta hai is fn ko use kar k hum action ko trigger karte hein or actions api call ko trigger karte hein or jab data hamare pass ajata hai us k baad control jata hai reducers k pass and the reducers store ko update karte hein

// RTQ hum use karte hein api execution k liyay for data caching

// API Data fetching k 3 patterns hote hein

// 1) render while fetch if we use RTQ (2) render then fetch if we use useEffect (3) fetch then render is mein hum comp ko import karne se pehle api call lagate hein but this will make slow some times

// jaise reducers aik module ko represent karte hein RTK slice aik module ko represent karte hein us tarha se apislice represent karti hai aik module k api endpoints ko

// 5 types of hooks provide by RTQ

// 1) useQuery aik ais hook deta hai jisko jab hum call karenge to data,loading & error state mile ga isko use karna hai to name convention aisa hoga use*YourfuncName*Query useGetAllDataQuery

// 2) useLazyQuery to get all control. usage useLazyGetAllDataQuery
