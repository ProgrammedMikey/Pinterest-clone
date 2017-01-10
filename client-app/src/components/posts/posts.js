import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import spinner from 'react-loader';
import ImageLoader from 'react-imageloader';
var Packery = require('react-packery-component')(React);

var packeryOptions = {
    transitionDuration: 0,
    gutter: 10,
    // rowHeight: 60,
    // columnWidth: 60
};

class Posts extends Component {


  componentWillMount(){
  this.props.fetchPost();
  this.props.userInfo();
  }

  handleEditButton(post) {
      if(this.props.authenticated){
      return ( 
            <Link  className="pull-xs-right btn btn-warning btn-sm" to ={"posts/"+post.id+"/edit"}>Edit</Link>
             );
      }
  }

 renderPosts(posts) {

    return posts.map((post) => {
      return (

          <div className="card cardStyle" key={post.id}>
              <Link to={"posts/"+post.id}>
                  <img className="card-img-top" width="240" src={post.body} alt="Book image"> </img>
              </Link>
              <div className="card-block">
                  <h4 className="card-title"><center>{ post.title }</center></h4>

                  <Link to={"user/"+post.user_id}>
                      <span className="label label-default"> By: {post.name} </span>
                  </Link>

              </div>
          </div>
      );
    });
  }

    render(){
        const {posts,loading,error} = this.props.postsList;
        if(loading === true){  
            return <div className="loader"></div>;
        }
        return (
            <Packery
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
            >
                <div className="grid-sizer"></div>
                {this.renderPosts(posts)}

            </Packery>
        );

    }
}

function mapStateToProps(state) {
    return {
        postsList:state.posts.postsList,
        authenticated:state.auth.authenticated,
        userinfo : state.auth.userinfo
    }
}
export default connect(mapStateToProps,actions)(Posts);
