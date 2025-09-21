import React, { useState } from "react";
import styles from "./Register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    password: "",
    name: "",
    role: "Роль 1",
    organization: ""
  });
  
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверяем, что все поля заполнены
    if (!formData.password || !formData.name || !formData.organization) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    // Создаем сообщение о успешной регистрации
    const welcomeMessage = `Добро пожаловать ${formData.name} на роль "${formData.role}". Ваш пароль: ${formData.password}`;
    
    // Показываем уведомление
    setNotification(welcomeMessage);
    
    // Очищаем уведомление через 5 секунд
    setTimeout(() => {
      setNotification(null);
    }, 5000);
    
    // Здесь обычно будет отправка данных на сервер
    console.log("Данные для регистрации:", formData);
  };

  const handleBack = () => {
    // Логика кнопки "Назад"
    console.log("Назад к входу");
  };

  return (
    <div className={styles.page}>
      {/* Уведомление о успешной регистрации */}
      {notification && (
        <div className={styles.notification}>
          {notification}
        </div>
      )}
      
      <div className={styles.content}>
        <h1 className={styles.title}>Журнал строительного контроля</h1>
        <p className={styles.subtitle}>
          Электронная система контроля строительных работ
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="ФИО"
            className={styles.input}
            value={formData.name}
            onChange={handleInputChange}
          />
          <select 
            name="role"
            className={styles.input}
            value={formData.role}
            onChange={handleInputChange}
          >
            <option>Роль 1</option>
            <option>Роль 2</option>
            <option>Роль 3</option>
          </select>
          <input
            type="text"
            name="organization"
            placeholder="Организация"
            className={styles.input}
            value={formData.organization}
            onChange={handleInputChange}
          />

          <button type="submit" className={styles.primaryButton}>
            Зарегистрироваться
          </button>
          <button 
            type="button" 
            className={styles.secondaryButton}
            onClick={handleBack}
          >
            Назад к входу
          </button>
        </form>
      </div>
    </div>
  );
}