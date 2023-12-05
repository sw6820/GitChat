import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn()
  roomId: number;

  @Column()
  roomName: string;

  // Add relationships with messages and room participants if needed
}
