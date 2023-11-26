// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Get all comments
router.get('/', function(req, res, next) {
    Comment.find(function(err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

// Save comment
router.post('/', function(req, res, next) {
    Comment.create(req.body, function(err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

// Update comment
router.put('/:id', function(req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

// Delete comment
router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

module.exports = router;