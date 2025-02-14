import React from "react";

const RightCard = () => {
    return (
        <div className="col-lg-8">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p class="text-muted mb-0">Nitin Zadage</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p class="text-muted mb-0">nzadage55@gmail.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p class="text-muted mb-0">+91 1234567890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <p class="text-muted mb-0">Pune, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RightCard;