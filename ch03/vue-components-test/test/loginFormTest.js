var assert = require('assert')
var loginForm = require('../components/loginForm')

describe('login()', function() {
    var vm
    beforeEach(function() {
        vm = new loginForm().$mount()
    })

    it('check initial values', function() {
        assert.equal(vm.userID, '')
        assert.equal(vm.password, '')
    })

    it('check returned values', function() {
        const expectedUserID = 'testUser'
        const expectedPassword = 'testPassword'
        vm.userID = expectedUserID
        vm.password= expectedPassword
        var result = vm.login()
        assert.deepEqual(result, {
            userID: expectedUserID,
            password: expectedPassword,
        })
    })
})
