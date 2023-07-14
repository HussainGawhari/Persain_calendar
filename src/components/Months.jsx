import React from "react";
import { holidays } from "../constants";

const Months = () => {
  return (
    <>
      <h2 className=" text-center m-4  flex float-right text-[24px] font-bold text-gray-900">
        تعطیلات رسمی سال 1402
      </h2>

      <div className=" sm:px-16 px-6  w-2/3  justify-center m-auto mt-32">
        {/* <h2 className=" text-center text-2xl m-4  flex  float-right mt-0">تعطیلات رسمی سال 1402</h2> */}

        <ul>
          {Object.entries(holidays).map(([month, holidaysInMonth]) => (
            <li key={month}>
              <h2 className="p-4 text-[18px] w-40 flex-auto rounded-2xl bg-slate-400 flex justify-center mx-auto">
                {month}
              </h2>
              <ul>
                {Object.entries(holidaysInMonth).map(([day, holiday]) => (
                  <li
                    key={day}
                    className=" list-none border border-gray-400 border-solid rounded-2xl bg-slate-300 p-4 flex flex-row-reverse justify-between"
                  >
                    {/* <span className="flex flex-col-reverse justify-between">{"  " +day+"  "  }</span> */}
                    {day} - {holiday}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Months;
