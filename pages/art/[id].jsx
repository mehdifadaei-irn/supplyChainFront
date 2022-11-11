import React from "react";
import { useRouter } from "next/router";

function art({ article }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <div>
      <p>art with id {id}</p>
      <h1>{article.title}</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default art;
