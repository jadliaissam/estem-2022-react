import React from "react";
import NewsItem from "./NewsItem";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true, 
        posts: [],
        error: null
     };
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(data => this.setState({ posts: data, isLoading: false}))
    setTimeout(()=> fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({ posts: data}))
    .catch(e => this.setState({error:e}))
    .finally(()=> this.setState({isLoading:false}))
    , 1000);
  }

  render() {
    if(this.state.isLoading){
        return <div><p>Chargement en cours .... </p></div>
    }
    if(this.state.error){
        return <div><p>Une erreur est survenu</p></div>
    }
    return (
      <div>
        <h1>My News</h1>
        <div>
          {this.state.posts.map((p, i) => (
            <NewsItem key={i} userID={p.userId} title={p.title} body={p.body} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
