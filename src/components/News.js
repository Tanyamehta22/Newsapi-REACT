import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: true

    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=5744b912599546149ae4b79a06ce8374";
    let data = await fetch(url);
    let parasedData = await data.json()
    console.log(parasedData);
    this.setState({articles: parasedData.articles})
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey- Top Headlines</h1>
        
        <div className='row'>
        {this.state.articles.map( (element)=>{
          return <div className='col-md-4' key={element.url} >   
          <NewsItem title={element.title?element.title.slice(0,45): "" } description={element.description?element.description.slice(0,88): ""} imageUrl= {element.urlToImage} newsUrl={element.newsUrl}/>
          </div>
  })}
        </div>
      </div>
    )
  }
}

export default News
