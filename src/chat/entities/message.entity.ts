import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ChatRoom } from './chatRoom.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  messageId: number;

  @Column('text')
  content: string;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => User, (user) => user.userId)
  sender: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.roomId)
  room: ChatRoom;
}
