import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

interface MealLoggerProps {
  onAddMeal: (meal: any) => void;
}

export default function MealLogger({ onAddMeal }: MealLoggerProps) {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    mealType: 'lunch',
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.calories) {
      onAddMeal({
        ...formData,
        calories: parseInt(formData.calories)
      });
      setFormData({
        name: '',
        calories: '',
        mealType: 'lunch',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Meal Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Grilled Chicken with Rice"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Calories
          </label>
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            placeholder="e.g., 450"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meal Type
          </label>
          <select
            name="mealType"
            value={formData.mealType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time
        </label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-semibold"
      >
        <FiPlus /> Log Meal
      </button>
    </form>
  );
}