import { Messages } from "./messages";
import {
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
	Column,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { MessagesType } from "../enums";

@Entity()
export class Sender extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@OneToMany(() => Messages, (msg) => msg.message_sender)
	messagesIn: Messages[];

	@Column({
		type: "enum",
		enum: MessagesType,
	})
	type: MessagesType;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;
}
