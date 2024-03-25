import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import About from './components/About/aboutMe';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';

export default function Home() {
	return (
		<div>
			<link rel="icon" href="/favicon.ico" />
			<div className="h-[400px]">
				<Header></Header>
			</div>
			<div className="h-[600px]">
				<Hero></Hero>
			</div>
			<div className="lg:h-[700px] md:h-[900px]">
				<About></About>
			</div>
			<div className="lg:h-[1300px] md:h-[1600px]">
				<Projects></Projects>
			</div>
			<div className="h-[300px]">
				<Footer></Footer>
			</div>
		</div>
	);
}
