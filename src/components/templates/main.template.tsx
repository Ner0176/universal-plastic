import { FC, PropsWithChildren } from "react";
import ScreenTitle from "../atoms/screen-title.atom";
import NavigationMenu from "../organisms/navigation-menu.organism";

interface IMainTemplate {
  title: string;
}

const MainTemplate: FC<PropsWithChildren<IMainTemplate>> = ({
  children,
  title,
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center pt-5">
      <div className="w-1/3">
        <ScreenTitle title={title} />
        {children}
      </div>
      <div className="fixed bottom-0 w-1/3">
        <NavigationMenu />
      </div>
    </div>
  );
};

export default MainTemplate;
