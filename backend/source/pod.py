
import requests
import logging 
import json
import time
from .tools import (
    add_if_not_none,
    check_int,
    check_date,
)
from .consts import NASA_API_KEY_PARAM, NASA_API

def get_photo(dict_body:dict):
    """gets photo from json response from first request"""

    pic_title = dict_body.get("title")
    pic_date = dict_body.get("date")
    pic_description = dict_body.get("explanation")
    image_url = dict_body.get("hdurl") if dict_body.get("hdurl") is not None else dict_body.get("url")
    return {
        "title":pic_title,
        "date":pic_date,
        "image": image_url,
        "description":pic_description
    }
    

def get_picture_of_the_day(config:dict):
    """Get the picture of the day from nasa api"""
    start_date = config.get("start_date") if check_date(config.get("start_date")) else None
    end_date = config.get("end_date") if check_date(config.get("end_date")) else None
    date_ = config.get("date") if check_date(config.get("date")) else None
    count = config.get("count") if check_int(config.get("count")) else None
    logging.info(config.get("date"))
    logging.info("Fetting picture... Please Wait.")
    start_time = time.time()
    params = add_if_not_none({
        "api_key":NASA_API_KEY_PARAM,
        "start_date": start_date,
        "end_date": end_date,
        "date": date_,
        "count":count,
        "thumbs":True
    })
    picture_of_the_day=requests.get(f"{NASA_API}/apod",params=params)
    
    bytes_body = picture_of_the_day.content
    str_body = bytes_body.decode("utf-8")
    json_body = json.loads(str_body)
    if isinstance(json_body,dict):
        json_body = [json_body]
    pictures = [get_photo(picture) for picture in json_body]
    time_taken = time.time() - start_time
    logging.info(f"getting photos took {time_taken}s")
    return pictures
