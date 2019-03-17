build:
	npm run build

deploy-go:
	npm run build
	go get ./...
	go build -o lambda/hello-world ./...

deploy-js:
	npm run deploy

