import { useState, useEffect } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import postsData from "../posts.json";

function Home() {
  const [posts, setPosts] = useState(postsData);
  const [totalData, setTotalData] = useState(0);

  const changeSearch = (value) => {
    const postResult = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(postResult);
    setTotalData(postResult.length);
  };

  return (
    <>
      <h2>SIMPLE BLOG</h2>
      <Search changeSearch={changeSearch} totalData={totalData} />
      {posts.map(({ title, tags, date, isNew }, index) => {
        return <Article {...{ title, tags, date, isNew }} key={index} />;
      })}
    </>
  );
}

export default Home;
