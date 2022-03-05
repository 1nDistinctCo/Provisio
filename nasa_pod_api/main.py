import logging
import json
from falcon.asgi import App, Request,Response
from falcon import CORSMiddleware
from source import (
    get_picture_of_the_day,
    get_logger,
    FRONTEND_URL
    
)



def create_app():
    get_logger()
    app = App(middleware=CORSMiddleware(
        allow_origins=FRONTEND_URL, allow_credentials='*'))
    app.add_route('/api/pod', PictureOfTheDay())
    return app


class PictureOfTheDay:

    async def on_get(self, request :Request, response: Response,**kwargs):
        """Nasa Picture of the day endpoint"""
        try:
            params = request.params
            logging.info(params)
            logging.info("getting pictures")
            pictures = get_picture_of_the_day(params)
            response.content_type = "application/json"
            response.body=json.dumps(pictures)
            response.status = 200
        except Exception as e:
            logging.info(str(e))
            raise e
            

