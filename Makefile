build:
	rm functions/teapot.js
	rm lambda/hello
	npm run build

deploy-go:
	rm functions/teapsot.js
	npm run build
	go get ./...
	go build -o lambda/hello ./...

deploy-js:
	rm lambda/hello
	npm run deploy

