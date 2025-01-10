const router = require('express').Router();
const request = require('request');


router.use('/api', require('./api'))

module.exports = router;

router.get('/login', (req, res) => {
      res.redirect(`https://${process.env.FUSIONAUTH_HOST}/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`);
  });

router.get('/oauth-callback', (req, res) => {
    request(
      // POST request to /token endpoint
      {
        method: 'POST',
        uri: `https://${process.env.FUSIONAUTH_HOST}/oauth2/token`,
        form: {
          'client_id': process.env.CLIENT_ID,
          'client_secret': process.env.CLIENT_SECRET,
          'code': req.query.code,
          'grant_type': 'authorization_code',
          'redirect_uri': process.env.REDIRECT_URI
        }
      },
  
      // callback
      (error, response, body) => {
        if (error) {
            console.error("Error during request:", error);
            return res.status(500).send("Internal Server Error");
        } // Log the raw response body

        let parsedBody;
        try {
            // Attempt to parse the response body
            parsedBody = JSON.parse(body);
            // req.session.token = parsedBody.access_token;
              res.redirect(process.env.FRONTEND_URL);
        } catch (parseError) {
            console.error("Error parsing JSON response:", parseError);
            return res.status(500).send("Error processing authentication response");
        }
    }
    );
});