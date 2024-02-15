import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

 capitilize=(cap)=>{
  return cap.charAt(0).toUpperCase()+cap.slice(1)

}
 
constructor(props) {    //  Once the things will lie under this.state then after this  whenever  we try to  use aticles and page we use this.state before articles and page  
super(props)
this.state={
articles: [],    //same
loading:true,
pag:1,
totalResults:0  
}
document.title =`NewsApplication App - ${this.capitilize(this.props.category)}`; 
}

async componentDidMount(){
this.props.setprogress(10)  
let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6754ab9af4234b38bb1ff3973163062e&page=1&pageSize=${this.props.pagesize}`
let data= await fetch(url)
  let parseData= await data.json() 
  this.props.setprogress(75) 
  this.setState({
  articles:parseData.articles, 
  totalResults:parseData.totalResults,
  loading:false
  })  
   this.props.setprogress(100)                                          
}
  fetchMoreData= async()=>{ 
  this.setState({page:this.state.page+1}) 
  let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&pageSize=${this.props.pagesize}&apiKey=6754ab9af4234b38bb1ff3973163062e`
  let data= await fetch(url)
    let parseData= await data.json() 
    this.setState({
    articles:this.state.articles.concat(parseData.articles),
    totalResults:parseData.totalResults
    })  
}

render() {
  
    return (                           // key is use to diffrentiate the cards  // key needs div class
      <div className="container">
        <h2 className='my-3 text-center'> MonkeyApp-Top heading-{this.capitilize(this.props.category)}</h2>
          <div className='text-center'> {this.state.loading?<Spinner/>:" "}</div>
          <InfiniteScroll
           dataLength={this.state.articles.length}
           next={this.fetchMoreData}
           hasMore={this.state.articles.length !== this.state.totalResults}
           loader ={ <Spinner/>}>
         <div className='row'>  
          {this.state.articles.map((element)=>      // learn map
         <div className='col-md-4 my-3' key={element.url}>      
           <Newsitem  title={element.title!==null?element.title.slice(0,44):" "}    discription={element.description!==null?element.description.slice(0,76):" "}    imageurl={element.urlToImage!==null?element.urlToImage:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/164C/production/_131980750_gettyimages-1409367339.jpg"}  url={element.url}   author={element.author!==null?element.author:"unknow"}   date={element.publishedAt}   source={element.source.name} />
         </div> )}   
         </div>
        </InfiniteScroll>

      </div>
    )

  }

}

export default News
