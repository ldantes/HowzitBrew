

  //Define collection hold all batch information
  Batches = new Mongo.Collection("batches");

  const {
    Router,
    Route
  } = ReactRouter;

if (Meteor.isClient) {

  // This code is executed on the client only
  Accounts.ui.config({
   passwordSignupFields: "USERNAME_AND_EMAIL"
 });

  Meteor.subscribe("batches");

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    //React.render(<App />, document.getElementById("render-target"));
    AppRoutes = (
    <Router>
      <Route component={App}>
        <Route name ="index" path="/" component={Index} />
        <Route name ="batch" path="batch/:batchId" component={BatchRecord} />

        <Route path="*" component={Error}/>
      </Route>
    </Router>

  );
  ReactRouterSSR.Run(AppRoutes);
  });
}

if (Meteor.isServer) {
  Meteor.publish("batches", function () {
    return Batches.find();
  });
}

Meteor.methods({
  addBatch(batch) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Batches.insert({
      name: batch.batchname,
      style: batch.style,
      user: Meteor.user().username,
      startDate: batch.startDate
    });
  },

  removeBatch(batchId) {
    Batches.remove(batchId);
  },

  getBatch(batchId){
    return Batches.find();
  }

});
