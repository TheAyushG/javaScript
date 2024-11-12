const coding = ["js", "ruby", "java", "python", "cop"]

const valuse = coding.forEach( (item) => {
   // console.log(item);
    return;
})

//console.log(valuse);


const myNums = [1,2,3,4,5,6,7,8,9,10];
/*
const newNums = myNums.filter((num) => {
    return num>4;
})
console.log(newNums);
*/

/*
const newNums = []
myNums.forEach( (num) => {
           if(num<4){
            newNums.push(num)
           }
        })

        console.log(newNums);
*/


const books = [
{title: 'book one', genre:  'fiction', publish: 1981, edition: 1985},
{title: 'book two', genre: 'non-fiction', publish: 1985, edition: 1991},
{title: 'book three', genre: 'science', publish: 1991, edition: 1995},
{title: 'book four', genre: 'math', publish: 1995, edition: 1999},
{title: 'book five', genre: 'history', publish: 1999, edition: 2004},
{title: 'book six', genre: 'fiction', publish: 2004, edition: 2008},
{title: 'book seven', genre: 'science', publish: 2008, edition: 2012},
{title: 'book eight', genre: 'non-fiction', publish: 2012, edition: 2015},

]

let userBooks = books.filter( (bk) => bk.genre === "science")
 userBooks = books.filter( (bk) => {return bk.publish > 2000 }   )
console.log(userBooks);


 