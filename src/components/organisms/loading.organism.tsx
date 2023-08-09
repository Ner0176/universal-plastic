import { FC } from "react";

interface ILoading {
  text: string;
}

const Loading: FC<ILoading> = ({ text }) => {
    return (
      <div className="h-screen mt-10 flex justify-center font-bold text-xl animate-pulse">
        {text}
      </div>
    );
  };
  
  export default Loading;
  