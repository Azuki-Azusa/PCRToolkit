new Vue({
    el: '#reference',
    data: {
        token: null,
        date_id: 0,
        dates: [],
        round_index: 4,
        boss_index: 1,
        reference_index: 0,
        references: [],
        auto: ['手操', '半Auto', 'Auto'],
        kwsk: {
            damage: "",
            team: "",
            nickname: "",
            description: ""
        },
        createInfo: {
            nickname: "",
            auto: 0,
            round: 4,
            boss: 1,
            team: "",
            damage: "",
            description: ""
        },
        createButton: "确认"
    },
    methods: {
        active_date: function (date_id) {
            this.date_id = date_id;
            this.getReferences(this.date_id);
        },
        getReferences: function (date_id) {
            let url = host + '/references/' + this.token + '/' + date_id;
            let _this = this;
            $.get(url, function (data, status) {
                if (data["errcode"] == 200) {
                    data = data["data"];
                    if (data["errcode"] == 0) {
                        _this.references = data.references;
                        if (_this.references.length > 0) {
                            _this.references.sort(function(a, b){
                                return b.reference_id - a.reference_id;
                            });
                        }
                        // _this.kwsk = _this.references[0] ? _this.references[0] : _this.kwsk;
                    }
                    // 获取失败
                    else {
                        alert(data["errmsg"]);
                    }
                }
                // 路由失败
                else {
                    alert(data["errmsg"]);
                }
            });
        },
        selectReference: function (index) {
            this.reference_index = index;
            this.kwsk = this.references[index];
        },
        create: function () {
            this.createButton = "Loading...";
            let url = host + '/createReference';
            let _this = this;
            let data = {
                token: this.token,
                referenceWork: {
                    nickname: this.createInfo.nickname,
                    auto: this.createInfo.auto,
                    round: this.createInfo.round,
                    boss: this.createInfo.boss,
                    team: this.createInfo.team,
                    damage: this.createInfo.damage,
                    description: this.createInfo.description
                }
            };

            $.post(url,
                data,
                function(data,status){
                    console.log(status);
                    if (data["errcode"] == 200) {
                        data = data["data"];
                        if (data["errcode"] == 0) {
                            alert(data["errmsg"]);
                            location.reload();
                        }

                        else {
                            _this.createButton = "确认";
                            alert(data["errmsg"]);
                        }
                    }
                    // 路由失败
                    else {
                        _this.createButton = "确认";
                        alert(data["errmsg"]);
                    }
                });
        },
        remove: function () {
            let url = host + '/removeReference';
            let data = { 
                token: this.token,
                reference_id : this.references[this.reference_index].reference_id
            };
            console.log(data);
            if (confirm("确定要删除该作业")) {
                $.post(url,
                    data,
                    function(data,status){
                        console.log(status);
                        if (data["errcode"] == 200) {
                            data = data["data"];
                            if (data["errcode"] == 0) {
                                alert(data["errmsg"]);
                                location.reload();
                            }
    
                            else {
                                alert(data["errmsg"]);
                            }
                        }
                        // 路由失败
                        else {
                            alert(data["errmsg"]);
                        }
                    });
            }
        }
    },
    created: function () {
        let token = $.cookie('pcrtoolkit');
        this.token = token;
        let url = host + '/dates/' + token;
        let _this = this;
        if (token) {
            $.get(url, function (data, status) {
                if (data["errcode"] == 200) {
                    data = data["data"];
                    if (data["errcode"] == 0) {
                        _this.dates = data.dates;
                        if (_this.dates.length > 0) {
                            _this.dates.sort(function(a, b){
                                return b.date_id - a.date_id;
                            });
                            _this.date_id = _this.dates[0].date_id;
                            _this.getReferences(_this.date_id);
                        }
                    }
                    // 获取失败
                    else {
                        $.removeCookie('pcrtoolkit');
                        alert("无使用权");
                    }
                }
                // 路由失败
                else {
                    alert(data["errmsg"])
                }
            });
        }
        else {
            alert("无使用权");
        }
    }
});