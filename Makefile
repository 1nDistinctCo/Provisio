
.PHONY up:
up:
	docker-compose up

.PHONY build:
build:
	docker-compose build 

.PHONY run:
run: build up 