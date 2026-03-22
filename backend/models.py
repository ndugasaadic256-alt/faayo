from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Meal(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='meals')

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name='recipes')

class NutritionGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='nutrition_goals')
    goal_type = models.CharField(max_length=100)
    target_value = models.FloatField()
    achieved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)