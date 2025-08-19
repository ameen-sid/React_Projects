const MainSectionFour = () => {
	return (
		<section className="w-full h-[15vh] my-16 max-[800px]:p-4 flex justify-around items-center bg-gradient-to-r from-pink-500 to-purple-500">
			<div>
				<span className="">
					Subscribe our newsletter and get updates
				</span>
				<p className="text-xl max-[800px]:text-base max-[800px]:font-bold font-semibold">
					ARE YOU READY TO ENJOY? SUBSCRIBE TO OUR NEWSLETTER
				</p>
			</div>
			<div>
				<button className="bg-lime-500 text-white text-sm p-4 rounded-md max-[800px]:">
					CALL US:{" "}
					<span className="font-black text-xl">456-789-5690</span>
				</button>
			</div>
		</section>
	);
};

export default MainSectionFour;