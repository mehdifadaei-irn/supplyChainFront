import React, { useContext } from "react";
import { useRouter } from "next/router";
import { SupplyContext } from "../../context/context";
import Header from "../../components/Header";
import Image from "next/image";
import Costs from "../../components/Costs";
import Owners from "../../components/Owners";
const EachProduct = () => {
  const { prodId } = useContext(SupplyContext);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="h-screen w-full bg-slate-100">
      <div className="container mx-auto">
        <Header />
        <div className="flex">
          <div className="mt-10 ml-4 hidden xl:block">
            <Image src={"/prof.jpg"} width={370} height={600} />
          </div>
          <div className="flex-1">
            <div className="flex self-center justify-center">
              <h1 className="text-center font-bold mr-7 text-lg">
                Gucci Shoes
              </h1>
              <h1 className="text-center font-semibold mr-7 text-lg">
                With ID : {slug}
              </h1>
            </div>

            <div className="flex ml-6">
              <h2 className="w-1/2 font-semibold">created by :</h2>
              <h2 className="w-1/2">0xEc789...C24</h2>
            </div>

            <div className="flex ml-6 mt-6">
              <h2 className="w-1/2 font-semibold">Cost :</h2>
              <h2 className="w-1/2 ">1999 $</h2>
            </div>

            <div className="flex ml-6 mt-6">
              <h2 className="w-1/2 font-semibold">Time Created :</h2>
              <h2 className="w-1/2 ">2022/9/10</h2>
            </div>

            <div className="flex ml-6 mt-6">
              <h2 className="w-1/2 font-semibold">Initial Cost :</h2>
              <h2 className="w-1/2 ">79 $</h2>
            </div>
            <div className="flex ml-6 mt-6">
              <h2 className="w-1/2 font-semibold">Costs :</h2>
              <div className="w-1/2 ">
                <Costs />
              </div>
            </div>
            <div className="flex ml-6 mt-6">
              <h2 className="w-1/2 font-semibold">Owners :</h2>
              <div className="w-1/2 ">
                <Owners />
              </div>
            </div>
            <div className="ml-6 mt-5">
              <h2 className="w-1/2 font-semibold">Discription :</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, est. Iusto iste temporibus perspiciatis commodi
                recusandae ducimus minima dolorum sint, quo sapiente, quidem id
                consequuntur aperiam! Facilis dolor perferendis iste, corporis
                cumque autem expedita aut ipsam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
