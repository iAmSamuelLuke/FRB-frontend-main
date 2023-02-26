import '../../css/job.css';

const Job = ({title, location, salary, experience, description, postData}) => {
    return (
        <div className='job-wrapper' onClick={() => postData(description)}>
            <p>{(experience !== null) ? experience : null} {title}</p>
            <p>Location: {location}</p>
            <p>Salary: {salary}</p>
            <p>Click to see details!</p>
        </div>
    );
}

export default Job;