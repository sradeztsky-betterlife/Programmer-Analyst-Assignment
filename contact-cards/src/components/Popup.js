import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h1>{props.item.name}</h1>
                <h3>Username: {props.item.username}</h3>
                <h3>Address: {props.item.address.street + " " + props.item.address.suite + " " +
                             props.item.address.city + ", " + props.item.address.zipcode.slice(0,5)}</h3>
                <h3>Geo: {props.item.address.geo.lat + "," + props.item.address.geo.lng}</h3>
                <h3>Phone: {props.item.phone}</h3>
                <a href={"https://" + props.item.website}><h3> {props.item.website}</h3></a>
                <h3>Company Name: {props.item.company.name}</h3>
                <h3>Company Catchphrase: {props.item.company.catchPhrase}</h3>
                <h3>Company BS: {props.item.company.bs}</h3>
                <button className='close-btn' onClick={() => props.setTrigger()}>close</button>
            </div>
        </div>
    ) : "";
}

export default Popup