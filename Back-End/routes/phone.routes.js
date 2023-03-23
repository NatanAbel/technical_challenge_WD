const router = require("express").Router();

const phones = require("../data/phones.json")



router.get("/", async(req, res) => {
    try{
         res.json(phones);
    }catch(e){
        console.log(e)
    }
});

router.get("/:id",async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const OnePhone = phones.find(phone=>phone.id === id)
         res.json(OnePhone);
    }catch(e){
        console.log(e)
    }
});

module.exports = router;
