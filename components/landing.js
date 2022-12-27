import { useEffect, useState } from "react";
import { getHeroSection, getSession } from "../src/utils/contentful";
import Image from "next/image";
import DotLine from "./dotline";
import IntroHome from "./introHome";
import CommonBtn from "./commonBtn";

const Landing = () => {
	const [heroHeader, setHeroHeader] = useState('');
	const [heroSub, setHeroSub] = useState('');
	const [registerBtn, setRegisterBtn] = useState('');
	const [intro, setIntro] = useState(false);
	const [sessions, setSessions] = useState([]);
	const [imageUrl, setImageUrl] = useState('');
	const [rest, setRest] = useState(0);
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	useEffect(() => {
		getHeroSection().then((res) => {
			setHeroHeader(res.header);
			setHeroSub(res.subtext);
			setRegisterBtn(res.ctaButtonText);
			setImageUrl(res.image.url);
		});

		getSession().then((res) => {
			const temp = res.items.slice().sort((a, b) => {
				const d1 = new Date(a.startTime);
				const d2 = new Date(b.startTime);
				return d1.getTime() - d2.getTime();
			});
			setSessions(temp);
		});
	}, []);

	useEffect(() => {
		if (sessions[0]) {
			const until = new Date(sessions[0].startTime);
			setRest(until.getTime() - Date.now());
		}
	})

	const convertDate = (start) => {
		const date = new Date(start);
		const dateString = `${monthNames[date.getMonth(date)]} ${date.getDate(date)}, ${date.getFullYear(date)}`
		return dateString;
	}

	const convertTime = (start, end) => {
		const start_date = new Date(start);
		const start_noon = parseInt((start_date.getHours(start_date) + 11) % 12) > 1 ? "PM" : "AM";
		const start_time = parseInt((start_date.getHours(start_date) + 11) % 12) > 9 ? parseInt((start_date.getHours(start_date) + 11) % 12) : "0" + parseInt((start_date.getHours(start_date) + 11) % 12);
		const start_min = start_date.getUTCMinutes(start_date) > 9 ? start_date.getUTCMinutes(start_date) : "0" + start_date.getUTCMinutes(start_date);
		const end_date = new Date(end);
		const end_noon = parseInt((end_date.getHours(end_date) + 11) % 12) > 1 ? "PM" : "AM";
		const end_time = parseInt((end_date.getHours(end_date) + 11) % 12) > 9 ? parseInt((end_date.getHours(end_date) + 11) % 12) : "0" + parseInt((end_date.getHours(end_date) + 11) % 12);
		const end_min = end_date.getUTCMinutes(end_date) > 9 ? end_date.getUTCMinutes(end_date) : "0" + end_date.getUTCMinutes(end_date);
		const dateString = `${start_time}:${start_min} ${start_noon} - ${end_time}:${end_min} ${end_noon}`
		return dateString;
	}


	return (
		<div className="w-full">
			<div className="flex flex-col items-center" style={{ background: "linear-gradient(242.14deg, #EAF8FA 0%, #EFFCF7 100%)" }}>
				<div className="flex" style={{ maxWidth: "1374px" }}>
					<div className="hero ml-[10%] w-[27%] mt-[85px]">
						<h1 className="text-[47px] font-semibold text-[#142630] capitalize" style={{ fontFamily: "Lato" }}>{heroHeader}</h1>
						<p className="font-normal text-base text-[#475060]">{heroSub}</p>
						<CommonBtn text={registerBtn} onClick={() => setIntro(true)} className={"font-bold"} />
						<div>
							<button className={`pt-[8px] pb-[8px] pl-[25px] pr-[22px] rounded-sm bg-[#1CCADF] font-bold text-white mt-[10px]`}>
								Support Us Here
							</button>
						</div>
					</div>
					<div className="w-2/5 mt-[20px] ml-[18%] pb-8 z-1">
						{imageUrl && (
							<Image src={imageUrl} width={530} height={465} alt="main image" />
						)}
					</div>
					<div className="absolute mt-[308px] dot-line">
						<DotLine />
					</div>
				</div>
			</div>
			{rest !== 0 && (
				<IntroHome
					rest={rest}
					sessions={sessions}
					first_date={sessions[0] ? convertDate(sessions[0].startTime) : ""}
					first_time={sessions[0] ? convertTime(sessions[0].startTime, sessions[0].endTime) : ""}
				/>
			)}
		</div>

	);
}

export default Landing;