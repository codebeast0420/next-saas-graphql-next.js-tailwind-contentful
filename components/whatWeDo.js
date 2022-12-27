import { useEffect, useState } from "react"
import { getWahtYouWillGain } from "../src/utils/contentful"
import TopicItem from "./topicItem";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

const WhatWeDo = () => {
	const [preheader, setPreheader] = useState('');
	const [header, setHeader] = useState('');
	const [body, setBody] = useState([]);
	const [topicHeader, setTopicHeader] = useState('');
	const [topics, setTopics] = useState([]);
	

	const MarginTop = ({ children }) => <p className="mt-[20px]">{children}</p>;

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <MarginTop>{children}</MarginTop>,
		}
	};

	useEffect(() => {
		getWahtYouWillGain().then((res) => {
			setPreheader(res.preHeader);
			setHeader(res.header);
			setBody(res.body);
			setTopicHeader(res.topicsHeader);
			setTopics(res.topics);
		})
	})
	return (
		<div className="bg-[#ffebcc] w-full relative flex flex-col items-center">
			<div style={{ maxWidth: "1374px" }}>
				<div className="text-black pt-[200px] pl-[10%] pr-[10%] pb-[50px] flex" >
					{/* <h1>{documentToReactComponents(body)}</h1> */}
					<div className="w-2/3">
						<p className="text-lg text-[#142630]" style={{ fontFamily: "Lato" }}>{preheader}</p>
						<p className="text-3xl font-bold mt-[5px] text-[#142630]" style={{ fontFamily: "Lato" }}>{header}</p>
						<p className="mt-[15px] text-[#475060]" style={{ fontFamily: "Jost" }}>{documentToReactComponents(body.json, options)}</p>
						{/* <p className="mt-[15px] text-[#475060]" style={{ fontFamily: "Jost" }}>
							<b>The SMSJ program will host four monthly 90 - 120 minute workshops.</b>
						</p>
						<p className="mt-[15px] text-[#475060]" style={{ fontFamily: "Jost" }}>
							Each breakout group will be led by a subject matter expert with experience working on the cause,
							plus a representative from our host organization, and will be supported by a student leaders to
							help facilitate conversation among the student participants.
							These individuals will participate in each of the four Sunday workshops.
						</p> */}
					</div>
					<div className="w-1/3 ml-[5%]">
						<p className="w-[205px] font-bold text-[#142630]" style={{ fontFamily: "Lato" }}>{topicHeader}</p>
						<div className="bg-white w-[90%] pl-[20px] pt-[15px] mt-[15px] rounded pb-[20px]">
							{topics.map((topic, index) => (
								<TopicItem key={index} topic={topic} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatWeDo;