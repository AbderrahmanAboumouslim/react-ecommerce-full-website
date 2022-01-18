// domain/.netlify/functions/tested
// exports.handler = async function(event, context) {...}

exports.handler = async () => {
  return {
    statusCode: 200,
    body: "my nasty code was here",
  };
};
