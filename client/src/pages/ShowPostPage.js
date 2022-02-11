import React from 'react';
import Post from '../components/Post';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'grommet';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/"+id)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post: <Post {...post} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Spinner />;
    return this.state.post;
  }
}

export default ShowPostPage;