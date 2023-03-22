import axios from "axios"
import React, { useEffect, useState } from "react"
function HomePage() {
    const [phones, setPhones] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchPhones = async()=>{
            const response = await axios.get("http://localhost:5005/phones")
            console.log("response...", response.data)
            setPhones(response.data)
            setLoading(false)
        }
        fetchPhones()
    },[])

  return (
    <>
        {!isLoading ? (
            <div>
               {phones.map(phone =>{
                return(
                    <div key={phone.id}>
                        <h1>{phone.name}</h1>
                        <img src={phone.imageFileName} style={{width:"350px"}} alt="phone"/>
                        <h3>{phone.manufacturer}</h3>
                        <p>{phone.descriptio}</p>
                        <p>{phone.color}</p>
                        <p>{phone.price}</p>
                        <p>{phone.screen}</p>
                        <p>{phone.processor}</p>
                        <p>{phone.ram}</p>
                    </div>
                )
               })} 
            </div>
        ):<p>Loading..</p>}
    </>
  )
}

export default HomePage