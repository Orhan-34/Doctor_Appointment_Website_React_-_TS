import { assets } from "../assets/assets_frontend/assets";

const About = () => {
	return (
		<div>
			<div className="text-black text-2xl font-normal flex items-center justify-center flex-row gap-2 mt-[10vh]">
				<p className="text-gray-400">ABOUT </p>
				<p> US</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 mb-10">
				<img src={assets.about_image} alt="" className="w-1/4 mt-[3vw]" />
				<div className="mt-[7vw] w-[50%] text-sm text-gray-600 font-normal">
					<p>
						Welcome to Prescripto, your trusted partner in managing your
						healthcare needs conveniently and efficiently. At Prescripto, we
						understand the challenges individuals face when it comes to
						scheduling doctor appointments and managing their health records.
					</p>
					<br />
					<p>
						Prescripto is committed to excellence in healthcare technology. We
						continuously strive to enhance our platform, integrating the latest
						advancements to improve user experience and deliver superior
						service. Whether you're booking your first appointment or managing
						ongoing care, Prescripto is here to support you every step of the
						way.
					</p>
					<br />
					<h3 className="font-bold text-black">OUR VISION</h3>
					<br />
					<p>
						Our vision at Prescripto is to create a seamless healthcare
						experience for every user. We aim to bridge the gap between patients
						and healthcare providers, making it easier for you to access the
						care you need, when you need it.
					</p>
				</div>
			</div>
			<h3 className="text-xl mb-5">
				WHY <b>CHOOSE US</b>
			</h3>
			<div className="flex flex-col md:flex-row mb-7 md:mb-36">
				<div className="border px-20 py-16 ">
					<h3 className="text-lg font-semibold mb-3">EFFICIENCY:</h3>
					<p className="text-sm font-light">
						Streamlined appointment scheduling that fits into your busy
						lifestyle.
					</p>
				</div>
				<div className="border px-20 py-16 ">
					<h3 className="text-lg font-semibold mb-5">CONVENIENCE:</h3>
					<p className="text-sm font-light">
						Access to a network of trusted healthcare professionals in your
						area.
					</p>
				</div>
				<div className="border px-20 py-16 ">
					<h3 className="text-lg font-semibold mb-5">PERSONALIZATION:</h3>
					<p className="text-sm font-light">
						Tailored recommendations and reminders to help you stay on top of
						your health.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
