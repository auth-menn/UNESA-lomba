import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Account from "@/Components/Account";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const transactions = [
    {
        orderId: "1332321",
        status: "ON DELIVER",
        product: {
            name: "Black Jacket",
            color: "Black",
            size: "L",
            qty: 1,
            price: 2129000,
        },
        message: "Please check your product before completing order",
    },
    {
        orderId: "1332321",
        status: "ORDER PROCESS",
        product: {
            name: "Black Jacket",
            color: "Black",
            size: "L",
            qty: 1,
            price: 2129000,
        },
        message: "Your order is being packed",
    },
    {
        orderId: "1332321",
        status: "WAITING PAYMENT",
        product: {
            name: "Black Jacket",
            color: "Black",
            size: "L",
            qty: 1,
            price: 2129000,
        },
        message: "Complete your payment first",
    },
    {
        orderId: "1332321",
        status: "COMPLETED",
        product: {
            name: "Black Jacket",
            color: "Black",
            size: "L",
            qty: 1,
            price: 2129000,
        },
        message: "Rate now!",
    },
    {
        orderId: "1332321",
        status: "CANCELLED",
        product: {
            name: "Black Jacket",
            color: "Black",
            size: "L",
            qty: 1,
            price: 2129000,
        },
        message: "Your order is cancelled",
    },
];

export default function Transaction() {
    const [selectedStatus, setSelectedStatus] = useState("All Status");

    const filteredTransactions = transactions.filter((transaction) =>
        selectedStatus === "All Status" ? true : transaction.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    return (
        <UserLayout>
            <div className="py-32 flex gap-10">
                {/* Sidebar */}
                <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" />

                {/* Main Content */}
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold mb-4">Transaction</h1>

                    {/* Tabs for Filtering by Status */}
                    <div className="flex gap-6 mb-6">
                        {["All Status", "Waiting Payment", "Order on Process", "Delivery", "Completed", "Cancelled"].map(
                            (status) => (
                                <button
                                    key={status}
                                    onClick={() => setSelectedStatus(status)}
                                    className={`px-4 py-2 rounded-md ${
                                        selectedStatus === status ? "bg-black text-white" : "bg-white text-gray-700"
                                    } transition`}
                                >
                                    {status}
                                </button>
                            )
                        )}
                    </div>

                    {/* Sorting and Search */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <label htmlFor="sort" className="text-gray-700 font-medium mr-2">
                                Sort:
                            </label>
                            <select id="sort" className="border border-gray-300 rounded-md">
                                <option>Latest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search your Transaction"
                                className="border border-gray-300 rounded-md p-2 pl-10"
                            />
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

{/* Transaction List */}
<div className="space-y-6">
  {filteredTransactions.map((transaction, index) => (
    <div key={index} className="border border-[#dfe1e6] rounded-md p-6 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-gray-700 font-semibold">
            Order ID: <span className="font-bold">{transaction.orderId}</span>
          </h3>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            Status: <span className="font-semibold text-black">{transaction.status}</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Product Information */}
      <div className="flex justify-between items-center gap-4">
        <img
          src={`/images/products/${transaction.product.name.toLowerCase().replace(" ", "-")}.jpg`}
          alt={transaction.product.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="flex-grow">
          <h4 className="text-lg font-semibold">{transaction.product.name}</h4>
          <p className="text-gray-500">
            Color: {transaction.product.color} | Size: {transaction.product.size} | Qty: {transaction.product.qty}
          </p>
          
        </div>
        <div className="text-right">
          <p className="text-[#808897] text-sm">Total</p>
          <p className="text-lg font-semibold text-[#272835]">{formatRupiah(transaction.product.price)}</p>
        </div>
      </div>
      <br />
      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex justify-between items-center mt-4">
      <p className="text-gray-500 mt-2">{transaction.message}</p>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-[#a4abb8] text-[#0d0d12] rounded">
            Detail
          </button>
          <button className="px-6 py-2 bg-[#0d0d12] text-white rounded">
            {transaction.status === "WAITING PAYMENT"
              ? "Complete Payment"
              : transaction.status === "COMPLETED"
              ? "Rate"
              : "Complete Order"}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


                </div>
            </div>
        </UserLayout>
    );
}

function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
}
