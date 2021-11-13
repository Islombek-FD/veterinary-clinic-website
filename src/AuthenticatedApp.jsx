import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Faq from './Pages/Faq/Faq.jsx';
import Contact from './Pages/Contact/Contact.jsx';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/articles' element={<Blog />} />
				<Route path='/faq' element={<Faq />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
