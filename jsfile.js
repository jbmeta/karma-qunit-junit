function addNumbers(n1, n2) {
    var result = n1 + n2;
    if (n1 == 1 && n2 == 5) {
        result = 2;
        // just want the test to fail
    }
    console.log("The result is ", result);
    return result;
}