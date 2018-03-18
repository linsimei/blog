//获取博客列表：
window.onload = function() {
    var vue1 = new Vue({
        el: '#mainbody',
        data: {
            blogs: [],
            recommend_blogs: [],
            hot_blogs: []
        },
        mounted: function() {
            this.$nextTick(function() {
                this.$http.get('/web').then(response => {
                    this.blogs = response.body;
                });

                this.$http.get('/web/recommend_top10').then(response => {
                    this.recommend_blogs = response.body;
                });
                this.$http.get('/web/visit_top10').then(response => {
                    this.hot_blogs = response.body;
                });
            })
        },
        methods: {
            get_content: function(item) {
                return $("<div></div>").append($('<div>' + item.content + '</div>').children().slice(0, 2)).html();
            }
        }
    })
}