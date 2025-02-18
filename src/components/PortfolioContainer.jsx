import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

export default function PortfolioContainer() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}
