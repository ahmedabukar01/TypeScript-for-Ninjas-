const anchor = document.querySelector('a')!;
// giving ! after the document means, i am sure that it will not return null.
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// console.log(anchor.href);
// console.log(form.children);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})

// classes
class Invoice {
    client: string
    details: string
    amount: string

    constructor(c: string, d: string, a: string){
        this.client = c
        this.details = d;
        this.amount = a;
    }

    format(){
        console.log(`${this.client} owes ${this.amount} for ${this.details}`);
    }
}

const mario = new Invoice('Mario', 'building website', '300');
const luigi = new Invoice('Luigi', 'developed application', '2100');
const invoices: Invoice[] = [];

invoices.push(luigi);

console.log(mario.format())