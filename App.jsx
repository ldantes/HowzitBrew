// App component - represents the whole app

App = React.createClass({


  getInitialState() {
   return {

   }
 },

  // Loads items from the Batches collection and puts them on this.data.batches

  render() {
    return (
      <div id="appContainer" className="container">

        <header>
          <ReactRouter.Link to="index"><h1>Batches on the Brew</h1></ReactRouter.Link>
          <span> <AccountsUIWrapper /></span>
        </header>

        {this.props.children}
      </div>
    );
  }
});
