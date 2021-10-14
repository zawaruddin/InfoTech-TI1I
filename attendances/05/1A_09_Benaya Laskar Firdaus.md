## JOBSHEET 5

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
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil;
System.out.println("Masukkan sebuah bilangan:");
bil = input.nextInt();

```
#### Penjelasan Code
Langkah pertama kita mengimport library scanner untuk inputan dan mendeklarasikannya,lalu membuat variable bil dengan tipe data interger,setelah itu kita membuat inputan untuk dimasukkan pada sistem.


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}

```

#### Penjelasan Code
Dengan menggunakan code if else,kita membuat pilihan atau kondisi untuk menetukan apakah inputan bilangan ganjil atau genap dengan menggunakan modulus


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap" : "Bilangan Ganjil";
System.out.println(output);

```

2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

#### Penjelasan Code 
Dalam code tersebut menggunakan ternary option untuk membuat kondisi yang lebih simple dan singkat dari pada code if else.


#### JAWABAN

2. Hasilnya mengeluarkan output yang sama

3. Kedua program tersebut merupakan pemilihan if else dan operator ternary, disini operator ternary berfungsi sebagai program yang sederhana dari pemilihan if else dua kondisi. sehingga outputnya sama.


#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
 int nilai;
System.out.println("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
 
```

#### Penjelasan Code
setelah dimodifikasi di perintah nomor dibawah,dengan code if else,kita membuat pilihan atau kondisi untuk mengecek Nilai,jika nillai lebih besar sama dengan 100 maka nilai akan ditambah 10 point.jika tidak lebih besar maka akan dikurangi 10 point.


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100){
    nilai += 10;
}else{
    nilai-= 10;
}
System.out.println("Hasil akhir nilai adalah"+nilai);
```

+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

#### JAWABAN

1. nilai+=10; 

    nilai-=10; 
    
    Fungsi kode program diatas sebagai output kondisi dari pernyataan yang ada.




#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
int umur;
System.out.println("Masukkan Umur Anda: ");
umur = input.nextInt();


```

+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if (umur > 60)
    System.out.println("Lansia");
else if (umur > 45)
    System.out.println("Tua");
else if (umur > 17)
    System.out.println("Dewasa");
else if (umur > 5)
    System.out.println("Anak-anak");
else
    System.out.println("Balita");
        
```

#### Penjelasan Code
Dengan code if else if,kita membuat pilihan atau kondisi untuk menetukan berapa umur user,jika umur lebih dari 60 maka akan muncul outputan lansia,jika lebih dari 45 maka akan muncul outputan tua,jika lebih dari 17 maka akan muncul outputan dewasa,jika diatas 5 maka akan muncul anak-anak,jika tidak ada kondisi yang memenuhi maka output akan  balita.


+ Jalankan program dan amati apa yang terjadi!

### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;

```

#### Penjelasan Code
    Disini kita membuat deklarasi scanner,dan membuat variable angka1,angka2, hasil dengan tipe data double dan varibale operator dengan tipe data char untuk menentukan inputan/outputan dari setiap variable.


3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
// Ketik kode program di atas di bawah sini
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator (+ - * /) ");
operator = sc.next().charAt(0);

```
#### Penjelasan Code
system.out.print berfungsi untuk mengeluarkan outputan dan kita sebagai user dapat memngembalikan inputan yang akan ditangkap oleh fungsi nextDouble, terdpat juga fungsi next().charAt adalah merubah tipedata menjadi character


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){
    case '+':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " + " + angka2 + " = " + hasil);
    break;
    case '-':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " - " + angka2 + " = " + hasil);
    break;
    case '*':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " * " + angka2 + " = " + hasil);
    break;
    case '/':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " / " + angka2 + " = " + hasil);
    break;
    default:
    System.out.println("Operator yang Anda masukkan salah");
}
        
        


```

#### Penjelasan Code
Adanya penggunaan kode swtich yang berguna membuat kondisi,atau memilih kondisi operator yang akan dijalankan,jia kita mengembalikan inputan dengan + maka case + akan dijalankan,fungsi break adalah untuk menghentikan case agar tidak terus berjalan kebawah. Jika tidak ada kecocokan dalam kondisi maka akan menjalankan fungsi perintah default yang akan mengeluarkan opeator yang anda masukkan salah sebagai pemberitahuan output.


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

#### JAWABAN

1. Break untuk menghentikan operasi dari pernyataan/ agar output pernyataan pertama tidak gabung dengan pernyataan lainnya.

2. operator = sc.next().chartAt(0);
 
    Fungsi kode program diatas yaitu untuk mencari karakter pertama pada input.
### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.

```Java

import java.util.Scanner; //memanggil librari scanner untuk inputan
Scanner input = new Scanner(System.in);
int bil1,bil2; //mendeklarasikan variable bilangan dengan tipe data interger
System.out.print("Masukkan bilangan 1: "); //sistem akan meminta user untuk input bilangan
bil1 = input.nextInt(); //sistem menerima inputan dr user
System.out.print("Masukkan bilangan 2: ");
bil2 = input.nextInt();

//setelah sistem menerima inputan akan dilakukan pemilihan sbg berikut
if(bil1>bil2){ //jika bilangan 1 lebih besar dari bilangan 2 maka akan dijalankan
    System.out.print(bil1 + " Adalah bilangan terbesar"); //sistem akan menjalankan output jika pemilihan benar
} else { //jika bilangan 2 lebih besar dari bilangan 1 maka akan dijalankan
    System.out.print(bil2 + " Adalah bilangan terbesar"); //sistem akan menjalankan output jika pemilihan salah
}


2. Perhatikan flowchart berikut ini:

![](images/02.png)


> Buatlah program sesuai dengan flowchart diatas!


```Java

import java.util.Scanner; //merupakan impor library scanner
Scanner input = new Scanner(System.in);
int umur; //memasukkan variable interger untuk umur 
System.out.print("Masukkan umur Anda: ");
umur = input.nextInt();

if(umur >=17){ //jika umur lebih besar sama dengan maka boleh berkendara
    System.out.print("Anda boleh Berkendara");
} else {System.out.print("Anda tidak boleh berkendara"); } //jika belum 17 maka akan keluar output tidak boleh berkendara





3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

```Java

// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double nilaiAkhir,nilaiUas,nilaiUts,nilaiKuis,nilaiTugas; //variable double karena angka nilai bersifat akurat

System.out.print("Masukkan nilai Uas mahasiswa : "); //memasukkan nilai pada sistem
nilaiUas = input.nextDouble() * 40/100; //sistem menerima nilai yang diinputkan dan dibagi 40persen
System.out.print("Masukkan nilai Uts mahasiswa : "); //memasukkan nilai pada sistem
nilaiUts = input.nextDouble() * 30/100; //sistem menerima nilai yang diinputkan dan dibagi 30persen
System.out.print("Masukkan nilai Kuis mahasiswa : "); //memasukkan nilai pada sistem
nilaiKuis = input.nextDouble() * 10/100; //sistem menerima nilai yang diinputkan dan dibagi 10persen
System.out.print("Masukkan nilai Tugas mahasiswa : "); //memasukkan nilai pada sistem
nilaiTugas = input.nextDouble() * 20/100; //sistem menerima nilai yang diinputkan dan dibagi 20persen

//setelah menerima data tersebut akan dikalkulasi sbg berikut 
nilaiAkhir = nilaiUas+nilaiUts+nilaiKuis+nilaiTugas; //nilai akhir didapat dari menambahkan nilai UAS+UTS+KUIS+TUGAS
System.out.println("Nilai Akhir anda adalah: " + nilaiAkhir);
if(nilaiAkhir <65){ // sistem menilai ,jika kurang dari 65 akan remidi
    System.out.print("Anda remidi");
} else {
System.out.print("Anda tidak remidi");
} //jika lebih dari 65 tidak remidi


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

```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
//menambahkan library scanner untuk inputan
Scanner input = new Scanner(System.in);
double hargaA,hargaB,hargaC,totalBarang,jumlahA,jumlahB,jumlahC,totalA,totalB,totalC,totalBayar;
double diskon = 0; //diskon = 0 menghindari data null pada if else dibawah
//mendeklarasikan variable dan nama yang akan digunakan
System.out.print("Masukkan harga barang A : "); //memasukkan nilai pada sistem
hargaA = input.nextDouble(); // sistem menerima nilai yang di masukkan
System.out.print("Masukkan jumlah barang A :");
jumlahA = input.nextDouble();
System.out.print("Masukkan harga barang B : ");
hargaB = input.nextDouble();
System.out.print("Masukkan jumlah barang B :");
jumlahB = input.nextDouble();
System.out.print("Masukkan harga barang C : ");
hargaC = input.nextDouble();
System.out.print("Masukkan jumlah barang C :");
jumlahC = input.nextDouble();
//setelah sistem menerima data ,akan dikalkukasi sbg berikut
totalA = hargaA * jumlahA; //totalA diambil dari hargaA dikali jumlahA
totalB = hargaB * jumlahB; //totalA diambil dari hargaA dikali jumlahA
totalC = hargaC * jumlahC; //totalA diambil dari hargaA dikali jumlahA

//setelah data total di kalkulasi,akan dilakukan output sbg berikut
System.out.println("---------------------------------");
System.out.println("\tStruk Total");
System.out.println("---------------------------------");
System.out.println("Nama Barang" + "\t|\t" + "Harga" + "\t|\t" + "Jumlah" + "\t|\t" + "Total");
System.out.println("Barang A" + "\t\t" + hargaA + "\t" + jumlahA + "\t\t" + totalA);
System.out.println("Barang A" + "\t\t" + hargaB + "\t" + jumlahB + "\t\t" + totalB);
System.out.println("Barang A" + "\t\t" + hargaC + "\t" + jumlahC + "\t\t" + totalC);
//data yang dikeluarkan memanggil data dari variable nilai yang disimpan diatas

//setelah mengeluarkan struk,sistem akan menghitung total brng
totalBarang = totalA + totalB + totalC; //total brg diambil dr totalA+totalB+totalC
System.out.println("Total\t: " + totalBarang); //setelah dilakukan hitung,data akan dikeluarkan sbg totalBarang

//setelah data totalBarang ditemukan,akan dikalkulasi diskon sbg berikut
if (totalBarang > 1000000) { //jika total brng lebih dari 1000000 maka akan di hitung total brng dikali 10persen
	diskon = totalBarang * 10/100;
	System.out.println("Diskon\t: " + diskon);
    } else if (totalBarang > 500000){ //jika total brng lebih dari 500000 maka akan dihitung total brng dikali 5persen
    	diskon = totalBarang * 5/100;
    	System.out.println("Diskon\t: " + diskon);
    } else if (totalBarang > 200000){ //jika total brng lebih dari 200000 maka akan dihitunh total brng dikali 2persen
    	diskon = totalBarang * 2/100;
    	System.out.println("Diskon\t: " + diskon);
    } //jika ditemukan kecocokan data pada pemilihan diatas,data akan di keluarka,,jika tidak data akan kosong 
 totalBayar = totalBarang - diskon; //sistem akan menghitung totalBayar dengan cara totalBarang dikurangi diskon yang ada,jika tidak maka akan kosong
 System.out.print("Total Bayar :" + totalBayar); // data akan mengeluarkan total bayar yang sudah di kalkukasi
