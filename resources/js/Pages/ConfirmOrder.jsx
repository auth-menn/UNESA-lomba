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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="lg:col-span-2 space-y-6">
                    <Checkout />
                    <DetailProduct />
                    <PaymentMethod />
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                    <PromoCode />
                    <ShoppingSummary />
                </div>
            </div>
        </div>
        </UserLayout>
    );
};

export default ConfirmOrder;
