import { useState } from "react";
import { loginUser } from "../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter your email");
      return;
    }

    loginUser(email);
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="border rounded-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to Shopora
        </h1>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-4 py-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-black text-white w-full py-3 rounded hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  );
}
