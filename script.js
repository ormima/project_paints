const pow = document.getElementById("powierzchnia");
const sub = document.getElementById("submit");
const res = document.getElementById("result");

sub.addEventListener("click", () => {
    console.log("powierzchnia: " + pow.value);
    res.innerText = "Liczba potrzebnych puszek: " + Math.ceil(pow.value / 4);
    console.log("wynik: " + Math.ceil(pow.value / 4));
});