var Reddit = React.createClass({

  getInitialState(){
    return {
      links: this.props.links
    }
  },

  render() {
    return <div>

    <SubmitLink></SubmitLink>
    <Links links={this.state.links}></Links>

    </div>;
  }
});
