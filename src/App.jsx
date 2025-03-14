import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PageNotFound from './pages/PageNotFound';
import './App.css';


function App() {
	return (
		<Router>
			<div className="app-container">
				<Sidebar />
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/:id" element={<BlogPost/>} />
						<Route path="/contact" element={<Contact />} />
						{/* 404 route */}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;