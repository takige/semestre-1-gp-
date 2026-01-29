function val(id) {
  return Number(document.getElementById(id).value) || 0;
}

function setVal(id, value) {
  document.getElementById(id).value = value.toFixed(2);
}

function calcu() {

  let an1tt  = val('an1ntd')*0.4 + val('an1ctrl')*0.6;
  setVal('an1tt', an1tt);

  let ann1tt = val('ann1ntd')*0.4 + val('ann1ctrl')*0.6;
  setVal('ann1tt', ann1tt);

  let me1tt  = val('me1td')*0.4 + val('me1ctrl')*0.6;
  setVal('me1tt', me1tt);

  let on1tt  = (val('on1ntd')*4 + val('on1ctrl')*6) / 10;
  setVal('on1tt', on1tt);

  let po1tt  = (val('po1ntp')*4 + val('po1ctrl')*6) / 10;
  setVal('po1tt', po1tt);

  let hse1tt = val('hse1ctrl');
  setVal('hse1tt', hse1tt);

  let el1tt  = val('el1ctrl');
  setVal('el1tt', el1tt);

  let en1tt  = val('en1ctrl');
  setVal('en1tt', en1tt);

  let de1tt  = val('de1tp');
  setVal('de1tt', de1tt);

  let total =
    (3*an1tt + 2*ann1tt + 3*me1tt + 3*on1tt +
     2*po1tt + hse1tt + el1tt + en1tt + de1tt) / 17;

  document.getElementById("tt").innerHTML = total.toFixed(2);
}
