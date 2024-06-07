const express = require("express")
const uuid = require("uuid")
const cors = require("cors")

const port = 3001
const orders = []
const app = express()
app.use(express.json())
app.use(cors("http://localhost:3000/order"))

const checkOrderId = (request, response, next) => {
    const {id} = request.params
    const index = orders.findIndex(order => order.id === id)
    if(index < 0) {
        return response.status(404).json({error: "Order not found"})
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

app.get("/order", (request, response) => {

    return response.json(orders)
})

app.post("/order", (request, response) => {

    const {order, client} = request.body

    const newOrder = {id: uuid.v4(), order, client}

    orders.push(newOrder)

    return response.status(201).json({message: "Order Created!"})
})

app.delete("/order/:id", checkOrderId, (request, response) => {

    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`🚀Started server on port ${port}👌`)
})