class Validation {
  checkEmptyValue = (value: string): boolean => value !== '';

  checkPassword = (value: string): boolean => {
     /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/.test(value);
  };

  checkLength = (min: number, max: number, value: string): boolean => value.length >= min && value.length <= max;

  checkName = (value: string): boolean => /^[A-ZА-Я]+[A-Za-zа-яА-Я-]+$/.test(value);

  checkPhone = (value: string): boolean => this.checkLength(10, 15, value) && /^[+]?[0-9]+$/.test(value);

  checkLogin = (value: string): boolean => this.checkLength(3, 20, value);

  checkEmail = (value: string): boolean => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value);
}
export default Validation;
