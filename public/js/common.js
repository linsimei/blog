$(function () {
    //setup ajax error handling
    $.ajaxSetup({
        error: function (x, status, error) {
            if (x.status == 403) {
                window.location.href = "/login";
            }
            else {
                alert("An error occurred: " + status + "nError: " + error);
            }
        }
    });
});

//date format
$(function () {
    function padLeft(n, str) {
        return Array(n - String(this).length + 1).join(str || '0') + this;
    }

    if (!Date.prototype.format) {
        Date.prototype.format = function (f) {
            f = f.replace(/yyyy/g, this.getFullYear());
            f = f.replace(/MM/g, this.getMonth() + 1);
            f = f.replace(/dd/g, this.getDate());
            f = f.replace(/d\*/g, this.getDate());
            return f;
        };
    };
});
  


// module.exports = Date;
$(function () {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(".back_top").show();
        } else {
            $(".back_top").hide();
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }
})

