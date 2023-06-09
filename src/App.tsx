import React, { useEffect } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMainBlog } from "./app/slices/mainBlogSlice";
import { setRecentBlogs } from "./app/slices/recentBlogsSlice";

import blogs from "./db/blog.json";

import Home from "./pages/Home";
import Header from "./components/layout/Header/Header";
import Blog from "./pages/Blog";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  useEffect(() => {
    dispatch(setMainBlog(blogs[0]));
    dispatch(setRecentBlogs(blogs));
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
