const Task = ({ title, description, deleteTask, index }) => {
	return (
		<div className="bg-white w-full rounded flex justify-between p-4 m-2">
			<div className="flex flex-col w-full">
				<span className="font-bold">{title}</span>
				<span className="text-slate-800">{description}</span>
			</div>
			<button
				onClick={() => deleteTask(index)}
				className="bg-black w-[50px] text-white rounded-full text-center text-xl"
            >
				X
			</button>
		</div>
	);
};

export default Task;