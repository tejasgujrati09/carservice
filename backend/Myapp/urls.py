from django.conf.urls import url 
from Myapp import views 
 
urlpatterns = [ 
    url(r'^users/add$', views.customer_list),
    url(r'^users/edit/(?P<pk>[0-9]+)$', views.customer_detail),
]
