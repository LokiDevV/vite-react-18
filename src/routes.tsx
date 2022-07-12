import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/posts';
import Post from './pages/posts/post';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<Posts />}>
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
