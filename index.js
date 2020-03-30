const cpfValidator = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g,'')
    
    if (cpf === '' ||
      cpf.length !== 11 || 
          cpf === "00000000000" || 
          cpf === "11111111111" || 
          cpf === "22222222222" || 
          cpf === "33333333333" || 
          cpf === "44444444444" || 
          cpf === "55555555555" || 
          cpf === "66666666666" || 
          cpf === "77777777777" || 
          cpf === "88888888888" || 
          cpf === "99999999999")
              return false;
  
    cpf = cpf.split('').map(digit => parseInt(digit))
    
  
    const lastTwoDigits = cpf.splice(9, 2)
   
  
    const nineDigits = cpf.map((digit, index) => digit * (10 - index)).reduce((sum, value) => sum + value)
  
    let firstVerifyingDigit = 11 - (nineDigits % 11)
    
    if(firstVerifyingDigit === 10 || firstVerifyingDigit === 11){
      firstVerifyingDigit = 0
    }
  
    if(firstVerifyingDigit !== lastTwoDigits[0]) return false
  
    cpf.push(firstVerifyingDigit)
  
    const tenDigits = cpf.map((digit, index) => digit * (11 - index)).reduce((sum, value) => sum + value)
  
    let secondVerifyingDigit = 11 - (tenDigits % 11)
  
    if(secondVerifyingDigit === 10 || secondVerifyingDigit === 11){
      secondVerifyingDigit = 0
    }
  
    if(secondVerifyingDigit !== lastTwoDigits[1]) return false
    
    cpf.push(secondVerifyingDigit)
  
    cpf = cpf.join('')
  
    return true
  }
  
  
  console.log(cpfValidator("111.111.111-11"));

  module.exports = { cpfValidator }
  