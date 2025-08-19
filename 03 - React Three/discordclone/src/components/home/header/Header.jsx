import Navbar from "../../common/Navbar";
import mountainBg from "../../../assets/mountain_bg.svg";
import rightBg from "../../../assets/right_bg.svg";
import leftBg from "../../../assets/shoe_bg.svg";

const Header = () => {
	return (
		<header className="relative truncate w-screen bg-[#404EED] h-[85vh] text-white">
			<Navbar color="bg-[#404EED]" />

			<img
				src={mountainBg}
				alt="Mountain Background"
				className="absolute bottom-0"
			/>
			<img
				src={leftBg}
				alt="Left Side Background"
				className="absolute bottom-0 -left-72"
			/>
			<img
				src={rightBg}
				alt="Right Side Background"
				className="absolute bottom-0 -right-60"
			/>

			<section className="absolute bottom-[10px] left-[370px] w-[55%] mx-auto my-32 text-center h-[55%]">
				<div className="w-full h-full flex flex-col justify-evenly">
					<p className="text-[64px] font-black font-[Tasa Orbiter]">
						IMAGINE A PLACE...
					</p>
					<p className="text-lg">
						...where you can belong to a school club, a gaming
						group, or a worldwide art community. <br />
						Where just you and a handful of friends can spend time
						together. A place that makes it easy to <br /> talk
						every day and hang out more often.
					</p>
					<div className="w-full flex justify-evenly">
						<button className="bg-white text-black text-xl font-medium py-[12px] px-[24px] rounded-3xl hover:text-[#5865f2] hover:font-medium">
							Download for Windows
						</button>
						<button className="bg-black text-white text-xl font-medium py-[12px] px-[24px] rounded-3xl hover:text-[#5865f2] hover:font-medium">
							Open Discord in your browser
						</button>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
