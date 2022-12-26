import Bottom from "../components/bottom";
import CommonBtn from "../components/commonBtn";
import Header from "../components/header";
import ResourceCard from "../components/resourceCard";
import TopTitle from "../components/topTitle";
import { useEffect, useState } from "react";
import { getResources } from "../src/utils/contentful";

const Resources = () => {

	const [resources, setResources] = useState([{}])
	const [filter, setFilter] = useState("all");
	const [tags, setTags] = useState([]);

	const tagFilter = (index) => {
		setFilter(index);
	}

	useEffect(() => {
		getResources().then((res) => {
			setResources(res.items);
			setTags(res.items[0].tags);
		})
	}, [])

	return (
		<div className="bg-white flex flex-col items-center">
			<link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
			<Header current={3} />
			<TopTitle title={"Resources"} />
			<div className="relative z-[11] w-full bg-white pl-[10%] pr-[10%] mt-[20px]" style={{ maxWidth: "1374px" }}>
				<div>
					<p className="text-[#142630] font-bold non-italic text-2xl" style={{ fontFamily: "Lato" }}>Tags:</p>
					<div className="flex ">
						{tags.map((tag, index) => (
							<CommonBtn text={tag} key={index} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter(tag)} />
						))}
					</div>
				</div>
				<div className="mb-[50px]">
					<div className="flex mt-[50px] flex-wrap justify-between">
						{resources.map((resource, index) => (
							<ResourceCard title={resource.title} content={resource.description} img={resource.image.url}>
								{resource.tags.map((tag, index) => (
									<CommonBtn text={tag} bgColor={"bg-[#e1e4ea]"} key={index} className={index !== 0 && ("ml-[10px]")} />
								))}
							</ResourceCard>
						))}
					</div>
				</div>
			</div>
			<Bottom />
		</div>
	)
}

export default Resources;