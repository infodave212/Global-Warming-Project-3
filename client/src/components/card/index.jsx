import CardBody from "../cardBody"
function Card({data}) {
    return <>
        <div class="body_resize">
            <div class="left"> 
         {data.map(pollutant=><CardBody pollutant={pollutant}/>)}  
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            <div class="clr"></div>
        </div>
    </>
}
export default Card