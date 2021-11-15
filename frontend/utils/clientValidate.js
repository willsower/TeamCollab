const validateSignUp = (email, password) => {
  let errors = {};
  let formIsValid = true;

  if (!email) {
    formIsValid = false;
    errors["email"] = "Please enter your email";
  }

  if (email) {
    //regular expression for email validation
    let pattern = new RegExp(
      /^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      formIsValid = false;
      errors["email"] = "Hmm, that email address doesn't look right.";
    }
  }

  if (!password) {
    formIsValid = false;
    errors["password"] = "Please enter your password";
  }

  if (password) {
    if (!password.match(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/)) {
      formIsValid = false;
    //   errors["password"] = "Please enter secure and strong password<br/>1 Capital Letter<br/>1 Lowercase Letter<br/>1 Number<br/>At least 8 charachters";
    errors["password"] = "Please enter secure and strong password";
    }
  }

  return {formIsValid, errors};
};

export default validateSignUp;
