import React from "react";

class NewsItem extends React.Component {
  render() {
    return (
        <div style={{ margin: 50, padding: 20, borderLeftStyle: "solid" }}>
          <img src="https://via.placeholder.com/200" width={300} height={300} />
          <p>User ID: {this.props.userID}</p>
          <p>Title : {this.props.title}</p>
          <p>Body : {this.props.body} </p>
        </div>
    );
  }
}

export default NewsItem;
