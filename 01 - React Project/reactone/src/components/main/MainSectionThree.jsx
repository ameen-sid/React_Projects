import firstImg from "../../assets/first.jpg";
import secondImg from "../../assets/second.jpg";
import thirdImg from "../../assets/third.jpg";

const MainSectionThree = () => {
	return (
		<section className="w-full h-[90vh] text-center flex flex-col justify-center items-center gap-4" id="team">
			<h4 className="text-4xl font-semibold">OUR BEST TEAM</h4>
			<span className="text-l text-gray-500">Creative Nerds</span>
			<hr className="greenHr" />
			<div className="flex justify-around w-[80vw] h-[60vh] max-[800px]:w-[95vw]">
				<div className="w-[30%] h-[90%] bg-white">
					<img src={firstImg} alt="" className="w-full h-full" />
					<p className="font-black text-lime-500 text-l my-1">
						JONATHAN DOE
					</p>
					<span className="text-sm text-gray-500">
						Chief Executive
					</span>
				</div>
				<div className="w-[30%] h-[90%] bg-white">
					<img src={secondImg} alt="" className="w-full h-full" />
					<p className="font-black text-lime-500 text-l my-1">
						JAMES TAYLOR
					</p>
					<span className="text-sm text-gray-500">Salesman</span>
				</div>
				<div className="w-[30%] h-[90%] bg-white">
					<img src={thirdImg} alt="" className="w-full h-full" />
					<p className="font-black text-lime-500 text-l my-1">
						LISA TRUMP
					</p>
					<span className="text-sm text-gray-500">
						Project Manager
					</span>
				</div>
			</div>
		</section>
	);
};

export default MainSectionThree;