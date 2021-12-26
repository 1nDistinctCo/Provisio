import logging
import json
import os
from datetime import datetime


def get_logger():
    
    if not os.path.exists("./logs"):
        os.mkdir("./logs")
    logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO,filename="./logs/logs.log")
    return logging.getLogger("nasa-pod")
    

def get_config() -> dict:
    """get config options from config.json"""
    with open("./config.json","r+") as config:
        config_str = config.read()
        return json.loads(config_str)

def chop_string(value:str) ->str: 
    return "".join([value[i:i+100] for i in range(0, len(value), 100)])

def add_if_not_none(val:dict) -> dict:
    """make a new dictionary from the old that only adds values if they weren't None"""
    output = {}
    for key,value in val.items():
        output.update({key:value}) if value is not None else None
    return output

def check_date(date_string:str) -> bool:
    if date_string is None:
        return False
    try:
        datetime.strptime(date_string, "Y-m-d")
        return True
    except Exception as e:
        print(e.__dict__)
        print(f"{date_string} is in the wrong format.") 
        return False

def check_int(value:str) -> bool:
    try:
        int(value)
        return True
    except TypeError as e:
        print(e.__dict__)
        print(f"{value} is not an integer.")
        return False