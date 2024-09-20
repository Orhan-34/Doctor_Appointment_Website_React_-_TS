import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
	return (
		<div className="my-[10vh]">
			<div className="flex justify-center mb-10">
				<h1 className="text-2xl gap-2">
					CONTACT <span className="text-gray-500">US</span>
				</h1>
			</div>
			<div className="flex flex-col md:flex-row  justify-center">
				<img
					src={assets.contact_image}
					alt=""
					className="w-full md:w-[360px] object-contain"
				/>
				<div className="ml-10 mt-16">
					<h2 className="text-gray-600 font-semibold">OUR OFFICE</h2>
					<br />
					<div className="mb-10 space-y-5">
						<p className="text-sm font-light">
							00000 Willms Station <br />
							Suite 000, Washington, USA
						</p>

						<p className="text-sm font-light">
							Tel: (000) 000-0000 <br />
							Email: softlive@gmail.com
						</p>
						<div className="space-y-3">
							<h2 className="text-gray-600 font-semibold">
								CAREERS AT PRESCRIPTO
							</h2>
							<p className="text-sm font-light">
								Learn more about our teams and job openings.
							</p>
						</div>
						<button
							className="p-5 border rounded-lg bg-green-200 hover:opacity-65"
							type="button"
						>
							Explore Jobs
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
