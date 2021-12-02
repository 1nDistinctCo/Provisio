FROM python:3.9.7
RUN apt update -y
RUN apt upgrade -y 
WORKDIR /nasa
COPY . .
RUN apt install -y python3-pip 
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
# RUN source /nasa/.poetry/env
# RUN poetry export -f requirements.txt --output requirements.txt
RUN pip install -r requirements.txt
RUN rm requirements.txt
ENTRYPOINT ["python","-m","uvicorn","--host","0.0.0.0","--factory","main:create_app"]