import { useEffect, useState } from "react";
import PatchNoteItem from "../PatchNoteItem/PatchNoteItem"
import "../PatchNotes/PatchNotes.css"
import CustomLink from "../../utils/CustomLink";

function PatchNotes() {
    const [characterChosed, setCharacterChosed] = useState("");

    const characters = ["Yuki","Mitsuru","Fuuka","Junpei","Aigis","Yukari","Akihiko","Koromaru"];
    useEffect(() => {
        const character = characters[Math.floor(Math.random() * characters.length)];
        setCharacterChosed(character);

    }, [])


    return (
        <div className="PatchNotes">
            <div className="PatchNotesItens">
                <PatchNoteItem title="Mode Selector" version="1.0.1" date="July 3, 2025" changes={["Added a new Mode Selector","Fixed scroll animation","Fixed most of the screen (responsiveness) issues","Rip chie voice.."]} />
                <PatchNoteItem title="RELEASE" version="1.0.0" date="July 1, 2025" changes={["PROJECT RELEASE!","More updates coming soon!"]} />
            </div>

            <CustomLink to="/" title="Go back" className="Link PatchNotesGoBack"/>
            <img src={`${import.meta.env.BASE_URL}/imgs/${characterChosed}/PatchNotes/${characterChosed}0.png`} />
        </div>
    )
}

export default PatchNotes