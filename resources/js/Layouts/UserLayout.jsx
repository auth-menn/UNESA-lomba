import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import '../../css/app.css';

const UserLayout = ({ children }) => {
    return (
        <div className=" h-screen w-screen">
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>

            <aside className="w-full sm:w-64">
                <Navbar />
            </aside>

            <main className="w-full">
                {children}
            </main>

            <Footer/>
        </div>
    );
};

export default UserLayout;
