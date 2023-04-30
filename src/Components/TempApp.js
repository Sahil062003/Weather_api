import react, { useState } from "react";
import { useEffect } from "react";
import "./css/style.css";
const TempApp=()=>{
    const [city,setCity]=useState("Bathinda");
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=41ae0c4300999143f87286c67570f102`
            const response=await fetch(url);
            const resJson=await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event)=>{
                        setSearch(event.target.value)
                    }}/>
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ):(
                        <div>
            <div className="info">
                <h2 className="location">
                <i class="fa-solid fa-street-view">{search}</i>
                </h2>
                <h1 className="temp">
                    {city.temp}
                </h1>
                <h3 className="tempmin_max">Min : {city.temp_min} Cel | Max : {city.temp_max} Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
                    )
                }
            </div>
        </>
    );
}
export default TempApp;