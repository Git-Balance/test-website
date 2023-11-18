# python3 simple http server for a cocalc project

# references:
#  https://doc.cocalc.com/howto/webserver.html
#  https://docs.python.org/3/library/http.server.html
#  https://wiki.python.org/moin/BaseHttpServer

import os
from http.server import HTTPServer, BaseHTTPRequestHandler

proj_id = os.environ['COCALC_PROJECT_ID']
PORT = 10000

# request path for server root is '/' with server proxy url
webserver_proxy_url = f'https://cocalc.com/{proj_id}/server/{PORT}'

# request path for server root is '/{proj_id}/port/{PORT}' with port proxy url
port_proxy_url = f'https://cocalc.com/{proj_id}/port/{PORT}'

msg = f'open browser window to\n  {webserver_proxy_url}\n' \
      f'or\n  {port_proxy_url}'

server_address = ('', PORT)

class MyHandler(BaseHTTPRequestHandler):

    def do_HEAD(s):
        s.send_response(200)
        s.send_header('Content-type', 'text/html')
        s.end_headers()

    def do_GET(s):
        s.send_response(200)
        s.send_header('Content-type', "text/html")
        s.end_headers()
        s.wfile.write(b'<html><head><title>Python3 Server</title></head>')
        s.wfile.write(b'<body>')
        s.wfile.write(f'<p>path: {s.path}</p>'.encode())
        s.wfile.write(b'</body></html>')
        return

httpd = HTTPServer(server_address, MyHandler)
print(msg)
httpd.serve_forever()