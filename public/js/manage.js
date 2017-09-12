
window.onload = function () {
    var vue = new Vue({
        el: "#manage_wrapper",
        data: {
            manage_blogs: []
        },
        mounted: function () {
            this.$nextTick(function () {
                this.$http.get('/web').then(response => {
                    this.manage_blogs = response.body;
                });
            })
        },
        methods: {
            delete_blog: function (event) {
                var id = event.currentTarget.getAttribute("data-id");
                var result = confirm("确认删除?");
                if(result){
                    vue.$http.get("/web/delete/"+id).then(function(res){
                        alert("删除成功！")
                        window.location.href="/manage"
                    })
                }
            }


        }
    })
}