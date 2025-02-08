import { useSelector, useDispatch } from "react-redux"
import { getPostsAction } from "../redux/actions/post";
import HomeCard from "../components/HomeCard"
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  console.log("posts", posts)

  return (
    <div className="flex flex-wrap items-center m-5">
      {posts.length > 0 && posts?.map((post, i) => (
        <HomeCard key={i} post={post} />
      ))}
    </div>
  )
}

export default Home