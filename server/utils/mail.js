const fs = require('fs').promises;

async function writeFileExample(token, email, verifyUrl, user) {
  try {
   
    // Write JSON data
    const data = {
        token: token,
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify Your Email',
        html: `<p>Click <a href="${verifyUrl}">here</a> to verify your email.</p>`,
        data: user,
    };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('File created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

module.exports = writeFileExample;

