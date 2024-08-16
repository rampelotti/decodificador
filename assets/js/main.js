document.addEventListener("DOMContentLoaded", () => {
    const botaoEnc = document.querySelector("#botao1");
    const botaoDesc = document.querySelector("#botao2");
    const botaoCopiar = document.querySelector("#botaoCopiar");
    const botaoReset = document.querySelector("#botaoReset");
    const textoOriginal = document.querySelector("#textoEncriptar");
    const textoNovo = document.querySelector("#textoDescriptar");
    const imgDescriptografar = document.querySelector("#img2");
    const aviso1 = document.querySelector("#aviso1");
    const aviso2 = document.querySelector("#aviso2");

    const escondeBotao = () => botaoCopiar.style.visibility = 'hidden';
    const mostraBotao = () => botaoCopiar.style.visibility = 'visible';

    const encriptarTexto = () => {
        let texto = textoOriginal.value.toLowerCase(); // Converte todo o texto para minúsculas
        texto = texto.replace(/a/g, 'ai')
                     .replace(/e/g, 'enter')
                     .replace(/i/g, 'imes')
                     .replace(/o/g, 'ober')
                     .replace(/u/g, 'ufat');
        return texto;
    };

    const descriptarTexto = () => {
        let texto = textoOriginal.value.toLowerCase(); // Converte todo o texto para minúsculas
        texto = texto.replace(/ai/g, 'a')
                     .replace(/enter/g, 'e')
                     .replace(/imes/g, 'i')
                     .replace(/ober/g, 'o')
                     .replace(/ufat/g, 'u');
        return texto;
    };

    botaoEnc.addEventListener("click", () => {
        botaoEnc.classList.add('animacao');
        setTimeout(() => {
            botaoEnc.classList.remove('animacao');
        }, 300);

        textoNovo.value = encriptarTexto();
        mostraBotao();
        imgDescriptografar.style.visibility = 'hidden';
        aviso1.style.visibility = 'hidden';
        aviso2.style.visibility = 'hidden';
        botaoReset.style.display = 'block';
    });

    botaoDesc.addEventListener("click", () => {
        textoNovo.value = descriptarTexto();
        mostraBotao();
    });

    botaoCopiar.addEventListener("click", async () => {
        await navigator.clipboard.writeText(textoNovo.value);
    });

    botaoReset.addEventListener("click", () => {
        textoOriginal.value = '';
        textoNovo.value = '';
        escondeBotao();
        imgDescriptografar.style.visibility = 'visible';
        aviso1.style.visibility = 'visible';
        aviso2.style.visibility = 'visible';
        botaoReset.style.display = 'none';
    });

    escondeBotao(); // Inicialmente esconde o botão de copiar
});
