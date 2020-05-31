import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn({comment: '主键id'})
  id: number;

  @Column({length: 50, comment: '用户名', unique: true, nullable: true })
  name: string;

  @Column({ comment: '密码', nullable: true })
  password: string;

  @Column({ length: 50, comment: '邮箱', nullable: true})
  email: string;

  @Column({type: 'timestamp', default: () => 'current_timestamp'})
  createAt: Timestamp;
}