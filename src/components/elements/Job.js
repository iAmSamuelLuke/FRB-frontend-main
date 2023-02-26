const Job = ({title, city, salary, experience, description, employer}) => {
    return (
        <div>
            <p>{(experience !== null) ? experience : null} {title}</p>
            <p>{employer}</p>
            <p>Location: {city}</p>
            <p>Pay: {salary}</p>
            <p>{description}</p>
        </div>
    );
}

export default Job;