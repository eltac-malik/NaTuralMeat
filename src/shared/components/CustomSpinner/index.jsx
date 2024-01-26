import { PropagateLoader } from "react-spinners";

const CustomSpinner = () => {
  return (
    <div className="bg-[#1b1b1b] h-screen w-screen flex justify-center items-center ">
      <PropagateLoader size={32} color="#991b1f" />
    </div>
  );
};

export default CustomSpinner;
