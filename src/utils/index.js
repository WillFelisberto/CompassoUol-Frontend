export const formatDate = (date2) => {
	function adicionaZero(numero) {
		if (numero <= 9) return '0' + numero;
		else return numero;
	}
	const date1 = new Date(date2);

	let data = new Date();
	let dataAtual =
		data.getMonth() + 1 + '/' + data.getDate() + '/' + +data.getFullYear();

	const teste =
		adicionaZero(dataAtual.getMonth() + 1).toString() +
		'/' +
		adicionaZero(dataAtual.getDate().toString()) +
		'/' +
		dataAtual.getFullYear();

	// To calculate the time difference of two dates
	const Difference_In_Time = date2.getTime() - teste.getTime();

	// To calculate the no. of days between two dates
	return Difference_In_Time / (1000 * 3600 * 24);
};
