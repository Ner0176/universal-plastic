import React, { FC } from "react";

interface IScreenTitle {
    title: string;
}

const ScreenTitle: FC<IScreenTitle> = ({ title }) => {
    return(
        <div className="flex justify-center font-bold text-3xl underline underline-offset-8">
            {title}
        </div>
    );
}

export default ScreenTitle;