const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
    create, login, checkToken
};


function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  //verify middleware is doing its job
  console.log('req.user', req.user);
  res.json(req.exp);
}


async function create(req, res) {
    //because its a SPA, there is no redirect or render
    try {
        //Add user to the database
        const user = await User.create(req.body); 
        //the above holds our data thanks to JSON body parser middelware
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);

    }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

/*--------- HELPER FUNCTIONS ------------------*/

 function createJWT(user) {
    return jwt.sign(
        //data payload
        { user }, 
        process.env.SECRET,
        { expiresIn: '24h'}
    );
 }
