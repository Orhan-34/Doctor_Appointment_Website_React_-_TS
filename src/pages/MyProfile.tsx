import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "Edward Cullen",
		image: assets.profile_pic,
		email: "edward_cullen@gmail.com",
		phone: "+90 545 941 3478",
		address: {
			line1: "1234 Main St",
			line2: "Los Angeles, CA 90068",
		},
		gender: "Male",
		birthdate: "20-06-1990",
	});
	const [editMode, setEditMode] = useState(true);
	return (
		<div className="max-w-lg flex flex-col text-sm gap-4">
			<img className="w-36 rounded-lg" src={userData.image} alt="" />
			{editMode ? (
				<input
        className="max-w-60 text-3xl font-medium bg-slate-100 mt-5"
					type="text"
					value={userData.name}
					onChange={(e) =>
						setUserData((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
			) : (
				<p className="text-3xl font-medium text-neutral-800 mt-3">{userData.name}</p>
			)}
			<hr className="w-[35%]  bg-zinc-400 h-[1px] border-none" />
			<div className="">
				<h3 className="text-gray-400 underline mt-3">CONTACT INFORMATION</h3>
				<div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
					<p className="font-medium">Email id: </p>
					<p className="text-blue-500">{userData.email}</p>
					<p className="font-medium">Phone:</p>
					{editMode ? (
						<input
							type="text"
              className="bg-gray-100 max-w-52"
							value={userData.phone}
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, phone: e.target.value }))
							}
						/>
					) : (
						<p>{userData.phone}</p>
					)}
					<p className="font-medium">Address:</p>
					{editMode ? (
						<p>
							<input
								type="text"
                className="bg-gray-100 max-w-52"
								value={userData.address.line1}
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line1: e.target.value },
									}))
								}
							/>
							<br />
							<input
								type="text"
                className="bg-gray-100 max-w-52"
								value={userData.address.line2}
								onChange={(e) =>
									setUserData((prev) => ({
										...prev,
										address: { ...prev.address, line2: e.target.value },
									}))
								}
							/>
						</p>
					) : (
						<p>
							{userData.address.line1}
							<br />
							{userData.address.line2}
						</p>
					)}
				</div>
			</div>
			<div>
				<p className="underline text-gray-400">BASIC INFORMATION</p>
				<div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p>Gender:</p>
					{editMode ? (
						<select
            className="max-w-36 bg-gray-100"
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, gender: e.target.value }))
							}
							value={userData.gender}
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					) : (
						<p>Gender: {userData.gender}</p>
					)}
					<p>Birthday:</p>
					{editMode ? (
						<input
							type="date"
              className="bg-gray-100 max-w-36"
							value={userData.birthdate}
							onChange={(e) =>
								setUserData((prev) => ({ ...prev, birthdate: e.target.value }))
							}
						/>
					) : (
						<p>Birthday: {userData.birthdate}</p>
					)}
				</div>
			</div>
			{editMode ? (
				// biome-ignore lint/a11y/useButtonType: <explanation>
				<button onClick={() => setEditMode(false)} className="bg-success border px-4 py-2 hover:opacity-75 max-w-36 mt-7 rounded-xl text-white">Save</button>
			) : (
				// biome-ignore lint/a11y/useButtonType: <explanation>
				<button onClick={() => setEditMode(true)} className="bg-primary border px-4 py-2 hover:opacity-75 max-w-36 mt-7 rounded-xl text-white">Edit Information</button>
			)}
		</div>
	);
};

export default MyProfile;
