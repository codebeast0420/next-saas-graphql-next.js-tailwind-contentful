import { useEffect, useState } from "react"
import { getFactAndQuote, getFactCard, getQuoteCard } from "../src/utils/contentful"
import FactQuoteCard from "./factQuoteCard";
import SlideBtn from "./slideBtn";

const FactAndQuote = () => {
	const [header, setHeader] = useState('');
	const [description, setDescription] = useState('');
	const [factCard, setFactCard] = useState('');
	const [quoteCard, setQuoteCard] = useState('');

	useEffect(() => {
		getFactAndQuote().then((res) => {
			setHeader(res.header);
			setDescription(res.description);
			console.log(res);
		})

		getFactCard().then((res) => {
			setFactCard(res.body)
		})

		getQuoteCard().then((res) => {
			setQuoteCard(res.body)
		})
	}, [])
	return (
		<div className="w-full flex flex-col items-center" style={{ backgroundColor: "rgba(28, 202, 223, 0.08)" }}>
			<div style={{ maxWidth: "1374px" }}>
			<div className="w-full pl-[10%] pr-[10%] pt-[100px] pb-[100px]" >
				<p className="text-3xl font-bold text-[#142630]" style={{ fontFamily: "Lato" }}>{header}</p>
				<p className="text-lg mt-[5px] text-[#475060]" style={{ fontFamily: "Jost" }}>{description}</p>
					<div className="mt-[30px] flex">
						<FactQuoteCard imgSrc={"/src/img/image 12.png"} name={"Nicolas Smith"} content={factCard} school={"12th Science Student at ABC High School."} />
						<FactQuoteCard imgSrc={"/src/img/image 13.png"} className={"ml-[10px]"} name={"Michal Jordan"} content={quoteCard} school={"12th Science Student at ABC High School."} />
					</div>
					<SlideBtn />
				</div>
			</div>
		</div>
	)
}

export default FactAndQuote;