import '../../css/mindmap.css';

const MindMap = ({back}) => {
    return (
        <div>
            <button className='back-button' onClick={(back)}>Back</button>
            <div>
                <img src="https://snipboard.io/Nd1raM.jpg" style={{maxWidth: '100vw'}}>
                </img>
            </div>
        </div>
    );
}

export default MindMap;

