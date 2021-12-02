
.PHONY up:
up:
	docker-compose up

.PHONY build:
build:
	docker-compose build 

.PHONY run:
run: build up 

.PHONY debug:
debug:
	docker run -it --rm --entrypoint bash  api_api:latest 