{
    //getter setter
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposit(amount: number) {
        //     this._balance += amount;
        // }

        // public getBalance() {
        //     return this._balance;
        // }
        get balance() {
            return this._balance;
        }

        set deposit(amount: number) {
            this._balance += amount;
        }
    }

    class StudentAccount extends BankAccount {
        test() {

        }
    }

    const account1 = new BankAccount(111, "Jason", 20);
    // account1.addDeposit(20);
    account1.deposit = 10;
    // const myBalance = account1.getBalance();
    const myBalance = account1.balance;

    console.log(myBalance);
}