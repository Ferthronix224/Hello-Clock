(function(){

	var actualizarHora = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

			var pHoras = document.getElementById('horas'),
				pAMPM = document.getElementById('ampm'),
				pMinutos = document.getElementById('minutos'),
				pSegundos = document.getElementById('segundos'),
				pDiaSemana = document.getElementById('diaSemana'),
				pDia = document.getElementById('dia'),
				pMes = document.getElementById('mes'),
				pYear = document.getElementById('year');
				pFrase = document.getElementById('frase');

			var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];	
			pDiaSemana.textContent = semana[diaSemana];

			pDia.textContent = dia;

			var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
			pMes.textContent = meses[mes];

			pYear.textContent = year;


			if(horas >= 12){
				horas = horas - 12;
				ampm = 'PM';
			}else{
				ampm = 'AM'
			}

			if(horas == 0){
				horas = 12;
			}

			pHoras.textContent = horas;
			pAMPM.textContent = ampm;

			if(minutos < 10){
				minutos = '0' + minutos;
			}

			if(segundos < 10){
				segundos = '0' + segundos;
			}

			pMinutos.textContent = minutos;
			pSegundos.textContent = segundos;

			bgMañana = 'img/mañanas.jpg';
			bgTardes = 'img/tardes.jpg';
			bgNoches = 'img/noches.jpg';


			if(ampm == 'AM'){
				pFrase.textContent = 'Buenos dias';
			}else if(horas == 12 || horas == 1 || horas == 2 || horas == 3 || horas == 4 || horas == 5 || horas == 6 || horas == 7 && ampm == 'PM'){
				pFrase.textContent = 'Buenas tardes';
			}else if(horas == 8 || horas == 9 || horas == 10 || horas == 11 && ampm == 'PM'){
				pFrase.textContent = 'Buenas noches';
			}


			if(ampm == 'AM' && (horas == 12 || horas == 1 || horas == 2 || horas == 3 || horas == 4 || horas == 5 || horas == 6)){
				document.body.style.backgroundImage = "url(" + bgNoches + ")";
			}else if(ampm == 'AM' && (horas == 7 || horas == 8 || horas == 9 || horas == 10 || horas == 11)){
				document.body.style.backgroundImage = "url(" + bgMañana + ")";
			}else if(ampm == 'PM' && (horas == 12 || horas == 1 || horas == 2 || horas == 3 || horas == 4 || horas == 5 || horas == 6 || horas == 7)){
				document.body.style.backgroundImage = "url(" + bgTardes + ")";
			}else if(ampm == 'PM' && (horas == 8 || horas == 9 || horas == 10 || horas == 11)){
				document.body.style.backgroundImage = "url(" + bgNoches + ")";
			}
			
	};

	actualizarHora();

	var intervalo = setInterval(actualizarHora, 1000);
}())
