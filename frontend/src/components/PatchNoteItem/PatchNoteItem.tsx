import { triggerH2Animation } from "./animations"
import "../PatchNoteItem/PatchNoteItem.css"
type PatchNoteItemProps = {
    title: string
    version: string
    date: string
    changes: string[]
    image?: string
}

function PatchNoteItem({ title, version, date, changes, image }: PatchNoteItemProps) {
    triggerH2Animation()
    return (
        <div className="PatchNoteItem">
            <h2>{title}</h2>
            <h3>version: {version}</h3>
            <h3>Updated: {date}</h3>
            <ul>
                {changes.map((change, id) => (
                    <li key={id}>{change}</li>
                ))}
            </ul>

        </div>
    )
}

export default PatchNoteItem