import { useRouter } from "next/router";
import Link from "next/link";

const Post = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <p>Post: {pid} </p>
      <Link href="/post/[pid]" as={`/post/${pid}`}>
        <a>{pid} post</a>
      </Link>
    </>
  );
};

export default Post;
