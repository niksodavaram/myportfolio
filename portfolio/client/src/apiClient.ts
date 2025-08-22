const apiUrl = import.meta.env.VITE_API_URL; // Get the API URL from environment variables

// Example: Fetch data from an endpoint
export const fetchData = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};