// // import { useContext, useEffect, useState } from "react";
// // import { AppContext } from "../context/AppContext";
// // import toast from "react-hot-toast";

// // const MyOrders = () => {
// //   const [myOrders, setMyOrders] = useState([]);
// //   const { axios, user } = useContext(AppContext);

// //   const fetchOrders = async () => {
// //     try {
// //       const { data } = await axios.get("/api/order/user");
// //       console.log("Fetched Orders:", data); // ✅ Debug backend response
// //       if (data.success) {
// //         setMyOrders(data.orders);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       fetchOrders();
// //     }
// //   }, [user]);

// //   return (
// //     <div className="mt-12 pb-16">
// //       <div>
// //         <p className="text-2xl md:text-3xl font-medium">My Orders</p>
// //       </div>

// //       {myOrders.map((order, index) => (
// //         <div
// //           key={index}
// //           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
// //         >
// //           <p className="flex justify-between items-center gap-6">
// //             <span>OrderId: {order._id}</span>
// //             <span>Payment: {order.paymentType}</span>
// //             <span>Total Amount: ${order.amount}</span>
// //           </p>

// //           {order.items.map((item, idx) => (
// //             <div
// //               key={idx}
// //               className={`relative bg-white text-gray-800/70 ${
// //                 order.items.length !== idx + 1 && "border-b"
// //               } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
// //             >
// //               <div className="flex items-center mb-4 md:mb-0">
// //                 <div className="p-4 rounded-lg">
// //                   <img
// //                     src={
// //                       item?.product?.image?.[0]
// //                         ? `http://localhost:5000/images/${item.product.image[0]}`
// //                         : "/placeholder.png" // ✅ fallback image
// //                     }
// //                     alt={item?.product?.name || "Product"}
// //                     className="w-16 h-16"
// //                   />
// //                 </div>

// //                 <div className="ml-4">
// //                   <h2 className="text-xl font-medium">
// //                     {item?.product?.name || "Unknown Product"}
// //                   </h2>
// //                   <p>{item?.product?.category || "No category"}</p>
// //                 </div>
// //               </div>

// //               <div className="text-lg font-medium">
// //                 <p>Quantity: {item?.quantity || "1"}</p>
// //                 <p>Status: {order?.status}</p>
// //                 <p>
// //                   Date:{" "}
// //                   {order?.createdAt
// //                     ? new Date(order.createdAt).toLocaleString()
// //                     : "N/A"}
// //                 </p>
// //               </div>

// //               <p className="text-lg">
// //                 Amount: $
// //                 {item?.product?.offerPrice && item?.quantity
// //                   ? item.product.offerPrice * item.quantity
// //                   : "0"}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyOrders;


// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const { axios, user } = useContext(AppContext);

//   const fetchOrders = async () => {
//     try {
//       const { data } = await axios.get("/api/order/user");
//       console.log("Fetched Orders:", data); // ✅ Debug backend response
//       if (data.success) {
//         setMyOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const cancelOrder = async (orderId) => {
//     try {
//       const { data } = await axios.put(`/api/order/cancel/${orderId}`);
//       if (data.success) {
//         toast.success("Order cancelled successfully!");
//         // Update the order status in the UI
//         setMyOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status: "Cancelled" } : order
//           )
//         );
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     }
//   }, [user]);

//   return (
//     <div className="mt-12 pb-16">
//       <div>
//         <p className="text-2xl md:text-3xl font-medium">My Orders</p>
//       </div>

//       {myOrders.map((order, index) => (
//         <div
//           key={index}
//           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
//         >
//           <p className="flex justify-between items-center gap-6">
//             <span>OrderId: {order._id}</span>
//             <span>Payment: {order.paymentType}</span>
//             <span>Total Amount: ${order.amount}</span>
//             <button
//               className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//               disabled={order.status === "Cancelled"} // disable if already cancelled
//               onClick={() => cancelOrder(order._id)}
//             >
//               {order.status === "Cancelled" ? "Cancelled" : "Cancel Order"}
//             </button>
//           </p>

//           {order.items.map((item, idx) => (
//             <div
//               key={idx}
//               className={`relative bg-white text-gray-800/70 ${
//                 order.items.length !== idx + 1 && "border-b"
//               } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
//             >
//               <div className="flex items-center mb-4 md:mb-0">
//                 <div className="p-4 rounded-lg">
//                   <img
//                     src={
//                       item?.product?.image?.[0]
//                         ? `http://localhost:5000/images/${item.product.image[0]}`
//                         : "/placeholder.png"
//                     }
//                     alt={item?.product?.name || "Product"}
//                     className="w-16 h-16"
//                   />
//                 </div>

//                 <div className="ml-4">
//                   <h2 className="text-xl font-medium">
//                     {item?.product?.name || "Unknown Product"}
//                   </h2>
//                   <p>{item?.product?.category || "No category"}</p>
//                 </div>
//               </div>

//               <div className="text-lg font-medium">
//                 <p>Quantity: {item?.quantity || "1"}</p>
//                 <p>Status: {order?.status}</p>
//                 <p>
//                   Date:{" "}
//                   {order?.createdAt
//                     ? new Date(order.createdAt).toLocaleString()
//                     : "N/A"}
//                 </p>
//               </div>

//               <p className="text-lg">
//                 Amount: $
//                 {item?.product?.offerPrice && item?.quantity
//                   ? item.product.offerPrice * item.quantity
//                   : "0"}
//               </p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrders;


// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const { axios, user } = useContext(AppContext);

//   const fetchOrders = async () => {
//     try {
//       const { data } = await axios.get("/api/order/user");
//       if (data.success) {
//         setMyOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const cancelOrder = async (orderId) => {
//     try {
//       const { data } = await axios.put(`/api/order/cancel/${orderId}`);
//       if (data.success) {
//         toast.success("Order cancelled successfully!");
//         setMyOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status: "Cancelled" } : order
//           )
//         );
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     }
//   }, [user]);

//   return (
//     <div className="mt-12 pb-16">
//       <div>
//         <p className="text-2xl md:text-3xl font-medium">My Orders</p>
//       </div>

//       {myOrders.map((order, index) => (
//         <div
//           key={index}
//           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
//         >
//           <p className="flex flex-wrap justify-between items-center gap-4 mb-4">
//             <span>OrderId: {order._id}</span>
//             <span>Payment: {order.paymentType}</span>
//             <span>Total Amount: ${order.amount}</span>

//             <button
//               className={`px-4 py-1 rounded font-medium ${
//                 order.status === "Cancelled"
//                   ? "bg-gray-400 text-white cursor-not-allowed"
//                   : "bg-red-500 text-white hover:bg-red-600"
//               }`}
//               disabled={order.status === "Cancelled"}
//               onClick={() => cancelOrder(order._id)}
//             >
//               {order.status === "Cancelled" ? "Cancelled" : "Cancel Order"}
//             </button>
//           </p>

//           {order.items.map((item, idx) => (
//             <div
//               key={idx}
//               className={`relative bg-white text-gray-800/70 ${
//                 order.items.length !== idx + 1 && "border-b"
//               } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
//             >
//               <div className="flex items-center mb-4 md:mb-0">
//                 <div className="p-4 rounded-lg">
//                   <img
//                     src={
//                       item?.product?.image?.length > 0
//                         ? `http://localhost:5000/images/${item.product.image[0]}`
//                         : "/placeholder.png"
//                     }
//                     alt={item?.product?.name || "Product Deleted"}
//                     className="w-16 h-16"
//                   />
//                 </div>

//                 <div className="ml-4">
//                   <h2 className="text-xl font-medium">
//                     {item?.product?.name || "Product Deleted"}
//                   </h2>
//                   <p>{item?.product?.category || "N/A"}</p>
//                 </div>
//               </div>

//               <div className="text-lg font-medium">
//                 <p>Quantity: {item?.quantity || "1"}</p>
//                 <p>
//                   Status:{" "}
//                   <span
//                     className={`font-semibold ${
//                       order.status === "Cancelled"
//                         ? "text-red-600"
//                         : order.status === "Delivered"
//                         ? "text-green-600"
//                         : "text-yellow-600"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </p>
//                 <p>
//                   Date:{" "}
//                   {order?.createdAt
//                     ? new Date(order.createdAt).toLocaleString()
//                     : "N/A"}
//                 </p>
//               </div>

//               <p className="text-lg">
//                 Amount: $
//                 {item?.product?.offerPrice && item?.quantity
//                   ? item.product.offerPrice * item.quantity
//                   : "0"}
//               </p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrders;


import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // ✅ Add this

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const { data } = await axios.put(`/api/order/cancel/${orderId}`);
      if (data.success) {
        toast.success("Order cancelled successfully!");
        setMyOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: "Cancelled" } : order
          )
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="mt-12 pb-16">
      <div>
        <p className="text-2xl md:text-3xl font-medium">My Orders</p>
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <span>OrderId: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total Amount: ${order.amount}</span>

            <button
              className={`px-4 py-1 rounded font-medium ${
                order.status === "Cancelled"
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
              disabled={order.status === "Cancelled"}
              onClick={() => cancelOrder(order._id)}
            >
              {order.status === "Cancelled" ? "Cancelled" : "Cancel Order"}
            </button>
          </p>

          {order.items.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-white text-gray-800/70 ${
                order.items.length !== idx + 1 && "border-b"
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-4 rounded-lg">
                  <img
                    src={
                      item?.product?.image?.length > 0
                        ? `${BACKEND_URL}/images/${item.product.image[0]}` // ✅ updated
                        : "/placeholder.png"
                    }
                    alt={item?.product?.name || "Product Deleted"}
                    className="w-16 h-16"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="text-xl font-medium">
                    {item?.product?.name || "Product Deleted"}
                  </h2>
                  <p>{item?.product?.category || "N/A"}</p>
                </div>
              </div>

              <div className="text-lg font-medium">
                <p>Quantity: {item?.quantity || "1"}</p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      order.status === "Cancelled"
                        ? "text-red-600"
                        : order.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </p>
                <p>
                  Date:{" "}
                  {order?.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              <p className="text-lg">
                Amount: $
                {item?.product?.offerPrice && item?.quantity
                  ? item.product.offerPrice * item.quantity
                  : "0"}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
