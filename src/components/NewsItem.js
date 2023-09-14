import React, { Component } from 'react'

export class NewsItem extends Component {
 

  render()  {
    let {title, descripton, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
         <div className="card">
  <img src= {!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiomi-smart-home-india-annoucements/-476x249w4/gsarena_00.jgp" : imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{descripton}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
  
export default NewsItem
