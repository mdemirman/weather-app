import React from "react";
import Image from "next/image";
import spinner from "../components/images/spinner.gif"

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={spinner} alt="loading.." />
    </>
  );
};

export default Spinner;
