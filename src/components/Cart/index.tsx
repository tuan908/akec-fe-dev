"use client";

import type {Order} from "@/lib/types";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import {FC, useState} from "react";

interface Props {
  item: Order;
}

const CartQuantity: FC<Props> = ({item}) => {
  const [qty, setQty] = useState(item.quantity);

  function decrementQty() {
    if (qty >= 2) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  }

  function incrementQty() {
    setQty(qty + 1);
  }

  return (
    <div className="flex my-8">
      <h1 className="my-auto">Số lượng:</h1>
      <IconButton onClick={decrementQty} disableRipple>
        <Remove />
      </IconButton>
      <input
        value={qty}
        type="text"
        className="border-x-2 border-y-2 mx-4 w-[5%] text-center outline-none"
        onChange={e => setQty(Number.parseInt(e.currentTarget.value))}
      />
      <IconButton onClick={incrementQty} disableRipple>
        <Add />
      </IconButton>
    </div>
  );
};

export default CartQuantity;
