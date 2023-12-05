import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ChatRoom } from './chatRoom.entity';

@Entity('room_participants')
export class RoomParticipant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.roomId)
  @JoinColumn({ name: 'room_id' })
  room: ChatRoom;
}
