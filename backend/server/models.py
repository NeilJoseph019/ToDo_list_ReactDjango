from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.BooleanField(blank=True)
    checklist = models.BooleanField(null=True, blank=True)
    time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return Todo.title

class Body_description(models.Model):
    title = models.OneToOneField(Todo, null=True, on_delete=models.CASCADE, related_name="todo_body_desc")
    desc_body = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{Body_description.title}-{Body_description.desc_body}"

class Checklist_body(models.Model):
    body = models.CharField(max_length=120, default="Must type something here")
    checked = models.BooleanField(default=False)

class Body_checklist(models.Model):
    title = models.OneToOneField(Todo, null=True, on_delete=models.CASCADE, related_name="todo_body_checklist")
    cl_body = models.ForeignKey(Checklist_body, on_delete=models.CASCADE, related_name="checklistBody")
    


    
