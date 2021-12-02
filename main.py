

import html
import logging
import json
from falcon.asgi import App, Request,Response
from falcon import MEDIA_JPEG
import aiofiles
from source import (
    get_config,
    create_html_head, 
    create_html_body,
    get_picture_of_the_day,
    get_logger,
    
)



def create_app():
    get_logger()
    app = App()
    app.add_route('/pod', PictureOfTheDay())
    app.add_route('/pictures/{image_path}', Images())
    return app

class Images:

  

    async def on_get(self, req, resp, image_path):
        
        resp.stream = await aiofiles.open(f"pictures/{image_path}", 'rb')
        resp.content_type = MEDIA_JPEG




class PictureOfTheDay:

    async def on_get(self, request :Request, response: Response,**kwargs):
        """Nasa Picture of the day endpoint"""
        try:
            params = request.params
            logging.info(params)
            logging.info("creating page head")
            html_head = create_html_head("Nasa's Picture Of The Day")
            logging.info("getting pictures")
            html_body_content = get_picture_of_the_day(params)
            logging.info("creating page body")
            html_body = create_html_body(html_body_content)
            response.content_type = "text/html"
            response.body=html.unescape(str(html_head))+html.unescape(str(html_body))
            response.status = 200
        except Exception as e:
            logging.info(str(e))
            raise e
            

