const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const AuthRouter = require("./routes/AuthRouter")
const CandleRouter = require("./routes/CandleRouter")
const FlowerRouter = require("./routes/FlowerRouter")
const CakeRouter = require("./routes/CakeRouters")
console.log("hello")
const OrderRouter = require("./routes/OrderRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", AuthRouter)
app.use("/cake", CakeRouter)
app.use("/candles", CandleRouter)
app.use("/flowers", FlowerRouter)
app.use("/orders", OrderRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`🔃 Running Express server on Port ${PORT} . . . `)
})
