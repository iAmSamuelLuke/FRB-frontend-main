import '../../css/xpbar.css';

const XPbar = ({max, value}) => {
    // max = maximum amount of XP in a level
    // value=amount of XP the player has. NOT amount of xp the player has in that level
    return (
        <div className='xpbar-wrapper'>
            <div className="xp-bar">
                <h3>XP Progress</h3>
                <progress id="progressBar" max={max} value={value%125}></progress>
                <h4>
                {value%125} of 125xp in Level {(value - (value%125))/125}
                </h4>
            </div>
        </div>
    );
}

export default XPbar;