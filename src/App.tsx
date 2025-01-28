import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import Posts from './routes/posts';
import Post from './routes/post';
import PostsIndex from './routes/postsindex';

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-center text-semibold text-2xl'>Hello React Router</h1>
      <h2 className='text-semibold text-xl my-2'>ナビゲーション</h2>
      <nav>
        <div className='block'>
          <Link to='/'>Home</Link>
          <button
            type='button'
            className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-2'
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
        <div className='block'>
          <Link to='/about'>About</Link>
          <button
            type='button'
            className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-2'
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </div>
        <div className='block'>
          <Link to='/contact'>Contact</Link>
          <button
            type='button'
            className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-2'
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </div>
        <div className='block'>
          <Link to='/posts'>Posts</Link>
          <button
            type='button'
            className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-2'
            onClick={() => navigate('/posts')}
          >
            Posts
          </button>
        </div>
      </nav>
      <h2 className='text-semibold text-xl my-2'>コンテンツ</h2>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact message='Hello' />} />
        <Route path='/posts' element={<Posts />}>
          <Route index element={<PostsIndex />} />
          <Route path=':postId' element={<Post />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
