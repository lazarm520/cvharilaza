import LeftSide from "@/components/leftside";
import RightSide from "@/components/rightside";

export default function Home() {
	return (
		<div className="flex flex-col sm:flex-row  sm:overflow-hidden">
			<div className="min-h-full sm:min-h-screen w-full md:w-1/3 lg:w-1/4 bg-stone-500 py-4">
				<LeftSide />
			</div>
			<div className="w-full md:w-2/3 lg:w-3/4 py-4">
				<RightSide />
			</div>
		</div>
	);
}
