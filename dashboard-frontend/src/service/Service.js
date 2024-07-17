// DashboardService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Your Spring Boot backend base URL

class DashboardService {
  // Fetch user details
  static async getUserDetails() {
    try {
      const response = await axios.get(`${BASE_URL}/api/users/1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

  // Fetch user analytics
  static async getUserAnalytics() {
    try {
      const response = await axios.get(`${BASE_URL}/api/analytics/user/1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user analytics:', error);
      throw error;
    }
  }

  // Fetch user posts
  static async getUserPosts() {
    try {
      const response = await axios.get(`${BASE_URL}/api/posts/user/1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user posts:', error);
      throw error;
    }
  }
}

export default DashboardService;
