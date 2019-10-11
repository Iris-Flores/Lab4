var valid = {
  checkparams: function(refobj, evalueobj){
    if(Object.keys(refobj).sort().toString() == Object.keys(evalueobj).sort().toString()){
      return true;
    }
    return false;
  },
  checkemail: function(email){
    var exp = /^\w{1,}@\w{1,}[.]\w{2,3}$/g
    if(email.match(exp) == null){
      return false;
    }
    return true;
  },
  checkpassword: function(password){
    var pass = /^\w{0,}[A-Z]+\w{4,}[A-Z0-9a-z]$/g
    if(password.match(pass) == null){
      return false;
    }
    return true;
  }
};
module.exports = valid;
