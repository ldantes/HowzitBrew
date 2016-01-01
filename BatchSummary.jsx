// Batch component - represents a single batch item
BatchSummary = React.createClass({
  propTypes: {
    // This component gets the batch to display through a React prop.
    // We can use propTypes to indicate it is required
    batch: React.PropTypes.object.isRequired
  },

  getInitialState() {
   return {
      showConfirmDelete: true
   }
 },

  deleteBatch() {
    Meteor.call("removeBatch", this.props.batch._id);

    swal("Deleted!",
    "Your batch is down the drain!",
    "success");
  },

  confirmDelete(){
    sweetAlert({
       title: "Are you sure?",
       text: "Permanently remove batch record?",
       type: "warning",
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "Yes, delete it!",
       closeOnConfirm: false,
       showCancelButton: true,
       html: false
     },  () => this.deleteBatch()


     )
  },

  dateDifference(a, b){

    var _MS_PER_DAY = 1000 * 60 * 60 * 24;

    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.round((utc1 - utc2) / _MS_PER_DAY);

  },

  render() {
    return (
        <li>
          <div>

          <span className="userName">{this.props.batch.user}</span>
          <span className="timeStamp">{this.dateDifference(new Date(), new Date (this.props.batch.startDate))} Days Ago </span>
          <br/>
              <h3>
              <ReactRouter.Link to={`/batch/${this.props.batch._id}`}>{this.props.batch.name} </ReactRouter.Link>
              ({this.props.batch.style})</h3>
              <button className="delete" onClick={() => this.confirmDelete()}>
                Delete
              </button>
              {this.props.batch._id}


              <h4>{this.props.batch.startDate}</h4>

          </div>

        </li>
    );
  }
});
