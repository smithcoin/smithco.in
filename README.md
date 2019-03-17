## smithco.in

Built with [Gatsby](https://www.gatsbyjs.org).

Deployed with [![Netlify Status](https://api.netlify.com/api/v1/badges/7352032f-db5d-4485-a228-a6f3f3b0e548/deploy-status)](https://app.netlify.com/sites/smithcoin/deploys)


#### Lambda Functions

Currently there are two lambda functions deployed with this site:

The two functions have to be deployed on different branched and subdomains because currently Netlify does not support deploying functions in two languages.

1. `Teapot`
    * written in js
    * see the 'js' branch
    * `curl --request POST -d "Content-Length: 0" --url https://js.smithco.in/.netlify/functions/teapot`
2. `Hello World`
    * written in golang
    * see the 'go' branch
    * `curl --request POST -d "Content-Length: 0" --url https://go.smithco.in/.netlify/functions/hello-world`