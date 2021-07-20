FROM golang:alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o go-app main.go
EXPOSE 8888
CMD ["/app/go-app"]