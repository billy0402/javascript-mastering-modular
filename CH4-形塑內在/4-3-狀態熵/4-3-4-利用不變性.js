// 充分利用不變性，不涉及純迴圈，並且不需要依靠容易損壞的副作用
const movies = []
// 建立全新的複本，保留了原始的集合
// 輸出完全取決於輸入，同樣輸入會有同樣的輸出，沒有任何副作用，例如改變輸入本身
const movieModels = movies.map(movie => ({
    ...movie, // 透過展開運算子將物件每個特性複製到新物件
    profit: movie.amount * movie.unitCost
}))
const successfulMovies = movieModels.filter(
    movie => movie.profit > 15
)
