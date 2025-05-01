import React, { useEffect, useState } from "react";
import { getPosts } from "./services/post";
import { POSTS } from "./types";

const PostIntegration = () => {
  const [post, setPost] = useState<POSTS[]>([]);
  const [initialPost, setInitialPost] = useState<POSTS[]>([]);
  const [valueUserId, setValueUserId] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setIsFetching(true);
    getPosts()
      .then((res) => {
        setPost(res);
        setInitialPost(res);
      })
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, []);

  const onFilter = () => {
    const res = valueUserId
      ? initialPost.filter((p) => p.userId === Number(valueUserId))
      : initialPost;
    setPost(res);
    if (!res.length) {
      window.alert("User dont have a post");
    }
  };

  return (
    <>
      <div className="post">
        <div className="filter-post">
          <input
            type="number"
            placeholder="Number id to filter"
            onChange={(e) => setValueUserId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onFilter();
              }
            }}
          />
          <button onClick={onFilter}>filter</button>
        </div>

        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <>
            {post.length ? (
              post.map((post) => {
                return (
                  <div className="post-box">
                    <div className="post-top">
                      <div>{post.id}.</div>
                      <div className="post-box__title">{post.title}</div>
                    </div>

                    <div className="post-box__desc">{post.body}</div>
                  </div>
                );
              })
            ) : (
              <span className="post-box">No Post!</span>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PostIntegration;
