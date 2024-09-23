import { assets } from "../assets/assets_frontend/assets";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
	return (
		<div  className={` ${className} px-10`}>
			<div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-5 justify-between ">
				<div>
					<img src={assets.mhrsLogo} alt="" className="w-36" />
					<p className="text-sm text-gray-700 mt-3 font-medium w-full md:w-2/3 leading-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<div>
					<h2 className="text-xl md:text-2xl ">COMPANY</h2>
					<ul className="text-sm font-medium text-gray-600 space-y-3 mt-3">
						<li className="hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
							<a href="/">Home</a>
						</li>
						<li className="hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
							<a href="/about-us"> About us</a>
						</li>
						<li className="hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
							<a href="/delivery"> Delivery</a>
						</li>
						<li className="hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
							<a href="/privacy-policy">Privacy policy</a>
						</li>
					</ul>
				</div>
				<div className="space-y-3">
					<h2 className="text-xl md:text-2xl ">GET IN TOUCH</h2>
					<p className="text-sm text-gray-600 hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
						+0-000-000-000
					</p>
					<p className="text-sm text-gray-600 hover:text-green-500 hover:scale-110 hover:translate-x-[20px] transition-all duration-500">
						orhanozcelik3438@gmail.com
					</p>
				</div>
			</div>
			<div className="mt-4">
				<hr />
				<p className="py-5 text-sm text-center">
					Copyright 2024 @{" "}
					<b className="underline text-green-500 font-bold">
						{" "}
						SoftwareLife.dev
					</b>{" "}
					- All Right Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
