import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const router = useRouter();

  // useEffect(() => {
  //   async function user() {
  //     const res = await fetch("https://randomuser.me/api/");
  //     const data = await res.json();

  //     // if male
  //     if (data?.results?.[0]?.gender === "male") {
  //       router.push("/404");
  //       console.log("MAILE");
  //       return;
  //     }
  //   }

  //   user();
  // }, []);

  return (
    <div>
      <h1>Protected Pages</h1>
      <div>
        <p>{post?.id}</p>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        <Link href={`${post?.id - 1}`}>
          <a>{`<- ${post?.id - 1}`}</a>
        </Link>
        <Link href={`${post?.id + 1}`}>
          <a>{`${post?.id + 1}->`}</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;

Post.protected = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // @ts-ignore
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params?.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
};
