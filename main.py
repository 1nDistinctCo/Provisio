from datetime import datetime
import os
import html
from source import (
    get_config,
    create_html_head, 
    create_html_body,
    get_picture_of_the_day
)

if __name__ == "__main__":
    config = get_config()
    pod = config.get("picture_of_the_day")
    
    html_head = create_html_head("Nasa's Picture Of The Day")
    html_body_content = get_picture_of_the_day(pod)
    html_body = create_html_body(html_body_content)
    
    if not os.path.exists("./html"):
        os.mkdir("./html")
    with open("./html/pod.html","w") as file:
        file.write(html.unescape(str(html_head)))
    with open("./html/pod.html","a") as file:
        file.write(html.unescape(str(html_body)))


    