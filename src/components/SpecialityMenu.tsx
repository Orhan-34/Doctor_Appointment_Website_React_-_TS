import { Link } from "react-router-dom";
import {  specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
	return (
		<div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800 ">
			<h1
				className="text-3xl font-semibold
            "
			>
				Find by Speciality
			</h1>
			<p className="text-sm font-light sm:w-1/3 text-center">
				Simply browse through our extensive list of trusted doctors, schedule
				your appointment hassle-free.
			</p>
			<div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
				{specialityData.map((item, index) => (
					<Link
                    onClick={() => scrollTo(0,0)}
						to={`/doctors/${
                            item.speciality
						}`}
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
                        className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
					>
						<img src={item.image} alt="" className="w-16 sm:w-24 mb-2"/>
						<p className="">{item.speciality}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SpecialityMenu;
