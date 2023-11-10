import React from "react";



export default function FormattedSunrise(props){
    //console.log(props.sunrise);
    const sunrise_time = new Date(props.sunrise * 1e3);
    let getSunrise = sunrise_time.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
return (<div>
   🌅 Sunrise: {getSunrise};
</div>
);
}