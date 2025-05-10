function Ataglance() {
    return (
        <div className="at-a-glance">
            <div className="at-a-glance-item1 py-2">
                <p className="">At a Glance</p>
                <p className="">Last Registered 1st May at 7:42 PM</p>
            </div>

            <div className="at-a-glance-item2">
                <div className="text-green">
                    <span>80 </span>
                    <span>unique guests</span>
                </div>
                <div>
                    <span className="px-1">
                        <span>59 </span>
                        <span className="text-green">shortlisted</span>
                    </span>
                    <span className="px-1">
                        <span>11 </span>
                        <span className="text-green">unclaimed</span>
                    </span>
                </div>
            </div>


            <div className="at-a-glance bar">
                <hr className="at-a-glance-violet" />
                <hr className="at-a-glance-green" />
                <hr className="at-a-glance-white" />
                <hr className="at-a-glance-royalblue" />
            </div>

            <div className="py-2">
                <ul className="at-a-glance-ul">
                    <li className="text-violet">• (280) Special Ticket</li>
                    <li className="text-green">• (3) Demo Paid Ticket</li>
                    <li className="">• (4) Hackathon</li>
                    <li className="text-royalblue">• (50) New Ticket</li>
                </ul>
            </div>

        </div>
    )
}

export default Ataglance;