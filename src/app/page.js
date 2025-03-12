import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import About from './components/About/aboutMe';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';

export default function Home() {
	return (
		<div>
			<link rel="icon" href="/favicon.ico" />
			<div >
				<Header></Header>
			</div>
			<div>
				<Hero></Hero>
			</div>
			<div>
				<About></About>
			</div>
			<div>
				<Projects></Projects>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}
