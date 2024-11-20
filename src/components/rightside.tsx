import NameComponent from "./name";
import TitleComponent from "./title";

const RightSide = () => {
	return (
		<div className="mr-3">
			<div className="hidden sm:block">
				<NameComponent />
			</div>
			<TitleComponent title="About me" side="right" />
			<p className="ml-6 lg:ml-5 sm:ml-3 text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
				nam, aspernatur dignissimos rerum expedita laboriosam corrupti modi,
				ipsam explicabo aliquid nobis dolores accusantium omnis minus maxime
				nulla consequatur id est consectetur dolore voluptatem ut minima! Iste
				vel eos similique aperiam quo, placeat consectetur ipsa molestiae, vero
				rerum minus molestias quam ratione voluptatum eum modi eius doloribus
				ipsam aliquid saepe. Unde beatae dolore eum ad? Libero, repudiandae
				aperiam dignissimos fugit nostrum reprehenderit veniam a!
			</p>
			<TitleComponent title="Experience" side="right" />
			<TitleComponent title="Formation" side="right" />
			<TitleComponent title="Certificate" side="right" />
			<TitleComponent title="Reference" side="right" />
		</div>
	);
};

export default RightSide;
