import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      page:1

    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=5744b912599546149ae4b79a06ce8374&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parasedData = await data.json()
    console.log(parasedData);
    this.setState({articles: parasedData.articles, 
      totalResults: parasedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async ()=> {
    console.log("Previous");

    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=5744b912599546149ae4b79a06ce8374&page= ${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parasedData = await data.json()
    console.log(parasedData);
    this.setState({
      page: this.state.page - 1,
      articles: parasedData.articles,
      loading: false
    })

  }

  handleNextClick = async ()=>{
    console.log("next");
    if (!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

     

    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=5744b912599546149ae4b79a06ce8374&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parasedData = await data.json()
     
    this.setState({
      page: this.state.page + 1,
      articles: parasedData.articles,
      loading: false
    })

  }
}


  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey- Top Headlines</h1>
        {this.state.loading && <spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map( (element)=>{
          return <div className='col-md-4' key={element.url} >   
          <NewsItem title={element.title?element.title.slice(0,45): "" } description={element.description?element.description.slice(0,88): ""} imageUrl= {element.urlToImage} newsUrl={element.url}/>
          </div>
  })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  &larr;Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize) }type="button" className="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr;</button>



        </div>
      </div>
    )
  }
}

export default News
