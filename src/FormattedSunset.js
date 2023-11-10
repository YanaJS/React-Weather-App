import React from "react";


export default function FormattedSunset(props){
    //console.log(props.sunset);
    const sunset_time = new Date(props.sunset * 1e3);
    let getSunset = sunset_time.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return (<div>
        🌅 Sunset: {getSunset};
     </div>
     );
     }