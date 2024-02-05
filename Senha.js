function containsSingleCharacter(string, substring) {
    for (let i = 0; i < substring.length; i++) {
      if (string.includes(substring[i])) {
        return true;
      }
    }
    return false;
}

function genPassword(size = Math.floor(Math.random() * 7 + 18)) {
    let pass = '';
    let strarray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '@#$!']
    let consmet = false
    let str = strarray.join('')
    
    while (consmet === false){
        pass = ''
        for (let i = 1; i <= size; i++) {
            let char = Math.floor(Math.random()
                * str.length + 1);
            pass += str.charAt(char)
        }
        strarray.forEach( function(e){
            if (containsSingleCharacter(pass, e)){
                consmet = true}
                else{
                    consmet = false
                }
        })
    }
    document.getElementById("password").value = pass;
    console.log(pass)
    return pass;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }
  