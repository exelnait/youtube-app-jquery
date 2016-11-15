// var chai = require('chai');
// var assert = chai.assert;

suite('Calculator', function() {
    suite('multiply', function() {
        function multiply(a,b) {
            if (a == null || b == null)
                return null;
            return a*b
        }
        test('должно умножить 2*2 и получить 4', function() {
            assert.equal(4, multiply(2, 2));
        });
        test('если оно из чисел равно null, вернуть null', function() {
            assert.equal(null, multiply(2, null));
        });
    });
});