
function addClass(){
    
    document.getElementById("form-add-class").hidden = false;
    return;
}
function appendClass(){
    hourStart = document.getElementById("type-hours-start").value;
    newName = document.getElementById("type-class").value;
    newDate = document.getElementById("type-date").value;
    hourEnd = document.getElementById("type-hours-end").value;
    var textBox = 
    `<div class="col-md-3">
        <div class="card border-0">
            <img class="card-img-top" src="img/UC_logo.png" alt="">
            <div class="card-body">
                <h4 class="card-title">`+ newName +`</h4>
                <p class="card-text">`+ newDate +`</p>
            </div>
            <a class="btn btn-primary stretched-link" href="#" id="dropdownId" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="far fa-calendar-alt"></i>
                                Go to Class
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item">`+hourStart+" - "+hourEnd+`(Eastern Time)</a>
                                    <a class="dropdown-item" href="https://ucincinnati.zoom.us/j/91235829080">
                                        Link: https://ucincinnati.zoom.us/j/91235829080
            </a>
                        
            </div>
        </div>
    </div>`;

    $(textBox).insertBefore("#add-class");
    var textDropDown = `<a class="dropdown-item" href="#">`+ newName+`</a>`;
    $(textDropDown).insertBefore("#the-end-of-dropdown-class");
}

window.onload=function(){
    document.getElementById("add-class").addEventListener("click", addClass, false);
}
