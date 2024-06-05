function calculateMarks() {
    const studentName = document.getElementById('studentName').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    let grade;

    if (averageMarks >= 90) {
        grade = 'A';
    } else if (averageMarks >= 80) {
        grade = 'B';
    } else if (averageMarks >= 70) {
        grade = 'C';
    } else if (averageMarks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Result</h2>
                           <p>Student Name: ${studentName}</p>
                           <p>Total Marks: ${totalMarks}</p>
                           <p>Average Marks: ${averageMarks}</p>
                           <p>Grade: ${grade}</p>`;
}
