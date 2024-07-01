function Timenode(props) {
    return (
        <div className="card m-6" onClick={e => props.selectNode(props.id)}>
            <header className="card-header has-background-primary-dark">
                    <p className="card-header-title">{props.name}</p>
                    <p className="card-header-icon">{props.date}</p>
            </header>
            <div className="card-content">
                <div className='content has-text-centered'>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Timenode;