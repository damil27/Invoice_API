const express = require("express");
const app = express();
let data = require("./data");
app.use(express.json())


console.log(data);
app.get("/api/invoice", (request, response) => {
  response.send(data);
});

app.get("/api/invoice/:id", (request, response) => {
  //   response.send(request.params)
  const invoice = data.find((item) => item.id === request.params.id);
  if (!invoice) response.status(404).send("resource not found");

  response.send(invoice);
});

app.post("api/invoice", (request, response) => {
    const newInvoice = request.body;
    newInvoice.id = "WW20"
    data.push(newInvoice)
    response.status(201).send(data)
})

app.put("api/invoice/:id ", (request, response) => { 
    const updatedDataId = data.findIndex(item => item.id === request.params.id)
    if (!updatedData) response.status(404).send(`Invoice with ${request.params.id} can not be found`)
    const updatedDatad = request.body
    data[updatedDataId] = {...data[updatedDataId],  ...updatedDatad}
    response.send(data[updatedDataId]);
})


const port = process.env.PORT || 3088;
app.listen(port, () => console.log(`Listening on port ${port}`));
