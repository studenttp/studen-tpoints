const students = [
    {
        name: "أحمد",
        code: "1234",
        points: 25,
        message: "أحسنت يا أحمد ⭐ استمر في التميز"
    },
    {
        name: "سارة",
        code: "5678",
        points: 30,
        message: "رائعة يا سارة ⭐ أنتِ نجمة الصف"
    }
];


function searchStudent(){

    let code = document.getElementById("code").value;

    let result = document.getElementById("result");

    let student = students.find(
        s => s.code === code
    );


    if(student){

        result.innerHTML = `
        <div class="card">
        <h3>⭐ ${student.name}</h3>
        <p>عدد النقاط: ${student.points}</p>
        <p>${student.message}</p>
        </div>
        `;

    }else{

        result.innerHTML = `
        <p style="color:red">
        الرمز غير صحيح
        </p>
        `;

    }

}
