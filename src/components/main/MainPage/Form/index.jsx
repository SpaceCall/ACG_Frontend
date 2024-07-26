import React, { useContext, useState } from 'react';
import axios from 'axios';
import styles from './form.module.scss';
import config from './config.jsx'
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../../../context/Context'

export default function Form() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const langContext = useContext(LangContext)

	const handleInputChange = (e) => setEmail(e.target.value)

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const ipResponse = await axios.get(`https://api.ipify.org?format=json`);
			const ip = ipResponse.data.ip;
			const csrfResponse = await axios.get(`http://${config.server.address}/csrf-token`, {
				withCredentials: true,
			});
			const csrfToken = csrfResponse.data.csrfToken;
			// Отправка запроса на сервер
			const response = await axios.post(
				`https://${config.server.address}/landing/add-email`,
				{ email },
				{
					headers: {
						'X-CSRF-TOKEN': csrfToken,
						'ip': ip
					},
					withCredentials: true,
				}
			);
			// Обработка успешного ответа
			setMessage(response.data.message);
		} catch (error) {
			// Обработка ошибок
			if (error.response) {
				// Ошибка с ответом от сервера
				if (error.response.status === 400) {
					// В случае статуса 400 (Bad Request), игнорируем ошибку
					setMessage(error.response.data.error || 'Произошла ошибка при отправке запроса.');
				} else {
					// Другие ошибки с ответом от сервера
					setMessage('Произошла ошибка при отправке запроса.');
				}
			} else if (error.request) {
				// Запрос был сделан, но не получен ответ
				setMessage('Произошла ошибка при ожидании ответа от сервера.');
			} else {
				// Ошибка настройки запроса
				setMessage('Произошла ошибка при настройке запроса.');
			}
		}

		// Очистка поля ввода после отправки
		setEmail('');
	};

	return (
		<div id='form' className={styles.form}>
			<h2>
				<FormattedMessage id="landing.main.form.title.firstPart" /> <span>
					<FormattedMessage id="landing.main.form.title.secondPart" />
				</span>
			</h2>
			<p>
				<FormattedMessage id="landing.main.form.paragraph" />
			</p>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
                    placeholder={langContext.activeLang === 'en' ? "Enter your email" : "Введіть ваше ім'я"}
                    value={email}
                    onChange={handleInputChange}
				/>
				<input type="hidden" name="_csrf" />
				<button type="submit">
					<FormattedMessage id="landing.main.form.send" />
				</button>
			</form>
		</div>
	);
}
//{message && <p>{message}</p>}
