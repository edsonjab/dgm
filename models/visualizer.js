var mongoose      = require('mongoose'),
    VisualizerSchema = new mongoose.Schema({
        cover_photo   : {
          type        : Object,
          required    : false
        },
        grid_photo    : {
            type      : Object,
            required  : false
        },
        edition_date  : {
          type        : Date,
          required    : false
        },
        link          : {
          type        : String,
          required    : true
        },
        content         : {
            type        : String,
            required    : true
        },
        name          : {
          type        : String,
          required    : true
        },
        author          : {
            type        : String,
            required    : true
        },
        status          : {
            type        : String,
            required    : true
        }
  });

module.exports = mongoose.model('Visualizer', VisualizerSchema );
