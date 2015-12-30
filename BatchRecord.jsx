// Batch component - represents a single batch item
BatchRecord = React.createClass({


  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getMeteorData() {

    return {
      batch: Batches.findOne(this.props.params.batchId)

    }
  },

  render() {
    console.log(this.props.params.batchId);
    console.log(this.batch);
    return (

          <span >{this.batch}</span>

    );
  }
});
