import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import DeliveryForm from "../components/PlaceOrder/DeliveryForm";
import OrderCard from "../components/PlaceOrder/OrderCard";
import OrderPrice from "../components/PlaceOrder/OrderPrice";
// import { useDelivery } from '../contexts/DeliveryProvider';
// import { useOrder } from '../contexts/OrderProvider';
// import Back from '../routes/Back';

const PlaceOrderScreen = () => {
  const { order, setOrder } = useState(
    {
      name: "1",
    },
    {
      sds: "sd",
    }
  );
  const { input, disabled } = useState({
    country:"india",
    roadNo:"1",
    flatno:"1",
    name:"reet"
  });
  // const history = useHistory();

  // console.log(order);

  return (
    <main className=" h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        {/* <Back /> */}
        {(1 > 0) ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* left side form  */}
              <div className="col-span-1">
                <DeliveryForm />
              </div>
              {/* right side  */}
              
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-5xl text-primary poppins">
              No Order has added!!
            </h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default PlaceOrderScreen;
