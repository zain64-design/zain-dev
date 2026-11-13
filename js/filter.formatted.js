// ═══════════════════════════════════════════
// 📘 filter
// ═══════════════════════════════════════════

// 🔹 "filter method array se values ko filter karne k liyay use karte hein yai is mein aik cb fn pass hota hai and param jis array par usko run kara hai uski value get karne k liyay " 

// 💻
const myNum = [1,2,3,4,5,6,7,8,9,10]

const totalMyNum = myNum.filter((value)=> value > 5);

console.log(totalMyNum);

const myBooks = [
    {id:1,title: 'Book 1', genre: 'Comedy', publish: 1997},
    {id:2,title: 'Book 2', genre: 'Science', publish: 1998},
    {id:3,title: 'Book 3', genre: 'History', publish: 1999},
    {id:4,title: 'Book 4', genre: 'Fiction', publish: 2000},
    {id:5,title: 'Book 5', genre: 'Non-Fiction', publish: 2001},
    {id:6,title: 'Book 6', genre: 'Science', publish: 2002},
    {id:7,title: 'Book 7', genre: 'History', publish: 2003},
    {id:8,title: 'Book 8', genre: 'Non-Fiction', publish: 2004},
    {id:9,title: 'Book 9', genre: 'Fiction', publish: 2005},
    {id:10,title: 'Book 10', genre: 'Science', publish: 1997},
    {id:11,title: 'Book 11', genre: 'History', publish: 1998},
    {id:12,title: 'Book 12', genre: 'Comedy', publish: 1999},
    {id:13,title: 'Book 13', genre: 'Fiction', publish: 2000},
]

const filterBooks = myBooks.filter((book)=> book.genre === 'Fiction' && book.publish >= 2000);

console.log(filterBooks);
