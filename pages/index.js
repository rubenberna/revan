import { server } from '../config';
import ArticlesList from '../components/ArticleList';
import Banner from '../components/Banner';

export default function Home ({ articles }) {
  return (
    <div>
      <Banner/>
      <ArticlesList articles={articles}/>
    </div>
  );
}

// on build
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();
//
//   return {
//     props: {
//       articles
//     }
//   };
// };