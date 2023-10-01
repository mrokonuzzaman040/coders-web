import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Remember me</span>
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text-alt">Don't have an account yet? <Link to={'/register'} className="link link-hover">Sign up</Link></span>

                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;