import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function MyProduct() {
  return (
    <div className=" w-full h-screen bg-slate-100">
      <div className="h-auto pt-24 px-20">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Products</h1>
          <button className="flex px-6  border border-blue-600 bg-[#0149ff] py-2 rounded-md text-white font-semibold items-center hover:bg-blue-600">
            create Product{" "}
            <span className="mt-1">
              <BsPlusLg size={11} />
            </span>
          </button>
        </div>

        <div className="bg-white w-full h-auto mt-10 rounded-2xl">
          <table className="table-fixed w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left px-3 py-3 font-normal text-slate-500">
                  Name
                </th>
                <th className="text-left py-3 font-normal text-slate-500">
                  Cost
                </th>
                <th className="text-left  py-3 font-normal text-slate-500">
                  Owner
                </th>
                <th className="text-left  py-3 font-normal text-slate-500">
                  CreatedAt
                </th>
              </tr>
            </thead>

            <tbody className="font-bold text-sm">
              <tr className="border-b-2 ">
                <td className="py-2 pl-3">The Sliding Mr.</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
              </tr>
              <tr className="border-b-2">
                <td className="py-2 pl-3">Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>1961</td>
              </tr>
              <tr className="border-b-2">
                <td className="py-2 pl-3">Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center self-center justify-between px-4 text-sm text-slate-400 py-2">
            <p>3 Products</p>
            <div className="flex items-center ">
              <p className="pr-6">1 - 1 of 1</p>
              <MdArrowBackIos />
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProduct;
