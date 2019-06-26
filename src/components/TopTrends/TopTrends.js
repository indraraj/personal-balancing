import React from "react"
import "./TopTrends.css"

const topTrends = (props) =>{
    let topTrending = ['Cloud ','AI', 'UX Design', 'ML', 'Mobile App', 'Leadership']
    return(
        <div className="TopTrends">
            {topTrending.map(e =>(
                <p key={e}>#{e}</p>
            ))}
        </div>
    )
}

export default topTrends;