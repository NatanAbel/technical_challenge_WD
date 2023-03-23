import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailPage() {
    const [phone, setPhone] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {phoneId} = useParams()

    useEffect(()=>{
        const fetchPhone = async()=>{
            const res = await axios.get(`http://localhost:5005/phones/${phoneId}`)
            console.log("res..", res) 
            setPhone(res.data)
            setIsLoading(false)
        }
        fetchPhone()
    },[])
  return (
    <>
        {!isLoading ? 
        (
            <div className="container" >
                <div>
                    <h1>{phone.name}</h1>
                    <img src={phone.imageFileName} style={{width:"350px"}} alt="phone"/>
                </div>
                <div>
                    <h3>{phone.manufacturer}</h3>
                    <p>{phone.descriptio}</p>
                    <p>{phone.color}</p>
                    <p>{phone.price}</p>
                    <p>{phone.screen}</p>
                    <p>{phone.processor}</p>
                    <p>{phone.ram}</p>
                </div>
            </div>
        ):<p>Loading...</p>
    }
    </>
  )
}

export default DetailPage