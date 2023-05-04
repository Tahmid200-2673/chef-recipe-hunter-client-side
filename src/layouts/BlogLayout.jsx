import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';
import Blog from '../pages/Home/Blog/Blog';

const BlogLayout = () => {
    return (
        <div>
       <NavigationBar></NavigationBar>
       <Blog></Blog>
       <Footer></Footer>
        </div>
    );
};

export default BlogLayout;