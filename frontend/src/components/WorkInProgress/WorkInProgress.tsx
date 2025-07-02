import CustomLink from "../../utils/CustomLink"
import "./WorkInProgress.css"

const WorkInProgress = () => {
  return (
    <div className="WorkInProgress">
        <h1>This Page is not finished yet</h1>
        <p>But maybe in a future update it will be</p>
        <img src={`${import.meta.env.BASE_URL}/imgs/Chie/WorkInProgress.png`}/>
        <CustomLink to="/" title="Go back" className="Link PatchNotesGoBack"/>
    </div>
  )
}

export default WorkInProgress