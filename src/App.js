import './App.css';
import PostsTable from './components/postsTable';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { initPosts } from "./redux/posts";
import $ from 'jquery';

function App() {
  const dispatch = useDispatch();

  const loadPosts = () => {
    $.get("https://jsonplaceholder.typicode.com/posts").then(loadPostsSuccess, loadPostsFail).always(loadPostsDone);
  }

  const loadPostsSuccess = (posts) => {
    dispatch(initPosts(posts));
  }
  const loadPostsFail = () => {
  }
  const loadPostsDone = () => {
  }

  return (
    <div className="App">
      <Button onClick={loadPosts}>Load posts</Button>
      <PostsTable/>
    </div>
  );
}

export default App;
