// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import hero from "../../assets/images/hero/why-bg-2-1.svg";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const stats = [
  { id: 1, name: "Energy Use", value: 24, endValue: 50 },
  { id: 2, name: "CO2 Emission", value: 33, endValue: 39 },
  { id: 3, name: "Water Emission", value: 40 },
  { id: 4, name: "Solid Waste", value: 70 },
  { id: 5, name: "Social Risk", value: 80 },
];

export default function GreenBenefits() {
  const [progress, setProgress] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative isolate overflow-hidden bg-[#F8F7F0] py-24 sm:py-32">
      <img
        alt="Hero Image Green Benefits"
        src={hero}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div> */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Green Benefits
          </p>
        </div>
        <div className="mt-16 w-full">
          {/* <ResponsiveContainer width="60%" height={400}>
            <ComposedChart
              layout="vertical"
              data={stats}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" stroke="#000000" />
              <YAxis stroke="#000000" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" opacity={0.9} />
              {stats[0].endValue && (
                <Bar dataKey="endValue" fill="#000000" opacity={0.9} />
              )}
            </ComposedChart>
          </ResponsiveContainer> */}
          {/* {stats.map((item) => (
            <Progress key={item.id} value={item.value} className="w-[60%]" />
          ))} */}
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-2 justify-between"
            >
              <div>
                <p className="text-lg font-medium">{item.name}</p>
              </div>
              <div className="flex gap-5 w-full">
                <Progress
                  value={(item.value / (item.endValue || 100)) * 100}
                  max={100}
                />
                <p className="text-lg font-medium">
                  {item.value}%{item.endValue ? ` - ${item.endValue}%` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
