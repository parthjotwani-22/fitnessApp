const validcard = data => {
  let err = {
    numb: null,
    name: null,
    expire: null,
    cvv: null,
  };

  return new Promise((resolve, reject) => {
    let isValid = true;
    const name_val = /^([a-zA-Z]{3,15})/;
    if (!data.name) {
      err.name = 'Ener Name';
      isValid = false;
    } else if (!name_val.test(data.name)) {
      err.name = 'Ener Correct Name';
      isValid = false;
    } else {
      err.name = null;
    }
    const numb_val = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    if (data.numb == '' || data.numb == null) {
      err.numb = 'Ener Number';
      isValid = false;
    } else if (!numb_val.test(data.numb)) {
      err.numb = 'Enter Correct Number';
      isValid = false;
    } else {
      err.numb = null;
    }

    const expire_val = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (data.expire == '' || data.expire == null) {
      err.expire = 'Ener Date';
      isValid = false;
    } else if (!expire_val.test(data.expire)) {
      err.expire = 'Enter Correct Date';
      isValid = false;
    } else {
      err.expire = null;
    }

    const cvv_val = /^\d{3}$/; // /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (data.cvv == '' || data.cvv == null) {
      err.cvv = 'Ener CVV';
      isValid = false;
    } else if (!cvv_val.test(data.cvv)) {
      err.cvv = 'Enter Correct CVV';
      isValid = false;
    } else {
      err.cvv = null;
    }

    if (!isValid) {
      resolve({status: 0, error: err});
    } else {
      resolve({status: 1, error: err});
    }
    if (!data) {
      reject('Enter Correct Data');
    }
  });
};
// const number_val = /^(\+\d{1,3}[- ]?)?\d{10}$/;
// if (!number_val.test(data.phone)) {
//   return false;
// } else {
//   return true;
// }

//export default {validate_string, validate_mail, validate_number};
export default validcard;
