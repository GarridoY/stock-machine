async function fetchPrices(): Promise<Stocks> {
    const res = await fetch("http://127.0.0.1:3000/api/stocks/prices", { cache: 'no-cache'});

    if (!res.ok) {
        throw new Error("Could not fetch prices.");
    }

    return res.json();
}

function TableComponent(stock: Stock) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {stock.priceHistory.map((price, i) => (
                    <tr key={stock.name + '-' + i}>
                        <td>{stock.name}</td>
                        <td>{price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default async function Stocks() {
    const stocks = await fetchPrices();

    return (
            <div className="self-stretch grow shrink basis-0 px-[100px] pt-10 flex-col justify-start items-start flex">
                <div className="pb-5 flex-col justify-start items-start flex">
                <div className="text-black text-[32px] font-normal font-['Inter']">Dashboard</div>
                </div>
                <div className="pb-[50px] justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-xs font-semibold font-['Inter']">Balance:</div>
                <div className="text-black text-xs font-normal font-['Inter']">2.150,90 $</div>
                </div>
                <div className="flex-wrap gap-y-[50px] self-stretch grow shrink basis-0 justify-between items-start inline-flex">
                <div className="w-[570px] h-[226px] rounded-[5px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 bg-stone-50 rounded-[10px] flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 px-[15px] border-b border-zinc-500 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-start items-center gap-[5px] flex">
                        <div className="text-black text-xl font-normal font-['Inter']">Stacks</div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-end items-center gap-[5px] flex">
                        <div className="text-lime-600 text-base font-normal font-['Inter']">17.8</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[140px] px-[15px] py-[5px] flex-col justify-start items-start flex">
                        <div className="self-stretch grow shrink basis-0 px-[15px] bg-stone-50 border-l border-b border-black justify-between items-end inline-flex">
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[52px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[47px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-[15px] justify-end items-center gap-2.5 inline-flex">
                        <div className="px-2 py-[3px] bg-blue-300 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Buy x1</div>
                        </div>
                        <div className="px-2 py-[3px] bg-neutral-200 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Sell x1</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[570px] h-[226px] rounded-[5px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 bg-stone-50 rounded-[10px] flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 px-[15px] border-b border-zinc-500 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-start items-center gap-[5px] flex">
                        <div className="text-black text-xl font-normal font-['Inter']">Stacks</div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-end items-center gap-[5px] flex">
                        <div className="text-lime-600 text-base font-normal font-['Inter']">17.8</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[140px] px-[15px] py-[5px] flex-col justify-start items-start flex">
                        <div className="self-stretch grow shrink basis-0 px-[15px] bg-stone-50 border-l border-b border-black justify-between items-end inline-flex">
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[52px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[47px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-[15px] justify-end items-center gap-2.5 inline-flex">
                        <div className="px-2 py-[3px] bg-blue-300 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Buy x1</div>
                        </div>
                        <div className="px-2 py-[3px] bg-neutral-200 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Sell x1</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[570px] h-[226px] rounded-[5px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 bg-stone-50 rounded-[10px] flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 px-[15px] border-b border-zinc-500 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-start items-center gap-[5px] flex">
                        <div className="text-black text-xl font-normal font-['Inter']">Stacks</div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-end items-center gap-[5px] flex">
                        <div className="text-lime-600 text-base font-normal font-['Inter']">17.8</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[140px] px-[15px] py-[5px] flex-col justify-start items-start flex">
                        <div className="self-stretch grow shrink basis-0 px-[15px] bg-stone-50 border-l border-b border-black justify-between items-end inline-flex">
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[52px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[47px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-[15px] justify-end items-center gap-2.5 inline-flex">
                        <div className="px-2 py-[3px] bg-blue-300 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Buy x1</div>
                        </div>
                        <div className="px-2 py-[3px] bg-neutral-200 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Sell x1</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[570px] h-[226px] rounded-[5px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 bg-stone-50 rounded-[10px] flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 px-[15px] border-b border-zinc-500 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-start items-center gap-[5px] flex">
                        <div className="text-black text-xl font-normal font-['Inter']">Stacks</div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch px-[5px] justify-end items-center gap-[5px] flex">
                        <div className="text-lime-600 text-base font-normal font-['Inter']">17.8</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[140px] px-[15px] py-[5px] flex-col justify-start items-start flex">
                        <div className="self-stretch grow shrink basis-0 px-[15px] bg-stone-50 border-l border-b border-black justify-between items-end inline-flex">
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[52px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[47px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-[15px] justify-end items-center gap-2.5 inline-flex">
                        <div className="px-2 py-[3px] bg-blue-300 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Buy x1</div>
                        </div>
                        <div className="px-2 py-[3px] bg-neutral-200 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Inter']">Sell x1</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    );
}