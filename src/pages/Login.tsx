import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
	const [login, setLogin] = useState<boolean>(false);

	const handleLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setLogin(!login);
		e.preventDefault();
	};

	const handleSubmit = () => {
		login
			? toast.success("Login successful")
			: toast.success("Sign up successful");
	};

	return (
		<form className="flex items-center min-h-[80vh]">
			<div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
				<h2 className="text-2xl font-bold">{login ? "Login" : "Sign up"}</h2>
				<p>
					{login
						? "Please login to book appointment"
						: "Please sign up to book appointment"}
				</p>

				<div className={`flex-col gap-1 w-full ${login ? "hidden" : "flex"}`}>
					<label>Name</label>
					<input
						type="text"
						id="name"
						required
						className="border border-gray-200 py-2 rounded-md px-2"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label>Email</label>
					<input
						type="email"
						id="email"
						required
						className="border border-gray-200 py-2 rounded-md px-2"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label>Password</label>
					<input
						type="password"
						id="password"
						required
						className="border border-gray-200 py-2 rounded-md px-2"
					/>
				</div>

				<button
					type="submit"
					onClick={() => handleSubmit()}
					className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg w-full "
				>
					{login ? "Login" : "Sign Up"}
				</button>
				<p>
					{login ? "Create an new account?" : "Already have an account"}
					<a
						href="/"
						onClick={(e) => handleLogin(e)}
						className="underline text-green-600 font-bold pl-1"
					>
						Click here
					</a>
				</p>
			</div>
		</form>
	);
};

export default Login;
