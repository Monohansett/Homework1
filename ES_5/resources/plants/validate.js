let hasNumber = /\d/;

if (hasNumber.test(this.plantName)) {
    error('plantName','there is must be letter only!')
}
if (hasNumber.test(this.plantClass)) {
    error('plantClass', 'there is must be letter only!')
}
if (hasNumber.test(this.plantAreal)) {
    error('plantAreal', 'there is must be letter only!')
}
if (hasNumber.test(this.plantDescription)) {
    error('plantDescription', 'there is must be letter only!')
}

