const Job = ({title, city, salary, experience, description}) => {
    return (
        <div>
            <p>{experience + title}</p>
            <p>Location: {city}</p>
            <p>Pay: {salary}</p>
            <p>{description}</p>
        </div>
    );
}

export default Job;