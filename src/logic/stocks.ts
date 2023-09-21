export function fetchBalance(): number {
    return 2500;
}

export function getPriceHistory(stockId: number): Array<number> {
    if (stockId == 1) {
        return [1.2, 1.9, 1.3, 2.0, 1.4];
    } else if (stockId == 2) {
        return [57, 19, 30, 25, 40];
    }
    return [];
}

export function getStocks() {
    const stonks = {
        id: 1,
        name: "stonks"
    }
    const stacks = {
        id: 2,
        name: "stacks"
    }
    return [stonks, stacks];
}

export function getStockPrice(stockId: number): number {
    if (stockId == 1) {
        return 75;
    } else if (stockId == 2) {
        return 3000;
    }
    return 0;
}

function updateBalance(newBalance: number): boolean {
    console.log("New balance", newBalance);
    return true;
}

/**
 * Return true or false based on if the operation was a success.
 */
export function buyStock(stockId: number): boolean {
    const balance = fetchBalance();
    const price = getStockPrice(stockId);
    if (price > balance) {
        return false;
    }

    const success = updateBalance(balance - price);
    return success;
}