const Sobremi = `
<div class="sobremiButton">
<div id="textosobremi">
    <h1 id="sobremi">Sobre mi</h1>
    <img src="img/foto_monica.jpg" id="fotocurriculum">
    <p id="nombrefoto"><strong>Mónica Casas García</strong></p>
    <p>Gestora y editora de contenidos de páginas web. Diez años de experiencia profesional en la Administración Pública dedicada a este cometido.</p>
    <p>Mi actitud para el trabajo se caracteriza por ser una persona con gran capacidad de trabajo, responsable y con ganas de aprender.</p>
</div>
</div>
`

const FormacionAcademica = `
<div class="FormacionAcademica">
<div class="cursos">
<h1 id="formacion">Formación académica</h1>
    <ul>
    <li>Bootcamp Geeks Hubs: Febrero 2020. Cursando</li><br/>
    <li>Curso de Publicacion de paginas web: abril 2019-septiembre 2019</li><br/>
    <li>Licenciatura en periodismo: septiembre 2000-junio 2006</li><br/>
    <li>Documentación de Medios. Centro Ondas Escolares y Universitarias.</li><br/>
    <li>II Curso de Comunicación y Salud. Fundación General de la UCM.</li>
    </ul>
</div>
</div>
`


const ExperienciaProfesional = `
<div class="ExperienciaProfesional">
    <div class="trabajos">
    <h1 id="experiencia">Experiencia profesional</h1>
    <ul>
        <li>Editora y gestora de contenidos web. Ministerio de Ciencia e Innovación.</li><br/>
        <li>Redactora y gestora de contenidos web. Ayuntamiento de Madrid.</li><br>
        <li>Auxiliar administrativo. Desurges XXI.</li><br/>
        <li>Auxiliar administrativo. Servinform S.L.</li>
    </ul>
    </div>
    </div>
`


const Contacto = `
<div id="Contacto">
<form>
<label for="nombre">Nombre:</label><br/>
<input type="text" name="nombre"  id="name" placeholder="  nombre"><br/><br/>
<label for="apellidos">Apellidos:</label><br/>
<input type="text" name="apellidos" id="apellidos" placeholder="  apellidos"><br/><br/>

<label for="telefono">Teléfono:</label><br/>
<input type="text" name="telefono"  id="telefono" placeholder="  teléfono" maxlength="100px"><br><br/>

<label for="email">Email:</label><br/>
<input type="text" name="email"  id="email" placeholder="  email" maxlength="100px"><br/><br/>
</form>
<div class="enviar"> 
<button> <a href="#">Enviar</a></button>
</div>
`;



const main = document.querySelector('main')
window.addEventListener('load', () => {
    if (window.location.hash === '#FormacionAcademica') {
        main.innerHTML = FormacionAcademica
    } else if (window.location.hash === '#ExperienciaProfesional') {
        main.innerHTML = ExperienciaProfesional
    } else if (window.location.hash === '#Contacto') {
        main.innerHTML = Contacto
    } else {

        main.innerHTML = Sobremi
    }

})
document.querySelector('#SobremiButton').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = Sobremi;
    history.pushState({}, '', '#Sobremi');
})
document.querySelector('#FormacionAcademica').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = FormacionAcademica;
    history.pushState({}, '', '#FormacionAcademica');
})
document.querySelector('#ExperienciaProfesional').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = ExperienciaProfesional;
    history.pushState({}, '', '#ExperienciaProfesional');
})
document.querySelector('#Contacto').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = Contacto;
    history.pushState({}, '', '#Contacto');
})