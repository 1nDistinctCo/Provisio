
.PHONY up:
up:
	docker-compose up

.PHONY build:
build:
	docker-compose build 

.PHONY run:
run: build up 

.PHONY debug_api:
debug_api:
	docker run -it --rm --entrypoint bash  api_api:latest 

.PHONY debug_ui:
debug_ui:
	docker run -it --rm --entrypoint bash  api_ui:latest