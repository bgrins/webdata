

var testHAR = {
    "log": {
        "version": "1.2",
        "creator": {
            "name": "PhantomJS",
            "version": "1.2.0"
        },
        "pages": [
            {
                "startedDateTime": "2011-08-04T23:00:06.878Z",
                "id": "http://www.bing.com/",
                "title": "Bing",
                "pageTimings": {}
            }
        ],
        "entries": [
            {
                "startedDateTime": "2011-08-04T23:00:06.879Z",
                "time": 75,
                "request": {
                    "method": "GET",
                    "url": "http://www.bing.com/",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (X11; U; Linux i686; C) AppleWebKit/533.3 (KHTML, like Gecko) PhantomJS/1.2.0 Safari/533.3"
                        },
                        {
                            "name": "Accept",
                            "value": "application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5"
                        }
                    ],
                    "queryString": [],
                    "headersSize": -1,
                    "bodySize": -1
                },
                "response": {
                    "status": 200,
                    "statusText": "OK",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Cache-Control",
                            "value": "private, max-age=0"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/html; charset=utf-8"
                        },
                        {
                            "name": "P3P",
                            "value": "CP=\"NON UNI COM NAV STA LOC CURa DEVa PSAa PSDa OUR IND\""
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        },
                        {
                            "name": "Date",
                            "value": "Thu, 04 Aug 2011 23:00:06 GMT"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Set-Cookie",
                            "value": "_SS=SID=89989458452B4FA3AE7324D263109245; domain=.bing.com; path=/\nMUID=9C205E5247FD40D2AF79836A6B2A6246; expires=Sat, 03-Aug-2013 23:00:06 GMT; domain=.bing.com; path=/\nOrigMUID=9C205E5247FD40D2AF79836A6B2A6246%2c061da9e602a246d0a7688da9bd75f9ff; expires=Sat, 03-Aug-2013 23:00:06 GMT; domain=.bing.com; path=/\nOVR=flt=0&flt2=0&flt3=0&flt4=0&flt5=0&flt6=0&flt7=0&flt8=0&flt9=0&flt10=0&flt11=0&ramp1=snrport4-release&release=or3&preallocation=0&R=1; domain=.bing.com; path=/\nSRCHD=D=1889220&MS=1889220&AF=NOFORM; expires=Sat, 03-Aug-2013 23:00:06 GMT; domain=.bing.com; path=/\nSRCHUID=V=2&GUID=713A9AE07D1F4137B29ABEC547EC8209; expires=Sat, 03-Aug-2013 23:00:06 GMT; path=/\nSRCHUSR=AUTOREDIR=0&GEOVAR=&DOB=20110804; expires=Sat, 03-Aug-2013 23:00:06 GMT; domain=.bing.com; path=/"
                        }
                    ],
                    "redirectURL": "",
                    "headersSize": -1,
                    "bodySize": 27544,
                    "content": {
                        "size": 27544,
                        "mimeType": "text/html; charset=utf-8"
                    }
                },
                "cache": {},
                "timings": {
                    "blocked": 0,
                    "dns": -1,
                    "connect": -1,
                    "send": 0,
                    "wait": 55,
                    "receive": 20,
                    "ssl": -1
                }
            },
            {
                "startedDateTime": "2011-08-04T23:00:06.955Z",
                "time": 3,
                "request": {
                    "method": "GET",
                    "url": "http://www.bing.com/fd/s/a/h2.png",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (X11; U; Linux i686; C) AppleWebKit/533.3 (KHTML, like Gecko) PhantomJS/1.2.0 Safari/533.3"
                        },
                        {
                            "name": "Referer",
                            "value": "http://www.bing.com/"
                        }
                    ],
                    "queryString": [],
                    "headersSize": -1,
                    "bodySize": -1
                },
                "response": {
                    "status": 200,
                    "statusText": "OK",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Content-Length",
                            "value": "5436"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Tue, 07 Jun 2011 08:24:47 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "public, max-age=12531225"
                        },
                        {
                            "name": "Date",
                            "value": "Thu, 04 Aug 2011 23:00:06 GMT"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        }
                    ],
                    "redirectURL": "",
                    "headersSize": -1,
                    "bodySize": 5436,
                    "content": {
                        "size": 5436,
                        "mimeType": "image/png"
                    }
                },
                "cache": {},
                "timings": {
                    "blocked": 0,
                    "dns": -1,
                    "connect": -1,
                    "send": 0,
                    "wait": 3,
                    "receive": 0,
                    "ssl": -1
                }
            },
            {
                "startedDateTime": "2011-08-04T23:00:06.955Z",
                "time": 3,
                "request": {
                    "method": "GET",
                    "url": "http://www.bing.com/fd/s/a/sw1.png",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (X11; U; Linux i686; C) AppleWebKit/533.3 (KHTML, like Gecko) PhantomJS/1.2.0 Safari/533.3"
                        },
                        {
                            "name": "Referer",
                            "value": "http://www.bing.com/"
                        }
                    ],
                    "queryString": [],
                    "headersSize": -1,
                    "bodySize": -1
                },
                "response": {
                    "status": 200,
                    "statusText": "OK",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Content-Length",
                            "value": "4192"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Tue, 07 Jun 2011 08:24:47 GMT"
                        },
                        {
                            "name": "X-N",
                            "value": "S"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "public, max-age=12530993"
                        },
                        {
                            "name": "Date",
                            "value": "Thu, 04 Aug 2011 23:00:06 GMT"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        }
                    ],
                    "redirectURL": "",
                    "headersSize": -1,
                    "bodySize": 4192,
                    "content": {
                        "size": 4192,
                        "mimeType": "image/png"
                    }
                },
                "cache": {},
                "timings": {
                    "blocked": 0,
                    "dns": -1,
                    "connect": -1,
                    "send": 0,
                    "wait": 3,
                    "receive": 0,
                    "ssl": -1
                }
            }
        ]
    }
};

function generateGraphData(har) {

	var cssTypes = { "text/css": true };
	var imageTypes = { "image/png": true, "image/jpg": true, "image/png": true, "image/jpeg": true, "image/gif": true };
	var scriptTypes = { "text/javascript": true, "application-x-javascript": true };
	
	var scripts = [];
	var images = [];
	var css = [];
	var others = [];
	
	var entries = har.log.entries;
	
	for (var i = 0; i < entries.length; i++) {
		var headers = entries[i].response.headers;
		var contentType;
		for (var j = 0; j < headers.length; j++) {
			if (headers[j].name == "Content-Type") {
				contentType = headers[j].value;
				break;
			}
		}
		
		log("Here", contentType)
		if (cssTypes[contentType]) {
			css.push(entries[i])
		}
		if (imageTypes[contentType]) {
			images.push(entries[i])
		}
		if (scriptTypes[contentType]) {
			scripts.push(entries[i])
		}
	}
	
	return { scripts: scripts, images: images, css: css, total: css.length + images.length + scripts.length };
	
	
    
    
    
}

var graphData = generateGraphData(testHAR);
