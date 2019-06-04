const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    projectId: 'beer-app-242313',
    keyFilename: './utils/gCloudCred.json',
});

// GET :/api/search/:search
router.get('/:search', (req, res, next) => {
    return Babeers.search(req.params.search).then(beers => res.json(beers));
});

// POST :/api/search/menu
router.post('/menu', (req, res, next) => {
    return client
        .documentTextDetection(req.body.image)
        .then(response => {
            console.log(response[0].fullTextAnnotation.pages);
            res.send(response);
        })
        .catch(next);
});

module.exports = router;
