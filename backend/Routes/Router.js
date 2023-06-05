const express = require('express');
const app = express();

app.use(express.json());

const DualUsers = require('../Models/users')

app.post('/users/signup', async(req, res) => {
    const {username, password,email, mobilenumber} = req.body;
    if (!username || !email || !password || !mobilenumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const user = new DualUsers({
      username,
      email,
      password,
      mobilenumber
    });

    try
    {
    await user.save();
    res.send(user);
    }
    catch(error)
    {
    res.status(400).send(error);
    }
  });


  app.post('/users/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
    
      const user = await DualUsers.findOne({ username });
  
      if (!user) {
        // User not found
        return res.status(401).json({ error: 'User not found' });
      }
      // Compare the stored password with the provided password
      if (user.password != password) {
        // Password mismatch
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      // Handle database errors
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get("/users",async(req,res)=>{
    const users = await DualUsers.find({});
    try
    {
        res.send(users);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
  });
  
  module.exports = app;