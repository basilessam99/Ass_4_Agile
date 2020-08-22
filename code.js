function convert() {
  Value = document.getElementById("currencyV").value;
  c = document.getElementById("conv");
  Value = 15.693 * Value
  c.innerHTML=" "+Value+ " EGP"  ;
}