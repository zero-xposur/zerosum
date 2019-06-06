const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    projectId: 'beer-app-242313',
    keyFilename: './gcred.json',
});

// GET :/api/search/:search
router.get('/:search', (req, res, next) => {
    return Babeers.search(req.params.search).then(beers => res.json(beers));
});

// POST :/api/search/menu
router.post('/menu', (req, res, next) => {
    // const request = {
    //     image: { content: req.body.image },
    //     features: [],
    //     imageContext: {},
    // };
    const image = { content: req.body.image };
    return client
        .documentTextDetection({ image })
        .then(response => {
            console.log(response[0].fullTextAnnotation.pages[0].blocks);
            res.send(response[0].fullTextAnnotation.pages[0].blocks);
        })
        .catch(err => console.error(err));
});

module.exports = router;
