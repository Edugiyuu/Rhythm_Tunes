import { useEffect, useState } from "react";
import PatchNoteItem from "../PatchNoteItem/PatchNoteItem"
import "../PatchNotes/PatchNotes.css"
import CustomLink from "../../utils/CustomLink";

function PatchNotes() {
    const [characterChosed, setCharacterChosed] = useState("");

    const characters = ["Yuki","Mitsuru","Fuuka","Junpei","Aigis","Yukari"];
    useEffect(() => {
        const character = characters[Math.floor(Math.random() * characters.length)];
        setCharacterChosed(character);

    }, [])


    return (
        <div className="PatchNotes">
            <div className="PatchNotesItens">
                <PatchNoteItem title="RELEASE" version="1.0.0" date="July 1, 2025" changes={["PROJECT RELEASE!","More updates coming soon!"]} />
            </div>

            <CustomLink to="/" title="Go back" className="Link PatchNotesGoBack"/>
            <img src={`/imgs/${characterChosed}/PatchNotes/${characterChosed}0.png`} />
        </div>
    )
}

export default PatchNotes