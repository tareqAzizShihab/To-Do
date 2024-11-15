import { useState } from "react";
const monthArr = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function Header() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  setInterval(() => {
    const dateObj = new Date();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const second = dateObj.getSeconds();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const day = dateObj.getDay();
    setHour(hour);
    setMinute(minute);
    setSecond(second);
    setMonth(month);
    setDate(date);
    setDay(day);
  }, 1000);

  return (
    <>
      <section>
        <div className="h-16 bg-[#01011b] flex justify-between items-center px-5 border-2 border-[#101033] rounded-lg">
          <div>
            <span className="font-logo bg-[#18183d] text-3xl shadow-inner px-2 py-[2px] shadow-violet-300">
              To do
            </span>
          </div>
          <div className="flex flex-col justify-center font-clock">
            <span className="text-2xl font-bold">
              <span>
                {hour < 10 ? "0" : ""} {hour} :{" "}
              </span>
              <span>
                {minute < 10 ? "0" : ""}
                {minute} :{" "}
              </span>
              <div className="w-8 inline-block">
                <span>
                  {second < 10 ? "0" : ""}
                  {second}
                </span>
              </div>
            </span>
            <span className="flex -mt-1 justify-center gap-2 font-semibold text-sm">
              <span> {monthArr[month]} </span>
              <span> {date}</span>
              <span>
                <span className="text-xs text-slate-800">| </span>
                {dayArr[day]}
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
