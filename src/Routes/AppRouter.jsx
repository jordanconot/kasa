import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Location from '../pages/Location';
import PageNotFound from '../pages/PageNotFound';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/a-propos' element={<About />} />
                <Route path='/location/:id' element={<Location />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;