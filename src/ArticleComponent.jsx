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
                        <div className="paragraph_title">{paragraph.title}</div>
                        <hr className="title_underline"/>
                        <div>{Array.isArray(paragraph.text) ? paragraph.text.map((sub_paragraph) => (
                            <>
                                {sub_paragraph}
                                <br/>
                            </>
                        )) : paragraph.text}</div>
                    </>
                )
            ))}
        </div>
    );
}

export default ArticleComponent;