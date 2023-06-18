import axios from 'axios';

export default async (req, res) => {
  try {
    // Make a GET request to the GitHub API
    const response = await axios.get('https://api.github.com/repos/OWNER/REPO');

    // Extract the desired data from the response
    const { stargazers_count, forks_count, open_issues_count } = response.data;

    // Return the extracted data as the API response
    res.status(200).json({
      stargazersCount: stargazers_count,
      forksCount: forks_count,
      openIssuesCount: open_issues_count
    });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error fetching data from GitHub API:', error);

    // Return an error response
    res.status(500).json({ error: 'Error fetching data from GitHub API' });
  }
};