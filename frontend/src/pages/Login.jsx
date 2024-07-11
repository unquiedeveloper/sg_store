import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "", role: "admin" });  // Set default role to "admin"
     const navigate = useNavigate();
    // Handles form input changes
    function changeHandler(e) {
        setCredential(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // Handles form submission
    function submitHandler(e) {
        e.preventDefault();
        console.log(credential.role);  // Log the role from credential

        // Determine which API to call based on the selected role
        const apiUrl = credential.role === "admin"
            ? "http://localhost:4000/api/v1/admin/login"
            : "http://localhost:4000/api/v1/employee/login";

        // Fetch the appropriate API based on the role
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credential.email,
                password: credential.password,
                role:credential.role
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the API response
            console.log('Success:', data);
            toast.success("User SuccessFully Signed in ");
            if (credential.role === "admin") {
                localStorage.setItem("adminToken", data.token);
                localStorage.setItem("adminName", data.admin.name);
            } else {
                localStorage.setItem("employeeToken", data.token);
                localStorage.setItem("employeeName", data.employee.name);
            }
            
            navigate('/');
            window.location.reload();
        })
        .catch((error) => {
            // Handle any errors
            console.error('Error:', error);
        });
    }

    return (
        <section className="relative flex flex-wrap mt-20 mx-[50px] w-full rounded-xl shadow-2xl">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={credential.email}
                                onChange={changeHandler}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                value={credential.password}
                                onChange={changeHandler}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="role" className="sr-only">Role</label>

                        <div className="relative">
                            <select
                                name="role"
                                value={credential.role}
                                id="role"
                                className="rounded-lg mt-4 outline-none border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                onChange={changeHandler}
                            >
                                <option value="employee">Employee</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <a className="underline" href="#">Sign up</a>
                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-red-800 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-[600px] lg:w-1/2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550344071-13ecada2a91d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 h-full w-full object-cover  rounded-r-xl shadow-xl"
                />
            </div>
        </section>
    );
}

export default Login;
