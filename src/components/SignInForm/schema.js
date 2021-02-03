import * as yup from 'yup';

const phoneNumberExp = /(^$|^(\+7|7|8){1}[-]?[(]?\d{3}[)]?[-]?\d{3}([-]?\d{2}){2}$)/;
const nameExp = /(^$|^[a-zA-Zа-яА-Я -]+$)/;

export default yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(nameExp, 'Введено некорректное значение')
    .required('Обязательное поле'),
  email: yup
    .string()
    .trim()
    .email('Введено некорректное значение')
    .required('Обязательное поле'),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneNumberExp, 'Введено некорректное значение')
    .required('Обязательное поле'),
  language: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .nullable()
    .required('Обязательное поле'),
});
