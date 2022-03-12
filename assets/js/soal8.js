const dataPenjualanNovel = [
    {
      idProduct: "BOOK002421",
      namaProduk: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: "BOOK002351",
      namaProduk: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    // jika tidak ada data
    if (typeof (dataPenjualan) === "undefined") return "Error: parameter undefined.";

    const result = {
        totalKeuntungan: 0,
        totalModal: 0,
        persentaseKeuntungan: '',
        produkBukuTerlaris: '',
        penulisTerlaris: ''
    };

    let jumlahProdukTerlaris = 0;
    let jumlahPenulisTerlaris = 0;

    dataPenjualan.forEach((data) => {
        // total keuntungan
        result.totalKeuntungan +=
        data.hargaJual * data.totalTerjual -
        data.hargaBeli * (data.sisaStok + data.totalTerjual);

        // total modal
        result.totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);

        // produk terlaris
        if (data.totalTerjual > jumlahProdukTerlaris) {
            result.produkBukuTerlaris = data.namaProduk;
            jumlahProdukTerlaris = data.totalTerjual;
        };

        // penulis terlaris
        let banyakProdukPenulisTerjual = dataPenjualan
            .filter((item) => {
            return item.penulis === data.penulis;
            })
            .reduce((prevValue, currentVal) => {
            return prevValue.totalTerjual + currentVal.totalTerjual;
            });

        if (banyakProdukPenulisTerjual > jumlahPenulisTerlaris) {
            result.penulisTerlaris = data.penulis;
            jumlahPenulisTerlaris = banyakProdukPenulisTerjual;
        }
    });

    // persentase keuntungan
    result.persentaseKeuntungan = result.totalKeuntungan / result.totalModal * 100 + "%";

    // ubah menjadi rupiah
    result.totalKeuntungan = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(result.totalKeuntungan);

    // proses jumlah
    result.totalModal = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(result.totalModal);

    return result;
}
  
    // result
    console.log(getInfoPenjualan(dataPenjualanNovel));