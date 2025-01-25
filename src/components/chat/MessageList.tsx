import React from 'react';
import { List, ListItem, Paper, Typography, ListItemText } from '@mui/material';
import { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ messages, messagesEndRef }) => {
  return (
    <List>
      {messages.map((msg, index) => (
        <ListItem
          key={index}
          sx={{
            justifyContent: msg.received ? 'flex-start' : 'flex-end',
            mb: 1,
          }}
        >
          <Paper
            sx={{
              p: 1.5,
              maxWidth: '70%',
              bgcolor: msg.received ? 'white' : '#dcf8c6',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="body1"
                  sx={{ wordBreak: 'break-word' }}
                >
                  {msg.text}
                </Typography>
              }
              secondary={
                <Typography
                  component="div"
                  variant="caption"
                  sx={{ mt: 0.5, color: 'text.secondary' }}
                >
                  {msg.timestamp}
                </Typography>
              }
            />
          </Paper>
        </ListItem>
      ))}
      <div ref={messagesEndRef} />
    </List>
  );
};

export default MessageList;
