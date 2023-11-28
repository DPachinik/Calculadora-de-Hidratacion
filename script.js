//Metodo holliday Segar//
function Holliday(Peso){
if(Peso<=10){
    const A=100;
    let volumen=Peso*A;
    return(volumen);
}else if(Peso>10 && Peso<=20){
    const B=50;
    const A=100;
    let volumen1=(10*A);
    let volumen2=((Peso-10)*B);
    let VolumenT= volumen1+volumen2;
    return(VolumenT);
}else(Peso>20)
    const A=100;
    const B=50;
    const C=20;
    let Volumen3=(10*A);
    let volumen4=(10*B);
    let volumen5=(Peso-20)*C;
    let VolumenTotal= Volumen3+volumen4+volumen5;
    return(VolumenTotal);
    }

// Metodo de Superficie Corporal//
function SuperficieCorporal(Peso){
    let SupCor=(((Peso*4)+7)/(Peso+90));
    return(SupCor);

} // DOM //
const CALCULAR = document.getElementById('Calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FACTOR1 = document.getElementById("fac1");
const FACTOR2 = document.getElementById("fac2");
CALCULAR.addEventListener('click', () =>{
    const Peso = document.getElementById('peso').valueAsNumber;
    //validamos que se cargue un dato:
    if (Peso > 0 && Peso<=30){
            ERROR.style.display = 'none';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            FACTOR1.style.display = 'none';
            FACTOR2.style.display = 'none';
            let FlujoHorario=Holliday(Peso)/24;
            let ValorDeMantenimiento=FlujoHorario*1.5;
            let FluRedon= Math.round(FlujoHorario);
            let ManRedon= Math.round(ValorDeMantenimiento);
            FLU.innerHTML = "Flujo Horario="     + FluRedon +    ' cc/hr';
            MAN.innerHTML = "m+m/2="  +  ManRedon+ '    cc/hr';
        } else if (Peso>0 && Peso>30){
            ERROR.style.display = 'none';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            FACTOR1.style.display = 'block';
            FACTOR2.style.display = 'block';
            let Factor1= SuperficieCorporal(Peso)*1500;
            let Factor2= SuperficieCorporal(Peso)*2000;
            let Fac1Redon= Math.round(Factor1);
            let Fac2Redon= Math.round(Factor2);
            FACTOR1.innerHTML="Vol Diario x 1500=" +Fac1Redon + "cc";
            FACTOR2.innerHTML="Vol Diario x 2000=" + Fac2Redon+ "cc";          
        } else{
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            FACTOR1.style.display = 'none';
            FACTOR2.style.display = 'none';
    }    

})