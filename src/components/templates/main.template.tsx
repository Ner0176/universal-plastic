import React, { FC, PropsWithChildren } from "react";


const MainTemplate: FC<PropsWithChildren> = ({ children }) => {
    return(
        <div className="h-screen bg-yellow-400">
            {children}
        </div>
    );
}

export default MainTemplate;