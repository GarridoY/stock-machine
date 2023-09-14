interface Stock {
    data: StockData
}
interface StockData {
    name: string,
    prices: number[]
}

async function fetchPrices(): Promise<Stock> {
    const res = await fetch("http://127.0.0.1:3000/api/stocks/prices");

    if (!res.ok) {
        throw new Error("Could not fetch prices.");
    }

    return res.json();
}

export default async function Stocks() {
    const response = await fetchPrices();
    console.log(response);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {response.data.prices.map((price, index) => (
                        <tr key={index}>
                            <td>{response.data.name}</td>
                            <td>{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}