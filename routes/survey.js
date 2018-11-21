var express = require('express');
var router = express.Router();
var Survey = require('../models/Survey.js');


router.get('/', function(req, res, next) {
  Survey.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


router.get('/:id', function(req, res, next) {
  Survey.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.post('/', function(req, res, next) {
  Survey.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', function(req, res, next) {
  Survey.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  Survey.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
