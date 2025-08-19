import MidSection from "./MidSection";
import EndSection from "./EndSection";
import sec_one from "../../../assets/sec_one.svg";
import sec_two from "../../../assets/sec_two.svg";
import sec_three from "../../../assets/sec_three.svg";

const Main = () => {
	return (
		<main className="w-screen">
			<MidSection
				aligment={0}
				color="bg-[#fff]"
				image={sec_one}
				heading="Create an invite-only place where you belong"
				description="Discord servers are organized into topic-based channel where you can collaborate, share, and just talk about your day without clogging up a group chat."
			/>
			<MidSection
				aligment={1}
				color="bg-[#f4f4f4]"
				image={sec_two}
				heading="Where hanging out is easy"
				description="Grab a seat in a voice channel when you're free. Friends in you server can see you're around and instantly pop in to talk without having to call."
			/>
			<MidSection
				aligment={0}
				color="bg-[#fff]"
				image={sec_three}
				heading="From few to a fandom"
				description="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
			/>
			<EndSection />
		</main>
	);
};

export default Main;