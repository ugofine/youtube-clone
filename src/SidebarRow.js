
import './SidebarRow.css'

const SidebarRow = ({Icon,title,}) => {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default SidebarRow
