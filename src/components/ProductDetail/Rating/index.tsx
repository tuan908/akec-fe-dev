"use client";

import MuiRating from "@mui/material/Rating";
import {useState, type FC} from "react";

const Rating: FC = () => {
  const [value, setVal] = useState<number | null>(5);

  return (
    <div
      className="grid place-items-center"
      style={{gridTemplateAreas: "star number"}}
    >
      <div style={{gridArea: "number"}}>{value}</div>
      <div style={{gridArea: "star"}}>
        <MuiRating
          value={value}
          size="small"
          onChange={(_, newValue) => setVal(newValue)}
        />
      </div>
    </div>
  );
};

export default Rating;
