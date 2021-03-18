const express = require('express')
const app = express()
const bodyParser = require ( "body-parser" );

//instead database
const accounts = []
//include model
const account = require('./model/Account');

app.set ( "view engine", "ejs" );

app.use ( bodyParser.urlencoded ( { extended : false } ) );

app.get('/', (req, res) => {
  res.render ( "index" );
})

app.post ( "/formsave", ( req, res ) => {
  const hashtag = [
    req.body.Hashtag1.toUpperCase(), 
    req.body.Hashtag2.toUpperCase(), 
    req.body.Hashtag3.toUpperCase(), 
    req.body.Hashtag4.toUpperCase(), 
    req.body.Hashtag5.toUpperCase()
  ]
  createAccount(hashtag)

  //filter result on condition and sort them
  result = accounts.filter(account => char_count(account.message,'I') >= 1 && char_count(account.message,'O') >= 1)
    .filter(account => char_count(account.message,'I') + char_count(account.message,'O') >= 5)
    .sort(function (x, y) {
      return (char_count(y.message,'I') + char_count(y.message,'O')) - (char_count(x.message,'I') + char_count(x.message,'O'));
    })
    .splice(0,10);

  res.send(result)
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

function createAccount(hashtag) {
  //create 926 account
  for(i=1;i<=926; i++)
    accounts.push(account.Account(i,hashtag[i%5]))
}

//count charactor in string
function char_count(str, letter) 
{
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) 
  {
      if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
}
