import DownloadCard from "./DownloadCard";
import cardone from "../../assets/downloadMidOne.svg";
import cardtwo from "../../assets/downloadMidTwo.svg";
import cardthree from "../../assets/downloadMidThree.svg";
import cardfour from "../../assets/downloadMidFour.svg";

const DownloadMidSection = () => {
	
    const data = [
		{ heading: "iOS", image: cardone, bottom: 1 },
		{ heading: "Android", image: cardtwo, bottom: 1 },
		{ heading: "Linux", image: cardthree, bottom: 0 },
		{ heading: "Mac", image: cardfour, bottom: 0 },
	];
	return (
		<main className="h-[240vh] flex flex-wrap items-center justify-around">
			{data.map((val, i) => (
				<DownloadCard
					heading={val.heading}
					image={val.image}
					bottom={val.bottom}
					key={i}
				/>
			))}

			{/* <DownloadCard 
            heading={data[3].heading}
            image={data[3].image}
        /> */}
		</main>
	);
};

export default DownloadMidSection;