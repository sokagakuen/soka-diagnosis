// Netlify Function for testing
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  return {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify({
      message: 'Hello from Netlify Functions!',
      timestamp: new Date().toISOString()
    })
  };
};