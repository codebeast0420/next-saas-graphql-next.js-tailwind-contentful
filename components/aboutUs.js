import { useEffect, useState } from "react";
import { getAboutUs } from "../src/utils/contentful";
import Image from "next/image";
import CommonBtn from "./commonBtn";

const AboutUs = () => {
	const [header, setHeader] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		getAboutUs().then((res) => {
			setHeader(res.header);
			setBody(res.body.json.content[0].content[0].value);
		})
	})
	return (
		<div className="z-20 w-full relative  mt-[50px] flex flex-col items-center">
			<div style={{ maxWidth: "1374px" }}>
				<div className=" pl-[10%] pr-[10%] flex">
					<div className="w-2/3">
						<p className="text-lg text-black" style={{ fontFamily: "" }}>Our Stroy</p>
						<p className="text-3xl font-bold mt-[5px]" style={{ fontFamily: "" }}>{header}</p>
						<p className="mt-[15px] text-black" style={{ fontFamily: "Jost" }}>
							Social Media for Social Justice was conceived by Trish Brennan-Gac and is
							being incubated through the Youth Creating Change (YCC)
							Fellowship of Communities United Against Hate (CUAH) founded by Paul Tiao.
							The program is being co-created with high school students in Maryland, California, Virginia,
							Texas, and the District of Columbia. The curriculum is being developed in consultation with
							experts in disinformation, online organizing, and curriculum development and facilitation.
						</p>
						<p className="mt-[15px] text-black" style={{ fontFamily: "Jost" }}>
							Planning began in August 2021. The pilot will launch in January 2023 with a goal of 150 students.
							Additional sessions are scheduled for February and March.
						</p>
						<CommonBtn text={"Learn More About Us"} />
					</div>
					<div className="pl-[3%]">
						<div className="flex items-start">
							<Image src="/src/img/image 21.png" cla width={75} height={75} alt="woman1" style={{ borderRadius: "5rem" }} className="mt-[24px]" />
							<div className="flex flex-col mt-[24px]">
								<Image
									src="/src/img/Rectangle 92.png"
									width={11}
									height={11}
									alt="small circul"
									className="ml-[24px] mt-[10px]"
								/>
								<Image
									src="/src/img/Rectangle 89.png"
									className="mt-[43px] ml-[-4px]"
									width={45}
									height={45}
									alt="blue quater circul"
								/>
							</div>
							<Image
								src="/src/img/image 22.png"
								width={200}
								height={200}
								alt="women"
								style={{ borderTopLeftRadius: "5rem" }}
								className="ml-[5px]" />
						</div>
						<Image
							src="/src/img/image 23.png"
							className="mt-[-55px]"
							width={110}
							height={110}
							alt="man1"
							style={{ borderBottomLeftRadius: "4rem" }}
						/>
						<Image
							src="/src/img/image 24.png"
							width={110}
							className="ml-[122px] mt-[-45px]"
							height={110}
							alt="woman2"
							style={{ borderBottomRightRadius: "4rem" }}
						/>
						<Image
							src="/src/img/Rectangle 91.png"
							width={50}
							height={50}
							className="ml-[86%] mt-[-100px]"
							alt="circul"
						/>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs;