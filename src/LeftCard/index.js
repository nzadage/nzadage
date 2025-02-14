import React from "react";

const LeftCard = () => {
    return (
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: "150px;"}}/>
                <h5 className="my-3">Nitin Zadage</h5>
                <p class="text-muted mb-1">Senior Java Developer</p>
                <p class="text-muted mb-4">Pune, Maharashtra, India</p>
                <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">Follow</button>
                    <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LeftCard;