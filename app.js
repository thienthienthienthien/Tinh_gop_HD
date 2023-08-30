const hangso70 = 70;
const hangso30 = 30;
const hangso100 = 100;
const hangsoNhan = 0.1352;
// console.log(typeof hangsoNhan);

function getResult() {
  let price = document.getElementById(`price`).value;
  const traTruoc = (price / hangso100) * hangso30;
  const khoanVay = price - traTruoc;
  const soTienDong = khoanVay * hangsoNhan + 30;
  const first = document.getElementById(`first`);
  first.innerHTML = `<span id="first">Trả trước 30%: ${traTruoc}</span>`;
  const second = document.getElementById(`second`);
  second.innerHTML = `<span id="second">Khoản vay: ${khoanVay}</span>`;
  const four = document.getElementById(`four`);
  four.innerHTML = `<span id="four">Mỗi tháng đóng: ${soTienDong}</span>`;
}
