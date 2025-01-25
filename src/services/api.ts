import axios, { AxiosError, AxiosInstance } from 'axios'
import {
	APIError,
	Credentials,
	SendMessageRequest,
	SendMessageResponse,
	WhatsAppNotification,
} from '../types/api.types'

class APIClient {
	private readonly baseURL: string = 'https://api.green-api.com'
	private readonly instance: AxiosInstance
	private credentials: Credentials

	constructor(credentials: Credentials) {
		this.credentials = credentials
		this.instance = axios.create({
			baseURL: this.baseURL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		this.instance.interceptors.response.use(
			response => response,
			(error: AxiosError<APIError>) => {
				if (error.response) {
					throw {
						code: error.response.status,
						message: error.response.data?.message || 'An error occurred',
					}
				}
				throw {
					code: 500,
					message: error.message || 'Network error occurred',
				}
			}
		)
	}

	private getEndpoint(path: string): string {
		return `/waInstance${this.credentials.idInstance}/${path}/${this.credentials.apiTokenInstance}`
	}

	public async sendMessage(
		phoneNumber: string,
		message: string
	): Promise<SendMessageResponse> {
		try {
			const payload: SendMessageRequest = {
				chatId: `${phoneNumber}@c.us`,
				message,
			}

			const response = await this.instance.post<SendMessageResponse>(
				this.getEndpoint('SendMessage'),
				payload
			)

			return response.data
		} catch (error) {
			console.error('Error sending message:', error)
			throw error
		}
	}

	public async receiveNotification(): Promise<WhatsAppNotification | null> {
		try {
			const response = await this.instance.get<WhatsAppNotification | null>(
				this.getEndpoint('ReceiveNotification')
			)

			if (response.data) {
				await this.deleteNotification(response.data.receiptId)
			}

			return response.data
		} catch (error) {
			console.error('Error receiving notification:', error)
			throw error
		}
	}

	private async deleteNotification(receiptId: number): Promise<void> {
		try {
			await this.instance.delete(
				this.getEndpoint(`DeleteNotification/${receiptId}`)
			)
		} catch (error) {
			console.error('Error deleting notification:', error)
			throw error
		}
	}
}

export const createAPIClient = (credentials: Credentials): APIClient => {
	return new APIClient(credentials)
}

export type {
	APIError,
	Credentials,
	SendMessageRequest,
	SendMessageResponse,
	WhatsAppNotification,
} from '../types/api.types'
