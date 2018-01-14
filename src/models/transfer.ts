export class Transfer {
    contactName: String;
    amount: Number;
    originAccount: String;
    destinyAccount: String;
    description: String;

  
    constructor(contactName: String, amount: Number, originAccount: String, destinyAccount: String, description: String) {
        this.contactName = contactName;
        this.amount = amount;
        this.originAccount = originAccount;
        this.destinyAccount = destinyAccount;
        this.description = description;
    }  
  }
