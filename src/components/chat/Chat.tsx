import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { createAPIClient } from '../../services/api'
import { Credentials, Message } from '../../types'
import Container from '../ui/Container'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

interface ChatProps {
	credentials: Credentials
	phoneNumber: string
}

const Chat: React.FC<ChatProps> = ({ credentials, phoneNumber }) => {
	const [message, setMessage] = useState<string>('')
	const [messages, setMessages] = useState<Message[]>([])
	const [error, setError] = useState<string | null>(null)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	const apiClient = useMemo(() => createAPIClient(credentials), [credentials])

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	useEffect(() => {
		const pollMessages = async () => {
			try {
				const response = await apiClient.receiveNotification()
				if (response?.body?.messageData) {
					setMessages(prev => [
						...prev,
						{
							text: response.body.messageData.textMessageData.textMessage,
							received: true,
							timestamp: new Date().toLocaleTimeString(),
						},
					])
				}
			} catch (err) {
				console.error('Error polling messages:', err)
			}
		}

		const interval = setInterval(pollMessages, 5000)
		return () => clearInterval(interval)
	}, [apiClient])

	const handleSend = async () => {
		if (!message.trim()) return

		try {
			await apiClient.sendMessage(phoneNumber, message)
			setMessages(prev => [
				...prev,
				{
					text: message,
					received: false,
					timestamp: new Date().toLocaleTimeString(),
				},
			])
			setMessage('')
			setError(null)
		} catch (err) {
			setError('Failed to send message')
			console.error('Error sending message:', err)
		}
	}

	return (
		<Container maxWidth='md'>
			<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
				<ChatHeader phoneNumber={phoneNumber} />

				<Box
					sx={{
						flex: 1,
						overflow: 'auto',
						bgcolor: '#e5ded8',
						p: 2,
					}}
				>
					<MessageList messages={messages} messagesEndRef={messagesEndRef} />
				</Box>

				{error && (
					<Typography color='error' sx={{ p: 1, textAlign: 'center' }}>
						{error}
					</Typography>
				)}

				<MessageInput
					message={message}
					setMessage={setMessage}
					handleSend={handleSend}
				/>
			</Box>
		</Container>
	)
}

export default Chat
