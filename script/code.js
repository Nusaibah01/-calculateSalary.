function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var greetingType = document.getElementById("greetingType").value;
    var subjects = document.querySelectorAll('input[name="subjects"]:checked');
    var subjectList = [];
    subjects.forEach(function(subject) {
        subjectList.push(subject.value);
    });
    var isWorking = document.getElementById("working").checked;
    var hours = document
