import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
	return (
		<div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
			{/*_________________ RIGHT SIDE ________________*/}
			<div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:-mb-[30px] ">
				<p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
					Book Appointment <br /> With Trusted Doctors
				</p>
				<div className="flex flex-col text-sm md:flex-row items-center gap-3 text-white font-light">
					<img src={assets.group_profiles} alt="" className="w-28" />
					<p>
						Simply browse through our extensive list of trusted doctors,
						<br />
						schedule your appointment hassle-free.
					</p>
				</div>
				<a
					href="/"
					className="flex flex-row items-center bg-gray-100 px-6 py-3 text-gray-600 w-1/3 rounded-full text-sm"
				>
					Book appointment
					<img src={assets.arrow_icon} alt="" className="w-3 ml-2" />
				</a>
			</div>

			{/*_________________ LEFT SIDE ________________*/}
			<div className="md:w-1/2 relative">
				<img
					className="w-full md:absolute bottom-0 h-auto rounded-lg"
					src={assets.header_img}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Header;
