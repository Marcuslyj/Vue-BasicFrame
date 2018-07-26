/**
 * @project app
 * @author lirongtong <lirongtong@hotmail.com>
 * @github: https://github.com/wildidea
 * @date 2018-6-19 8:37
 */
exports.install = function(Vue){

    /**
     * get user info
     * @returns {null}
     */
    Vue.prototype.getUserInfo = function(){
        let vm = this;
        vm.$api.get(this.G.api.user, {}, function(res){
            if(res['ret']['retCode'].toString() === '0'){
                vm.$set(vm.G, 'user', res.data);
                vm.$emit('get-user-success');
            }
        });
    };

    /**
     * logout
     * @returns {null}
     */
    Vue.prototype.logout = function(){
        let vm = this;
        vm.$api.get(vm.G.api.logout, {}, function(res){
            if(res['ret']['retCode'].toString() === '0'){
                vm.$success('退出成功');
            }
        }, function(err){
            vm.$error(err['ret']['retMsg']);
        });
    };

    /**
     * set document's title
     * @param title
     */
    Vue.prototype.setTitle = function(title){
        document.title = (title ? title : this.G.title) + ' - 后台管理';
    };

    /**
     * in array
     * @param elem
     * @param array
     * @param i
     * @returns {*}
     */
    Vue.prototype.inArray = function(elem, array, i){
        let len;
        if(array){
            len = array.length;
            i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
            for(; i < len; i++){
                if(i in array && array[i] ===  elem){
                    return i;
                }
            }
        }
        return -1;
    };

    /**
     * parse url
     * @param url (format: {param})
     * @param params
     * @returns {*}
     */
    Vue.prototype.parseUrl = function(url, params){
        params = params ? params : {};
        if(Object.keys(params).length > 0){
            for(let i in params){
                if(params.hasOwnProperty(i)){
                    let reg = new RegExp('\{' + i + '\}', 'gi');
                    url = url.replace(reg, params[i]);
                }
            }
        }
        return url;
    };

    /**
     * has class
     * @param obj
     * @param cls
     * @returns {*}
     */
    Vue.prototype.hasClass = function(obj, cls){
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    /**
     * add class
     * @param obj
     * @param cls
     */
    Vue.prototype.addClass = function(obj, cls){
        if(!this.hasClass(obj, cls)){
            obj.className += ' ' + cls;
        }
    };

    /**
     * remove class
     * @param obj
     * @param cls
     */
    Vue.prototype.removeClass = function(obj, cls){
        let vm = this,
            reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        if(obj.length && obj.length > 0){
            let i = 0, len = obj.length;
            for(; i < len; i++){
                if(vm.hasClass(obj[i], cls)){
                    obj[i].className = obj[i].className.replace(reg, '');
                }
            }
        }else{
            if(vm.hasClass(obj, cls)){
                obj.className = obj.className.replace(reg, '');
            }
        }
    };

    /**
     * random.
     * @returns {string}
     */
    Vue.prototype.$random = function(){
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };

    /**
     * generate unique key.
     * @returns {string}
     */
    Vue.prototype.$unique = function(){
        let vm = this;
        return (vm.$random() + vm.$random() + vm.$random() + vm.$random() + vm.$random() + vm.$random() + vm.$random() + vm.$random()).toLocaleUpperCase();
    };

    /**
     * clear space (left and right or all).
     * @param string
     * @param all
     * @returns {*}
     */
    Vue.prototype.trim = function(string, all){
        if(all) return string.replace(/\s+/g, '');
        else return string.replace(/^\s+|\s+$/g, '');
    };

    /**
     * confirm
     * @param content
     * @param ok
     * @param cancel
     * @param width
     * @param title
     */
    Vue.prototype.$confirm = function(content, ok, cancel, width, title){
        title = title ? title : '温馨提示';
        width = width ? width : 360;
        let vm = this;
        vm.$Modal.confirm({
            title: title,
            content: content,
            width: width,
            closable: true,
            loading: true,
            onOk: function(){
                vm.$Modal.remove();
                if((typeof ok).toLowerCase() === 'function'){
                    ok.call();
                }
            },
            onCancel: function(){
                if((typeof cancel).toLowerCase() === 'function'){
                    cancel.call();
                }
            }
        });
    };

    /**
     * receiving event.
     * @param event
     * @param unique
     */
    Vue.prototype.$onPopup = function(event, unique){
        let vm = this,
            classes = {
                wrap: 'ivu-modal-wrap',
                title: 'ivu-modal-confirm-head-title',
                footer: 'ivu-modal-confirm-footer',
                close: 'ivu-modal-close'
            };
        vm.$on(event, function(fn){
            let modals = document.getElementsByClassName(classes.wrap),
                length = modals.length, i = 0;
            if(length > 0){
                for(; i < length; i++){
                    let cur = modals[i],
                        title = cur.getElementsByClassName(classes.title)[0];
                    if(title){
                        let parent = title.parentNode,
                            text = vm.trim(title.innerText);
                        if(text === vm.trim(unique)){
                            vm.addClass(cur, event);
                            parent.remove();
                            cur.getElementsByClassName(classes.footer)[0].remove();
                            let close = cur.getElementsByClassName(classes.close)[0];
                            close.onclick = function(){
                                vm.$Modal.remove();
                            };
                            if(typeof fn === 'function') fn.call(vm);
                            break;
                        }
                    }
                }
            }
        });
    };

    /**
     * emit event & close popup.
     * @param event {*}
     * @param time
     */
    Vue.prototype.$emitPopup = function(event, time){
        let vm = this;
        time = typeof time !== 'undefined' ? time : 2;
        vm.$nextTick(() => {
            vm.$emit(event, function(){
                if(time && time > 0){
                    setTimeout(() => {
                        vm.$Modal.remove();
                    }, time * 1000);
                }
            });
        });
    };

    /**
     * success
     * @param content
     * @param width
     * @param time
     */
    Vue.prototype.$success = function(content, width, time){
        let vm = this, title = vm.$unique(),
            success = 'fl-modal-success';
        width = width ? width : 300;
        vm.$onPopup(success, title);
        vm.$Modal.success({
            content: content,
            width: width,
            title: title,
            closable: true
        });
        vm.$emitPopup(success, time);
    };

    /**
     * error
     * @param content
     * @param width
     * @param time
     */
    Vue.prototype.$error = function(content, width, time){
        let vm = this, title = vm.$unique(),
            error = 'fl-modal-error';
        width = width ? width : 300;
        vm.$onPopup(error, title);
        vm.$Modal.error({
            content: content,
            width: width,
            title: title,
            closable: true
        });
        vm.$emitPopup(error, time);
    };

    /**
     * warning
     * @param content
     * @param width
     * @param time
     */
    Vue.prototype.$warning = function(content, width, time){
        let vm = this, title = vm.$unique(),
            warning = 'fl-modal-warning';
        width = width ? width : 300;
        vm.$onPopup(warning, title);
        vm.$Modal.warning({
            content: content,
            width: width,
            title: title,
            closable: true
        });
        vm.$emitPopup(warning, time);
    };
};
