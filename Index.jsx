// Index component - List of batch records

Index = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      batches: Batches.find({}, {sort: {startDate: -1}}).fetch(),
      currentUser: Meteor.user()

    }
  },

  renderBatches() {
    return this.data.batches.map((batch) => {
      return <BatchSummary key={batch._id} batch={batch} />;
    });
  },

  render() {
    return (
      <div id="appContainer" className="container">
          <header>
          { this.data.currentUser ? <NewBatchForm /> : ''}
        </header>

        <div className="batch">
          <ul >
            {this.renderBatches()}
          </ul>
        </div>
      </div>
    );
  }
});
