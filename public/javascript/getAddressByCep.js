const getAddress = async (cep) => {
    const { data } = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
  
    console.log(data)
  
}
if (document.querySelectorAll('CEP').length) {
    const cep = document.getElementById('CEP')
    cep.addEventListener('change', () => {
        getAddress(cep.value)

    })
}

