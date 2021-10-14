## JOBSHEET 6

## PEMILIHAN 2

### Tujuan

Mahasiswa memahami tentang operator logika; Mahasiswa mampu menyelesaikan permasalahan dengan menggunakan sintaks pemilihan bersarang; Mahasiswa mampu membuat sebuah program Java yang memanfaatkan sintaks pemilihan bersarang


### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1

#### Waktu percobaan : 40 menit

1. Tambahkan library Scanner, deklarasi Scanner

2. Buatlah variabel nilai yang memiliki tipe data int untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai Anda : ");
nilai = input.nextInt();
```

    Masukkan nilai Anda : 95


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
        System.out.println("Nilai yang Anda masukkan tidak valid!");
    }
```

    Nilai A, EXCELLENT


> Penjelasan kode program percobaan 1
- baris 1 : Menambahkan library Scanner 
- baris 2 : Deklarasi scanner agar bisa menggunakan scanner
- baris 3 : Menambahkan variabel nilai yang bertipe Interger (bilangan bulat)
- baris 4 : Mencetak tulisan "Masukkan nilai ujian (0-100): "
- baris 5 : Memasukkan inputan pada baris 4 ke dalam variabel nilai
- baris 6 : Sintaks if(nilai >= 0 || nilai <= 100) berfungsi sebagai pengecekan pertama. Jika nilai yang diinput memenuhi syarat lebih dari sama dengan 0 dan kurang dari sama dengan 100 maka bisa dilanjutkan ke pengecekan kedua yaitu sintaks yang ada di bawahnya.
- baris 7 & 8 : jika nilai lebih dari sama dengan 90 dan kurang dari sama dengan 100 maka akan dicetak tulisan "Nilai A, EXCELLENT"
- baris 9 & 10: jika nilai lebih dari sama dengan 80 dan kurang dari sama dengan 89 maka akan dicetak tulisan "Nilai B, Pertahankan prestasi Anda!" 
- baris 11 & 12 : jika nilai lebih dari sama dengan 60 dan kurang dari sama dengan 79 maka akan dicetak tulisan "Nilai C, Tingkatkan  prestasi Anda!"
- baris 13 & 14 : jika nilai lebih dari sama dengan 50 dan kurang dari sama dengan 59 maka akan dicetak tulisan "Nilai D, Tingkatkan belajar Anda!"
- baris 15 & 16 : jika nilai tidak memenuhi semua syarat di atas, dalam kasus ini berarti nilai berada pada rentang 0 sampai 49, maka akan dicetak tulisan "Nilai E, Anda tidak lulus!" 
- baris 18 & 19 : jika nilai yang diinput tidak memenuhi syarat lebih dari sama dengan 0 dan kurang dari sama dengan 100 maka akan keluar output tulisan "Nilai yang Anda masukkan tidak valid!" 
	

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Modifikasi
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai Anda : ");
nilai = input.nextInt();

if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
    if(nilai < 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
    } else if(nilai > 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    }
}
```

    Masukkan nilai Anda : 110
    Nilai yang Anda masukkan lebih dari 100


// Jawaban pertanyaan

2. Fungsi sintaks if (nilai >= 0 && nilai <= 100) adalah sebagai pengecekan pertama untuk memastikan nilai yang dimasukkan memenuhi syarat lebih dari sama dengan 0 dan kurang dari sama dengan 100
3. Yang terjadi adalah nilai 105 menghasilkan output "Nilai E, Anda tidak lulus!". Hal tersebut terjadi karena operator diganti menjadi || (or) dimana jika salah satu syarat bernilai true, maka hasil akhir akan true. Nilai 105 memenuhi syarat "nilai >= 0" jadi tetap terdeteksi meskipun tidak memenuhi syarat kedua (nilai <= 100)


#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 5000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 4000000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
- baris 1 : Menambahkan library Scanner 
- baris 2 : Deklarasi scanner agar bisa menggunakan scanner
- baris 3 : Menambahkan variabel kategori yang bertipe String
- baris 4 : Menambahkan variabel penghasilan dan gajiBersih yang bertipe Interger (bilangan bulat)
- baris 5 : Menambahkan variabel pajak yang bertipe double (bilangan riil)
- baris 7 : Mencetak tulisan "Masukkan kategori: "
- baris 8 : Memasukkan inputan pada baris 7 ke dalam variabel kategori
- baris 9 : Mencetak tulisan "Masukkan besarnya penghasilan: "
- baris 10 : Memasukkan inputan pada baris 9 ke dalam variabel penghasilan
- baris 11, 22, dan 32 : Sebagai pengecekan pertama, jika kategori yang diinput pekerja, maka pengecekan dilanjutkan ke baris 12-17. Jika bukan pekerja, maka dicek di baris 22 apakah pebisnis atau bukan. Jika pebisnis maka dilanjutkan pengecekan di baris 22-28. Jika inputan kategori bukan pekerja dan pebisnis, maka akan langsung diarahkan ke baris 32 yaitu output tulisan "Kategori yang Anda masukkan salah!"
- baris 12 & 13 : Jika penghasilan pekerja kurang dari sama dengan 2000000 maka pajak yang didapat adalah 0.1
- baris 14 & 15 : Jika penghasilan pekerja kurang dari sama dengan 3000000 maka pajak yang didapat adalah 0.15
- baris 16 & 17 : Jika penghasilan pekerja tidak memenuhi syarat-syarat sebelumnya, yaitu lebih dari 3000000 maka pajak yang didapat adalah 0.2
- baris 19 & 30 : Variabel gajiBersih nantinya akan diisi dengan hasil operasi (penghasilan - (penghasilan*pajak))
- baris 20 & 31 : Mencetak tulisan "Gaji bersih yang Anda terima: " beserta dengan hasil gajiBersih yang telah diproses
- baris 23 & 24 : Jika penghasilan pebisnis kurang dari sama dengan 2500000 maka pajak yang didapat adalah 0.15
- baris 25 & 26 : Jika penghasilan pebisnis kurang dari sama dengan 3500000 maka pajak yang didapat adalah 0.2
- baris 27 & 28 : Jika penghasilan pebisnis tidak memenuhi syarat-syarat sebelumnya, yaitu lebih dari 3500000 maka pajak yang didapat adalah 0.25


##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan
1. Angka di belakang koma tidak ditampilkan karena output variabel gajiBersih bertipe interger (bilangan bulat). Jika ingin angka di belakang koma ditampilkan maka variabel harus bertipe double. 
2. Fungsi dari (int) adalah untuk mengkonversi variabel pajak yang semula bertipe double menjadi bertipe interger.
3. equalsIgnoreCase berguna untuk membandingkan karakter pada variabel String dan mengabaikan perbedaan penulisan huruf besar maupun kecil, asalkan karakternya sama. Misal "pebisnis" dan "PEBISNIS" bernilai benar meskipun penulisan besar kecilnya berbeda.
4. Kegunaan dari equals yaitu membandingkan karakter pada variabel String yang penulisan besar kecilnya harus sama. Misal "pebisnis" dan "PEBISNIS" akan bernilai salah karena penulisannya tidak sama.


### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program kalkulator sederhana menggunakan bahasa pemrograman Java. User akan menginputkan dua buah bilangan riil dan satu buah operator aritmatika (+, -, *, atau /), kemudian program akan mengoperasikan dua bilangan tersebut dengan operator yang sesuai. Petunjuk: gunakan pernyataan switch-case.
Contoh tampilan program:

```
Masukkan bilangan pertama: 2.5
Masukkan operator (+, -, *, /): *
Masukkan bilangan kedua: 4
2.5 * 4.0 = 10.0

```


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;

System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan operator (+ - * /): ");
operator = sc.next().charAt(0);
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();

switch(operator){
    case '+':
        hasil = angka1 + angka2;
        System.out.println(angka1 + " + " + angka2 + " = " + hasil);
        break;
    case '-':
        hasil = angka1 - angka2;
        System.out.println(angka1 + " - " + angka2 + " = " + hasil);
        break;
    case '*':
        hasil = angka1 * angka2;
        System.out.println(angka1 + " * " + angka2 + " = " + hasil);
        break;
    case '/':
        hasil = angka1 / angka2;
        System.out.println(angka1 + " / " + angka2 + " = " + hasil);
        break;
    default:
        System.out.println("Operator yang Anda masukkan salah");
}
```

    Masukkan angka pertama: 8
    Masukkan operator (+ - * /): -
    Masukkan angka kedua: 3
    8.0 - 3.0 = 5.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisi1, sisi2, sisi3;

System.out.print("Masukkan sisi pertama: ");
sisi1 = input.nextInt();
System.out.print("Masukkan sisi kedua: ");
sisi2 = input.nextInt();
System.out.print("Masukkan sisi ketiga: ");
sisi3 = input.nextInt();

if(sisi1 == sisi2 && sisi2 == sisi3)
    System.out.println("Segitiga sama sisi");
else if(sisi1 == sisi2 || sisi2 == sisi3 || sisi1 == sisi3)
    System.out.println("Segitiga sama kaki");
else
    System.out.println("Segitiga sembarang");

```

    Masukkan sisi pertama: 6
    Masukkan sisi kedua: 6
    Masukkan sisi ketiga: 8
    Segitiga sama kaki


3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
Contoh hasil output program:

```
Masukkan nama makanan: Tuna salad
Masukkan harga makanan: Rp 115000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 0

STRUK PEMBELIAN
Tuna salad        Rp 115000
Biaya pengiriman  Rp 30000
TOTAL             Rp 145000

```

```
Masukkan nama makanan: Beef bulgogi
Masukkan harga makanan: Rp 78000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 1

STRUK PEMBELIAN
Beef bulgogi      Rp 115000
Biaya pengiriman  Rp 45000
TOTAL             Rp 123000

```




```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int harga, ongkir, total;
String makanan;
char ekspres;

System.out.print("Masukkan nama makanan: ");
makanan = input.nextLine();
System.out.print("Masukkan harga makanan: Rp ");
harga = input.nextInt();
System.out.println("Apakah Anda ingin pengiriman ekspres (0=tidak, 1=ya)");
ekspres = input.next().charAt(0);

if(ekspres == '0'){
    if(harga < 100000){
        ongkir = 20000;
    } else {
        ongkir = 30000;
    }
} else {
    if(harga < 100000){
        ongkir = 45000;
    } else {
        ongkir = 55000;
    }
}
total = harga + ongkir;

System.out.println("STRUK PEMBELIAN");
System.out.println(makanan + " Rp " + harga);
System.out.println("Biaya pengiriman Rp " + ongkir);
System.out.println("TOTAL Rp " + total);

```

    Masukkan nama makanan: Tuna salad
    Masukkan harga makanan: Rp 115000
    Apakah Anda ingin pengiriman ekspres (0=tidak, 1=ya)
    0
    STRUK PEMBELIAN
    Tuna salad Rp 115000
    Biaya pengiriman Rp 30000
    TOTAL Rp 145000


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur, pendapatan, tanggungan, biayaHidup;
char sekolah, bekerja;

System.out.print("Masukkan umur Anda: ");
umur = input.nextInt();

if(umur <= 18){
    System.out.print("Apakah Anda masih sekolah (y atau t)?: ");
    sekolah = input.next().charAt(0);
    if(sekolah == 'y'){
        System.out.println("Bukan penduduk miskin");
    } else {
        System.out.println("Penduduk miskin");
    }
} else {
    System.out.print("Apakah Anda sudah bekerja (y atau t)?: ");
    bekerja = input.next().charAt(0);
    if(bekerja == 'y'){
        System.out.print("Masukkan pendapatan per bulan: ");
        pendapatan = input.nextInt();
        System.out.print("Masukkan jumlah tanggungan: ");
        tanggungan = input.nextInt();
        
        biayaHidup = pendapatan / tanggungan;
        
        if(biayaHidup < 300000){
            System.out.println("Penduduk miskin");
        } else {
            System.out.println("Bukan penduduk miskin");
        }
    } else {
        System.out.println("Penduduk miskin");
    }
}
```

    Masukkan umur Anda: 20
    Apakah Anda sudah bekerja (y atau t)?: y
    Masukkan pendapatan per bulan: 8000000
    Masukkan jumlah tanggungan: 2
    Bukan penduduk miskin



```Java

```
