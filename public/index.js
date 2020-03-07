var verify = new Vue({
    el: '#verify',
    data: {
        show: true,
        alarm: false,
        token: "",
        buttonText: "Verify"
    },
    methods: {
        submit: function () {
            this.buttonText = "Loading...";
            let url = host + '/verify/' + this.token;
            let _this = this;
            $.get(url, function (data, status) {
                if (data["errcode"] == 200) {
                    data = data["data"];
                    if (data["errcode"] == 0) {
                        _this.show = false;
                        $.cookie('pcrtoolkit', _this.token, { expires: 365 });
                    }
                    // 获取失败
                    else {
                        _this.buttonText = "Verify";
                        _this.alarm = true;
                    }
                }
                // 路由失败
                else {
                    _this.buttonText = "Verify";
                    alert(error);
                }
            });
        },
    },
    created: function () {
        let token = $.cookie('pcrtoolkit');
        let url = host + '/verify/' + token;
        let _this = this;
        if (token) {
            $.get(url, function (data, status) {
                if (data["errcode"] == 200) {
                    data = data["data"];
                    if (data["errcode"] == 0) {
                        _this.show = false;
                    }
                    // 获取失败
                    else {
                        _this.show = true;
                        $.removeCookie('pcrtoolkit');
                    }
                }
                // 路由失败
                else {
                    _this.show = true;
                    alert(data["errmsg"])
                }
            });
        }
        else {
            _this.show = true;
        }
    }
})

