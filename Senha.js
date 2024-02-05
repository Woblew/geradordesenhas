function containsSingleCharacter(string, substring) {
    for (let i = 0; i < substring.length; i++) {
      if (string.includes(substring[i])) {
        return true;
      }
    }
    return false;
}

function genPassword() {
    let pass = '';
    let strarray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '@#$!']
    const checkboxes = document.querySelectorAll('.deleteCheckbox');
    let checked = []
    checkboxes.forEach(function(checkbox, index) {
        if (!checkbox.checked) {
        checked[index] = true
        }else[
            checked[index] = false
        ]
      });
    strarray = Array.from(strarray).filter((element, index) => checked[index]);
    if (strarray.length === 0 || sizeInput === 0){
        return;
    }
    let consmet = false
    let str = strarray.join('')
    let size
    const sizeInput = document.getElementById("sizeInput").value;

    if (!isNaN(sizeInput) && sizeInput !== "" && sizeInput <= 30) {
        size = sizeInput
    }
    else{
        size = Math.floor(Math.random() * 7 + 18)
    }
    
    while (consmet === false){
        pass = ''
        for (let i = 1; i <= size; i++) {
            let char = Math.floor(Math.random()
                * str.length + 1) - 1;
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
  