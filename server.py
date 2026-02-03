#!/usr/bin/env python3
"""
Simple HTTP server for the VideoHost website.
This server serves the video hosting website locally.
"""

import http.server
import socketserver
import os
from functools import partial

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add CORS headers to allow video playback from different origins
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def main():
    PORT = 8000
    
    print(f"Starting VideoHost server at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"Server running at port {PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down the server...")
        exit(0)

if __name__ == "__main__":
    main()