var models = require('./server.js').models;

models.Profile.create({name:'Nick'}, (err, profile) => {
  console.log("data?", err, profile)
}
)
