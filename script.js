// let totalBAL= 5000000
// balance.innerHTML= totalBal+".00"



function playMusic() {
 var song = new Audio("audio/2672.wav")
 song.play()
}
 


function amount() {
 playMusic()
 if (bags.value == '' || childName.value == '' || transport.value == '' || date.value == '' || cloth.value == '' || food.value == '' || otherExpenses.value == '' || medicare.value=='') {
     err.style.display = "block"
 } else{
    var confirmation = confirm ("Are sure you want to proceed")  
    if (confirmation==true) {
        err.style.display ="none"
        intro.innerHTML= "Welcome  "  + document.getElementById("childName").value
        intro.style.color= "blue"
        note.innerHTML= "This budget analyses is not to put you in suffering but to help you manage your money for the right things"

        var sum = Number(bags.value) + Number(transport.value)+Number(cloth.value) +Number(food.value)+ Number(otherExpenses.value) + Number(medicare.value)
        if (sum >=0 && sum <10001){
            result.innerHTML="The total amount you used on " + document.getElementById("date").value+ "  $"+ sum
        remain.innerHTML= "$"+ Number(500000-sum) +".00"

            result.style.color="green"
        }else if (sum>=10001 && sum <10000000000){
            result.innerHTML="You have ask for more than what you suppose to"+"$"+sum+"  $10000 is the limit"
            result.style.color="red"
        }
        else if (sum >-50000000 && sum <0) {
            result.innerHTML="You have in seto"+"$"+sum+"  $10000 is the limit"
            note.style,display="none"
            alert('put the correct amount')
        }

        document.getElementById("ChildName").value=""
        document.getElementById("bags").value=""
        document.getElementById("date").value=""
        document.getElementById("transport").value=""
        document.getElementById("food").value=""
        document.getElementById("otherExpenses").value=""
        document.getElementById("medicares").value=""
        
    }else {
        alert ("check again")
    }
  
 }

}