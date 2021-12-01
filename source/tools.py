
import json
from datetime import datetime
from bs4 import BeautifulSoup
from .consts import (
    HTML_HEAD,
    HTML_TITLE,
    HTML_BODY,
    HTML_IMAGE,
    HTML_PARAGRAPH,
    HTML_HEADING
)

def create_html_image(path:str,title:str,description:str) -> str:
    image = BeautifulSoup(HTML_IMAGE.format(path=path,title=title,height=600,width=800),features="html.parser")
    title = BeautifulSoup(HTML_HEADING.format(content=title,size=1),features="html.parser")
    description= BeautifulSoup(HTML_PARAGRAPH.format(content=description),features="html.parser")
    return str(title)+str(image)+str(description)

def create_html_head(title:str) -> BeautifulSoup:
    page_head = BeautifulSoup(HTML_HEAD,features="html.parser")
    page_title = HTML_TITLE.format(title=title) 
    page_head.find(text="head").replace_with(page_title)
    return page_head

def create_html_body(page_body_content:BeautifulSoup) -> BeautifulSoup:
    page_body = BeautifulSoup(HTML_BODY,features="html.parser")
    page_body.find("body").replace_with(page_body_content)
    return page_body

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