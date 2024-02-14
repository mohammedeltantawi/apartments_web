"use client"
import { useEffect, useState } from "react"
import { getApartments } from "../network/services/apartments.service"
import { Apartment } from "../models/apartment.model";
import Link from 'next/link'

export default function apartmentsList() {

    const [apartments, setApartments] = useState<[Apartment]>();
    useEffect(() => {
        getApartments()
        .then((res)=>{
            setApartments(res.data);
        })
    },[])

    return (
        <div className="flex min-h-screen flex-col">
			{
				apartments && apartments.map((item: Apartment) => 
                    <div key={item._id} style={{marginTop:'10px'}}>
                        <h2>Name: {item.name}</h2>
                        <h2>About: {item.about}</h2>
                        <Link href={`/apartments/${item._id}`} style={{ fontWeight: 'bold'}}>More Details</Link>
                    </div>
				)
			}
        </div>
    )

}