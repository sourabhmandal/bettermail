import Link from "next/link";
import Head from "next/head";

export default () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="icons/chat.png" />
      </Head>
      <h1>hsjha</h1>
      <Link href={`/profile`} passHref>
        <button>profile</button>
      </Link>
      <Link href={"/post-job"}>
        <button>post-job</button>
      </Link>
      <Link href={"/feature-request"}>
        <button>feature-request</button>
      </Link>
      <img src="icons/chat.png" alt="Vercel Logo" className="logo" />
    </div>
  );
};
