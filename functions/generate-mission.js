// Basic generate-mission function without external dependencies
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Test GET request
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'generate-mission function is working!',
        hasApiKey: !!process.env.CLAUDE_API_KEY,
        timestamp: new Date().toISOString()
      })
    };
  }

  // Handle POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // For now, return a mock response to test the function
    const mockMission = {
      candidates: [{
        content: {
          parts: [{
            text: '【ミッション】：今日、身近な人に「ありがとう」を伝えて、その人の笑顔を見つめてみよう。小さな感謝の気持ちが、大きな絆を生み出します。'
          }]
        }
      }]
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(mockMission)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'サーバーエラーが発生しました',
        details: error.message 
      })
    };
  }
};