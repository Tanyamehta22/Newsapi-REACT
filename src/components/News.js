import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropsTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0). toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`;
  }

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country = ${this.props.country}&category=${this.props.category}&apiKey=5744b912599546149ae4b79a06ce8374&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parasedData = await data.json();
    console.log(parasedData);
    this.setState({
      articles: parasedData.articles,
      totalResults: parasedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // console.log("cdm");
    // let url= `https://newsapi.org/v2/top-headlines?country = ${this.props.country}&category=${this.props.category}&apiKey=5744b912599546149ae4b79a06ce8374&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parasedData = await data.json()
    // console.log(parasedData);
    // this.setState({articles: parasedData.articles,
    //   totalResults: parasedData.totalResults,
    //   loading: false
    // })
    this.updateNews();
  }

  handlePrevClick = async () => {
    // console.log("Previous");

    // let url= `https://newsapi.org/v2/top-headlines?country = ${this.props.country}&category=${this.props.category}&apiKey=5744b912599546149ae4b79a06ce8374&page= ${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parasedData = await data.json()
    // console.log(parasedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parasedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    //   console.log("next");
    //   if (!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    //   let url= `https://newsapi.org/v2/top-headlines?country = ${this.props.country}&category=${this.props.category}&apiKey=5744b912599546149ae4b79a06ce8374&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parasedData = await data.json()

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parasedData.articles,
    //     loading: false
    //   })

    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
 
  fetchMoreData = async () => {
     this.setState({page: this.state.page +1})
     const url = `https://newsapi.org/v2/top-headlines?country = ${this.props.country}&category=${this.props.category}&apiKey=5744b912599546149ae4b79a06ce8374&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parasedData = await data.json();
    console.log(parasedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parasedData.totalResults,
      
    })
  };

  render() {
    return (
      
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey- Top {this.capitalizeFirstLetter(this.props.category)} Headlines  
        </h1>
        { {this.state.loading && <spinner />} }
        <InfiniteScroll>
        datalength={this.state.ar.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.lenth!==toHaveDisplayValue.state.totalResults}
        loader={<Spinner/>}
        
        <div className="container">
          
        </div>
        
         <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
        
             
      </div>
    );
  }
}

export default News;
