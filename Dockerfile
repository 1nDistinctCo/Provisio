FROM python:3.9.7
RUN apt update -y
RUN apt upgrade -y 
WORKDIR /nasa
COPY . .
RUN apt install -y python3-pip 
RUN pip install -r requirements.txt

ENTRYPOINT ["python","main.py"]