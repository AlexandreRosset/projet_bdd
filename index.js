var http = require('http');
var app = require('express')();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./Config');
var Schema = require('./Schema');

mongoose.connect(config.database);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




httpserver = http.createServer(app);
app.use(bodyParser.json());


//Site

app.get('/search/site/:offset/:limit', function (req, res) {
    Schema.Site.find({ 'isActive': true }, function (err, sites) {
        res.json(sites);
    }).skip(parseInt(req.params.offset)).limit(parseInt(req.body.limit)).exec();
});
app.get('/site/:id', function (req, res) {
    Schema.Site.findById(req.params.id , function (err, sites) {
        res.json(sites);
    }).exec();
});
app.post('/site', function (req, res) {
    var site = new Schema.Site({
        identifiant_site: req.body.identifiant_site,
        nom: req.body.nom,
        codepostal: req.body.codepostal,
        coord: {
            lat: req.body.coord.lat,
            lon: req.body.coord.lon
        },
        pratiques: req.body.pratiques,
        orientations: req.body.orientations,
        structure: req.body.structure,
        lastupdate: Date.now(),
        isActive: true
    });
    site.save();
    res.status(200).send();
});
app.get('/site/delete/:id', function (req, res) {
    Schema.Site.findByIdAndUpdate(req.params.id, {
        $set: {
            isActive: false
        }
    }, function (err, stat) {
        console.log(err);
        res.status(200).send();
    });
});

app.post('/site/update/:id', function (req, res) {
    Schema.Site.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, doc) {
        res.status(200).send();
    })
});

app.get('/site/temp/:id', function (req, res) {
    Schema.Site.findById(req.params.id, function (err, site) {
        
    })
});



httpserver.listen(8081);


console.log('Server running at http://127.0.0.1:8081/');