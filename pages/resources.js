import Bottom from "../components/bottom";
import CommonBtn from "../components/commonBtn";
import Header from "../components/header";
import ResourceCard from "../components/resourceCard";
import TopTitle from "../components/topTitle";
import { useEffect } from "react";
import WebFont from "webfontloader";

const Resources = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Lato', 'Jost']
			}
		})
	},[])

	const title = "Introduction to the Problems and Power of Social Media";
	const content = "This session is an overview session to ensure all students understand how social media platforms are designed and leveraged for good or bad purposes."
	return (
		<div className="bg-white flex flex-col items-center">
			<Header />
			<TopTitle title={"Resources"} />
			<div className="relative z-[11] bg-white pl-[10%] pr-[10%] mt-[20px]" style={{ maxWidth: "1374px" }}>
				<div>
					<p className="text-[#142630] font-bold non-italic text-2xl" style={{ fontFamily: "Lato" }}>Tags:</p>
					<div className="flex ">
						<CommonBtn text={"Video"} />
						<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
						<CommonBtn text={"Session1"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
						<CommonBtn text={"Session2"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
						<CommonBtn text={"Session3"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
						<CommonBtn text={"Session4"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
					</div>
				</div>
				<div className="mb-[50px]">
					<div className="flex mt-[50px] justify-between">
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_1.png"}>
							<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} />
							<CommonBtn text={"Video"} bgColor={"bg-[#e1e4ea]"} className={"ml-[10px]"} />
						</ResourceCard>
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_2.png"}>
							<CommonBtn text={"Session1"} bgColor={"bg-[#e1e4ea]"} />
						</ResourceCard>
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_3.png"}>
							<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} />
						</ResourceCard>
					</div>
					<div className="flex mt-[50px] justify-between">
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_4.png"}>
							<CommonBtn text={"Video"} bgColor={"bg-[#e1e4ea]"} /> </ResourceCard>
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_5.png"}>
							<CommonBtn text={"Article"} bgColor={"bg-[#e1e4ea]"} /> </ResourceCard>
						<ResourceCard title={title} content={content} img={"/src/img/resouce_card_6.png"}>
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