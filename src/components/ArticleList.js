import Article from "./Article"
function ArticleList({posts}){
    const postsarr = posts.map(item =>{
        return (
            <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} />
        )
        
        
    })
    return (
        <main>
            {postsarr}
        </main>
    )

}

export default ArticleList;