## JOBSHEET 5

Nama: Muhammad Helmi Permana Agung
<br>Kelas / No : 1A / 20
<br>NIM: 2131710140

## PEMILIHAN 1

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks pemilihan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan if

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

    <p align="left">
    <img width="351" height="460" src="images/01.png">
    </p>
    

> Flowchart diatas digunakan untuk menentukan bilangan ganjil/genap, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas!

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel bil untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner; // import library Scanner
Scanner input = new Scanner(System.in); // Deklarasi fungsi input
int bil; // Deklarasi variabel bilangan
System.out.print("Masukkan sebuah bilangan:  "); // Menampilkan sebuah label untuk pengisian bilangan
bil = input.nextInt(); // Assignment variabel bilangan mengikuti isi dari input user
```

    Masukkan sebuah bilangan: 12


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil % 2 == 0) { // untuk memilih bilangan
    System.out.println("Bilangan Genap"); // Jika hasil true maka outputnya bilangan genap
} else {
    System.out.println("Bilangan Ganjil"); // Jika hasil false maka outputnya bilangan ganjil
}
```

    Bilangan Genap


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap" : "Bilangan Ganjil"; // Mencocokkan modulus variabel bil dengan 0, jika hasilnya true maka outputnya Bilangan Genap, jika false maka outputnya Bilangan Ganjil
System.out.println(output); // Menampilkan output dari String output
```

    Bilangan Genap


2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

Jawab: kedua program memiliki fungsi yang sama, dimana ketika statement atau pernyataan benar, maka menggunakan kondisi pertama, namun jika statement atau pernyatannya salah, maka menggunakan kondisi kedua.

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)

```Java
// Ketik kode program di atas di bawah sini
int nilai; // deklarasi variabel nilai
System.out.print("Masukkan sebuah bilangan: "); // Output sebagai label input 
nilai = input.nextInt(); // Assignment nilai dengan input keyboard
```

    Masukkan sebuah bilangan: 15



+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)

```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100) { // Syarat kondisi nilai lebih dari atau sama dengan 100
    nilai += 10; // Operasi yang dilakukan jika syarat kondisi terpenuhi
} else {
    nilai -= 10; // Operasi yang dilakukan jika syarat kondisi tidak terpenuhi
}
System.out.println("Hasil akhir nilai adalah " + nilai); // Menampilkan output
```

    Hasil akhir nilai adalah 5


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```
<br>Jawab: kode nilai+=10 berfungsi untuk menambah value nilai menjadi nilai = nilai + 10, sedangkan kode nilai-=10 berfungsi untuk mengurangi value nilai menjadi nilai = nilai - 10<br>
2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!
<br>

```Java

int nilai1, nilai2, rata; // Deklarasi variabel
System.out.print("Masukkan sebuah bilangan pertama: "); // Menampilkan label pengisian
nilai1 = input.nextInt(); // Assignment variabel nilai1
System.out.print("Masukkan sebuah bilangan kedua: "); // Menampilkan label pengisian
nilai2 = input.nextInt(); // Assignment variabel nilai2
rata = (nilai1 + nilai2)/2; // Operasi untuk variabel rata
System.out.println("Nilai rata-ratanya adalah " + rata); // Menampilkan output
```

    Masukkan sebuah bilangan pertama: 12
    Masukkan sebuah bilangan kedua: 18
    Nilai rata-ratanya adalah 15


```Java
if(rata >= 100){ // Syarat kondisi adalah variabel rata lebih dari atau sama dengan 100
   rata -= 5; // Operasi yang dilakukan bila syarat terpenuhi
}
System.out.println("Hasil akhir nilai adalah "+rata) // Menampilkan output
```

    Hasil akhir nilai adalah 15



#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner; // Import scanner
Scanner input = new Scanner(System.in); // Deklarasi fungsi input
int umur; // Deklarasi variabel
System.out.print("Masukkan umur Anda: "); // Menampilkan label pengisian
umur = input.nextInt(); // Assignment variabel umur
```

    Masukkan umur Anda: 19


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur > 60) // Syarat kondisi umur lebih dari 60
    System.out.println("Lansia"); // Output jika syarat kondisi terpenuhi
else if(umur > 45) // Syarat kondisi umur lebih dari 45
    System.out.println("Tua"); // Output jika syarat kondisi terpenuhi
else if(umur > 17) // Syarat kondisi umur lebih dari 17
    System.out.println("Dewasa"); // Output jika syarat kondisi terpenuhi
else if(umur > 5) // Syarat kondisi umur lebih dari 5
    System.out.println("Lansia"); // Output jika syarat kondisi terpenuhi
else // Jika tidak ada syarat kondisi yang terpenuhi
    System.out.println("Balita"); // Output ketika tidak ada syarat kondisi yang terpenuhi
```

    Dewasa


+ Jalankan program dan amati apa yang terjadi!
<br>Jawab: Program akan mengeluarkan output sesuai dengan kondisi tertentu dengan referensi value variabel umur

##### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in); // Deklarasi fungsi input
double angka1, angka2, hasil; // Deklarasi variabel
char operator; // Deklarasi variabel
```

3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
// Ketik kode program di atas di bawah sini
System.out.print("Masukkan angka pertama: "); // Menampilkan label pengisian
angka1 = sc.nextDouble(); // Assignment variabel angka1
System.out.print("Masukkan angka kedua: "); // Menampilkan label pengisian
angka2 = sc.nextDouble(); // Assignment variabel angka2
System.out.print("Masukkan operator (+ - * /): "); // Menampilkan label pengisian
operator = sc.next().charAt(0); // Assignment variabel operator
```

    Masukkan angka pertama: 18
    Masukkan angka kedua: 12
    Masukkan operator (+ - * /): -


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){ // Sintaks awal switch
    case '+': // Syarat kondisi input pada variabel operator adalah +
    hasil = angka1 + angka2; // Assignment variabel jika syarat kondisi dalam case terpenuhi
    System.out.println(angka1 + "+" + angka2 + "=" + hasil); // Menampilkan output hasil
    break; // Menghentikan case
    case '-': // Syarat kondisi input pada variabel operator adalah -
    hasil = angka1 - angka2; // Assignment variabel jika syarat kondisi dalam case terpenuhi
    System.out.println(angka1 + "-" + angka2 + "=" + hasil); // Menampilkan output hasil
    break; // Menghentikan case
    case '*': // Syarat kondisi input pada variabel operator adalah *
    hasil = angka1 * angka2; // Assignment variabel jika syarat kondisi dalam case terpenuhi
    System.out.println(angka1 + "*" + angka2 + "=" + hasil); // Menampilkan output hasil
    break; // Menghentikan case
    case '/': // Syarat kondisi input pada variabel operator adalah /
    hasil = angka1 / angka2; // Assignment variabel jika syarat kondisi dalam case terpenuhi
    System.out.println(angka1 + "/" + angka2 + "=" + hasil); // Menampilkan output hasil
    break; // Menghentikan case
    default: // Operasi yang dilakukan ketika tidak ada case yang terpenuhi
    System.out.println("Operator yang anda masukkan salah"); // Output yang ditampilkan ketika default
}
```

    18.0-12.0=6.0


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
<br>Jawab: break mempunyai fungsi untuk menghentikan sebuah case dan default adalah kode program yang dijalankan jika tidak ada case yang memenuhi
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```
<br>Jawab: sc.next untuk user dapat menginput operator, lalu charAt untuk mengambil sebuah karakter dari String (dalam hal ini untuk mengambil karakter dari operator yang diinput) 
### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
```Java
import java.util.Scanner; // import scanner
Scanner input = new Scanner(System.in); // assignment fungsi scanner
int bil1, bil2; // deklarasi variabel
System.out.print("Masukkan bilangan pertama: "); // menampilkan label pengisian
bil1 = input.nextInt(); // assignment variabel bil1
System.out.print("Masukkan bilangan kedua: "); // menampilkan label pengisian
bil2 = input.nextInt(); // assignment variabel bil1
System.out.print("Bilangan terbesar adalah: " + Math.max(bil1,bil2)); // menampilkan output bilangan terbesar
```
Jalannya program
```
Masukkan bilangan pertama: 99
Masukkan bilangan kedua: 12
Bilangan terbesar adalah: 99
```
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

```Java
import java.util.Scanner; // import scanner
Scanner in = new Scanner(System.in); // assignment fungsi scanner
int umur; // deklarasi variabel
System.out.println("Masukkan umur anda: "); // menampilkan label pengisian
umur = in.nextInt(); // assignment variabel umur
if(umur >= 17) { // Syarat kondisi sama dengan atau lebih dari 17
    System.out.println("Boleh berkendara"); // Output jika syarat kondisi terpenuhi atau true
} else { // syarat kondisi jika tidak ada kondisi sebelumnya yang memenuhi atau menghasilkan true
    System.out.println("Tidak boleh berkendara"); // output yang dihasilkan jika tidak ada kondisi yang terpenuhi atau menghasilkan true
}
```
Jalannya program
```
Masukkan umur anda:
19
Boleh berkendara
```
3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!
```Java
import java.util.Scanner; // import scanner
Scanner in = new Scanner(System.in); // assignment fungsi scanner

double uas, uts, kuis, tugas, akhir; // deklarasi variabel

System.out.println("Masukkan nilai"); //menampilkan kalimat masukkan nilai pada bagian atas seperti judul
System.out.println("UAS: "); // menampilkan label pengisian
uas = in.nextDouble(); // assignment variabel uas
System.out.println("UTS: "); // menampilkan label pengisian
uts = in.nextDouble(); // assignment variabel uts
System.out.println("Kuis: "); // menampilkan label pengisian
kuis = in.nextDouble(); // assignment variabel kuis
System.out.println("Tugas: "); // menampilkan label pengisian
tugas = in.nextDouble(); // assignment variabel tugas

System.out.println("UAS: "+uas); // output nilai uas
System.out.println("UTS: "+uts); // output nilai uts
System.out.println("Kuis: "+kuis); // output nilai kuis
System.out.println("Tugas: "+tugas); // output nilai tugas

akhir=(uas*40/100)+(uts*30/100)+(kuis*10/100)+(tugas*20/100);
System.out.println("nilai akhir adalah "+akhir); // operasi menentukan nilai akhir

if(akhir<65){ // syarat kondisi kurang dari 65
    System.out.println("---Selamat, anda mendapatkan remidi---"); // output yang ditampilkan ketika syarat kondisi terpenuhi atau true
}else{ // operasi yang dilakukan ketika tidak ada syarat kondisi yang memenuhi atau true
    System.out.println("---Sayang sekali anda tidak remidi, semoga di lain kesempatan anda bisa merasakan serunya remidi---"); // output yang ditampilkan ketika tidak ada syarat kondisi yang memenuhi atau true
}
```
Jalannya program
```
Masukkan nilai
UAS:
80
UTS:
98
Kuis:
76
Tugas:
89
UAS: 80.0
UTS: 98.0
Kuis: 76.0
Tugas: 89.0
nilai akhir adalah 86.8
---Sayang sekali anda tidak remidi, semoga di lain kesempatan anda bisa merasakan serunya remidi---
```
4. Sebuah toko memberikan diskon kepada pelanggannya dengan ketentuan sebagai berikut:

| Total Belanja     | Potongan |
|-------------------|----------|
| >Rp. 200.000,00   | 2%       |
| >Rp. 500.000,00   | 5%       |
| >Rp. 1.000.000,00 | 10%      |

> Total belanja diperoleh dari pembelian tiga barang yaitu barang A, barang B, dan barang C. Ketika menginputkan harga barang juga menginputkan jumlah barang yang dibeli.

Contoh outputnya
```
Masukkan harga barang A   :100000
Masukkan jumlah barang A  :10
Masukkan harga barang B   :250000
Masukkan jumlah barang B  :5
Masukkan harga barang C   :150000
Masukkan jumlah barang C  :1
---------------------------------------------
                Struk total
---------------------------------------------
Nama Barang 	| 	Harga 	| 	Jumlah 	| 	Total
Barang A            100000         10        1000000   
Barang B            250000         5         1250000   
Barang C            150000         1         150000    
Total       :2400000
Diskon      :240000.0
Total Bayar :2160000.0
```

Jawab
```Java
import java.util.Scanner; // import scanner
Scanner in = new Scanner(System.in); // assignment fungsi scanner

int jumlahA, jumlahB, jumlahC; // deklarasi variabel
double hargaA, hargaB, hargaC; // deklarasi variabel
double totalA, totalB, totalC; // deklarasi variabel
double total, diskon, totalBayar; // deklarasi variabel

System.out.print("Masukkan harga barang A\t:"); // menampilkan label pengisian
hargaA = in.nextDouble(); // assignment variabel
System.out.print("Masukkan jumlah barang A\t:"); // menampilkan label pengisian
jumlahA = in.nextInt(); // assignment variabel
System.out.print("Masukkan harga barang B\t:"); // menampilkan label pengisian
hargaB = in.nextDouble(); // assignment variabel
System.out.print("Masukkan jumlah barang B\t:"); // menampilkan label pengisian
jumlahB = in.nextInt(); // assignment variabel
System.out.print("Masukkan harga barang C\t:"); // menampilkan label pengisian
hargaC = in.nextDouble(); // assignment variabel
System.out.print("Masukkan jumlah barang C\t:"); // menampilkan label pengisian
jumlahC = in.nextInt(); // assignment variabel
System.out.println("------------------------------------------------------------------------------"); // menampilkan output --
System.out.println("\t\t\t\t Struk Total"); // menampilkan tulisan Struk Total
System.out.println("------------------------------------------------------------------------------"); // menampilkan output --
System.out.println("Nama Barang\t|\tHarga\t|\tJumlah\t|\tTotal");

totalA = hargaA*jumlahA; // operasi hitungan untuk variabel
totalB = hargaB*jumlahB; // operasi hitungan untuk variabel
totalC = hargaC*jumlahC; // operasi hitungan untuk variabel
total = totalA+totalB+totalC; // operasi hitungan untuk variabel

System.out.println("Barang A\t\t"+ hargaA + "\t\t" + jumlahA + "\t\t" + totalA); // menampilkan output barang , harga, jumlah, dan total yang harus dibayar dari satu jenis barang
System.out.println("Barang A\t\t"+ hargaB + "\t\t" + jumlahB + "\t\t" + totalB); // menampilkan output barang , harga, jumlah, dan total yang harus dibayar dari satu jenis barang
System.out.println("Barang A\t\t"+ hargaC + "\t\t" + jumlahC + "\t\t" + totalC); // menampilkan output barang , harga, jumlah, dan total yang harus dibayar dari satu jenis barang
System.out.println("Total\t\t: " +total); // menampilkan total sementara
if(total>1000000){ // syarat kondisi total diatas 1000000
    diskon=total*10/100; // operasi yang dilakukan jika syarat kondisi diatasnya bernilai true atau terpenuhi
}else if(total>500000){ // syarat kondisi total diatas 500000
    diskon=total*5/100; // operasi yang dilakukan jika syarat kondisi diatasnya bernilai true atau terpenuhi
}else if(total>200000){ // syarat kondisi total diatas 200000
    diskon=total*2/100; // operasi yang dilakukan jika syarat kondisi diatasnya bernilai true atau terpenuhi
}else{ // kondisi ketika tidak ada syarat kondisi diatasnya yang bernilai true atau terpenuhi
    diskon=0; // operasi yang dilakukan ketika tidak ada syarat kondisi diatasnya yang bernilai true atau terpenuhi
}
System.out.println("Diskon\t\t: " +diskon); // menampilkan diskon
totalBayar=total-diskon; // operasi hitungan untuk variabel
System.out.println("Total Bayar\t: "+ totalBayar); // menampilkan total yang harus dibayar
```
Jalannya program
```
Masukkan harga barang A :70000
Masukkan jumlah barang A        :10
Masukkan harga barang B :80000
Masukkan jumlah barang B        :10
Masukkan harga barang C :200000
Masukkan jumlah barang C        :10
------------------------------------------------------------------------------
                                 Struk Total
------------------------------------------------------------------------------
Nama Barang     |       Harga   |       Jumlah  |       Total
Barang A                70000.0         10              700000.0
Barang A                80000.0         10              800000.0
Barang A                200000.0                10              2000000.0
Total           : 3500000.0
Diskon          : 350000.0
Total Bayar     : 3150000.0
```