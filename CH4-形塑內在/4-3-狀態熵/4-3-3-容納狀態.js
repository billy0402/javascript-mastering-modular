// 透過函式修改輸入參數，接著回傳那個參數
// 使用 Array#map 改變串列內的每個物件的一兩個特性，同時保留原始的集合物件
const movies = []
movies.map(movie => {
    movie.profit = movie.gross - movie.budget
    return movie
})


// (建議) 完全不要使用 Array#map，而是改用 Array#forEach 或 for...of
for (const movie of movies) {
    movie.profit = movie.gross - movie.budget
}


// Array#forEach 或 for...of 都是無法產生任何輸出的純迴圈，明確拆開資料的變動
for (const movie of movies) {
    movie.profit = movie.amount * movie.unitCost
}
const successfulMovies = movies.filter(
    movie => movie.profit > 15
)
