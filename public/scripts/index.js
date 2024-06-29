import Cars from "./cars.js";

let waktu = document.getElementById("waktu");
let penumpang = document.getElementById("penumpang");
let tanggal = document.getElementById("tanggal");
let driver = document.getElementById("driver");
let container = document.getElementById("card-mobil");
let button = document.getElementById("cari-mobil");

let final = ``;

// const getCarsData = async () => {
//   const res = await fetch(`/cars`);
//   const { data, message } = await res.json();
//   return data;
// };

button.addEventListener("click", async (event) => {
  event.preventDefault;

  let list = [];

  const cars = await Cars.getCarsData();
  cars.map((car) => {
    list.push(car);
  });

  let searchedcar = [];
  let tempo = ``;
  for (let index = 0; index < list.length; index++) {
    let car = list[index];
    let tanggal_1 = new Date(car.availableAt);
    // console.log("ini untuk mengecek data tanggal",  toString(tanggal_1.getMonth()));
    let gabungan_tanggal = `${tanggal_1.getFullYear()}-${
      `${tanggal_1.getMonth()}`.length == 1
        ? "0" + tanggal_1.getMonth()
        : tanggal_1.getMonth()
    }-${
      `${tanggal_1.getDate()}`.length == 1
        ? "0" + tanggal_1.getDate()
        : tanggal_1.getDate()
    }`;
    console.log(car);
    if (
      driver.value != "Pilih Tipe Driver" &&
      tanggal.value != "" &&
      waktu.value != "Pilih Waktu"
    ) {
      console.log("A");
      if (penumpang.value != "") {
        console.log("B");
        if (
          car.capacity >= parseInt(penumpang.value) &&
          tanggal_1.getHours() >= parseInt(waktu.value) &&
          gabungan_tanggal == tanggal.value
        ) {
          console.log("C");
          searchedcar.push(car);
        }
      } else {
        console.log("D");
        if (
          tanggal_1.getHours() >= parseInt(waktu.value) &&
          gabungan_tanggal == tanggal.value
        ) {
          console.log("F");
          searchedcar.push(car);
        }
      }
    } else {
      searchedcar.push(car);
    }
  }
  searchedcar.map((carr) => {
    tempo += `
    <div class="col">
          <div class="card h-100">
            <img src="${carr.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-subtitle">${carr.manufacture}-${carr.model}/ ${carr.type}</p>
              <h5 class="card-title">RP ${carr.rentPerDay} / Hari</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reprehenderit consectetur qui suscipit sequi dignissimos sapiente, dolorem ratione quasi recusandae illum dolor itaque possimus sint, pariatur impedit cumque voluptatibus!
              </p>
              <p>
                <span><img src="images/person.png" /></span> ${carr.capacity} Orang
              </p>
              <p>
                <span><img src="images/fi_settings.png" /></span> ${carr.transmission}
              </p>
              <p>
                <span><img src="images/fi_calendar.png" /></span> Tahun ${carr.year}
              </p>
              <button type="button" class="btn btn-success w-100">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
  `;
  });
  final = tempo;
  container.innerHTML = final;
});
