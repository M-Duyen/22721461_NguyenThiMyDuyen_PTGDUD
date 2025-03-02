import { useState } from "react";

export default function CalInves() {
    const [money, setMoney] = useState<number>(0);
    const [rate, setRate] = useState<number>(0);
    const [goal, setGoal] = useState<number>(0);
    const [yearsData, setYearsData] = useState<
        { year: number; money: number; rate: number; result: number }[]
    >([]);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let total = money
        let year = new Date().getFullYear()
        let tempData = []
        while (total < goal) {
            const newTotal = Math.round(total * (1 + rate / 100) * 1000) / 1000
            tempData.push({ year, money: total, rate, result: newTotal })
            total = newTotal
            year++

        }
        setYearsData(tempData)
    }

    return (
        <div>
            <h1 className="font-semibold text-xl">Calculation Investment</h1>
            <div className="flex space-x-8 mt-4">
                <label htmlFor="" className="mt-1">Money</label>
                <input type="number"

                    onChange={(e) => setMoney(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-1 bg-white w-64"
                />
            </div>
            <div className="flex space-x-12 mt-4">
                <label htmlFor="" className="mt-1">Rate</label>
                <input type="number"

                    onChange={(e) => setRate(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-1 bg-white w-64"
                />
            </div>
            <div className="flex space-x-12 mt-4">
                <label htmlFor="" className="mt-1">Goal</label>
                <input type="number"

                    onChange={(e) => setGoal(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-1 bg-white w-64"
                />
            </div>
            <div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleOnClick}
                >
                    Calculate
                </button>
            </div>
            {yearsData.length > 0 && (
                <table className="mt-4 w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-5 mr-5 border-r">Year</th>
                            <th className="p-5 mr-5 border-r">Money</th>
                            <th className="p-5 mr-5 border-r">Rate (%)</th>
                            <th className="p-5 mr-5">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearsData.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td className="border-r">{item.year}</td>
                                <td className="border-r">{item.money}</td>
                                <td className="border-r">{item.rate}%</td>
                                <td className="border-r">{item.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}






        </div>
    );
}
