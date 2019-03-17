all: deploy lambda-js build-go

deploy:
	npm run build

lambda-js:
	npm run build:lambda

build-go:
	go get ./...
	go build -o functions/hello-world ./...
