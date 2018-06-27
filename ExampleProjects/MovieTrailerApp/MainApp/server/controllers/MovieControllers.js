var restful = require("node-restful");

module.exports = function(app, route){
  // setup the controller for REST
  var rest = restful.model(
    'moive',app.models.movie
  ).methods(["get","put","post","delete"]);

  // Register this end point with application
  rest.register(app,route);

  // Return Middle Middleware
  return function(req,res,next){
    next();
  };
};
