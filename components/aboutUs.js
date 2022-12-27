import { useEffect, useState } from "react";
import { getLandingAboutUs } from "../src/utils/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

const AboutUs = () => {
	const [header, setHeader] = useState('');
	const [body, setBody] = useState('');
	const [preHeader, setPreHeader] = useState('');
	const [ctaText, setCtaText] = useState('');
	const [collageImagesCollection, setCollageImagesCollection] = useState([]);

	const MarginTop = ({ children }) => <p className="mt-[20px]">{children}</p>;

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <MarginTop>{children}</MarginTop>,
		}
	};

	useEffect(() => {
		getLandingAboutUs().then((res) => {
			setHeader(res.header);
			setBody(res.body);
			setCtaText(res.ctaText);
			setPreHeader(res.preHeader);
			setCollageImagesCollection(res.collageImagesCollection.items);
		})
	})
	return (
		<div className="z-20 w-full relative  mt-[50px] flex flex-col items-center">
			<div style={{ maxWidth: "1374px" }}>
				<div className=" pl-[10%] pr-[10%] flex">
					<div className="w-2/3">
						<p className="text-lg text-[#142630]" style={{ fontFamily: "Lato" }}>{preHeader}</p>
						<p className="text-3xl font-bold mt-[5px] text-[#142630]" style={{ fontFamily: "Lato" }}>{header}</p>
						<div className="mt-[15px] text-[#475060]" style={{ fontFamily: "Jost" }}>{documentToReactComponents(body.json, options)}</div>
						<div className="mt-[50px]">
							<a style={{boxShadow: "0px 10px 25px rgba(28, 202, 223, 0.3)"}} className={`pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded-sm bg-[#1CCADF] text-white mt-[30px]`} href="/aboutUs" >
								{ctaText}
							</a>
						</div>
					</div>
					<div className="pl-[3%]">
						<div className="flex items-start">
							<Image src={collageImagesCollection[0] ? collageImagesCollection[0].url : ""} width={75} height={75} alt="woman1" style={{ borderRadius: "5rem" }} className="mt-[24px]" />
							<div className="flex flex-col mt-[24px]">
								<Image
									src={"/src/img/Rectangle 92.png"}
									width={11}
									height={11}
									alt="small circul"
									className="ml-[24px] mt-[10px]"
								/>
								<Image
									src={"/src/img/Rectangle 89.png"}
									className="mt-[43px] ml-[-4px]"
									width={45}
									height={45}
									alt="blue quater circul"
								/>
							</div>
							<Image
								src={collageImagesCollection[3] ? collageImagesCollection[3].url : ""}
								width={200}
								height={200}
								alt="women"
								style={{ borderTopLeftRadius: "5rem" }}
								className="ml-[5px]" />
						</div>
						<Image
							src={collageImagesCollection[1] ? collageImagesCollection[1].url : ""}
							width={110}
							height={110}
							alt="man1"
							style={{ borderBottomLeftRadius: "4rem" }}
						/>
						<Image
							src={collageImagesCollection[2] ? collageImagesCollection[2].url : ""}
							width={110}
							className="ml-[122px] mt-[-45px]"
							height={110}
							alt="woman2"
							style={{ borderBottomRightRadius: "4rem" }}
						/>
						<Image
							src={"/src/img/Rectangle 91.png"}
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