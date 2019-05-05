var Vue = require('vue')

var auth = {
    login: function(id, pass) {
        return({
            userID: id,
            password: pass
        })
    }
}

module.exports = Vue.extend({
    template: '#login-template',
    data: function() {
        return {
            userID: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            auth.login(this.userID, this.password)
        }
    }
})
