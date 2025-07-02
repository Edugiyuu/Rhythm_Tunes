import "../CountDown/CountDown.css"
import { TriggerCountDown } from "./animation"

const CountDown = () => {
        TriggerCountDown()
    return (
        <div className="CountDown">
            <div className="CountDownText1">
                <h2>3</h2>
            </div>
            <div className="CountDownText2">
                <h2>2</h2>
            </div>
            <div className="CountDownText3">
                <h2>1</h2>
            </div>
            <div className="CountDownText4">
                <h2>Ready?</h2>
            </div>
        </div>
    )
}

export default CountDown