
import React from "react"
const Weather = (props) => {
    return(
        <div className="info">
            {props.temperature && 
            <p className="info_Key">
                temperature : <span className="info-value">{props.temperature}</span>
            </p>
            }
            {props.city && 
            <p className="info_Key">
                city : <span className="info-value">{props.city}</span>
            </p>
            }
            {props.country && 
            <p className="info_Key">
                country : <span className="info-value">{props.country}</span>
            </p>
            }
            {props.humidity &&
             <p className="info_Key">
                humidity :<span className="info-value">{props.humidity}</span> 
             </p>
             }
            {props.description &&
             <p className="info_Key">
                description : <span className="info-value">{props.description}</span>
             </p>
             }
            {props.error &&
             <p className="info_Key">
                <span className="info-value">{props.error}</span>
             </p>
            }
        </div>
    )

}
export default Weather