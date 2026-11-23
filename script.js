document.getElementById('all').addEventListener('click', function() {
    loadStudents('all');
});

document.getElementById('selected').addEventListener('click', function() {

    const selectedClass = document.getElementById('cass').value;

    if (selectedClass === '') {
        alert('Válassz osztályt!');
        return;
    }

    loadStudents(selectedClass);
});

document.getElementById('cass').addEventListener('change', function() {
    if (this.value !== '') {
        loadStudents(this.value);
    }
});


function loadStudents(className) {

    fetch('ajax.php?class=' + encodeURIComponent(className))
        .then(response => response.json())
        .then(students => {

            let html = `
                <h2>${className === 'all' ? 'Teljes iskolanévsor' : className + ' osztály'}</h2>

                <table border="1" cellpadding="8">
                    <tr>
                        <th>Vezetéknév</th>
                        <th>Keresztnév</th>
                        <th>Osztály</th>
                        <th>Nem</th>
                    </tr>
            `;

            students.forEach(student => {
                html += `
                    <tr>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${student.class}</td>
                        <td>${student.isBoy ? 'Fiú' : 'Lány'}</td>
                    </tr>
                `;
            });

            html += '</table>';

            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.error(error));
     
}


