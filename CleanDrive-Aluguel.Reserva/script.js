function calculateDaysAndCost() {
   
    const custoDiario = 50;

    const dataHoraRetirada = document.getElementById('dataHoraRetirada').value;
    const dataHoraDevolucao = document.getElementById('dataHoraDevolucao').value;
    
    if (!dataHoraRetirada || !dataHoraDevolucao) {
      document.getElementById('result').textContent = 'Insira datas validas!';
      return;
    }

    const comeco = new Date(dataHoraRetirada);
    const termino = new Date(dataHoraDevolucao);

    const diffTime = Math.abs(termino - comeco);

    
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const totalCost = diffDays * custoDiario;

    document.getElementById('result').textContent = `Número de dias: ${diffDays}, Total do Custo: R$${totalCost.toFixed(2)}`;
  }



