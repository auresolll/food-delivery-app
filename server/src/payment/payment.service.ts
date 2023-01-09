import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class PaymentService {
	logger: Logger;
	constructor() {
		this.logger = new Logger();
	}
	sortObject(obj) {
		const sorted = {};
		const str = [];
		let key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				str.push(encodeURIComponent(key));
			}
		}
		str.sort();
		for (key = 0; key < str.length; key++) {
			sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
		}
		return sorted;
	}
}
