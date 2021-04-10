function PlanTypes({children, id, className, onClick}) {
    return(
        <div className={className} id={id} onClick={onClick}>{children}</div>
    )
}

export default PlanTypes;
