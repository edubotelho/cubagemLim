let total =0

function cubagem(){
    const compCubagem = document.querySelector('#compCubagem').value
    const largCubagem = document.querySelector('#largCubagem').value
    const altCubagem = document.querySelector('#altCubagem').value
    const listCubagem = document.querySelector('#listCubagem')
    const codigoItem = document.querySelector('#ref_cubage').value

    const qntd_por_cax = document.querySelector('#qntd_pCax').value
    const qntd_total = document.querySelector('#qntd_pTotal').value

    const mmCubag = document.querySelector('#cubagemCheckMm').checked
    const cmCubag = document.querySelector('#cubagemCheckCm').checked

    var resultCubagem = compCubagem*largCubagem*altCubagem
    var total_cax = qntd_total/qntd_por_cax
    var mCub_total = total_cax*resultCubagem

    const totaCubM = document.querySelector('#totalM3div')

    if(mmCubag){
        resultCubagem = resultCubagem/1000000000
        mCub_total = mCub_total/1000000000
    }
    if(cmCubag){
        resultCubagem = resultCubagem/1000000
        mCub_total = mCub_total/1000000
    }

    addListCubagem()

    function addListCubagem(){
        const criali = document.createElement('li')
        const liCriada =listCubagem.appendChild(criali)

        const coditemP = document.createElement('div')
        const cubagemP = document.createElement('div')
        const mTotalP = document.createElement('div')
        const totalP = document.createElement('div')

        liCriada.appendChild(coditemP)
        coditemP.classList.add("ptitleR ")

        liCriada.appendChild(cubagemP)
        cubagemP.classList.add("ptitleR")

        liCriada.appendChild(mTotalP)
        mTotalP.classList.add("ptitleR")

        liCriada.appendChild(totalP)
        totalP.classList.add("ptitleR")

        liCriada.classList.add("liCubagemAdd")

        coditemP.innerText = codigoItem;
        cubagemP.innerText = resultCubagem;
        mTotalP.innerText = total_cax
        totalP.innerText = mCub_total

        //liCriada.innerText = `| Cód: ${codigoItem}  |  Cubagem: ${resultCubagem}M  |  M³ Total de Caixas: ${total_cax}  |  M³ Total: ${mCub_total} |`
    }

    total+=mCub_total
    totaCubM.innerText = total.toFixed(4)

}