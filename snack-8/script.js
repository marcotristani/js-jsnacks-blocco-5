const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


const studentClass3C = students.find(student => student.class === '3C');
const nameStudentClass3C = studentClass3C.name;
console.log(nameStudentClass3C);
//Metodo più compatto
const NameStudentClass3C = students.find(student => student.class === '3C').name;
console.log(NameStudentClass3C);


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'