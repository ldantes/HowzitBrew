// Batch component - represents a single batch item
BatchRecord = React.createClass({

    mixins: [ReactMeteorData],
    getMeteorData() {
      // This is the place to subscribe to any data you need
      var handle = Meteor.subscribe("batches", this.props.params.batchId);

      return {
        loading: ! handle.ready(),
        batch: Batches.findOne(this.props.params.batchId)
        //todoListTasks: Tasks.find({listId: this.props.id}).fetch()
      };
    },
    render() {
    // Show a loading indicator if data is not ready
    if (this.data.loading) {
      return <p>loading....</p>;
    }

    // Render a component and pass down the loaded data
    return (
      <div className="form-style">
        <form ref="add_batch_form" >
          <fieldset><legend>{this.data.batch.name} ({this.data.batch.style})</legend>

              <label >Start Date: {this.data.batch.startDate} </label>

              <label for="primaryFermDur"><span>1st Fermentation (Days)  <span class="required">*</span></span>
              <input type="number" min="1" class="input-field" ref="primaryFermDur" value={this.data.batch.primaryFermDur} required /></label>




          </fieldset>
        </form>
      </div>
    );
  }
  });
