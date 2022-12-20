import { use, useEffect, useState } from "react";
import AvailableCard from "../components/availableCard";
import Bottom from "../components/bottom";
import Header from "../components/header"
import SessionSpeaker from "../components/sessionSpeaker";
import Social from "../components/social";
import Speaker from "../components/speaker";
import TopTitle from "../components/topTitle"
import { getSession, getSessionAddtionalInfo, getSpeaker } from "../src/utils/contentful";

const AvailableSessions = () => {
	const [title1, setTitle1] = useState('');
	const [description1, setDescription1] = useState('');
	const [subtitles1, setSubtitles1] = useState([]);
	const [speakers, setSpeakers] = useState([]);
	const [description3, setDescription3] = useState('This session is designed to teach students how to discern trust from lies and how to identify malicious content that may be disguised. They will learn how to assess content to determine its validity as well as individuals or organizations to determine if they are a trustworthy source. In the breakout sessions, subject matter experts will share with students the organizations who are trusted in that content area and ways in which students can access their resources and support their work.')
	const [indexPart2, setIndexPart2] = useState(
		[
			'Activist/Influencer who establishes an identity advocating for specific causes. Intentional about developing and expanding a network that shares this commitment.',
			'Reporter/Amplifier who shares information and opportunities within their existing network.',
			'Organizer who uses social media to inspire and organize individuals around particular causes.',
			'Monitor who reports disinformation and divisive content to interested organizations.'
		])
	useEffect(() => {
		getSession().then((res) => {
			setTitle1(res.title);
			setDescription1(res.description.json.content[0].content[0].value);
		});

		getSessionAddtionalInfo().then((res) => {
			setSubtitles1(res.items);
			// setSubtitles1([...subtitles1, { title: res.items[1].header, content: res.items[1].body.json.content[0].content[0].value }])
			// console.log(res.items, res.items.length)
		});

		getSpeaker().then((res) => {
			setSpeakers(res.items);
			console.log(res.items);
		})
	}, [])

	return (
		<div>
			<Header />
			<TopTitle title={"Available Sessions"} />
			<div className="relative z-[11] pl-[15%] pr-[15%] bg-white">
				<AvailableCard img={"/src/img/image 7-lg.png"} title={title1} description={description1} subtitles={subtitles1}>
					<SessionSpeaker>
						<Speaker img={"/src/img/speaker1.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"/src/img/speaker2.png"} name={speakers[1] ? speakers[1].name : ""} content={speakers[1] ? speakers[1].background : ""} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
				<AvailableCard img={"/src/img/image 10-lg.png"} title={title1} description={description1} indexPart={indexPart2}>
					<SessionSpeaker>
						<Speaker img={"/src/img/speaker1.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"/src/img/speaker2.png"} name={speakers[1] ? speakers[1].name : ""} content={speakers[1] ? speakers[1].background : ""} />
						<Speaker img={"/src/img/speaker3.png"} name={"Laurie Moskowitz"} content={"LORE Strategies"} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
				<AvailableCard img={"/src/img/image 11-lg.png"} title={"What Can You Trust?"} description={description3} >
					<SessionSpeaker>
						<Speaker img={"/src/img/speaker1.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"/src/img/speaker3.png"} name={"Laurie Moskowitz"} content={"LORE Strategies"} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
			</div>
			<Bottom />
		</div>
	)
}

export default AvailableSessions;