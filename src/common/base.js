/**
 * @project app
 * @author lirongtong <lirongtong@hotmail.com>
 * @github: https://github.com/wildidea
 * @date 2018-6-19 8:37
 */
exports.install = function(Vue){

    Vue.prototype.getUserInfo = function(){
        this.$api.get(this.G.api.user, {}, function(res){
            if(res['ret']['retCode'].toString() === '0'){
                this.user = res;
            }
        });
    };

    Vue.prototype.logout = function(){
        this.$api.get(this.G.api.logout, {}, function(res){
            if(res['ret']['retCode'].toString() === '0'){
                alert('退出成功');
            }
        }, function(err){
            alert(err['ret']['retMsg']);
        });
    };

    Vue.prototype.setTitle = function(title){
        document.title = (title ? title : this.G.title) + ' - 后台管理';
    }
};