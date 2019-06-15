const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    projectId: 'beer-app-242313',
    keyFilename: './gcred.json',
});

// GET :/api/search/:search
router.get('/:search/:userId', (req, res, next) => {
    return Babeers.search(req.params.search, req.params.userId).then(beers =>
        res.json(beers)
    );
});

router.get('/:search', (req, res, next) => {
    return Babeers.search(req.params.search).then(beers => res.json(beers));
});

// POST :/api/search/menu
router.post('/menu', (req, res, next) => {
    const image = { content: req.body.image };

    return (
        client
            .documentTextDetection({ image })
            .then(response => {
                const strArr = [];
                response[0].fullTextAnnotation.pages[0].blocks.map(block =>
                    strArr.push(
                        block.paragraphs.map(paragraph =>
                            paragraph.words.map(word =>
                                word.symbols
                                    .map(symbol =>
                                        symbol.property.detectedBreak ===
                                        'LINE_BREAK'
                                            ? symbol.text + '/n'
                                            : symbol.text
                                    )
                                    .join('')
                            )
                        )
                    )
                );
                const foundBeers = [];
                strArr.map(block =>
                    block.map(beer => foundBeers.push(beer.join(' ')))
                );

                return Promise.all(
                    foundBeers.map(beer => {
                        return Babeers.searchMenu(beer);
                    })
                );
            })
            .then(beers => {
                const returnBeers = beers.map(beer => beer[0]);
                res.send(returnBeers);
            })
            // .then(beers => console.log(beers))
            .catch(err => console.error(err))
    );
});

module.exports = router;

// .then(babeer => {
//     const sortFunc = (a, b) => {
//         const first = a.ratings.toString();
//         const second = b.ratings.toString();
//         return -first.localeCompare(second, undefined, {
//             numeric: true,
//             sensitivity: 'base',
//         });
//     };
// })

//     babeer.sort(sortFunc);
//     return babeer[0];
