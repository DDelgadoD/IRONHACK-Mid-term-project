
const validaMail = (valor) => {
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) { return false;}
}

const validaText = (valor) => {
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) return false;
}

const validaTel = (valor) => {
    if( !(/^\d{9}$/.test(valor)) ) { return false;}
}

