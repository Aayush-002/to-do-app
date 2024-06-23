from django.urls import path, include
from .views import TodoViewSet,UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('todos', TodoViewSet, basename='todos')
router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]