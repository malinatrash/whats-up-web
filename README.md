# WhatsApp Web Clone

Простой клон WhatsApp Web с использованием React и GREEN-API для отправки и получения сообщений.

## Технологии

- React + Vite
- Material-UI
- GREEN-API
- Axios

## Предварительные требования

1. Node.js (версия 14 или выше)
2. Аккаунт в GREEN-API (https://green-api.com/)
3. Активный аккаунт WhatsApp

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd whats-up
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение:
```bash
npm run dev
```

4. Откройте браузер и перейдите по адресу: `http://localhost:5173`

## Получение учетных данных GREEN-API

1. Зарегистрируйтесь на сайте [GREEN-API](https://green-api.com/)
2. Создайте новый инстанс
3. Получите `idInstance` и `apiTokenInstance`
4. Авторизуйте инстанс, отсканировав QR-код в WhatsApp

## Использование приложения

1. На странице входа введите ваши учетные данные GREEN-API:
   - idInstance
   - apiTokenInstance

2. После успешного входа введите номер телефона получателя:
   - Формат: 79001234567 (без '+' и других символов)
   - Номер должен быть зарегистрирован в WhatsApp

3. Начните общение:
   - Введите сообщение в поле ввода
   - Нажмите кнопку отправки или клавишу Enter
   - Входящие сообщения будут появляться автоматически

## Особенности

- Отправка и получение текстовых сообщений
- Автоматическое обновление чата
- Уведомления об ошибках
- Интерфейс в стиле WhatsApp Web
- Адаптивный дизайн

## Ограничения

- Поддерживаются только текстовые сообщения
- Нет поддержки групповых чатов
- Нет истории сообщений (только новые сообщения)
- Требуется активная сессия в GREEN-API
