import { FC, PropsWithChildren } from "react";
import ScreenTitle from "../atoms/screen-title.atom";

interface IMainTemplate {
  title: string;
}

const MainTemplate: FC<PropsWithChildren<IMainTemplate>> = ({
  children,
  title,
}) => {
  return (
    <div className="h-full flex justify-center p-5">
      <div className="w-1/3">
        <ScreenTitle title={title} />
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
