all: deploy build-go

deploy:
	npm run build

build-go:
	go mod tidy
	go build -o lambda/hello-world ./...

build-lambda:
	npm run build:lambda