import "./styles.css";
import "./app.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(url);
        setLoading(false);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //get posts of the current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOffirstPost = indexOfLastPost - postPerPage;
  const currentPagePosts = posts.slice(indexOffirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <h1>Sample Blog</h1>
      <Posts posts={currentPagePosts} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
