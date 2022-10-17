const Anchor = document.querySelector('a')!;
// giving ! after the document means, i am sure that it will not return null.
const Form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(Anchor.href);
console.log(Form.children);
