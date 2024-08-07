const gerarLink = () => {
    const numero = document.getElementById("numero").value;
    const message = document.getElementById("message-erro");

    message.innerHTML = '';

    if (numero.trim() === "") {
        message.innerHTML = 'Por favor, insira um número!';
        return;
    }

    else if (numero.replace(/\D/g, '').length == 11){
        message.innerHTML = 'Insira o 55 na frente do 21';
    }

   else if (numero.replace(/\D/g, '').length < 13) {
        message.innerHTML = 'Coloque DDD (Ex: 5521)';
        return;
    }

    else{
        const link = `https://api.whatsapp.com/send/?phone=${numero}&text&type=phone_number&app_absent=0`;
        window.open(link, '_blank');
        numero = document.getElementById("numero").value = '';
    }
}
