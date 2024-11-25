import LeftSide from "@/components/leftside";
import RightSide from "@/components/rightside";

export default function Home() {
	return (
		<div className="flex flex-col sm:flex-row  sm:overflow-hidden">
			<div className="relative min-h-full sm:min-h-screen w-full md:w-1/3 lg:w-1/4 bg-stone-500">
				<div className="absolute right-0 -z-10 h-full w-full sm:shadow-[10px_0_40px_10px_rgba(0,0,0,0.4)]"></div>
				<LeftSide />
			</div>
			<div className="w-full md:w-2/3 lg:w-3/4 ">
				<RightSide />
			</div>
		</div>
	);
}
