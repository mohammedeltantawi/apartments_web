"use client"

import { useEffect, useState } from "react"
import { Apartment } from "../../models/apartment.model";
import { getApartment } from "../../network/services/apartments.service";

export default function apartment({ params }: {
    params: { apartmentId: string}
}) {
    const [apartment, setApartment] = useState<Apartment>();

    useEffect(() => {
        getApartment(params.apartmentId)
        .then((res)=>{
            console.log(res);
            setApartment(res.data);
        })
    },[])
    return (        
            apartment ? 
        (  <div className="flex min-h-screen flex-col">
                <h2>Name: {apartment.name}</h2>
                <h2>About: {apartment.about}</h2>
                <h2>Area: {apartment.area}</h2>
                <h2>Price: {apartment.price}</h2> 
                <h2>Bedrooms: {apartment.bedrooms}</h2>
                <h2>Bathrooms: {apartment.bathrooms}</h2>  
                {apartment.resale && <h2>Resale</h2>}
            </div>) : (
            <div></div>
        )
    )
        
}