import { IsInt } from "class-validator";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { OrdersDetail } from "./ordersDetail";
import { Users } from "./users";

@Entity()
export class Orders extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@IsInt()
	cost: number;

	@Column({ default: false })
	isCheckedPayment: boolean;

	@Column({ default: false })
	isCheckedShipping: boolean;

	@ManyToOne(() => Users, (user) => user.orders)
	user: Users;

	@Column()
	userId: number;

	@OneToMany(() => OrdersDetail, (orderDetail) => orderDetail.order)
	orderDetails: OrdersDetail[];

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;
}