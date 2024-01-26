const adressbtn = document.querySelector('#adress-form')   /* khai báo */
const adressclose = document.querySelector('#adress-close')
console.log(adressclose)
adressbtn.addEventListener("click", function(){          /* thêm sự kiện , thê sự kiẹn là khi click vào thì nó thực hiện hoạt động function */
    document.querySelector('.adress-form').style.display = "flex" /*khi click vào thì nó hiện ra cái adress-form */
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none" /*khi click vào thì nó mất đi cái adress-form */
})