var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new Schema({
    id: Schema.Types.ObjectId,
    identifiant_site: Schema.Types.Number,
    nom: Schema.Types.String,
    codepostal: Schema.Types.Number,
    coord: {
        lat: Schema.Types.Number,
        lon: Schema.Types.Number
    },
    pratiques: [Schema.Types.String],
    orientations: [Schema.Types.String],
    structure: Schema.Types.Number,
    lastupdate: Schema.Types.Date,
    isActive: Schema.Types.Boolean
});

var OWMSchema = new Schema({
    id: Schema.Types.ObjectId,
    temperature: Schema.Types.Number,
    temperature_min: Schema.Types.Number,
    temperature_max: Schema.Types.Number,
    pression: Schema.Types.Number,
    sea_level: Schema.Types.Number,
    ground_level: Schema.Types.Number,
    humidite: Schema.Types.Number,
    weather: {
        status: Schema.Types.String,
        description: Schema.Types.String
    },
    winds: {
        speed: Schema.Types.Number,
        angle: Schema.Types.Number
    },
    clouds: {
        alltitude: Schema.Types.Number
    },
    snow: {
        quantite: Schema.Types.Number
    },
    date: Schema.Types.Date
});

var Site = mongoose.model('Site', siteSchema);
var OWM = mongoose.model('OWM', OWMSchema);

module.exports = {
    'Site': Site,
    'OWM': OWM
};