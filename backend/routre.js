const express = require("express");
const Contact = require("./model");

const router = express.Router();

router.get('/get',(req,res)=>{
  Contact.find().then(users=>res.json(users))
})
router.post("/send", async (req, res) => {
  const { nom, email, phone, message } = req.body;
  try {
    const newContact = new Contact({ nom, email, phone, message });
    await newContact.save();
    res.status(200).send("Message saved successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to save message.");
  }
  
});
router.delete("/:id",async(req,res)=>{
  const id=req.body
await Contact.deleteOne(id)
})

module.exports = router;

