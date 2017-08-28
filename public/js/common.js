$(function () {
    //setup ajax error handling
    $.ajaxSetup({
        error: function (x, status, error) {
            if (x.status == 403) {
                window.location.href="/login";
            }
            else {
                alert("An error occurred: " + status + "nError: " + error);
            }
        }
    });
});