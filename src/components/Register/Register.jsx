import React from "react";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Журнал строительного контроля</h1>
        <p className={styles.subtitle}>
          Электронная система контроля строительных работ
        </p>

        <form className={styles.form}>
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="ФИО"
            className={styles.input}
          />
          <select className={styles.input}>
            <option>Роль 1</option>
            <option>Роль 2</option>
            <option>Роль 3</option>
          </select>
          <input
            type="text"
            placeholder="Организация"
            className={styles.input}
          />

          <button type="submit" className={styles.primaryButton}>
            Зарегистрироваться
          </button>
          <button type="button" className={styles.secondaryButton}>
            Назад к входу
          </button>
        </form>
      </div>
    </div>
  );
}