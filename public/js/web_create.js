window.onload = function () {
    var vue = new Vue({
        el: "#create_form",
        data: {
            blog: {
                title: '',
                cover: '',
                content: ''
            }
        },
        methods: {
            upload_file: function () {
                $("#upload_file").click();
            },
            upload_img: function (event) {
                var file = event.target.files[0];
                var formData = new FormData();
                formData.append('file', file);

                $.ajax({
                    url: '/files/upload',
                    type: 'POST',
                    data: formData,
                    processData: false,  // tell jQuery not to process the data
                    contentType: false,  // tell jQuery not to set contentType
                    success: function (data) {
                        $("#pre_img").attr("src", data);
                        vue.blog.cover = data;


                    }
                });
            },
            submit: function () {

                this.$http.post("/web/add", vue.blog).then(response => {
                    response.body;
                    alert("发表成功！");
                    window.location.href = "/manage";

                }
                )
            }

        },
        mounted: function () {
            var E = window.wangEditor;
            var editor = new E('#wangeditor');
            // 自定义菜单配置
            editor.customConfig.menus = [
                'head',
                'bold',
                'italic',
                'underline'
            ]
            editor.customConfig.onchange = function (html) {
                // html 即变化之后的内容
                //$("#content").val(html);
                vue.blog.content = html;
            }
            // 或者 var editor = new E( document.getElementById('#editor') )
            editor.create()
        }
    })
}