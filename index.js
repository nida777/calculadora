const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home')
})




app.listen(PORT, () => {
  console.log("Backend executando...")
})