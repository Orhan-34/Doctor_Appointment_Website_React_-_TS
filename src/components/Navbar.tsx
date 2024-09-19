import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useState } from "react";

const Navbar = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [token, setToken] = useState<boolean>(true);

	return (
		<div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-500">
			<NavLink to="/">
				{" "}
				<img src={assets.mhrsLogo} alt="Logo" className="w-48 cursor-pointer" />
			</NavLink>
			<ul className="hidden md:flex items-start gap-6 font-medium">
				<NavLink to="/">
					<li className="py-1">HOME</li>
					<hr className="border-none outline-none hidden h-0.5 w-3/5 bg-success m-auto" />
				</NavLink>
				<NavLink to="/doctors">
					<li className="py-1">ALL DOCTORS</li>
					<hr className="border-none outline-none hidden h-0.5 w-3/5 bg-success m-auto" />
				</NavLink>
				<NavLink to="/about">
					<li className="py-1">ABOUT</li>
					<hr className="border-none outline-none hidden h-0.5 w-3/5 bg-success m-auto" />
				</NavLink>
				<NavLink to="/contact">
					<li className="py-1">CONTACT</li>
					<hr className="border-none outline-none hidden h-0.5 w-3/5 bg-success m-auto" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-4">
				{token ? (
					<div className="flex items-center gap-2 cursor-pointer group relative">
						<img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
						<img src={assets.dropdown_icon} alt="" className="w-2.5" />
						<div className="absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
							<div className="min-w-48 bg-stone-100 rounded-xl flex flex-col gap-4 p-4">
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<p
									className="hover:text-green-500 "
									onClick={() => navigate("my-profile")}
								>
									My Profile
								</p>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<p
									className="hover:text-green-500 "
									onClick={() => navigate("my-appointments")}
								>
									My Appointments
								</p>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<p
									className="hover:text-green-500"
									onClick={() => setToken(false)}
								>
									Logout
								</p>
							</div>
						</div>
					</div>
				) : (
					<div className="flex items-center gap-4">
						<button
							onClick={() => navigate("/login")}
							className="bg-success text-white px-8 py-3 rounded-full font-light hidden md:block "
							type="button"
						>
							Create account
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
