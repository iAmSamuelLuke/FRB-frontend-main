import '../../css/xpbar.css';

const XPbar = ({max, value}) => {
    return (
        <div className='xpbar-wrapper'>
            <div className="xp-bar">
                <h3>XP Progress</h3>
                <progress id="progressBar" max={max} value={value}></progress>
                <h4>
                xp of 125xp in Unit
                </h4>
            </div>
        </div>
    );
}

export default XPbar;