all: deploy build-go build-lambda

deploy:
	npm run build

build-go:
	go get ./...
	go build -o functions/hello-world ./...

build-lambda:
	npm run build:lambda