from django.urls import path
from . import views
urlpatterns = [
    path("todo_list",views.todoList, name="todo-list"),
]