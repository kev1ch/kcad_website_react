import './ArticleComponent.css';

function ArticleComponent(props) {

    const data = props.data;

    return (
        <div className="main_block">
            <div className="article_title">{data.title}</div>
            {data.paragraphs.map((paragraph) => (
                paragraph.url !== undefined ? (
                    <>
                        <br/>
                        <div>{paragraph.title}</div>
                        <a href={paragraph.url}>{paragraph.url}</a>
                    </>
                ) : (
                    <>
                        <br/>
                        <div>{paragraph.title}</div>
                        <div>{paragraph.text}</div>
                    </>
                )
            ))}
        </div>
    );
}

export default ArticleComponent;