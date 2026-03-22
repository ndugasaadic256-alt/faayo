import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiActivity, FiTrendingUp, FiSettings } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">🥗 Faayo</h1>
          <div className="flex gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Track Your Nutrition, <br />
          <span className="text-indigo-600">Achieve Your Goals</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Faayo helps you monitor your daily meals, calories, and nutrition to build a healthier lifestyle.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            Get Started <FiArrowRight />
          </Link>
          <Link
            href="#features"
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <FiActivity className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Meal Logging</h4>
              <p className="text-gray-600">
                Easily track meals and snacks throughout your day with detailed nutrition info.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <FiTrendingUp className="text-4xl text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h4>
              <p className="text-gray-600">
                View detailed insights and trends to understand your nutrition patterns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <FiSettings className="text-4xl text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Integrations</h4>
              <p className="text-gray-600">
                Connect with your favorite health apps and receive smart notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h3>
          <p className="text-lg mb-8">Join thousands of users tracking their nutrition with Faayo.</p>
          <Link
            href="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Faayo. All rights reserved. Built with care for your health.</p>
        </div>
      </footer>
    </div>
  );
}