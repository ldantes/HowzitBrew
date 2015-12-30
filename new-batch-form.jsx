NewBatchForm = React.createClass({

clearForm(){
    React.findDOMNode(this.refs.add_batch_form).reset();
  },

handleSubmit(event) {
  event.preventDefault();

  // Find the text field via the React ref
  var batch = {
  batchname : React.findDOMNode(this.refs.batchname).value.trim(),
  style : React.findDOMNode(this.refs.style).value.trim(),
  startDate: React.findDOMNode(this.refs.startDate).value.trim()
};
  Meteor.call("addBatch", batch);

  // Clear form
  this.clearForm();

},

render() {
    return (

      <div className="form-style">
        <form ref="add_batch_form" onSubmit={this.handleSubmit} >
          <fieldset><legend>New Batch</legend>
            <label for="name"><span>Batch Name <span class="required">*</span></span>
              <input type="text" class="input-field" ref="batchname" required/></label>

              <label for="style"><span>Batch Style <span class="required">*</span></span>
              <input type="text" class="input-field" ref="style" required /></label>

              <label for="startDate"><span>Start Date <span class="required">*</span></span>
              <input type="date" class="input-field" ref="startDate" required /></label>

              <input type="submit" value="Add"/> <input type="button" value="Cancel" onClick={this.clearForm}/>


          </fieldset>
        </form>
      </div>

    );
  }
});
