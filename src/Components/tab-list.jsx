function tablist() {
    return (
        <div className="tab-list">
            <div className="tab-group">
                <button className="tab-item">Overview</button>
                <button className="tab-item">Insights</button>
                <button className="tab-item underline">Guests</button>
            </div>
            <div className="tab-group">
                <button className="tab-item">Event Page</button>
                <button className="tab-item">Form Builder</button>
            </div>
            <div className="tab-group">
                <button className="tab-item">Scan QR</button>
                <button className="tab-item">In-Event</button>
            </div>
            <div className="tab-group">
                <button className="tab-item">Logs</button>
                <button className="tab-item">Finance</button>
            </div>
            <div className="tab-group">
                <button className="tab-item">Post Event</button>
            </div>
            <div className="tab-group border-none">
                <button className="tab-item">Child Events</button>
            </div>
        </div>
    );
}

export default tablist;