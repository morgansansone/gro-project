import React from 'react';
import { useState } from "react";

export default function Register() {
    return(
       <div className="bg-{#FBFCF7} h-screen flex items-center justify-center">
            <h1 className="item-start "> Register Page </h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit" className="bg-gray-300 px-5">Login</button>
            </form>
       </div>
    );
} 