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
        const id = req.params.id
        const OnePhone = await phones.findById(id)
         res.json(OnePhone);
    }catch(e){
        console.log(e)
    }
});

module.exports = router;
