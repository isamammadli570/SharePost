/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { getPostsAction } from "../redux/actions/post";
import HomeCard from "../components/HomeCard"
/* import Footer from "../components/Footer" */
import { useEffect } from "react";

function Home({ filteredPosts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center m-5">
        {filteredPosts?.length > 0 ? (
          filteredPosts?.map((post, i) => <HomeCard key={i} post={post} />)
        ) : (
          <p className="text-gray-500">Axtarışa uyğun nəticə tapılmadı.</p>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home