import Job from "./elements/Job"
import MindMap from "./elements/MindMap";

import '../css/jobpage.css';

const JobPage = ({displayProfile}) => {
    return (
        <div>
            <Job 
                title='Application Developer'
                city='Overland Park, KS 66210'
                description='The Application Developer will design and code functional programs and applications. 
                They will work as part of a team and individually with little supervision. We expect the Application Developer 
                has excellent knowledge of various programming languages and technologies. They must be familiar with a variety 
                of operating systems and platforms. The ideal candidate will also have an analytical mindset and a keen eye for detail. 
                At GPL, they will work on our Web Portal, Web API’s, and work with us to implement new technologies where appropriate.'
                salary='$80,000 - $95,000 a year - Full-time'
            />
            <button className='jobpage-button' onClick={displayProfile}>Back</button>
        </div>
    );
}

export default JobPage;