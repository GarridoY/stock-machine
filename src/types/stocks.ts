interface Stocks extends Array<Stock> {}
interface Stock {
    id: number,
    name: string,
    price: number,
    priceHistory: number[]
}