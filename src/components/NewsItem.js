import React from 'react'

const NewsItem = (props)=> {
  
    let {title, description, imageurl, newsurl, author, date} = props;
    return ( 
      <div className="my-3">
           <div className="card">
                <img src={!imageurl?"https://thumbs.dreamstime.com/z/breaking-news-screen-26277742.jpg":imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...<span className="badge bg-secondary">New</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                   
                </div>
            </div>
      </div>
    )
 
}

export default NewsItem
