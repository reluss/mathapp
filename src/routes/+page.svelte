<script>
	let zahl1 = Math.floor(Math.random() * 11);
	let zahl2 = Math.floor(Math.random() * 11);
	$: ergebnis = zahl1 * zahl2;
	let ergebnisI = '';
	let falsch = 0;
	let richtig = 0;
	let antwort = '';
	let color = '';

	function pressed(e) {
		if (e.key === 'Enter') {
    handleClick();
	  }
	}

	function handleClick() {
		if (ergebnisI !== '') {
			ergebnisI == ergebnis ? newCalc() : wrong();	
		}
	}

	function newCalc() {
		zahl1 = Math.floor(Math.random() * 11)
		zahl2 = Math.floor(Math.random() * 11)
		ergebnisI = '';
		richtig += 1;
		antwort = "Richtig";
		color = '#21C460';
		setTimeout(async () => {
				antwortAni()
			}, 700)
	}
	
	function wrong() {
		ergebnisI = '';
		falsch += 1;
		antwort = "Falsch";
		color = '#ff3e00';
		setTimeout(async () => {
				antwortAni()
			}, 700)
	}

	function antwortAni() {
		antwort = '';
	}

	
</script>

<div class="container">

    {zahl1} * {zahl2} = <input type="number" bind:value={ergebnisI} placeholder="" on:keydown={pressed}>
        
    <br>
    <br>


    <button on:click={handleClick}>
        Nächste Aufgabe
    </button>
    <br>
    <br>
    Richtige Antworten: {richtig}
    <br>
    Falsche Antworten: {falsch}
    <br>


    <h1 style="--theme-color: {color}">{antwort}</h1>

</div>

<style>
    :global(body) {
        background: rgb(24, 54, 73);
        font-family: sans-serif;
        color: rgb(255, 255, 255);
    }
    .container {
        text-align: center;
        font-size: 2em;
    }
    
	h1 {
		color: var(--theme-color);
	}
	input {
    border: transparent;
    font-size: 0.8em;
    width: 7%;
}
	input:focus{
    outline: none;
}
</style>