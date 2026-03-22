import React, { useState } from 'react';
import MealLogger from '@/components/MealLogger';
import NutritionChart from '@/components/NutritionChart';
import { FiPlus, FiTrendingUp, FiTarget } from 'react-icons/fi';

export default function Dashboard() {
  const [meals, setMeals] = useState([]);
  const [dailySummary] = useState({
    calories: 1450,
    protein: 75,
    carbs: 180,
    fat: 45,
    goal: 2000
  });

  const addMeal = (meal: any) => {
    setMeals([...meals, meal]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <p className="text-gray-600 mt-1">Sunday, March 22, 2026</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Calories</p>
                <p className="text-3xl font-bold text-gray-900">{dailySummary.calories}</p>
                <p className="text-sm text-gray-500">of {dailySummary.goal} goal</p>
              </div>
              <FiTarget className="text-4xl text-indigo-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-2">Protein</p>
            <p className="text-2xl font-bold text-green-600">{dailySummary.protein}g</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-2">Carbs</p>
            <p className="text-2xl font-bold text-blue-600">{dailySummary.carbs}g</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-2">Fat</p>
            <p className="text-2xl font-bold text-orange-600">{dailySummary.fat}g</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            {/* Meal Logger */}
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Log Meal</h2>
                <FiPlus className="text-2xl text-indigo-600" />
              </div>
              <MealLogger onAddMeal={addMeal} />
            </div>

            {/* Today's Meals */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Meals</h2>
              {meals.length === 0 ? (
                <p className="text-gray-500">No meals logged yet. Add your first meal above!</p>
              ) : (
                <ul className="space-y-4">
                  {meals.map((meal, idx) => (
                    <li key={idx} className="border-b pb-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">{meal.name}</span>
                        <span className="text-indigo-600">{meal.calories} cal</span>
                      </div>
                      <p className="text-sm text-gray-500">{meal.time}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nutrition Breakdown</h2>
            <NutritionChart data={dailySummary} />
          </div>
        </div>
      </main>
    </div>
  );
}