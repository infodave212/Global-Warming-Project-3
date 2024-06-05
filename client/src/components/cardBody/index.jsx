import { Link } from 'react-router-dom';
function CardBody ({pollutant}){
    return <>
                <p>{pollutant.thoughtText} </p>
                <p>by {pollutant.thoughtAuthor}</p>
                <Link
             
              to={`/thoughts/${pollutant._id}`}
            >
             <img src="images/reading.gif" alt="" width="118" height="26" border="0" />
            </Link>
               
                <div class="bg"></div>
    </>
}
export default CardBody