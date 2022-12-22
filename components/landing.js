import { useEffect, useState } from "react";
import { getHeroSection } from "../src/utils/contentful";
import Image from "next/image";
import DotLine from "./dotline";
import IntroHome from "./introHome";
import CommonBtn from "./commonBtn";

const Landing = () => {
	const [heroHeader, setHeroHeader] = useState('');
	const [heroSub, setHeroSub] = useState('');
	const [registerBtn, setRegisterBtn] = useState('');
	const [intro, setIntro] = useState(false)
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		getHeroSection().then((res) => {
			setHeroHeader(res.header);
			setHeroSub(res.subtext);
			setRegisterBtn(res.ctaButtonText);
			setImageUrl(res.image.url);
		});
	}, []);


	return (
		<div className="w-full">
			<div className="flex flex-col items-center" style={{ background: "linear-gradient(242.14deg, #EAF8FA 0%, #EFFCF7 100%)" }}>
				<div className="flex" style={{ maxWidth: "1374px" }}>
					<div className="hero ml-[10%] w-[27%] mt-[85px]">
						<h1 className="text-[47px] font-semibold text-[#142630] capitalize" style={{ fontFamily: "Lato" }}>{heroHeader}</h1>
						<p className="font-normal text-base text-[#475060]" style={{ fontFamily: "Jost" }}>{heroSub}</p>
						<CommonBtn text={registerBtn} onClick={() => setIntro(true)} className={"font-bold"}/>
						<div>
							<button className={`pt-[8px] pb-[8px] pl-[25px] pr-[22px] rounded-sm bg-[#1CCADF] font-bold text-white mt-[10px]`}>
								Support Us Here
							</button>
						</div>
					</div>
					<div className="w-2/5 mt-[20px] ml-[18%] pb-8 z-1">
						{/* <Image src={imageUrl} width={530} height={465} alt="main image" /> */}
						<Image src={"/src/img/Group.png"} width={530} height={465} alt="main image" />
					</div>
					<div className="absolute mt-[308px] dot-line">
						<DotLine />
					</div>
				</div>
			</div>
			<IntroHome />
		</div>

	);
}

export default Landing;