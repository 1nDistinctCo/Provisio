
import requests
import os
import json
import time
from datetime import datetime
from .tools import (
    create_html_image,
    add_if_not_none,
    check_int,
    check_date,
)
from .consts import NASA_API_KEY_PARAM, NASA_API

def get_photo(dict_body:dict,picture_folder:str):
    """gets photo from json response from first request"""

    pic_title = dict_body.get("title")
    pic_date = dict_body.get("date")
    pic_description = dict_body.get("explanation")
    hdurl = dict_body.get("hdurl") if dict_body.get("hdurl") is not None else dict_body.get("url")
    title_no_spaces =pic_title.replace(" ","-")
    
    if not os.path.exists(picture_folder):
        os.mkdir(picture_folder)
    file_path = f"{picture_folder}/nasa-pod-{pic_date}-{title_no_spaces}.jpg"
    with open(file_path,"wb") as picture:
        picture_bytes = requests.get(hdurl,params={"api_key":NASA_API_KEY_PARAM}).content
        picture.write(picture_bytes)
    
    return create_html_image(file_path,pic_title,pic_description)
    
    

def get_picture_of_the_day(config:dict):
    """Get the picture of the day from nasa api"""
    
    picture_folder = "pictures"
    start_date = config.get("start_date") if check_date(config.get("start_date")) else None
    end_date = config.get("end_date") if check_date(config.get("end_date")) else None
    date_ = config.get("date") if check_date(config.get("date")) else None
    count = config.get("count") if check_int(config.get("count")) else None
    
    image_html = ""

    print("Fetting picture... Please Wait.")
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
    for picture in json_body:
        image_html+=get_photo(picture,picture_folder)

    time_taken = time.time() - start_time
    print(f"getting photos took {time_taken}s")
    return image_html
