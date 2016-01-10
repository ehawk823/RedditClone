var Links = React.createClass({

  getInitialState(){
    return {
      links: this.props.links
    }
  },

  render() {
    return <div className="links">
      {this.state.links.map(function(link){
      return <div className="link">
        <div className="row">
          <div className="col-xs-2">
            {link.title}
            <br/>
            {link.url}
          </div>
          <div className="col-xs-10">
          </div>
        </div>
      </div>
      })}
    </div>;
  }
});
