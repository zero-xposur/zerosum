const router = require('express').Router();
const Babeers = require('../../db/models/babeers');
const vision = require('@google-cloud/vision');
const fs = require('fs');
const path = require('path');

// const client = new vision.ImageAnnotatorClient({
//     projectId: 'beer-app-242313',
//     credentials: process.env,
//     // keyFilename: './gcred.json',
// });

let client = {};
try {
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        console.log('local search');
        // const { GOOGLE_APPLICATION_CREDENTIALS } = require('../../.env');
        client = new vision.ImageAnnotatorClient({
            projectId: 'beer-app-242313',
            // credentials: GOOGLE_APPLICATION_CREDENTIALS,
            keyFilename: './gcred.json',
        });
    } else {
        require('dotenv').config();
        fs.writeFileSync(
            'gcloud-credentials.json',
            process.env.SERVICE_ACCOUNT_JSON
        );
        client = new vision.ImageAnnotatorClient({
            projectId: 'beer-app-242313',
            keyFilename: 'gcloud-credentials.json',
        });
    }
} catch (ex) {
    console.log(ex);
}

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

    return client
        .documentTextDetection({ image })
        .then(response => {
            const strArr = [];
            response[0].fullTextAnnotation.pages[0].blocks.map(block =>
                strArr.push(
                    block.paragraphs
                        .map(paragraph =>
                            paragraph.words.map(word =>
                                word.symbols
                                    .map(symbol => {
                                        console.log(
                                            symbol.property.detectedBreak
                                        );
                                        return symbol.property
                                            ? symbol.property.detectedBreak
                                                ? symbol.property.detectedBreak
                                                      .type !== 'SPACE'
                                                    ? symbol.text + '&&&&'
                                                    : symbol.text
                                                : symbol.text
                                            : symbol.text;
                                    })
                                    .join('')
                            )
                        )
                        .flat()
                        .join(' ')
                        .split('&&&&')
                )
            );
            const foundBeers = [];
            strArr.map(block => block.map(beer => foundBeers.push(beer)));

            const promAll = async ps => {
                const results = [];
                let count = 0;
                for (const p of ps) {
                    try {
                        results[count] = await p;
                        count++;
                    } catch (e) {
                        console.log(e);
                    }
                }
                return results;
            };

            return promAll(
                foundBeers.map(beer => {
                    return Babeers.searchMenu(beer)
                        .then(resp => {
                            console.log(resp);
                            return resp;
                        })
                        .catch(e => {
                            console.error(e);
                        });
                })
            );
        })
        .then(beers => {
            const returnBeers = beers.map(beer => beer[0]);
            res.send(returnBeers);
        })
        .catch(er => console.log('Search Error: ', er));
});

module.exports = router;
