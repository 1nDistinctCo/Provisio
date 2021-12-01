import os

NASA_API_KEY_PARAM=os.environ.get("NASA_API_KEY")
NASA_API = f"https://api.nasa.gov/planetary"

HTML_HEAD = "<head>head</head>" 
HTML_BODY ="<body>body</body>"
HTML_TITLE = "<title>{title}</title>"
HTML_PARAGRAPH = "<p>{content}</p>"
HTML_IMAGE = '<img src="{path}" alt="{title}" width="{width}" height="{height}" style="vertical-align:middle">'
HTML_HEADING = "<h{size}>{content}</h{size}>"