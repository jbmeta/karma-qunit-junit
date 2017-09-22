QUnit.test('Testing addNumbers() function', function(assert) {
    assert.equal(addNumbers(1, 1), 2, '1 + 1 = 2');
    assert.equal(addNumbers(1, 5), 6, '1 + 5 = 2');
    assert.equal(addNumbers(2, 1), 3, '2 + 1 = 3');
    assert.equal(addNumbers(2, 2), 4, '2 + 2 = 4');
});