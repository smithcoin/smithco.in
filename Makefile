all: deploy build-lambda

deploy:
	npm run build

build-go:
	go mod tidy
	go build -o functions/hello-world ./...

build-lambda:
	npm run build:lambda