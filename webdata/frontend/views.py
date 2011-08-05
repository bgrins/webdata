from django.shortcuts import render_to_response, get_object_or_404
from models import Request

def index(request):
    latest_request_list = Request.objects.all().order_by('-pub_date')[:5]
    return render_to_response('index.html', {'latest_request_list': latest_request_list})
    
def detail(request, request_id):
    r = get_object_or_404(Request, pk=request_id)
    return render_to_response('detail.html', {'request': r})
    
def detail_by_url(request):
	url = request.GET.get('url', '')
	r = get_object_or_404(Request, url=url)
	return render_to_response('detail.html', {'request': r})
