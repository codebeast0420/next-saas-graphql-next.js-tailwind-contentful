import Bottom from "../components/bottom";
import CommonBtn from "../components/commonBtn";
import Header from "../components/header";
import ResourceCard from "../components/resourceCard";
import TopTitle from "../components/topTitle";
import { useEffect, useState } from "react";
import { getResources } from "../src/utils/contentful";

const Resources = () => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [tags, setTags] = useState([])
	const [filter, setFilter] = useState("all");

	const tagFilter = (index) => {
		setFilter(index);
	}

	useEffect(() => {
		getResources().then((res) => {
			setTags(res.tags);
			console.log(tags);
			setTitle(res.title);
			setDescription(res.description);
		})
	})

	return (
		<div className="bg-white flex flex-col items-center">
			<link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
			<Header current={3}/>
			<TopTitle title={"Resources"} />
			<div className="relative z-[11] bg-white pl-[10%] pr-[10%] mt-[20px]" style={{ maxWidth: "1374px" }}>
				<div>
					<p className="text-[#142630] font-bold non-italic text-2xl" style={{ fontFamily: "Lato" }}>Tags:</p>
					<div className="flex ">
						{tags.map((tag, index) => (
							<CommonBtn text={tag} key={index} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter(tag)} />
						))}
						{/* <CommonBtn text={"Video"}  onClick={() => tagFilter("Video")} />
						<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter("Article")} />
						<CommonBtn text={"Session1"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter("Session1")} />
						<CommonBtn text={"Session2"} bgColor={ "bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter("Session2")} />
						<CommonBtn text={"Session3"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter("Session3")} />
						<CommonBtn text={"Session4"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} onClick={() => tagFilter("all")} /> */}
					</div>
				</div>
				<div className="mb-[50px]">
					<div className="flex mt-[50px] justify-between">
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_1.png"}>
								<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} />
								<CommonBtn text={"Video"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
							</ResourceCard>
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_2.png"}>
								<CommonBtn text={"Session1"} bgColor={"bg-[#e1e4ea]"} />
							</ResourceCard>
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_3.png"}>
								<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} />
							</ResourceCard>
					</div>
					<div className="flex mt-[50px] justify-between">
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_4.png"}>
								<CommonBtn text={"Video"} bgColor={"bg-[#e1e4ea]"} /> </ResourceCard>
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_5.png"}>
								<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} /> </ResourceCard>
							<ResourceCard title={title} content={description} img={"/src/img/resouce_card_6.png"}>
								<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} />
								<CommonBtn text={"Video"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
							</ResourceCard>
					</div>
				</div>
			</div>
			<Bottom />
		</div>
	)
}

export default Resources;