import './Statistics.css'

const Statistics = ({bad, good, neutral, total, positive}) => {
    return(
        <div className='statistics__wrapper'>
            <h2>Statistics</h2>
         <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positive}</li>
            </ul> 
        </div>
    )
}

export default Statistics