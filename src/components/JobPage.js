import Job from "./elements/Job"
import MindMap from "./elements/MindMap";

import '../css/jobpage.css';
import { useState } from "react";

const JobPage = ({displayProfile}) => {

    const [data, setData] = useState(['Click on a job posting to see details!']);

    const show_data = (data) => {
        setData(data);
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                <Job 
                    postData={show_data}
                    title='Application Developer'
                    city='Overland Park, KS 66210'
                    description='The Application Developer will design and code functional programs and applications. 
                    They will work as part of a team and individually with little supervision. We expect the Application Developer 
                    has excellent knowledge of various programming languages and technologies. They must be familiar with a variety 
                    of operating systems and platforms. The ideal candidate will also have an analytical mindset and a keen eye for detail. 
                    At GPL, they will work on our Web Portal, Web API’s, and work with us to implement new technologies where appropriate.'
                    salary='$80,000 - $95,000 a year - Full-time'
                />
                <Job 
                    postData={show_data}
                    title='Software Engineer'
                    city='Kansas City, MO'
                    description='Bring your strong software engineering and cloud skills to our team and work with modern technology deploying 
                    microservices to the cloud. Work directly with our business and learn about the financial services industry as you deliver technology 
                    solutions for our global asset management business.'
                    salary='Not provided: Full-time'
                />
                <Job 
                    postData={show_data}
                    title='Software Engineer'
                    city='Riverside, MO 64150'
                    description='The Software Engineer will contribute to the development, calibration, and testing of new vehicle functional control 
                    system software, as well as supporting current products through feature upgrades, bug fixes, and new feature integration. The 
                    Software Engineer will develop and support a variety of applications from Vehicle Charging and Operation to communication interfaces 
                    with Autonomous Systems for Remote Drive Capabilities.'
                    salary='Not provided: Full-time'
                />
                <Job 
                    postData={show_data}
                    title='Software Engineer 1'
                    city='Kansas City, MO 64147'
                    description='The Software Engineer I in Test Engineering provides uses broad knowledge of software engineering discipline, 
                    processes and tools in order to complete various project subtasks. May interact with internal customers and team members in order 
                    to facilitate the completion of products to customer specifications.'
                    salary='Not provided: Full-time'
                />
                <Job 
                    postData={show_data}
                    title='Lead Application Developer'
                    city='Leawood, KS 66211•Hybrid remote'
                    description='This role is responsible for the development of the most challenged, difficult, and/or progressive 
                    features and enhancements to AMC’s API services and endpoints that align with established architecture/standards/process 
                    within each chosen toolset. This includes collaboration and compliance, architecture, security, front-end development 
                    (internal & external) and operations teams.'
                    salary='Not provided: Full-time'
                />
            </div>
            <div className='focused' style={{width: '45vw', borderLeft: '1px solid grey', padding: '2vw'}}>
                <div style={{position: 'fixed'}}>
                    <div style={{height: '80vh'}}>
                        {data}
                    </div>
                    <button className='jobpage-button' onClick={displayProfile}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default JobPage;