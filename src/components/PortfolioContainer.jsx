import { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('Home');

	const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Projects') {
			return <Projects />;
		}
        if (currentPage === 'Blog') {
			return <Blog />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<>
			<Header handlePageChange={handlePageChange} />

			{renderPage()}

			<Footer />
		</>
	);
}
