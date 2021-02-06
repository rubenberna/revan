import { server } from '../../../config/server';
import Meta from '../../../components/Meta';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const article = ({article}) => {
  return (
    <>
      <Meta title={article.title}/>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br/>
      <Link href="/">Go back</Link>
    </>
  );
};

// on request
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();
//
//   return {
//     props: {
//       article
//     }
//   };
// };

// this is a combination of ssg with static props -- it generates all the paths for us
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({params: {id: id.toString()}}));

  return {
    paths,
    fallback: false
  };
};

export default article;