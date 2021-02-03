import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as UserApi from '../../api';
import CompleteIcon from '../icons/CompleteIcon';
import schema from './schema';
import Select from './Select';

export default () => {
  const [licenseAgreement, setLicenseAgreement] = React.useState(false);
  const { register, handleSubmit, errors, formState, control } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    UserApi.signIn(data).then((res) => {
      // eslint-disable-next-line no-console
      console.log('Submitted with: ', res);
    });
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form__header">
        <h2 className="form__title">Регистрация</h2>
        <p className="form__description">
          Уже есть аккаунт?{' '}
          <a className="form__link" href="/" style={{ marginLeft: 2 }}>
            Войти
          </a>
        </p>
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Имя
        </label>
        <input
          className="form__control"
          id="name"
          name="name"
          placeholder="Введите Ваше имя"
          ref={register}
        />
        {formState.touched.name && errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__control"
          id="email"
          name="email"
          placeholder="Введите ваш email"
          ref={register}
        />
        {formState.touched.email && errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="phone-number">
          Номер телефона
        </label>
        <input
          className="form__control"
          id="phone-number"
          name="phoneNumber"
          placeholder="Введите номер телефона"
          ref={register}
        />
        {formState.touched.phoneNumber && errors.phoneNumber && (
          <div className="invalid-feedback">{errors.phoneNumber.message}</div>
        )}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="language">
          Язык
        </label>
        <Controller
          as={<Select />}
          control={control}
          defaultValue=""
          name="language"
        />
        {formState.touched.language && errors.language && (
          <div className="invalid-feedback">{errors.language.message}</div>
        )}
      </div>

      <div className="form__group form__check">
        <input
          className="form__check-input"
          hidden
          id="licenseAgreement"
          name="licenseAgreement"
          onChange={() => setLicenseAgreement((prevState) => !prevState)}
          type="checkbox"
          value={licenseAgreement}
        />
        <label className="form__check-mark" htmlFor="licenseAgreement">
          <CompleteIcon />
        </label>
        <span className="form__check-label">
          Принимаю{' '}
          <a className="form__link" href="/">
            условия
          </a>{' '}
          использования
        </span>
      </div>

      <button
        className="button form__button"
        disabled={!formState.isValid || !licenseAgreement}
        type="submit"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};
