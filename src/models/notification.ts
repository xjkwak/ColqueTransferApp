export class Notification {
    contactName: String;
    amount: Number;
    description: String;

    constructor(contactName: String, amount: Number, description: String) {
        this.contactName = contactName;
        this.amount = amount;
        this.description = description;
    }
  }
