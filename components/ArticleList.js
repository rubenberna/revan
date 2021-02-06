import ArticleItem from '../components/ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticlesList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
        <ArticleItem article={article} key={article.id}/>
      ))}
    </div>
  )
}

export default ArticlesList