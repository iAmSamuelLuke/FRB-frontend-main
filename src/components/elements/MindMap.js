import '../../css/mindmap.css';

const MindMap = ({back}) => {
    return (
        <div>
            <button className='back-button' onClick={(back)}>Back</button>
            <div>
                <img src="https://coggle-downloads-production.s3.eu-west-1.amazonaws.com/4083b89785056eaa7a3d9e65e847093b2e6ba71c8efab96cb66652cea795ab92/Roadmap_To_Fullstack_Web_Development.png?AWSAccessKeyId=ASIA4YTCGXFHPHSEGJHI&Expires=1677400344&Signature=No3LnHV1uDNa6QL5bQUImnXTg0s%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCICqCngbkFHb8KmTpHKtFsKaYYLKvCXYH2xNJZfZFsbfVAiAlOwV%2BVuBY6g5PpfaNTNpaIMCFtgJ%2B1VsMDUJEaXy7YCqCAwg8EAAaDDg3NzQ1MzAzMTc1OCIM9oxx7eV730bAF4l%2BKt8CGCiJmEY7cox6%2FggHEmJgyNIWuBCnq7TRLdqWN0BPHnzWg97WGZDWEmgx2w9U6KdVImmyXYJOww73Osx%2FazBrUN7xdZ7m6NrXuhaXKZ88lRKzzQpdmbtLMTMgsxNycqP9hCGSpVcA%2FapU3%2BDuKXpQlJEEyecgOFIOW26rfWdLR9UjRovhbeJGuz7TTY6v9q1%2BcTKpz%2FhqliIUGtYhO1GXwJjczUUguhm5HYZLajBxrPDmTAbzKhgEXAHkJLesWRxWaavwNO3O3HvBwYrhk0dt6WmkhuuTewXH%2FuCOKYvVId7WNwiWmLSbVuesHRrTwOrBnYZu3g1KMb%2Bwgy0WwVfJEMo6bKI6%2FcOC9fNthDcGwLkzBMzxrsLE5hUdWp5Nlvsxq8bp%2F92o4x2zex0YLCjy8rhh7Vvn5eqhHG5qYGmRrtWdrrGbmC%2F%2BDePWc5fnYL3Oybs8SugyXC8u8siyGFuWMKiI658GOp8BfD3RL2EHfeyEQCO0pF2bQrctqi2My66F47yGZzDitiIu6GwTu%2BUhPTyRG1teE%2B%2FLcwyCmT%2Fux5w5GXtF6EHl72DuMnd0RQ%2F9LgBlLqmo1kZ5llvN3%2F%2BmyqpYJ7TmQXsZQsI5n7AtOBexwXicksEEI9N%2FmXxGWm32TNiGcBhdUDJeGMdSYze4RU3Bv75xvNfjj4ia2sFiEsm2wBjH3sZu" style={{maxWidth: '100vw'}}>
                </img>
            </div>
        </div>
    );
}

export default MindMap;