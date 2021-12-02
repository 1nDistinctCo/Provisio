FROM python:3.9.7-slim as requirements
RUN apt update -y
RUN apt upgrade -y 
WORKDIR /api
COPY . .
RUN apt install -y python3-pip 
RUN pip install --user poetry
RUN python -m poetry export -f requirements.txt --output requirements.txt

FROM requirements 
RUN pip install -r requirements.txt
RUN rm requirements.txt
ENTRYPOINT ["python","-m","uvicorn","--host","0.0.0.0","--factory","main:create_app"]