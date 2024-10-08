import React from 'react';
import UserLayout from '@/Layouts/UserLayout';
import Checkout from '@/Components/Payment/Checkout';
import DetailProduct from '@/Components/Payment/DetailProduct';
import PaymentMethod from '@/Components/Payment/PaymentMethod';
import PromoCode from '@/Components/Payment/PromoCode';
import ShoppingSummary from '@/Components/Payment/ShoppingSummary';

const ConfirmOrder = () => {
    return (
        <UserLayout>
            <div className="container mx-auto p-4 py-32">
                <h2 className="text-3xl font-semibold mb-8">Checkout</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="border border-gray-300 p-4  shadow-sm">
                            <Checkout />
                        </div>
                        <div className="border border-gray-300 p-4  shadow-sm">
                            <DetailProduct />
                        </div>
                        <div className="border border-gray-300 p-4 shadow-sm">
                            <PaymentMethod />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <PromoCode />
                        </div>
                        <div>
                            <ShoppingSummary />
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default ConfirmOrder;
