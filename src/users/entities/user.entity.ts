import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true })
  githubId: string;

  @Column({ unique: true })
  githubUsername: string;

  @Column()
  profilePictureUrl: string;
}
