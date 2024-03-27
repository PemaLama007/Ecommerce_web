import React from 'react'
import './CSS/loginSignup.css'
const LoginSignup = () => {
  return (
    <div class="wrapper">
        <form action="">
            <h1>Login / Register</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required />
                <i class="bx bxs-user"></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required/>
                <i class='bx bxs-lock-alt'></i>
            </div>

            <div class="remember-forgot">
                <label>
                    <input type="checkbox"/> Remember me
                </label>
                <a href="#">Forgot password</a>
            </div>

            <button type="submit" class="btn">Login</button>

            <div class="register-link">
                <p>Don't have an account
                </p>
                <a href="#">Register</a>
                
            </div>
        </form>
    </div>
  )
}

export default LoginSignup