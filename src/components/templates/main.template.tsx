import React, { FC, PropsWithChildren } from "react";
import ScreenTitle from "../atoms/screen-title.atom";

interface IMainTemplate {
    title: string;
}

const MainTemplate: FC<PropsWithChildren<IMainTemplate>> = ({ children,  title}) => {
    return(
        <div className="h-screen p-5">
            <ScreenTitle title={title}/>
            {children}
        </div>
    );
}

export default MainTemplate;