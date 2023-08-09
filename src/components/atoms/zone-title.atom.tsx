import React, { FC } from "react";

interface IZoneTitle {
    title: string;
}

const ZoneTitle: FC<IZoneTitle> = ({ title }) => {
    return(
        <div className="flex justify-start font-bold text-lg mb-3">
            {title}
        </div>
    );
}

export default ZoneTitle;