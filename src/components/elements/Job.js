import Card from 'react-bootstrap/Card';
import jobsCss from '/Users/samluke/Desktop/FRB-frontend-main 2/src/css/jobs.css';

const Job = ({title, city, salary, experience, description, employer}) => {
    return (
        <div className={"jobs"}>
            <div id={"title"}>
                <p>{(experience !== null) ? experience : null} {title}</p>
            </div>
            <div id={"jobInfo"}>
                <p>{employer}</p>
                <p>Location: {city}</p>
            </div>
            <div className={"pay"}>
                <p>Pay: {salary}</p>
            </div>
            <div className={"description"}>
                <p className={"words"}>{description}</p>
            </div>
        </div>


    );
}

export default Job;