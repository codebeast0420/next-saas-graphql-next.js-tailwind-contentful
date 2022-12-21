const SessionSpeaker = ({ children }) => {
	return (
		<div className="pt-[15px] mt-[20px] pl-[15px] pr-[15px] bg-[#F5F5F5] ml-[50px] rounded-[10px]">
			<p className="font-medium text-[#475060]" style={{ fontFamily: "Lato" }}>Session Speakers:</p>
			{children}
		</div>
	)
}

export default SessionSpeaker;