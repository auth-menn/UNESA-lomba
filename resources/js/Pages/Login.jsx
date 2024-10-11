import UserLayout from '@/Layouts/UserLayout';
import { EyeIcon } from '@heroicons/react/24/outline';

export default function Login() {
    return (
        <UserLayout>
            <div className="h-screen flex flex-row-reverse bg-white">
                {/* Right Side (Image) */}
                <div className="hidden lg:block lg:w-1/2 mt-24 overflow-hidden">
                    <img
                        className="h-auto w-full object-cover"
                        src="img/Login.png"
                        alt="Sign In"
                    />
                </div>

                {/* Left Side (Sign In Form) */}
                <div className="flex-1 flex flex-col justify-center px-16">
                    <div className="max-w-md w-full space-y-8 mx-auto">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Sign in
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Enter your email address and password to Sign in.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="mt-8 space-y-6">
                            <div className="shadow-sm space-y-5">
                                <div>
                                    <label htmlFor="email-address" className="">
                                        Email
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="">
                                        Password
                                    </label>
                                    <div className="relative mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full pr-10 px-3 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Enter your password"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <EyeIcon className="h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <a href="/sign-up" className="font-medium text-black hover:underline">
                                    Register Now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
