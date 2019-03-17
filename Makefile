all: deploy build-go

deploy:
	npm run build

build-go:
	go get ./...
	go build -o lambda/hello-world ./...

build-lambda:
	npm run build:lambda